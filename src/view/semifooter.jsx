import React from "react";

export default function SemiFooter(){
    return (
        <div className="grid grid-cols-2 w-full h-full p-5 bg-black">
            <div className=" col-span-1">
                <p className="font-bold text-white text-5xl tracking-wide m-6">Want tips & tricks to optimise your flow ?</p>
                <p className="font-semibold text-white text-xl m-5">Sing in to our newslatter and stay up to date</p>
            </div>
            <div>
                <div className="flex items-center max-h-fit justify-end">
                    <input placeholder="Enter your email"  className="border-0 rounded-xl p-4 text-black text-xl"/>
                    <button className="rounded-lg bg-green-500 p-4 text-black font-bold m-5 ease-in-out duration-200 transition-all hover:bg-transparent hover:border-2 hover:border-white hover:text-white">Notify me</button>
                </div>
                <p className=" text-white text-l font-bold justify-end w-5/6">We care about the protection of your data ,Read our <span className="text-green-500 underline underline-offset-2 cursor-pointer">Privacy and Policy</span></p>
            </div>
        </div>
    )
}