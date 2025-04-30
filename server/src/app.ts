import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
dotenv.config({
    path: "./.env"
})
const app = express();

app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
    res.send("Conexus server is working properly")
})
app.use("/avatars", express.static(path.join(__dirname, "../uploads/avatars")));

import userRoutes from './routes/user.route';
app.use('/api/user', userRoutes);

import urlRoutes from './routes/url.route';
app.use('/api', urlRoutes);

import urlRoutes2 from './routes/url.route';
app.use('/', urlRoutes2);

export { app }