import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const jobsSequence = [
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
            </div>
        </section>
    );
}