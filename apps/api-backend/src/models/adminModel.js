import mongoose from "mongoose";

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    password: {
      type: String, // later hash hoga
    },

    role: {
      type: String,
      enum: ["OWNER_ADMIN", "HR_ADMIN", "ADMIN"],
      required: true,
    },

    status: {
      type: String,
      enum: ["INVITED", "ACTIVE", "DISABLED"],
      default: "INVITED",
    },

    company_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },

    invited_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin", 
    },
  },
  { timestamps: true }
);

export default mongoose.model("Admin", AdminSchema);
