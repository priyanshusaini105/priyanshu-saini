"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Hero2 = () => {
  return (
    <div className="relative h-screen bg-white">
      <div className="flex justify-center items-center">
        <h1 className="text-6xl text-center">
          Welcome <br />
          to My portfolio
        </h1>
      </div>
      <Image
        src="/img/priyanshusaini.png"
        width={200}
        height={200}
        alt="Priyanshu Saini"
        className=""
      />
    </div>
  );
};

export default Hero2;
