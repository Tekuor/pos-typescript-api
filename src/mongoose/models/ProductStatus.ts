import mongoose, { Schema } from "mongoose";

const ProductStatusSchemaOptions = {
  toJSON: { virtuals: true },
  timestamps: true,
};

export interface IProductStatus {
  name: string;
  description?: string;
}

const ProductStatusSchema = new Schema<IProductStatus>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
  },
  ProductStatusSchemaOptions
);

export const ProductStatus = mongoose.model<IProductStatus>(
  "ProductStatus",
  ProductStatusSchema
);
