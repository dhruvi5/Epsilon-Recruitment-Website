import express, { Request, Response, NextFunction } from "express";
import prisma from "../client";

// Custom interface for the request to accomodate the query parameters type and the purchaseAmount value. Exporting if needed somewhere else.
// If too many files require the same interface make a separate models folder.
export interface MembershipRequest extends Request {
  query: {
    tier?: string;
  };
  purchaseAmount?: number;
  currentBalance?: number;
}

export const membershipPurchaseMiddleware = async (
  req: MembershipRequest,
  res: Response,
  next: Function,
) => {
  //Extract the membershipt tier from the query parameters of the request.
  const membershipTier = req.query.tier;
  console.log(membershipTier);

  // HOPEFULLY THIS WORKS!! IF ERROR LOOK HERE ⬇️⬇️
  const username = req.body.username;
  const password = req.body.password;

  try {
    const result = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });

    //Is it possible for the user to not exist despite the validation middleware?? Probably not but better to be safe.
    if (!result) {
      res.status(403);
      return res.json({ message: "Unauthorized access!!" });
    }

    //First check if the user already is a member
    if (result.isMember) {
      res.status(202);
      return res.json({
        message: "User is a member already!!",
      });
    }

    //Set the amount of membership in request according to the tier
    if (membershipTier === "Basic") req.purchaseAmount = 5000;
    else if (membershipTier === "Medium") req.purchaseAmount = 10000;
    else if (membershipTier === "Premium") req.purchaseAmount = 15000;
    // Incase the membership tier is not from the above mention list.
    else {
      res.status(400);
      return res.json({
        message:
          "Invalid membership tier. Please send a valid tier from : BASIC, MEDIUM, PREMIUM",
      });
    }

    req.currentBalance = result.balance;
    next();
  } catch (error) {
    res.status(500);
    return res.json({ message: "Something went wrong!!" });
  }
};
