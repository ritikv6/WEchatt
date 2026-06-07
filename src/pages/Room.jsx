import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";

function Room() {
  const { roomId } = useParams();

  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([]);

  const socketRef = useRef(null);

  const messagesEndRef = useRef(null);

  /* Create socket connection */

  useEffect(() => {
    socketRef.current = io("https://wechatt-geoj.onrender.com");

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  /* Join room */

  useEffect(() => {
    if (!socketRef.current || !roomId) return;

    const joinRoom = () => {
      console.log("Joining room:", roomId);

      socketRef.current.emit("join_room", roomId);
    };

    if (socketRef.current.connected) {
      joinRoom();
    } else {
      socketRef.current.on("connect", joinRoom);
    }

    return () => {
      socketRef.current?.off("connect", joinRoom);
    };
  }, [roomId]);

  /* Receive messages */

  useEffect(() => {
    const receiveHandler = (data) => {
      setMessages((prev) => [...prev, data]);
    };

    socketRef.current?.on("receive_message", receiveHandler);

    return () => {
      socketRef.current?.off("receive_message", receiveHandler);
    };
  }, []);

  /* Auto scroll */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  /* Send message */

  const sendMessage = () => {
    if (!message.trim()) return;

    const data = {
      room: roomId,

      message: message,
    };

    socketRef.current.emit(
      "send_message",

      data,
    );

    setMessages((prev) => [...prev, data]);

    setMessage("");
  };

  return (
    <div
      className="
    h-screen
    bg-slate-900
    text-white
    flex
    flex-col
    overflow-hidden
    "
    >
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

      {/* Messages */}

      <div
        className="
      flex-1
      overflow-y-auto
      p-8
      space-y-4
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
        break-words
        "
          >
            {msg.message}
          </div>
        ))}

        <div ref={messagesEndRef}></div>
      </div>

      {/* Input */}

      <div
        className="
      p-6
      border-t
      border-gray-700
      flex
      gap-4
      bg-slate-900
      "
      >
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
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
