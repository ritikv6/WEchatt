const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET","POST"]
  }
});

io.on("connection", (socket) => {

  console.log("User Connected:", socket.id);

  socket.on("join_room", (roomId) => {

    socket.join(roomId);

    console.log(
      `${socket.id} joined ${roomId}`
    );

  });

  socket.on("send_message", (data) => {

    socket.to(data.room).emit(
      "receive_message",
      data
    );

  });

  socket.on("disconnect", () => {

    console.log("User Disconnected");

  });

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {

console.log(
`Server Running on ${PORT}`
);

});

});