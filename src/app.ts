import rateLimit from "express-rate-limit";
import express from "express";
import helmet from "helmet";
import cors from "cors";

import errorHandler from "./middleware/error.middleware";
import todoRoutes from "./routes/todo.routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  }),
);

app.use("/api/todos", todoRoutes);

app.use(errorHandler);

export default app;
