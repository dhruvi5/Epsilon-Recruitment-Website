import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface Admin {
  adminName: string;
  password: string;
}

// Dont need comments for this right??? yeah it will be fine...prolly
export const adminValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const jwtToken = req.get("Authorization") || "";
  const jwtVerificationString = process.env.JWT_KEY;

  if (!jwtVerificationString) {
    res.status(500);
    return res.json({
      message: "Cannot find the JWT verification string",
    });
  }
  try {
    const success = jwt.verify(jwtToken, jwtVerificationString);

    if (success) {
      const decodedJWT = jwt.decode(jwtToken);

      if (decodedJWT && typeof decodedJWT !== "string") {
        const admin: Admin = decodedJWT as Admin;

        req.body.adminName = admin.adminName;
        req.body.password = admin.adminName;
      } else {
        res.status(403);
        return res.json({
          message: "Invalid JWT Payload",
        });
      }

      next();
    } else {
      res.status(403);
      return res.json({
        message: "Unauthorized access!!",
      });
    }
  } catch (error) {
    res.status(500);
    return res.json({
      message: "Error in verification please sign in again.",
    });
  }
};
