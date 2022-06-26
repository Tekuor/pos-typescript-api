import express, { Request, Response } from "express";
import { Company, ICompany } from "./../mongoose/models/Companies";
import MiddlewareService from "../middleware/index";
import { CreateCompanyValidation } from "./../validationClasses/companies/createCompany";

const router = express.Router();

const createCompany = async (request: Request, response: Response) => {
  try {
    const company: ICompany = request.body;
    const createdCompany = await Company.create(company);
    response.status(200).send({ data: createdCompany });
  } catch (error) {
    response.status(400).send(error);
  }
};

router.post(
  "/companies",
  [MiddlewareService.requestValidation(CreateCompanyValidation)],
  createCompany
);

const updateCompany = async (request: Request, response: Response) => {
  try {
    // response.status(200).send(responseData);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put("/companies/:companyId", updateCompany);

const getCompanies = async (request: Request, response: Response) => {
  try {
    // response.status(200).send(responseData);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/companies", getCompanies);

const getCompany = async (request: Request, response: Response) => {
  try {
    // response.status(200).send(responseData);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/companies/:companyId", getCompany);

const deleteCompany = async (request: Request, response: Response) => {
  try {
    // response.status(200).send(responseData);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/companies/:companyId", deleteCompany);

export default router;
