import mongoose from "mongoose";

const TaxIdentifierSchema = new mongoose.Schema({
  type: { type: String, enum: ["GST", "VAT", "EIN", "TIN"], required: false },
  value: { type: String, required: false },
});

const SubscriptionSchema = new mongoose.Schema({
  plan: { type: String, required: false },
  status: {
    type: String,
    enum: ["ACTIVE", "INACTIVE", "EXPIRED"],
    default: "INACTIVE",
  },
  expires_at: { type: Date, required: false },
});

const CompanySchema = new mongoose.Schema(
  {
    public_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    legal_name: { type: String },
    domain: { type: String, required: true },
    address: {
      street: String,
      city: String,
      state: String,
      zip: String,
      country: String,
    },
    contact_email: { type: String },
    contact_phone: { type: String },
    website_url: { type: String },
    industry: { type: String },
    company_size: { type: Number },
    logo_url: { type: String },
    tax_identifier: TaxIdentifierSchema,
    subscription: SubscriptionSchema,
    status: {
      type: String,
      enum: ["CREATED", "SETUP_PENDING", "ACTIVE", "SUSPENDED"],
      default: "CREATED",
    },
    timezone: { type: String, default: "Asia/Kolkata" },
    locale: { type: String, default: "en" },
    onboarding_completed: { type: Boolean, default: false },
    owner_admin_id: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },
  },
  {
    timestamps: true,
    softDelete: true,
  }
);

export default mongoose.model("Company", CompanySchema);
