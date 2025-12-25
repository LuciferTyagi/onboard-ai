import { Router } from "express";
import {
  createOwnerAdmin,
  createCompanyAdmin,
} from "../controllers/adminController.js";

const router = Router();

/**
 * SUPER ADMIN
 * POST /api/admin/owner
 */
router.post("/owner", createOwnerAdmin);

/**
 * OWNER ADMIN
 * POST /api/admin
 */
router.post("/", createCompanyAdmin);

export default router;
