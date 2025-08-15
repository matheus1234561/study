import "dotenv/config";
import express, { Request, Response } from "express";
import userRoutes from "../src/routes/userRoutes";

const app = express();

app.use(express.json());

app.use("/api", userRoutes);

const PORT = process.env.LOCAL_HOST_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
