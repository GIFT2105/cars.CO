"use client";

import Image from "next/image";

import { CustomButton } from "../components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div  className="hero h-screen">
      <div id="hyun" className="flex-1 pt-36 padding-x">
        <h1 className="hero__title text-4xl mt-28 text-white">
        New & used cars for sale
        </h1>

        <p className="font-bold text-xl    text-white">
        Dream. Search. Drive.
        </p>

        <CustomButton
          title="Search 76686 Cars"
          containerStyles=" text-white rounded-r-md w-56    h-14 mt-10"
          handleClick={handleScroll}
        />
      </div>
      
    </div>
  );
};

export default Hero;
