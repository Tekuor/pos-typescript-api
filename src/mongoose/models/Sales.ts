import mongoose, { Schema, Types } from "mongoose";

const SalesSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export type IPaymentMethod = "cash" | "mobileMoney";
const paymentMethod = ["cash", "mobileMoney"];

export interface IOrderProduct {
  productId: Types.ObjectId;
  quantity: number;
}

export interface ISales {
  totalCost: number;
  amountPaid: number;
  changeAmount: number;
  discountPercent: number;
  paymentMethod: IPaymentMethod;
  comments: string;
  statusId: Types.ObjectId;
  products: IOrderProduct[];
}

const SalesProductSchema = new Schema<IOrderProduct>({
  productId: { type: Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
});

const SalesSchema = new Schema<ISales>(
  {
    totalCost: { type: Number, required: true },
    amountPaid: { type: Number, required: true },
    changeAmount: { type: Number, required: true },
    discountPercent: { type: Number, required: false },
    paymentMethod: { type: String, enum: paymentMethod, required: true },
    comments: { type: String, required: false },
    statusId: { type: Schema.Types.ObjectId, required: true },
    products: { type: [SalesProductSchema], required: true },
  },
  SalesSchemaOptions
);

SalesSchema.virtual("status", {
  ref: "SalesStatus",
  localField: "statusId",
  foreignField: "_id",
  justOne: true,
});

SalesSchema.virtual("productDetails", {
  ref: "Product",
  localField: "products.productId",
  foreignField: "_id",
});

export const Sales = mongoose.model<ISales>("Sales", SalesSchema);
