import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const jobsSequence = [
    "Swann", 1000,
    "Engine Programmer", 1000,
    "Gameplay Programmer", 1000,
];

export default function Hero() {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
            <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
                <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
                    <span className="text-transparant text-6xl bg-clip-text bg-grandiant-to-r from-purple-400 to-pink-600">
                        Hello, I'm{" "}
                    </span>{""}
                    <br></br>
                    <TypeAnimation
                        sequence={jobsSequence}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
                    I'm a game developer who is interested in game engine and gameplay programming.
                </p>
                <div>
                    <button className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4">
                            Contact Me
                    </button>
                    <button className="m-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 px-1 py-1  text-white rounded-full">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                            Download CV
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
}