import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import io from "socket.io-client";

const socket = io("https://wechatt-geoj.onrender.com");

function Room() {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  useEffect(() => {
    function join() {
      if (!roomId) return;
      console.log("Socket connected, joining room:", roomId);
      socket.emit("join_room", roomId);
    }

    if (socket && socket.connected) {
      join();
    } else {
      socket.on("connect", join);
    }

    socket.on("connect_error", (err) => {
      console.error("Socket connect error:", err);
    });

    socket.on("disconnect", (reason) => {
      console.warn("Socket disconnected:", reason);
    });

    return () => {
      socket.off("connect", join);
      socket.off("connect_error");
      socket.off("disconnect");
    };
  }, [roomId]);
  const sendMessage = () => {
    if (message === "") return;

    const data = { room: roomId, message: message };

    console.log("Emitting send_message", data);
    socket.emit("send_message", data);

    setMessages((prev) => [...prev, data]);

    setMessage("");
  };
  useEffect(() => {
    const receiveHandler = (data) => {
      console.log("Received message", data);
      setMessages((prev) => [...prev, data]);
    };

    const joinedHandler = (data) => {
      console.log("Joined room confirmed:", data);
    };

    socket.on("receive_message", receiveHandler);
    socket.on("joined", joinedHandler);

    return () => {
      socket.off("receive_message", receiveHandler);
      socket.off("joined", joinedHandler);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Header */}

      <div
        className="
flex
justify-between
items-center
px-10
py-5
border-b
border-gray-700
"
      >
        <h1 className="text-3xl font-bold">Room: {roomId}</h1>

        <button
          onClick={() => navigate("/")}
          className="
bg-red-600
px-5
py-2
rounded-xl
"
        >
          Leave
        </button>
      </div>

      {/* Messages Area */}

      <div
        className="
flex-1
overflow-y-auto
p-8
space-y-4
max-h-[calc(100vh-180px)]
"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className="
bg-blue-600
w-fit
max-w-[70%]
px-5
py-3
rounded-xl
wrap-break-word
"
          >
            {msg.message}
          </div>
        ))}
      </div>
      {/* Input Section */}

      <div
        className="
p-6
border-t
border-gray-700
flex
gap-4
sticky
bottom-0
bg-slate-900
"
      >
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Type message..."
          className="
flex-1
px-5
py-4
rounded-xl
text-black
bg-white
outline-none
"
        />

        <button
          onClick={sendMessage}
          className="
bg-blue-600
px-6
rounded-xl
"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Room;
