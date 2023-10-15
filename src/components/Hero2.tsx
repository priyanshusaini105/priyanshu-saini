"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  return (
    <section className="relative h-screen bg-[#fafafa] flex flex-col gap-5 justify-center pt-64">
      <div className="flex flex-col justify-center items-center gap-7 text-center">
        <h1 className="text-6xl text-center font-bold font-mont">
          Code <br />
          that Speaks
        </h1>
        <p className="text-2xl font-mont">
          Simplify App and Web Development
          <br /> to Amplify User Satisfaction with Intuitive Interfaces
        </p>

        <Link href="#explore" className="rounded-full bg-[#8330C2] text-white flex p-6 px-8 gap-4 items-center justify-around">
          <span className="text-4xl uppercase font-mont">Explore </span>
          <Image
            src='/icons/arrow-right.svg'
            width={24}
            height={24}
            alt='Arrow right'
            className="invert"
            />
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
