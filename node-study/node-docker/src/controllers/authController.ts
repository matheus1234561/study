import { Request, Response } from "express";
import * as userModel from "../models/userModel";
import { User } from "src/shared/interfaces/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password }: { email: string; password: string } = req.body;

  try {
    const user: User = await userModel.getUserMail(email);

    if (!user){
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
    }

    const isSame = bcrypt.compareSync(password, user.password);
    
    if (!isSame) {
      res.status(401).json({ message: "Credenciais inválidas" });
      return;
    }

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET || "", {
      expiresIn: parseInt(process.env.JWT_EXPIRES || "1")
    })
    
    res.header("Authorization", token);
    res.status(200).json({ message: "Login bem-sucedido"});
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
