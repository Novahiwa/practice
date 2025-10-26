import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/drawing.png";
import { FaFacebook, FaTelegram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="py-10 bg-[#f7f7f7]">
      <div className="mx-auto p-4 sm:p-4 lg:p-8 xl:p-8 2xl:p-16 container flex justify-between items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          
          {/* About */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Word Associator</h1>
            <p className="text-[var(--dark)]">
              Word Associator is a platform dedicated to empowering aspiring
              developers. We provide a comprehensive learning experience
              designed to help you master coding skills, build projects, and
              launch your tech career.
            </p>
          </div>

          {/* Services & Links */}
          <div className="grid grid-cols-2 gap-10">
            {/* Services */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Services</h1>
              <ul className="space-y-2 text-lg text-[var(--dark)]">
                <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">Web Development</li>
                <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">Software Development</li>
                <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">App Development</li>
                <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">E-learning</li>
              </ul>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <ul className="space-y-2 text-lg text-[var(--dark)]">
                <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                  <Link to="/">Home</Link>
                </li>
                <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                  <Link to="/services">Services</Link>
                </li>
                <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                  <Link to="/about">About</Link>
                </li>
                <li className="cursor-pointer hover:text-[var(--secondary)] duration-200">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-[var(--dark2)]"
              />
              <button className="bg-[var(--primary)] text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
            <div className="flex space-x-6 py-3">
              <a href="https://wam.kesug.com">
                <TbWorldWww className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>
              <a href="https://facebook.com/profile.php?id=100071074852209">
                <FaFacebook className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>
              <a href="https://wa.link/8mgfa6">
                <FaWhatsapp className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>
              <a href="https://youtube.com/@wordassociator?si=xUbMPbNR1q3kgK1N">
                <FaYoutube className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>
              <a href="https://t.me/wordassociator">
                <FaTelegram className="cursor-pointer hover:text-[var(--primary)] hover:scale-105 duration-200" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Logo */}
      <div className="mx-auto p-4 sm:p-8 lg:p-8 xl:p-8 2xl:p-16 container flex justify-between items-center">
        <img src={logo} alt="logo" className="md:w-[200px] w-[100px] opacity-30" />
      </div>

      {/* Copyright */}
      <div className="flex items-center justify-center text-dark capitalize">
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Word Associator | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
