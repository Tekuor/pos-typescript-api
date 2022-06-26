import express, { Request, Response } from "express";
import { CompanyCategory, ICompanyCategory } from "./../mongoose/models/CompanyCategories";

const router = express.Router();

const createCompanyCategory = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post("/company-categories", createCompanyCategory);

const updateCompanyCategory = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/company-categories/:categoryId", updateCompanyCategory);

const getCompanyCategories = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/company-categories", getCompanyCategories);

const getCompanyCategory = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/company-categories/:categoryId", getCompanyCategory);

const deleteCompanyCategory = async (request: Request, response: Response) => {
  try {
    response.status(200).send();
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/company-categories/:categoryId", deleteCompanyCategory);

export default router;
