import { Router, Request, Response } from "express";
import { userValidationMiddleware } from "../../middlewares/userValidation";
import {
  membershipPurchaseMiddleware,
  MembershipRequest,
} from "../../middlewares/membershipPurchase";
import prisma from "../../client";


const app = Router();

app.use(userValidationMiddleware);

app.post(
  "/",
  membershipPurchaseMiddleware,
  async (req: MembershipRequest, res: Response) => {
    //the purchaseAmount is added to the request via the middleware so probably it will exist. but better to check nonetheless.
    const purchaseAmount = req.purchaseAmount || null;
    console.log("Here " + purchaseAmount);
    if (!purchaseAmount) {
      res.status(500);
      return res.json({
        message:
          "Something went wrong with the membershipPurchaseMiddleware try again.",
      });
    }

    const currentBalance = req.currentBalance;

    if (!currentBalance) {
      console.log(currentBalance)
      res.status(404);
      return res.json({
        message: "Not enough balance",
      });
    }

    const username = req.body.username;
    const password = req.body.password;

    const newBalance = currentBalance - purchaseAmount;

    if (newBalance < 0) {
      res.status(405);
      return res.json({
        message: "Not enough balance to purchase",
      });
    }

    try {
      const result = await prisma.user.update({
        where: {
          username,
          password,
        },
        data: {
          balance: newBalance,
          isMember: true,
          membershipTier: req.query.tier,
        },
      });
      res.json(result);
    } catch (error) {
      console.log(error);
      res.status(500);
      return res.json({
        message: "Something went wrong!!!",
      });
    }
  }
);

export = app;
