import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import mentorRoutes from "./routes/mentor.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/mentor", mentorRoutes);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
    connectDB();
})