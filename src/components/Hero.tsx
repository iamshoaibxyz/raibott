"use client";
import Image from "next/image";
import Logo from "/public/Hero.png";
import React from "react";

export default function Hero() {
  return (
    <div className="hero md:min-h-screen mt-16 md:mt-0 mb-10 bg-base-00">
      <div className="hero-content flex-col md:flex-row-reverse">
        <Image
          src={Logo}
          alt=""
          className="md:w-full max-w-xs rounded-lg shadow-xl border-accent shadow-accent"
        />
        <div className="basis-3/5 mt-10 md:mt-0 ">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            Lets <span className="text-accent">Automate</span> Everything
          </h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
          <button className="btn mt-5 btn-accent ">
            {/* bg-[#15E3E8] */}
            Create Bot
          </button>
        </div>
      </div>
    </div>
  );
}
