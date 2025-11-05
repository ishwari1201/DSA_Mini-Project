import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb+srv://ishwari:root@isha.qs9kt0p.mongodb.net/gamified_learning?appName=isha")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/users", userRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
