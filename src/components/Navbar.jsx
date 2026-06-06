import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-2 bg-[#114eb8] text-white">
      <img
        src={logo}
        alt="logo"
        className="h-15 w-auto bg-white rounded-xl"
      />

      <div className="flex gap-20 items-center mr-5">
        <a href="#features">Features</a>

        <a href="#about">About</a>

        <a href="#support">Support</a>
        <Link to ="/chat">
          <button className="bg-white text-blue-700 px-5 py-3 rounded transition duration-200 ease-out transform hover:bg-olive-200 hover:scale-105" >
            Chat Now
          </button>
        </Link>
      </div>
    </nav>
  );
}


export default Navbar;