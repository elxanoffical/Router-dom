import React from "react";

const Hero = ({title,subtitle}) => {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className=" text-5xl font-medium">
        Welcome To <span className="text-red-500">{title}</span> Page
      </h1>
      <h2 className="text-4xl">
       {subtitle}
      </h2>
    </section>
  );
};

export default Hero;
