import mongoose, { Schema, Types } from "mongoose";

const ProductSchemaOptions = { toJSON: { virtuals: true }, timestamps: true };

export interface IProduct {
  name: string;
  description?: string;
  quantity: number;
  reorderLevel: number;
  expiryDate: Date;
  barCode?: string;
  categoryId: string;
  statusId: string;
  wholesalePrice: number;
  retailPrice: number;
  costPrice: number;
  images: string[];
  supplierId: Types.ObjectId;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
    quantity: { type: Number, required: true },
    reorderLevel: { type: Number, required: true },
    expiryDate: { type: Date, required: true },
    barCode: { type: String, required: false },
    categoryId: { type: Schema.Types.ObjectId, required: true },
    statusId: { type: Schema.Types.ObjectId, required: true },
    wholesalePrice: { type: Number, required: true },
    retailPrice: { type: Number, required: true },
    costPrice: { type: Number, required: true },
    images: { default: [], required: true },
    supplierId: { type: Schema.Types.ObjectId, required: true },
  },
  ProductSchemaOptions
);

ProductSchema.virtual("supplier", {
  ref: "Supplier",
  localField: "supplierId",
  foreignField: "_id",
  justOne: true,
});

ProductSchema.virtual("status", {
  ref: "ProductStatus",
  localField: "statusId",
  foreignField: "_id",
  justOne: true,
});

ProductSchema.virtual("category", {
  ref: "ProductCategory",
  localField: "categoryId",
  foreignField: "_id",
  justOne: true,
});

export const Product = mongoose.model<IProduct>("Product", ProductSchema);
