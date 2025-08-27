import express, { Request, Response } from "express";
import * as AuthController from "../controllers/authController";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
  const {userName, password} = req.body;

  return AuthController.login(req, res);
});

export default router;