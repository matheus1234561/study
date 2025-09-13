import db from "../config/db";

export const getUserByEmail = async (email: string) => {
  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    return result.rows[0];
  } catch (error) {
    throw error;
  }
};
