import Company from "../models/companyModel.js";
import { v4 as uuidv4 } from "uuid";

// POST /api/company
export const createCompany = async (req, res) => {
  try {
    const {
      name,
      domain,
      legal_name,
      address,
      contact_email,
      contact_phone,
      website_url,
      industry,
      company_size,
      logo_url,
      tax_identifier,
      timezone,
      locale,
    } = req.body;

    if (!name || !domain) {
      return res.status(400).json({ message: "Name and domain are required" });
    }

    // Check if company already exists (by domain)
    const existingCompany = await Company.findOne({ domain });
    if (existingCompany) {
      return res.status(409).json({ 
        message: "Company with this domain already exists", 
        company: existingCompany 
      });
    }

    const newCompany = await Company.create({
      public_id: uuidv4(),
      name,
      legal_name,
      domain,
      address,
      contact_email,
      contact_phone,
      website_url,
      industry,
      company_size,
      logo_url,
      tax_identifier,
      timezone,
      locale,
      status: "CREATED",
      onboarding_completed: false,
    });

    res.status(201).json({ message: "Company created", company: newCompany });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
