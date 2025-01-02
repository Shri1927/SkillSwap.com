import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
export const SECRET = 'SECr3t'; 

export const authenticateJwt = (req : Request, res : Response, next : NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, SECRET, (err: any, user: any) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.headers["user"] = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
