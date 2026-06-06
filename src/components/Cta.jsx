import React from 'react';
import { Link } from 'react-router-dom';
import './all.css';
import bgImage from '../assets/cta.png';

function CTA() {
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className="bg-cover bg-center py-10 px-10 text-center w-full">


      <h1 className="text-4xl font-bold text-white">Get Started Today!</h1>
        <h2 className="text-2xl text-[white] p-4">Join WEchatt and start chatting now!</h2>
      <Link to ="/chat">
      <button className="bg-[#74c457] text-2xl font-bold text-white py-2 px-4 rounded-md hover:bg-[#5aa644] transition duration-300">
        Start Chatting
      </button>
      </Link>
      <button className="bg-white text-[#173f81] py-2 px-4 text-2xl font-bold rounded-md border border-[#173f81] hover:bg-[#ffffffeb] hover: ml-4" onClick={() => window.location.href = '#features'}>
        Learn More
      </button>

    </div>
  );
}

export default CTA;