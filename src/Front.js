import React from "react";
import disc from "./assets/discover3 1.jpg";
import Rectangle from "./assets/Rectangle 2.png";
import Story from "./assets/Story.png";

import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

const Front = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="ml-16 relative flex items-center ">
          <div className="mr-2">
            <img src={disc} alt="Company Logo" />
          </div>

          <h2 className="flex text-xl text-white">Company Name</h2>
        </div>
        <div className="relative mr-12 py-2">
          <button className=" relative px-4 py-2 bg-blue-400 text-white rounded-lg">
            Sign In
          </button>
        </div>
      </div>

      {/* 
      text and image comes here  */}

      <div className="flex">
        <div className="mt-28 text-left px-20 w-1/2 ">
          <div className="relative text-white text-6xl font-bold py-2">
            Lorem
          </div>
          <div className="relative text-white text-6xl font-bold ">Ipsum</div>
          <div className="relative text-white text-3xl py-4 font-bold">
            nice text
          </div>
          <div className="relative text-white text-sm py-4">
            with the release of Letraset sheets containing Lorem Ipsum <br />
            passages, and more recently with desktop publishing software like{" "}
            <br /> Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="flex gap-6">
            <div>
              <a
                href="https://www.google.com"
                className="relative text-white bg-violet-700 rounded-lg w-32 flex gap-2"
              >
                <AiFillApple className="text-xl" />
                <div className="">APP STORE</div>
              </a>
            </div>

            <div>
              <a
                href="https://www.google.com"
                className="relative text-white bg-violet-700 rounded-lg w-32 flex gap-2"
              >
                <AiFillApple className="text-xl" />
                <div className="">GOOGLE</div>
              </a>
            </div>
          </div>
        </div>

        <div className="px-12 relative w-1/2 ml-auto py-12">
          <img
            src={Rectangle}
            alt="rect"
            className="w-72 h-auto left-1/2 ml-12 py-24"
          />
          <img
            src={Story}
            alt="car"
            className=" ml-24 absolute top-2 left-1/4 w-56 h-auto transform translate-y-1/5 py-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Front;
