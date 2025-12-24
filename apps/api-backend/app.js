import express from "express";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import cors from "cors";
import path from "path";
dotenv.config();
connectDB();
const app = express();
app.use(cors({}));
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.get("/", (req, res) => {
  res.send(
    "🚀 Node server running successfully on generatesignatures.com/server ✅"
  );
});
export default app;