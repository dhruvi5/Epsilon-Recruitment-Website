import { Router } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import prisma from "../../client";

const app = Router();
dotenv.config(); //parse the .env file into the app
const jwtKey = process.env.JWT_KEY; //extracting the jwt key from the .env
//Sign up request from user
app.post("/signup", async (req, res) => {
  const username:string = req.body.username;
  const password:string = req.body.password;

  //try to create a new user   
  try {
    const result = await prisma.user.create({
      data: {
        username,
        password,
      },
    });

    // check if the seceret jwt key is present in the .env file or not
    if (!jwtKey) {
      res.status(500);
      return res.json({
        message: "JWT_KEY not defined in the .env file",
      });
    }

    //creating a jwt token based on the username and the password.
    const jwtToken = jwt.sign({ username, password }, jwtKey);

    //send the jwt token as the respones
    return res.json({
      jwt_token : jwtToken
    });

  } catch (error) {
    //check if there is any error in creating the user.
    console.log(error)
    res.status(403);
    return res.json({
      message: "Something went wrong please try again!!",
    });
  }
});

//Sign in request from user
app.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  //try to find the user
  try {
    const result = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    
    //if the user does not exist 
    if(!result){
      res.status(403);
      return res.json({
        message: "Invalid Credentials!!"
      })
    }

    // check if the seceret jwt key is present in the .env file or not
    if (!jwtKey) {
      res.status(500);
      return res.json({
        message: "JWT_KEY not defined in the .env file",
      });
    }

    //creating a jwt token based on the username and the password.
    const jwtToken = jwt.sign({ username, password }, jwtKey);

    //send the jwt token as the respones
    return res.json({
      jwt_token : jwtToken
    });

  } catch (error) {
    //check if there is any error in findin the user.
    console.log(error)
    res.status(403);
    return res.json({
      message: "Error finding the user",
    });
  }
});


export = app;
