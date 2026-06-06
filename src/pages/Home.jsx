import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';

import Navbar from "../components/Navbar";
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


export default Home;
