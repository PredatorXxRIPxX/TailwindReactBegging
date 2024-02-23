import React from "react";
import { ReactTyped } from "react-typed";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-white text-center">
      <p className="uppercase text-green-500 m-5 text-2xl">Growing with Data Analytics</p>
      <h1 className="uppercase font-bold text-6xl m-5">Grow with Data</h1>
      <p className="font-bold text-5xl m-5 tracking-wider">
        Fast, Flexible Financing for
        <ReactTyped 
          className="md:text-5xl sm:text-4xl text-xl text-gray-700  font-bold md:pl-4 pl-2"
          strings={['BTB', 'BTC', 'SASS']}
          typeSpeed={120}
          backSpeed={140}
          loop
        ></ReactTyped>
      </p>
      <p className="text-gray-500 text-2xl m-4">Monitor your data analytics to increase revenue for BTB, BTC & SaaS platforms</p>
      <button className="rounded-lg bg-green-500 p-4 text-black font-bold m-5 ease-in-out duration-200 transition-all hover:bg-transparent hover:border-2 hover:border-white hover:text-white">
        Get Started
      </button>
    </div>
  );
}
