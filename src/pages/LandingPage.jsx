import React from "react";
import ss from "../assets/ss.mp4";
import "../App.css";

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen z-[-1]">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <video
        src={ss}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-left text-left text-white pt-[30px] px-5 sm:px-10 md:px-20 lg:px-32">
        <p className="text-lg md:text-xl font-bold mb-4">Welcome to</p>
        <h1 className="gradient-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-wide font-extrabold mb-6">
          AVTO SHOW
        </h1>
        <p className="max-w-2xl text-sm md:text-base lg:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          et mollitia harum accusamus similique dignissimos distinctio odio quos
          quasi? Eos expedita magnam quisquam impedit voluptatibus magni quam
          eveniet libero ut!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
