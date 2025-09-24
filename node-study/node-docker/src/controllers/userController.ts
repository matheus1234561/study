import { Request, Response } from "express";
import * as userModel from "../models/userModel";
import { User } from "src/shared/interfaces/user";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users: User[] = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar usuários" });
  }
};

const getUserById = async (req: Request, res: Response): Promise<void> => {
  const userId: number = parseInt(req.params.id);
  try {
    const user: User | null = await userModel.getUserById(userId);
    if (!user) {
      res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar usuário" });
  }
};

const createUser = async (req: Request, res: Response): Promise<void> => {
  const {
    name,
    email,
    password,
  }: { name: string; email: string; password: string } = req.body;
  try {
    const newUser: User = await userModel.createUser(name, email, password);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
};

const deleteUser = async (req: Request, res: Response): Promise<void> => {
  const userId: number = parseInt(req.params.id);
  try {
    await userModel.deleteUser(userId);
    res.status(202).json({ message: "Usuário deletado!" });
  } catch (err) {
    res.status(500).json({ message: "Erro ao deletar usuário" });
  }
};

const updateUser = async (req: Request, res: Response): Promise<void> => {
  const { id, name, email }: { id: number; name: string; email: string } =
    req.body;
  try {
    const update: User = await userModel.updateUser(id, name, email);
    res.status(204).json(update);
  } catch (err) {
    res.status(500).json({ message: "Erro ao atualizar o usuário" });
  }
};

export { getAllUsers, getUserById, createUser, deleteUser, updateUser };
