import React from "react";

export default function Card(props){
    return (
        <div className="h-full rounded-2xl flex flex-col items-center justify-center shadow-lg p-12 w-fit bg-white transition-all duration-150 ease-in-out cursor-pointer transform hover:scale-105">
            {props.image}
            <h1 className="mt-4 mb-2 text-3xl text-black font-bold tracking-wide">{props.title}</h1>
            <h1 className="mb-4 text-3xl text-black font-bold tracking-wide">${props.price}</h1>
            <p className="mb-2 font-bold text-black text-lg border-b-2 border-gray-500 w-full text-center">{props.storage} Storage</p>
            <p className="mb-2 font-bold text-black text-lg border-b-2 border-gray-500 w-full text-center">{props.users} Users allowed</p>
            <p className="mb-4 font-bold text-black text-lg border-b-2 border-gray-500 w-full text-center">Send up to {props.bandwidth} GB</p>
            <button className={props.isPartner ? "rounded-xl bg-black text-green-500 font-bold p-4 cursor-pointer" : "rounded-xl bg-green-500 text-black font-bold p-4 cursor-pointer"}>
                Start your free Trial
            </button>
        </div>
    );
}
