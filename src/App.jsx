import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Room from "./pages/Room";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Router>
    </HashRouter>
  );
}

export default App;