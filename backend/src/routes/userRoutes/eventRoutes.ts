
import {
  eventRegistrationRequest,
  userValidationMiddleware,
} from "../../middlewares/userValidation";
import prisma from "../../client";
import { Router } from "express";

const app = Router();
app.use(userValidationMiddleware);


app.get('/',async(req,res) => {
  try {
    const events = await prisma.events.findMany();
    return res.json(events);
  } catch (error) {
    console.log(error);
    res.status(500);
    return res.json({
      message: "Something went wrong!!"
    });
  }
});


app.post("/registration", async (req: eventRegistrationRequest, res) => {
  const eventID = req.query.eventid;

  if (typeof eventID !== "string") {
    res.status(400);
    return res.json({
      message: "Invaid id in the request!!",
    });
  }

  try {
    if (!req.user.isMember) {
      res.status(403);
      return res.json({
        message: "Only members can register for the events!!",
      });
    }

    const event = await prisma.events.findFirst({
      where: {
        id: eventID,
      },
    });

    if (!event) {
      res.status(404);
      return res.json({
        message: "Event does not exist!!",
      });
    }

    // Finiding if there already exists a registration for this user and this event.
    const presentRegistration = await prisma.eventRegistrations.findFirst({
      where: {
        eventId: eventID,
        userId: req.user.id,
      },
    });

    // If the user has already registered for this event.
    if (presentRegistration) {
      res.status(405);
      return res.json({
        message: "You have already registered for this event.",
      });
    }

    // set the event price according to the membership tier.
    let eventPrice = event.registrationFee;
    if(req.user.membershipTier==="Medium") eventPrice /= 2;
    else if(req.user.membershipTier==="Premium") eventPrice = 0;
    
    // Check if the user has enough balance to register for the event.

    if(eventPrice>req.user.balance){
      res.status(404);
      return res.json({
        message: "Not enough balance to register"
      });
    }

    //Updte the balance of the user.

    const success = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        balance: req.user.balance - eventPrice,
      }
    });
    
    if(!success){
      res.status(500);
      return res.json({
        message: "Something went wrong while updating the balance!!"
      });
    }

    // Create the entry in the event registration table.
    const result = await prisma.eventRegistrations.create({
      data: {
        eventId: eventID,
        userId: req.user.id,
      },
    });

    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500);
    return res.json({
      message: "Something went wrong!!!",
    });
  }
});

export = app;
