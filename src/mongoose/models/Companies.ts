import mongoose, { Schema, Types } from "mongoose";

const CompanySchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export interface ICompany {
  name: string;
  description?: string;
  logo?: string;
  categoryId: Types.ObjectId;
  phoneNumber: string;
  address: string;
  email: string;
  isDeleted: boolean;
}

const CompanySchema = new Schema<ICompany>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    logo: { type: String, required: false },
    categoryId: { type: Schema.Types.ObjectId, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
  },
  CompanySchemaOptions
);

CompanySchema.virtual("category", {
  ref: "CompanyCategory",
  localField: "categoryId",
  foreignField: "_id",
  justOne: true,
});

export const Company = mongoose.model<ICompany>("Company", CompanySchema);
