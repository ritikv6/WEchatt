import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/chat.png";
import  roomKeyIcon from "../assets/room-key.png";
import joinRoomIcon from "../assets/join-room.png";

function Chat() {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [generatedRoom, setGeneratedRoom] = useState("");

  const generateRoomKey = () => {
    const key = Math.random().toString(36).substring(2, 8).toUpperCase();

    setGeneratedRoom(key);
    navigate(`/room/${key}`);
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen w-full bg-cover bg-center overflow-hidden flex flex-col "
    >
      {/* Top Text */}

      <div className="pt-10">
        <h1 className="text-4xl font-bold text-center text-white">
          Welcome to the Chat Page!
        </h1>

        <p className="text-white text-center mt-4">
          Connect, chat, and communicate in real time!
        </p>
      </div>

      {/* Main Section */}

      <div className="flex-1 flex items-center justify-center">
        {/* Left Side */}
        <div className="bg-white w-105  h-80 rounded-3xl shadow-2xl p-2 flex flex-col items-center  justify-center ">
          <img
            src={roomKeyIcon}
            alt="room key"
            className="h-20 w-auto mb-4"
          />
          <div className="w-1/2 flex-col justify-center text-center items-center">
            <h1 className="text-[#0e1c48] text-2xl font-bold">Generate Room</h1>
            <p>Create a new room and get a unique key.</p>
            {generatedRoom && (
              <p className="mt-6 text-2xl font-bold  text-blue-700 ">
                {generatedRoom}
              </p>
            )}

            <button
              onClick={generateRoomKey}
              className="bg-[#74c457] text-white py-2 px-4 mt-4 rounded-md hover:bg-[#5aa644] transition duration-300"
            >
              Generate Key
            </button>
          </div>
        </div>
        {/* Vertical Line */}

        <div className="w-0.5 h-[60vh] bg-white opacity-40 m-5"></div>

        {/* Right Side */}
        <div className="bg-white w-105  h-80 rounded-3xl shadow-2xl p-2 flex flex-col items-center  justify-center ">
          <img
            src={joinRoomIcon}
            alt="room key"
            className="h-20 w-auto mb-4"
          />
          <div className="w-1/2 flex-col justify-center text-center items-center">
            <h1 className="text-[#0e1c48] text-2xl font-bold">Join Room</h1>
            <p>Enter a room key to join an existing room.</p>
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              placeholder="Enter Room ID"
              className=" mt-6 border border-gray-300 rounded-xl px-4 py-3 w-full outline-none"
            />
            <button
              onClick={() => navigate(`/room/${roomId}`)}
              className="bg-[#74c457] text-white py-2 px-4 mt-4 rounded-md hover:bg-[#5aa644] transition duration-300"
            >
              Join Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
