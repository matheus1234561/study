import db from '../config/db';

export const getUserByEmail = async (email: string) => {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [email]);
    return result.rows[0];
}