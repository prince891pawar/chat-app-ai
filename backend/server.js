import app from "./app.js";
import "dotenv/config";
import dbConnect from "./config/dbConnect.js";
import http from "http";

dbConnect();

const PORT = process.env.PORT || 3000;

const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 