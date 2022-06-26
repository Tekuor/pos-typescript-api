import mongoose, { HydratedDocument, Schema, Types } from "mongoose";
import hashPassword from "../hooks/pre/userPassword";

const UserSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export type IUserRole = "admin" | "salesPerson";
export const userRoles = ["admin", "salesPerson"];

export type IUserStatus = "active" | "pending";
export const userStatus = ["active", "pending"];

export interface IUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  phoneNumber: string;
  companyIds: Types.ObjectId[];
  role: IUserRole;
  status: IUserStatus;
  lastActiveCompany: Types.ObjectId;
}

const UserSchema = new Schema<IUser>(
  {
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    role: { type: String, enum: userRoles, required: true },
    status: { type: String, enum: userStatus, default: "active" },
    companyIds: { default: [] },
    lastActiveCompany: { type: Schema.Types.ObjectId, required: false },
  },
  UserSchemaOptions
);

UserSchema.virtual("activeCompany", {
  ref: "Company",
  localField: "lastActiveCompany",
  foreignField: "_id",
  justOne: true,
});

UserSchema.pre(
  "save",
  async function (this: HydratedDocument<IUser>, next: any) {
    const user = this;
    await hashPassword(user);
    next();
  }
);

export const User = mongoose.model<IUser>("User", UserSchema);
