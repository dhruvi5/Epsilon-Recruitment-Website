import { Router, Request, Response } from "express";
import { adminValidationMiddleware } from "../../middlewares/adminValidation";
import prisma from "../../client";

const app = Router();

app.post("/", adminValidationMiddleware, async (req, res) => {
  // should all of these be srings??
  const evenName: string = req.body.evenName;
  const evenLocation: string = req.body.location;
  const evenTime: string = req.body.time;
  const eventDate: string = req.body.date;
  const eventDesciption: string = req.body.description;
  const eventFee: number = req.body.fee;

  try {
    const result = await prisma.events.create({
      data: {
        eventname: evenName,
        description: eventDesciption,
        location: evenLocation,
        date: eventDate,
        time: evenTime,
        registrationFee: eventFee,
      },
    });
    return res.json({
      message: "Event created successfully!!",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    return res.json({
      message: "Something went wrong please try again...",
    });
  }
});

export = app;
