import express, { Request, Response } from "express";
import { Company, ICompany } from "./../mongoose/models/Companies";
import MiddlewareService from "../middleware/index";
import { CreateCompanyValidation } from "./../validationClasses/companies/createCompany";
import { UpdateCompanyValidation } from "../validationClasses/companies/updateCompany";
import CompanyService from "../services/companies";
import { Types } from "mongoose";

const router = express.Router();

const createCompany = async (request: Request, response: Response) => {
  try {
    const company: ICompany = request.body;
    const createdCompany = await CompanyService.createCompany(company);
    response.status(201).send({ data: createdCompany });
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
    const company: ICompany = request.body;
    const companyId = new Types.ObjectId(request.params.companyId);
    const createdCompany = await CompanyService.updateCompany(
      company,
      companyId
    );
    response.status(200).send({ data: createdCompany });
  } catch (error) {
    response.status(400).send(error);
  }
};

router.put(
  "/companies/:companyId",
  [MiddlewareService.requestValidation(UpdateCompanyValidation)],
  updateCompany
);

const getCompanies = async (request: Request, response: Response) => {
  try {
    const query = request.query;
    const companies = await CompanyService.getCompanies(query);
    response.status(200).send(companies);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/companies", getCompanies);

const getCompany = async (request: Request, response: Response) => {
  try {
    const companyId = new Types.ObjectId(request.params.companyId);
    const company = await CompanyService.getCompany(companyId);
    response.status(200).send(company);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.get("/companies/:companyId", getCompany);

const deleteCompany = async (request: Request, response: Response) => {
  try {
    const companyId = new Types.ObjectId(request.params.companyId);
    const company = await CompanyService.deleteCompany(companyId);
    response.status(200).send(company);
  } catch (error) {
    response.status(400).send(error);
  }
};

router.delete("/companies/:companyId", deleteCompany);

export default router;
