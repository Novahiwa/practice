import React from "react";
import logo from "../assets/drawing.png";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed flex justify-between w-dvw px-5 md:px-20 py-2 items-center bg-linear-to-b from-black z-10">
      <div>
        <img src={logo} width={200} alt="logo" />
      </div>

      <div >
        <ul className="md:flex gap-4 text-white capitalize font-bold cursor-pointer hidden ">
          <li className="hover:underline hover:underline-offset-8 hover:text-sky-500 transition">home</li>
            <li className="hover:underline hover:underline-offset-8 hover:text-sky-500 transition">contact</li>
            <li className="hover:underline hover:underline-offset-8 hover:text-sky-500 transition">policy</li>
            <li className="hover:underline hover:underline-offset-8 hover:text-sky-500 transition">about</li>
        </ul>
        <Menu className="text-white cursor-pointer md:hidden"/>
      </div>
    </header>
  );
};

export default Header;
