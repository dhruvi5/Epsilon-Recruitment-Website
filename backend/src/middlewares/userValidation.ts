import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface User extends jwt.JwtPayload {
  username?: string;
  password?: string;
}

//A midlleware to check if the uaer is logged in or not using the jwt token.
export const userValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const jwtToken: string = req.get("Authorization") || "";
  const jwtVerifcationKey = process.env.JWT_KEY;

  //Check if the verification key exists in the env file or not.
  if (!jwtVerifcationKey) {
    res.status(500);
    return res.json({
      message: "JWT verification key is not defined.",
    });
  }

  try {
    const success = jwt.verify(jwtToken, jwtVerifcationKey);
    if (success) {
      const decodedToken = jwt.decode(jwtToken);

      if (decodedToken && typeof decodedToken !== "string") {
        //typescript is a pain
        const details: User = decodedToken as User;
        //Put the username and the password in the reques body.
        req.body.username = details?.username;
        req.body.password = details?.password;
      } else {
        res.status(500);
        return res.json({
          message: "Invalid JWT Payload",
        });
      }

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
