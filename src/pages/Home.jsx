import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

import logo from "../assets/logo.png";
import Hero from "../components/Hero";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <WhyChoose />
      <Cta />
      <Footer />
    </>
  );
}

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-2 py-2 bg-[#114eb8] text-white">
      <img
        src="/src/assets/logo.png"
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

function Feature() {
  return (
    <div className="grid grid-cols-3 gap-8 px-16 py-10">
      <div className="bg-[#f0f3f9] rounded-xl shadow-md p-8 border justify-around items-center flex">
        <img
          src="/src/assets/feature1.png"
          alt="Instant Messaging"
          className="h-20 mr-4 w-auto"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800">
            Instant Messaging
          </h2>
          <p className="mt-3 text-gray-600">
            Send messages instantly and see who's online.
          </p>
        </div>
      </div>

      <div className="bg-[#f0f3f9] rounded-xl shadow-md p-8 border flex justify-between items-center">
        <img
          src="/src/assets/feature2.png"
          alt="Create Groups"
          className="h-20 w-auto mr-5"
        />
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800">Create Groups</h2>
          <p className="mt-3 text-gray-600">
            Collaborate easily with team and friends.
          </p>
        </div>
      </div>

      <div className="bg-[#f0f3f9] rounded-xl shadow-md p-8 border flex justify-between items-center">
        <img
          src="/src/assets/feature3.png"
          alt="Secure & Private"
          className="h-20 w-auto object-contain"
        />

        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-blue-800">Secure & Private</h2>

          <p className="mt-3 text-gray-600">
            Your chats are safe and encrypted.
          </p>
        </div>
      </div>
    </div>
  );
}

function WhyChoose() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#173f81] justify-center items-center flex">
        Why Choose WEchatt?
      </h2>

      <div className="grid grid-cols-3 gap-8 px-16 py-10 justify-center items-center">
        <div className="flex flex-col items-center text-center">
          <img
            src="/src/assets/whychoose1.png"
            alt="Easy to Use"
            className="h-auto w-auto mb-4"
          />
          <h3 className="text-3xl font-semibold mt-6 text-[#0b3274]">
            Easy to Use
          </h3>
          <p className="mt-3 text-gray-700 max-w-sm">
            Intuitive interface designed for seamless communication.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/src/assets/whychoose2.png"
            alt="Fast & Reliable"
            className="h-auto w-auto mb-4"
          />
          <h3 className="text-3xl font-semibold mt-6 text-[#0b3274]">
            Fast & Reliable
          </h3>
          <p className="mt-3 text-gray-700 max-w-sm">
            Experience lightning-fast performance and reliable connectivity.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <img
            src="/src/assets/whychoose3.png"
            alt="Stay Connected"
            className="h-auto w-auto mb-4"
          />
          <h3 className="text-3xl font-semibold mt-6 text-[#0b3274]">
            Stay Connected
          </h3>
          <p className="mt-3 text-gray-700 max-w-sm">
            Never miss a beat with real-time updates and notifications.
          </p>
        </div>
      </div>
      <hr className="border-gray-300 w-[90%] h-1.25  mx-auto border-t-2 mb-4 "/>
    </div>
  );
}

export default Home;
