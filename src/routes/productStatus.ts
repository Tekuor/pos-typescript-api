import express, { Request, Response } from "express";
import {
  ProductStatus,
  IProductStatus,
} from "./../mongoose/models/ProductStatus";

const router = express.Router();

const createProductStatus = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/product-status", createProductStatus);

const updateProductStatus = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/product-status/:statusId", updateProductStatus);

const getProductStatuses = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/product-status", getProductStatuses);

const getProductStatus = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/product-status/:statusId", getProductStatus);

const deleteProductStatus = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/product-status/:statusId", deleteProductStatus);

export default router;
