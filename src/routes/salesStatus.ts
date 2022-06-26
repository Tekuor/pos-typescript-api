import express, { Request, Response } from "express";
import { SalesStatus, ISalesStatus } from "./../mongoose/models/SalesStatus";

const router = express.Router();

const createSalesStatus = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/sales-status", createSalesStatus);

const updateSalesStatus = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/sales-status/:statusId", updateSalesStatus);

const getSalesStatuses = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/sales-status", getSalesStatuses);

const getSalesStatus = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/sales-status/:statusId", getSalesStatus);

const deleteSalesStatus = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/sales-status/:statusId", deleteSalesStatus);

export default router;
