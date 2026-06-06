import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Room from "./pages/Room";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
   
   
  );
}

export default App;