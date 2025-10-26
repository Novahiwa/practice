import React from "react";
import { FaCartArrowDown, FaMarkdown } from "react-icons/fa";
import { Check, X } from "lucide-react";

const Pricing = () => {
  return (
    <div className="p-10 flex flex-col md:flex-row gap-4 justify-center  items-center md:my-24">
      <div className="bg-linear-to-b from-gray-300 w-80 md:min-w-100 px-8 md:px-8 py-4 rounded hover:scale-105 transition">
        <h1 className="text-2xl uppercase underline underline-offset-4">
          starter plan
        </h1>
        <div className="my-4">
          <p className="line-through text-red-500">k10,000/month</p>{" "}
          <p className="text-4xl">K5,999/month</p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <Check />1 website
          </li>
          <li className="flex">
            <Check />2 GB storage
          </li>
          <li className="flex">
            <Check />1 email account
          </li>
          <li className="flex">
            <Check />
            basic SSL certificate
          </li>
          <li className="flex">
            <X />
            unlimited bandwidth
          </li>
          <li className="flex">
            <X />
            WhatsApp support
          </li>
          <li className="flex">
            <X />
            Easy website setup
          </li>
        </ul>
        <div className="my-4 flex justify-center  mx-8 bg-sky-500 py-2 md:px-8 text-white capitalize font-bold rounded hover:scale-101 transition-all cursor-pointer hover:outline-2 hover:outline-gray-200 hover:outline-offset-2 hover:bg-white hover:text-black items-center gap-2">
          <FaCartArrowDown />
          <p>order now</p>
        </div>
      </div>
      <div className="bg-linear-to-b from-blue-500 w-80 md:min-w-100 px-8 md:px-8 py-4 rounded hover:scale-105 transition">
        <h1 className="text-2xl uppercase underline underline-offset-4 ">
          standard plan
        </h1>
        <div className="my-4">
          <p className="line-through text-red-500">k35,000/month</p>{" "}
          <p className="text-4xl">K25,000/month</p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <Check />3 websites
          </li>
          <li className="flex">
            <Check />
            10 GB storage
          </li>
          <li className="flex">
            <Check />5 email account
          </li>
          <li className="flex">
            <Check />
            SSL certificate
          </li>
          <li className="flex">
            <Check />
            daily backups
          </li>
          <li className="flex">
            <Check />
            WhatsApp support and email support
          </li>
          <li className="flex">
            <Check />
            simple website builder access
          </li>
        </ul>
        <div className="my-4 flex justify-center  mx-8 bg-sky-500 py-2 md:px-8 text-white capitalize font-bold rounded hover:scale-101 transition-all cursor-pointer hover:outline-2 hover:outline-blue-200 hover:outline-offset-2 hover:bg-white hover:text-black items-center gap-2">
          <FaCartArrowDown />
          <p>order now</p>
        </div>
      </div>

      <div className="bg-linear-to-b from-green-500 w-80 md:min-w-100 px-8 md:px-8 py-4 rounded hover:scale-105 transition">
        <h1 className="text-2xl uppercase underline underline-offset-4">
          pro plan
        </h1>
        <div className="my-4">
          <p className="line-through text-red-500">k55,000/month</p>{" "}
          <p className="text-4xl">K40,000/month</p>
        </div>
        <ul className="flex flex-col gap-4">
          <li className="flex">
            <Check />5 website
          </li>
          <li className="flex">
            <Check />
            50 GB storage
          </li>
          <li className="flex">
            <Check />
            unlimited email account
          </li>
          <li className="flex">
            <Check />
            SSL certificate included
          </li>
          <li className="flex">
            <Check />
            priority WhatsApp and email support
          </li>
          <li className="flex">
            <Check />
            access to premium website building tools
          </li>
          <li className="flex">
            <Check />
            analytics tools
          </li>
        </ul>
        <div className="my-4 flex justify-center  mx-8 bg-sky-500 py-2 md:px-8 text-white capitalize font-bold rounded hover:scale-101 transition-all cursor-pointer hover:outline-2 hover:outline-green-200 hover:outline-offset-2 hover:bg-white hover:text-black items-center gap-2">
          <FaCartArrowDown />
          <p>order now</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
