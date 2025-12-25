import Admin from "../models/adminModel.js";
import Company from "../models/companyModel.js";

// SUPER ADMIN → OWNER ADMIN CREATE
export const createOwnerAdmin = async (req, res) => {
  try {
    const { name, email, company_id } = req.body;

    if (!name || !email || !company_id) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const company = await Company.findById(company_id);
    if (!company) {
      return res.status(404).json({ message: "Company not found" });
    }

    const existingAdmin = await Admin.findOne({ email, company_id });
    if (existingAdmin) {
      return res.status(409).json({ message: "Owner admin already exists" });
    }

    const ownerAdmin = await Admin.create({
      name,
      email,
      role: "OWNER_ADMIN",
      company_id,
      status: "INVITED",
    });

    res.status(201).json({
      message: "Owner admin invited successfully",
      admin: ownerAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// OWNER ADMIN → HR / ADMIN CREATE
export const createCompanyAdmin = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const { company_id, admin_id } = req; 

    if (!name || !email || !role) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const existingAdmin = await Admin.findOne({ email, company_id });
    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already exists" });
    }

    const admin = await Admin.create({
      name,
      email,
      role,
      company_id,
      invited_by: admin_id,
      status: "INVITED",
    });

    res.status(201).json({
      message: "Admin invited successfully",
      admin,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
