import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import speedRoutes from "./routes/speed";
import { errorHandler, notFound } from "./middleware/error";

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: process.env.CORS_ORIGIN?.split(",") ?? true }));
  app.use(rateLimit({ windowMs: 60_000, max: 120 }));
  app.use(express.json({ limit: "64kb" }));

  app.use("/api/v1", speedRoutes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
