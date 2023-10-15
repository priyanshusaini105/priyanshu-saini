"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero2 = () => {
  const div1Variants = {
    initial: { scaleX: 1, scaleY: 1 },
    hover: { scaleX: 1.03, scaleY: 0.98 ,transition:{type:'spring'}},
  };

  const span1Variants = {
    initial: { x: 0 },
    hover: { x: "100%", transition: { delay: 0.3 } }, 
  };

  const span2Variants = {
    initial: { x: 0 },
    hover: { x: "100%", transition: { delay: 0.5 ,type:'spring'} }, 
  };

  const wobbleVariants = {
    hover: {
      x: [0, -10, 10, -10, 10, 0],
      transition: { type: "spring", stiffness: 200, damping: 10 },
    },
  };

  return (
    <section className="relative h-screen bg-[#fafafa] flex flex-col gap-5 items-center pt-24">
      <div className="flex flex-col justify-center items-center gap-8 text-center ">
        <h1 className="text-6xl text-center font-bold font-mont mb-8">
          Code <br />
          that Speaks
        </h1>
        <p className="text-2xl font-mont">
          Simplify App and Web Development
          <br /> to Amplify User Satisfaction with Intuitive Interfaces
        </p>

        <Link href="#explore" className="rounded-full">
          <motion.div
            className="rounded-full bg-[#8330C2] overflow-hidden relative"
            variants={div1Variants}
            whileHover="hover"
          >
            <motion.span
              className="absolute w-full h-full bg-purple-600 -left-full block rounded-full"
              variants={span1Variants}
            >
              <motion.div
                className="w-full h-full"
                variants={wobbleVariants}
                whileHover="hover"
              ></motion.div>
            </motion.span>
            <motion.span
              className="absolute w-full h-full bg-purple-500 -left-full block rounded-full"
              variants={span2Variants}
            >
              <motion.div
                className="w-full h-full"
                variants={wobbleVariants}
                whileHover="hover"
              ></motion.div>
            </motion.span>
            <span className="text-white flex p-6 px-10 gap-4 items-center justify-around z-50 relative">
              <span className="text-3xl uppercase font-mont">Explore </span>
              <Image
                src="/icons/arrow-right.svg"
                width={24}
                height={24}
                alt="Arrow right"
                className="invert"
              />
            </span>
          </motion.div>
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
