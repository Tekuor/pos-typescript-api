import mongoose, { Schema } from "mongoose";

const CompanyCategorySchemaOptions = {
  toJSON: { virtuals: true },
  timestamps: true,
};

export interface ICompanyCategory {
  name: string;
  description?: string;
}

const CompanyCategorySchema = new Schema<ICompanyCategory>(
  {
    name: { type: String, required: true },
    description: { type: String, required: false },
  },
  CompanyCategorySchemaOptions
);

export const CompanyCategory = mongoose.model<ICompanyCategory>(
  "CompanyCategory",
  CompanyCategorySchema
);
