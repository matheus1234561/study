import express, { Request, Response } from "express";
import * as userController from "../controllers/userController";

const router = express.Router();


router.get("/users", async (req: Request, res: Response) => {
  return userController.getAllUsers(req, res);
});

router.get("/users/:id", async (req: Request, res: Response) => {
  return userController.getUserById(req, res);
});

router.post("/users", async (req: Request, res: Response) => {
  return userController.createUser(req, res);
});

export default router;
