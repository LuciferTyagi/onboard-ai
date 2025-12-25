import { Router } from "express";
import { createCompany } from "../controllers/companyController.js";


const router = Router();

router.post("/onboard", createCompany);

export default router;
