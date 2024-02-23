import React from "react";
import "../global.css";

export default function Nav() {
  return (
    <nav className=" flex items-center justify-between uppercase px-8">
        <h1 className="text-5xl p-4 text-green-600 font-semibold">
            React.
        </h1>
        <ul className="md:flex md:items-center md:p-4  ">
            <li className=" p-5 text-white font-bold text-xl cursor-pointer rounded-md bg-transparent transition ease-in-out duration-500 hover:bg-green-600 m-3">Home</li>
            <li className=" p-5 text-white font-bold text-xl cursor-pointer rounded-md bg-transparent transition ease-in-out duration-500 hover:bg-green-600 m-3">Account</li>
            <li className="p-5 text-white font-bold text-xl cursor-pointer rounded-md bg-transparent transition ease-in-out duration-500 hover:bg-green-600 m-3">Sign in</li>
            <li><button className="text-black bg-white rounded-lg p-4 border-0 w-full">Get Started</button></li>
        </ul>
    </nav>
  );
}
