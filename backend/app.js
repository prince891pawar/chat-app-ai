import express from "express"; 
const app = express(); 
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);
app.use("/api/users", userRoutes);


export default app;