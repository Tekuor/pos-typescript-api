import express, { Request, Response } from "express";
import { ProductCategory, IProductCategory } from "./../mongoose/models/ProductCategories";

const router = express.Router();

const createProductCategory = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/product-categories", createProductCategory);

const updateProductCategory = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/product-categories/:categoryId", updateProductCategory);

const getProductCategories = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/product-categories", getProductCategories);

const getProductCategory = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/product-categories/:categoryId", getProductCategory);

const deleteProductCategory = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/product-categories/:categoryId", deleteProductCategory);

export default router;
