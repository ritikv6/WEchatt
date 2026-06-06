import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import io from "socket.io-client";

const socket = io("http://localhost:5000");

function Room() {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    socket.emit("join_room", roomId);
  }, [roomId]);
  const sendMessage = () => {
    if (message === "") return;

    const data = { room: roomId, message: message };

    socket.emit("send_message", data);

    setMessages((prev) => [...prev, data]);

    setMessage("");
  };
  useEffect(() => {
    const receiveHandler = (data) => {
      setMessages((prev) => [...prev, data]);
    };

    socket.on("receive_message", receiveHandler);

    return () => {
      socket.off("receive_message", receiveHandler);
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

onClick={()=>navigate("/")}

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
"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className="
bg-blue-600
w-fit
px-5
py-3
rounded-xl
mb-4
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
