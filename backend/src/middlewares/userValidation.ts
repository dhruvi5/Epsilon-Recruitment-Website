import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const userValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const jwtToken: string = req.get("Authorization") || "";
  const jwtVerifcationKey = process.env.JWT_KEY;

  if (!jwtVerifcationKey) {
    res.status(500);
    return res.json({
      message: "JWT verification key is not defined.",
    });
  }

  try {
    const success = jwt.verify(jwtToken, jwtVerifcationKey);
    if (success) {
      next();
    } else {
      res.status(403);
      return res.json({
        message: "You are not authorized.",
      });
    }
  } catch (e) {
    res.status(500);
    return res.json({
      message: "Error in verification please sign in again.",
    });
  }
};
