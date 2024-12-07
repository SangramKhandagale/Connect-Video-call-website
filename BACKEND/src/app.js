import express from "express";
import { createServer } from "node:http";

import { Server } from "socket.io";

import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";

import cors from "cors";
import userRoutes from "./routes/users.routes.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);


app.set("port", (process.env.PORT || 8000))
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);

const start = async () => {
    app.set("mongo_user")
    const connectionDb = await mongoose.connect("mongodb+srv://khandagalesangram26:z0dNIVP2LMuYEFuq@cluster0.qpw6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    console.log(`Well done my boy`)
    server.listen(app.get("port"), () => {
        console.log("LISTENING TO PORT")
    });



}



start();