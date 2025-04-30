import { connectDB } from "./db/db";
import { app } from "./app";
import { initSocket } from "./socket/socket";
import http from "http";
const port = Number(process.env.PORT) || 4243

const server = http.createServer(app)

connectDB()
    .then(() => {
        initSocket(server)
        server.listen(port,'0.0.0.0', () => {
            console.log(`Server is running on port ${port}`)
        })
    })
    .catch((error) => {
        console.log(`MongoDB connection failed due to ${error}`)
    })