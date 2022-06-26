import express, { Request, Response } from "express";
import { Supplier, ISupplier } from "./../mongoose/models/Suppliers";

const router = express.Router();

const createSupplier = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/suppliers", createSupplier);

const updateSupplier = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/suppliers/:supplierId", updateSupplier);

const getSuppliers = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/suppliers", getSuppliers);

const getSupplier = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/suppliers/:supplierId", getSupplier);

const deleteSupplier = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/suppliers/:supplierId", deleteSupplier);

export default router;
