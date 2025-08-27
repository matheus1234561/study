import { Request, Response } from "express";
import * as authModel from "../models/authModel";
import { User } from "src/shared/interfaces/user";

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password }: { email: string; password: string } = req.body;

  try {
    const user: User = await authModel.getUserByEmail(email);

    if (!user){
        res.status(404).json({ message: "Usuário não encontrado" });
        return;
    }
    
    if (user.password !== password) {
      res.status(401).json({ message: "Credenciais inválidas" });
      return;
    }

    res.status(200).json({ message: "Login bem-sucedido", token:"" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao autenticar usuário" });
  }
};
