import React from "react";
import ImageAside from "../assets/laptop.jpg"
export default function Aside(){
    return (
        <div className="bg-white w-full grid grid-cols-2 items-center">
            <div>
                <img src={ImageAside} className="w-full h-full" alt="image"/>
            </div>
            <div>
                <p className="text-green-500 uppercase m-5 text-xl">Data analytics dashboard</p>
                <h1 className=" text-black text-bold tracking-wider m-5 font-bold text-5xl">Manage Data Analytics Centrally</h1>
                <p className="text-l align-middle my-4 p-6" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, dolores harum a iure in, quaerat excepturi sit error libero nemo deserunt praesentium reprehenderit ab magnam animi cumque. Rem necessitatibus deleniti sunt neque, aliquid est quisquam cumque quia tempore quasi nihil maiores tenetur quibusdam quaerat molestias odit nam minima eos assumenda.</p>
                <button className="bg-black text-green-500 rounded-lg p-5 font-bold m-5">Get Started</button>
            </div>
        </div>
    )
}