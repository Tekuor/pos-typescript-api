import { Types } from "mongoose";
import { Product } from "../../mongoose/models/Products";
import { IProduct } from "./../../mongoose/models/Products";

class ProductService {
  async createProduct(data: IProduct) {
    try {
      const response = await Product.create(data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async updateProduct(
    data: IProduct,
    id: Types.ObjectId
  ) {
    try {
      const response = await Product.findByIdAndUpdate(id, data);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getProduct(id: Types.ObjectId) {
    try {
      const response = await Product.findById(id);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async getProducts(query: any) {
    try {
      const response = await Product.find(query);
      return response;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }

  async deleteProduct() {
    try {
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}

export default new ProductService();
