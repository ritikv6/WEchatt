import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173","https://ritikv6.github.io"],
    methods: ["GET","POST"]
  }
});

io.on("connection", (socket) => {

  console.log("User Connected:", socket.id);

  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`${socket.id} joined ${roomId}`);
    socket.emit("joined", { roomId, socketId: socket.id });
  });

  socket.on("send_message", (data) => {
    console.log(`Message from ${socket.id} in room ${data.room}:`, data.message);
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {

    console.log("User Disconnected");

  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});