import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cors from "cors";
import companyRoutes from "./src/routes/companyRoute.js";
import adminRoutes from "./src/routes/adminRoutes.js";

dotenv.config();
connectDB();
const app = express();
app.use(cors({}));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use("/api/company", companyRoutes);
app.use("/api/admin", adminRoutes);
app.get("/", (req, res) => {
  res.send(
    "🚀 Node server running successfully on generatesignatures.com/server ✅"
  );
});
export default app;