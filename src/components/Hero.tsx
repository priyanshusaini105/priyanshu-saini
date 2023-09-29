"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";

interface Props {}

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [imgPosition, setImgPostion] = useState<{
    x: number | number[] | string;
    y: number | number[];
  }>({
    x: "-50%",
    y: 0,
  });

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // move img to the below with frammer animation

  const moveImage = () => {
    setImgPostion((prev) => {
      if (prev.x == 0 || prev.y == 0) {
        return {
          x: -500,
          y: [500],
        };
      } else {
        return {
          x: "-50%",
          y: 0,
        };
      }
    });
  };

  return (
    <section className="flex relative w-full">
      {/* Left Background */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-white w-1/2 h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h1
            className="text-6xl text-gray-800 font-bold"
            onClick={() => moveImage()}
          >
            App Developer
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Turning Ideas into Reality
          </p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        className="absolute left-1/2 transform bottom-0"
        animate={imgPosition}
        transition={{ duration: 1.5, type: "spring" }}
        initial={{ x: "-50%" }}
      >
        <Image
          src="/img/priyanshusaini.png"
          width={400}
          height={400}
          alt="Priyanshu"
          className="w-[28rem] h-[28rem]"
        />
        <motion.div
          className="bg-pink-500 w-screen h-[100vw] rounded-full mx-auto top-[3rem]"
          ref={heroRef}
          style={{ scale: scaleX }}
        ></motion.div>
      </motion.div>
      {/* Right Background */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-sky-950 w-1/2 h-screen flex items-center justify-center"
      >
        <div className="text-center -rotate-90 text-start flex flex-col font-yatra">
          <h1 className="text-6xl text-white font-bold">App Developer</h1>
          <h1 className="text-6xl text-zinc-400 opacity-70 font-bold">
            Web Developer
          </h1>
          <h1 className="text-6xl text-neutral-600 font-bold">
            Meta Developer
          </h1>
        </div>
      </motion.div>
    </section>
  );
};
