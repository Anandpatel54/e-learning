import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/db.js";
import userRoute from "./routes/userRoute.js";

dotenv.config({});
// call datbase connection here
connectDB();
const app = express();

// api
app.use("/api/v1/user", userRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
