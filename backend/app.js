import express from "express"; 
const app = express(); 
import userRoutes from "./routes/user.route.js";
import cookieParser from "cookie-parser";


app.use(express.json());
app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/users/login", userRoutes);
app.use("/api/users/profile", userRoutes);


export default app;