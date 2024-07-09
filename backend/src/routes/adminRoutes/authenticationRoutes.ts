import { Router } from "express";
import prisma from "../../client";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";

const app = Router();
dotenv.config();
const jwtKey = process.env.JWT_KEY;

//middleware to check if the JWT Key exits in the env file or not
app.use((req, res, next) => {
  if (!jwtKey) {
    res.status(500);
    res.json({
      message: "Jwt key does not exist!!",
    });
  }
  next();
});

//signin route for admins
app.post("/signin", async (req,res) => {
    const adminname = req.body.adminname;
    const password = req.body.password;

    //try to find the admin account
    try {
        const result = await prisma.admin.findFirst({
            where: {
                adminname,
                password
            }
        });
        console.log(result);
        //if the admin does not exist
        if(!result) {
            res.status(403);
            return res.json({
                message: "You are not authorized!!"
            });
        }
        
        //@ts-ignore
        const jwt_token = jwt.sign({adminname,password},jwtKey); //creating the jwt token 
        
        //return the jwt token to the user
        return res.json({
            token: jwt_token
        });
    } catch (error) {
        //in case there is some error in finding the admin
        console.log(error);
        res.status(405);
        return res.json({
            message: "Error finding the aadmin account!!"
        });
    }
})


export default app;