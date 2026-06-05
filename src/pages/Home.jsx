import React from "react";
import { useState } from "react";
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
      <img src="/src/assets/logo.png" alt="logo" className="h-15 w-auto bg-white rounded-xl" />

      <div className="flex gap-20 items-center">
        <a href="#features">Features</a>

        <a href="#about">About</a>

        <a href="#support">Support</a>

        <button className="bg-white text-blue-700 px-5 py-3 rounded transition duration-200 ease-out transform hover:bg-olive-200 hover:scale-105">
          Login
        </button>
      </div>
    </nav>
  );
}


function Feature() {
  return (
    <section className="features">

      <article className="feature-card bg-[#f1f4f9]">
        <h1>Instant Messaging</h1>
        <h2>Send message instantly and see who's online.</h2>
      </article>

      <article className="feature-card bg-[#f1f4f9]">
        <h1>Create Groups</h1>
        <h2>Collaborate easily with team and friends.</h2>
      </article>

      <article className="feature-card bg-[#f1f4f9]">
        <h1>Secure & Private</h1>
        <h2>Your conversations are protected with end-to-end encryption.</h2>
      </article>

    </section>
  );
}


function WhyChoose() {
  return (
    <section>

      <h2 className="bg-[173f81]">Why Choose WEchatt?</h2>

      <div>Easy to Use
        <h3>Intuitive interface designed for seamless communication.</h3>
      </div>

      <div>Fast & Reliable
        <h3>Experience lightning-fast performance and reliable connectivity.</h3>
      </div>

      <div>Stay Connected
        <h3>Never miss a beat with real-time updates and notifications.</h3>
      </div>

    </section>
  );
}

export default Home;
