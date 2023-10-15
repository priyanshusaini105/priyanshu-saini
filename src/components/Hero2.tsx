"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section className="relative h-screen bg-[#fafafa] flex flex-col gap-5 justify-center pt-64">
      <div className="flex flex-col justify-center items-center gap-7 text-center">
        <h1 className="text-6xl text-center font-bold">
          Code <br />
          that Speaks
        </h1>
        <p className="text-2xl">
          Simplify App and Web Development
          <br /> to Amplify User Satisfaction with Intuitive Interfaces
        </p>

        <Link href="#explore" className="rounded-full bg-[#8330C2] text-white flex p-6 px-8 gap-4 items-center justify-around">
          <span className="text-4xl uppercase">Explore </span>
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            className="pt-svgsprite -arrow-right-o"
            width={32}
            height={32}
          >
            <defs>
              <symbol
                viewBox="0 0 32 32"
                id="arrow-right-o"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m18 5 12 11m0 0L18 27m12-11H2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
              </symbol>
            </defs>
            <g>
              <path
                d="m18 5 12 11m0 0L18 27m12-11H2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            </g>
          </svg>
        </Link>
      </div>
      <Image
        src="/img/priyanshusaini.png"
        width={400}
        height={400}
        alt="Priyanshu Saini"
        className=""
      />
    </section>
  );
};

export default Hero2;
