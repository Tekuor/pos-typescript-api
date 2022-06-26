import mongoose, { Schema } from "mongoose";

const ProductCategorySchemaOptions = {
  toJSON: { virtuals: true },
  timestamps: true,
};

export interface IProductCategory {
  name: string;
  description?: string;
}

const ProductCategorySchema = new Schema<IProductCategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
  },
  ProductCategorySchemaOptions
);

export const ProductCategory = mongoose.model<IProductCategory>(
  "ProductCategory",
  ProductCategorySchema
);
