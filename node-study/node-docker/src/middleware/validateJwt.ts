import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "";

export const validateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["authorization"];

  if (!token || Array.isArray(token)) {
    return res.status(401).json({ message: "Token não foi fornecido" });
  }

  jwt.verify(token, SECRET_KEY, (err, decode) => {
    if (err) {
      return res.status(403).json({ message: "Token inválido", error: err });
    }
    next();
  });
};
