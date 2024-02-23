import React from "react";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
import { FaGithub, FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="grid grid-cols-5 gap-4 px-4 py-6 items-center h-max bg-black text-white">
      <div className="col-span-2">
        <h1 className="text-green-500 mb-4 text-3xl font-bold uppercase">React.</h1>
        <p className="text-lg font-bold tracking-wide h-36 overflow-y-hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo non accusantium praesentium laboriosam perspiciatis quidem, eius doloribus saepe iusto. Labore ipsum fugit tempora nobis ullam necessitatibus possimus itaque doloremque? Eius aliquid quos nulla. Dignissimos cum ut culpa quis illum placeat odit delectus unde nihil, cumque id fuga veniam temporibus? Dolores alias possimus et! Laudantium nam doloribus sequi ducimus aperiam blanditiis consequatur, commodi
        </p>
        <div className="flex items-center justify-evenly mt-4">
          <CiFacebook color="white" size={"2rem"} />
          <CiInstagram color="white" size={"2rem"} />
          <FaReact color="white" size={"2rem"} />
          <CiTwitter color="white" size={"2rem"} />
          <FaGithub color="white" size={"2rem"} />
        </div>
      </div>

      {[
        ["Solution", "Analytics", "Marketing", "Commerce", "Insight"],
        ["Support", "Pricing", "Documentation", "Guide", "API Status"],
        ["Company", "About", "Cloud", "Blog", "Jobs"],
        
      ].map((list, index) => (
        <div key={index}>
          <ul className="lists">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </footer>
  );
}
