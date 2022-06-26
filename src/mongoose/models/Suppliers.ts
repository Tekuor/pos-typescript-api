import mongoose, { Schema } from "mongoose";

const SupplierSchemaOptions = {
  toJSON: { virtuals: true },
  timestamps: true,
};

export interface ISupplier {
  name: string;
  address: string;
  phoneNumbers: string[];
}

const SupplierSchema = new Schema<ISupplier>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    phoneNumbers: { default: [] },
  },
  SupplierSchemaOptions
);

export const Supplier = mongoose.model<ISupplier>("Supplier", SupplierSchema);
