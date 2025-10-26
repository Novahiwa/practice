import React from "react";
import { Link } from "react-router-dom";
import server from "../assets/—Pngtree—cloud computing server digital data_20745942.png";
import "./particles.css"; // <-- add this

const Land = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between bg-linear-to-b md:bg-linear-to-r from-red-200 to-sky-900 h-dvh py-30 md:px-30 overflow-hidden">

      {/* PARTICLE BACKGROUND */}
      <div className="particles">
        {[...Array(12)].map((_, i) => <span key={i}></span>)}
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 text-center md:text-left md:w-1/2">
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug text-gray-800">
          <span className="text-[#46746b]">Word Associator;</span> Your Website, Your Way
        </h1>
        <h2 className="my-4 px-8 md:px-0">
          Affordable hosting and easy setup for Malawian small businesses. Go online today with WhatsApp support every step of the way.
        </h2>
        <Link to="mailto:novahiwamzika18@gmail.com">
          <button className="bg-sky-500 py-2 px-8 text-white capitalize font-bold rounded hover:scale-105 transition-all cursor-pointer hover:bg-white hover:text-black">
            get started
          </button>
        </Link>
      </div>

      <div className="relative z-10 flex justify-center">
        <img src={server} width={300} alt="server image on the landing page" />
      </div>
    </div>
  );
};

export default Land;
