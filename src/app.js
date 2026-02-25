import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

// basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

//cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//import routes
import healthCheckRoutes from "./routes/healthCheck.routess.js";
app.use("/api/v1/health", healthCheckRoutes);

//default route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
