import db from '../config/db'; 
import bcrypt from 'bcryptjs';

export const getAllUsers = async () => {
  const result = await db.query("SELECT * FROM users");
  return result.rows;
};

export const getUserById = async (id: number) => {
  const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
  return result.rows[0];
};

export const getUserMail = async (mail: string) => {
  const result = await db.query("SELECT * FROM users WHERE email = $1", [mail]);
  return result.rows[0];
};

export const createUser = async (name: string, email: string, password:string) => {

  const hash = bcrypt.genSaltSync(10);
  const hashPassword = await bcrypt.hash(password, hash);

  try {
    const result = await db.query(
      "INSERT INTO users (name, email, password, salt) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, hashPassword, hash]
    );

    return result.rows[0];

  } catch (error) {
    return error;
  }
};

export const updateUser = async (id: number, name: string, email: string) => {
  const result = await db.query(
    "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
    [name, email, id]
  );
  return result.rows[0];
};

export const deleteUser = async (id: number) => {
  const result = await db.query("DELETE FROM users WHERE id = $1 RETURNING *", [
    id,
  ]);
  return result.rows[0];
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserMail
};
