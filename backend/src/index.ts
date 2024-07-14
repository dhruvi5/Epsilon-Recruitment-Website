import express from "express";
import userAuthenticationRouter from "./routes/userRoutes/authenticationRoutes";
import adminAuthenticationRouter from "./routes/adminRoutes/authenticationRoutes";
import membershipPurchaseRouter from "./routes/userRoutes/membershipPurchaseRoutes";
import eventCreationRouter from "./routes/adminRoutes/eventCreateRoutes";

const app = express();

app.use(express.json());

app.use("/users/authentication", userAuthenticationRouter);
app.use("/admin/authentication", adminAuthenticationRouter);
app.use("/users/membership/purchase", membershipPurchaseRouter);
app.use("/admin/event", eventCreationRouter);

app.listen(3050, () => {
  console.log("Listening on port 3000");
});
