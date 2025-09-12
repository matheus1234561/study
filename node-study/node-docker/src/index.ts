import "dotenv/config";
import express from "express";
import userRoutes from "../src/routes/userRoutes";
import authRoutes from "../src/routes/authRoutes";
import cors from "cors";
import { validateJwt } from "./middleware/validateJwt";

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', validateJwt);

app.use("/api", userRoutes);
app.use("/", authRoutes);

const PORT = process.env.LOCAL_HOST_PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
