import { Types } from "mongoose";
import { Company } from "../../mongoose/models/Companies";
import { ICompany } from "./../../mongoose/models/Companies";

class CompanyService {
  async createCompany(data: ICompany) {
    try {
      const response = await Company.create(data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async updateCompany(data: ICompany, id: Types.ObjectId) {
    try {
      const response = await Company.findByIdAndUpdate(id, data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getCompany(id: Types.ObjectId) {
    try {
      const response = await Company.findById(id);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getCompanies(query: any) {
    try {
      const response = await Company.find(query);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async deleteCompany(id: Types.ObjectId) {
    try {
      const response = await Company.findByIdAndUpdate(id, { isDeleted: true });
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export default new CompanyService();
