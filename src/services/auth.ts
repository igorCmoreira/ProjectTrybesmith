import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const genAuthToken = (id: number): (string | null) => {
  const segredo: (string | undefined) = process.env.JWT_SECRET;
  if (!segredo) {
    return null;
  }
  const token = jwt.sign({ id }, segredo, { algorithm: 'HS256' });
  return token;
};
export const verifyToken = (token: string): (number | null) => {
  try {
    const segredo: (string | undefined) = process.env.JWT_SECRET;
    if (!segredo) {
      return null;
    }
    const decoded: (string | jwt.JwtPayload) = jwt.verify(token, segredo);
    if (typeof decoded === 'string') {
      return null;
    }
    const userId:number = decoded.id;
    return userId;
  } catch (err) {
    console.error(err);
    return null;
  }
};
