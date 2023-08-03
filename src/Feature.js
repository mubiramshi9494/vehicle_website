import React from "react";
import Group1 from "./assets/Group 23.png";
import Ellipse1 from "./assets/Ellipse 1.png";
import Ellipse2 from "./assets/Ellipse2.png";

const Feature = () => {
  return (
    <div className="py-28">
      <div className="text-5xl font-bold text-violet-700 py-4">
        Our Features
      </div>
      <div className="font-bold">
        Discover the power of our Feature Rich Platform
      </div>

      <div className="flex mt-16">
        <div className="relative w-1/2">
          <img
            src={Ellipse1}
            alt="elli"
            className="w-56 h-auto left-1/2 ml-12 "
          />
          <img
            src={Group1}
            alt="car"
            className=" ml-24 absolute bottom-8 left-1/18 w-2/4 h-auto transform translate-y-1/4"
          />
        </div>

        <div className="px-12 py-12 w-1/2">
          <div className="text-2xl font-bold mr-28 py-4">FEATURE 1</div>
          <div className="text-start mr-14">
            make a type specimen book. It has survived not only five
            <br />
            centuries, but also the leap into electronic typesetting
            <br />
            remaining essentially unchanged. It was popularised in the <br />
            1960s with the release of Letraset sheets containing Lorem <br />
            Ipsum passages, and more recently with desktop publishing <br />
            software like Aldus PageMaker including versions of Lorem <br />
            Ipsum
          </div>
        </div>
      </div>

      <div className="flex mt-16">
        <div className="px-12 py-12 w-1/2">
          <div className="text-2xl font-bold mr-28 py-4">FEATURE 2</div>
          <div className="text-start mr-14">
            make a type specimen book. It has survived not only five
            <br />
            centuries, but also the leap into electronic typesetting
            <br />
            remaining essentially unchanged. It was popularised in the <br />
            1960s with the release of Letraset sheets containing Lorem <br />
            Ipsum passages, and more recently with desktop publishing <br />{" "}
            software like Aldus PageMaker including versions of Lorem <br />
            Ipsum
          </div>
        </div>
        <div className="relative w-1/2">
          <img
            src={Group1}
            alt="car"
            className=" mr-28 absolute bottom-8 left-1/18 w-2/4 h-auto transform translate-y-1/4"
          />
          <div className=" ml-32">
            <img src={Ellipse2} alt="elli" className="w-56 h-auto ml-22 " />
          </div>
        </div>
      </div>

      <div className="flex mt-16">
        <div className="relative w-1/2">
          <img
            src={Ellipse1}
            alt="elli"
            className="w-56 h-auto left-1/2 ml-12 "
          />
          <img
            src={Group1}
            alt="car"
            className=" ml-24 absolute bottom-8 left-1/18 w-2/4 h-auto transform translate-y-1/4"
          />
        </div>

        <div className="px-12 py-12 w-1/2">
          <div className="text-2xl font-bold mr-28 py-4">FEATURE 3</div>
          <div className="text-start mr-14">
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
