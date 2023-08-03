import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

const Cards = () => {
  return (
    <div>
      <div className="mt-36">
        <div className="relative text-5xl font-bold text-violet-700">
          Why This App
        </div>
        <h1 className=" relative tex-3xl font-bold text-black mt-4">
          s simple dummy text of nice text
        </h1>
      </div>

      <div className="flex justify-center items-center py-2">
        <div className="flex space-x-12">
          <div className="h-46 w-56 bg-blue-500 rounded-lg rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg p-2">
              <FaArrowUp className="text-violet-500 text-4xl" />
            </div>
            <div className="mt-2 text-center">
              simple dummy <br /> text of th
            </div>
          </div>
          <div className="h-46 w-56 bg-blue-500 rounded-lg rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg p-2">
              <FaArrowDown className="text-violet-500 text-4xl" />
            </div>
            <div className="mt-2 text-center">
              simple dummy <br /> text of th
            </div>
          </div>
          <div className="h-56 w-56 bg-blue-500 rounded-lg rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg p-2">
              <FaArrowUp className="text-violet-500 text-4xl" />
            </div>
            <div className="mt-2 text-center">
              simple dummy <br /> text of th
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
