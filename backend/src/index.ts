import express from "express";
const app = express();
import userAuthenticationRouter from "./routes/userRoutes/authenticationRoutes"
import adminAuthenticationRouter from "./routes/adminRoutes/authenticationRoutes"
 
app.use(express.json());


app.use("/users/authentication", userAuthenticationRouter);
app.use("/admin/authentication",adminAuthenticationRouter);


app.listen(3000, () => {
  console.log("Listening on port 3000");
});
