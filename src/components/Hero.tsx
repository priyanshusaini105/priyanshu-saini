"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll } from "framer-motion"


interface Props {}

export const Hero: React.FC = () => {

  const imgRef=useRef<HTMLImageElement>(null);
  const [imgPosition,setImgPostion]=useState<{x:number|number[]|string,y:number|number[]}>({
    x:'-50%',y:0
  });
  const { scrollYProgress } = useScroll();

console.log(scrollYProgress)
  // move img to the below with frammer animation

  const moveImage=()=>{
    setImgPostion(prev=>{
      if(prev.x==0||prev.y==0){
        return {
          x:-500,
          y:[500]
        }
      }else{
        return {
          x:'-50%',
          y:0
        }
      }
    })
  }


  return (
    <section className="flex relative w-full">
      {/* Left Background */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-white w-1/2 h-screen flex items-center justify-center"
      >
        <div className="text-start w-[28rem]">
          <p>Hi,I am </p>
          <h1 className="text-6xl text-gray-800 font-bold" onClick={()=>moveImage()}>Priyanshu Saini</h1>
          <p className="mt-4 text-xl text-gray-600">
          A Software Engineer. I Help <span>Startups</span> to Launch And Grow Their Products
          </p>
          <p>
          over 2yrs+ of professional experience working with several programming tools to deliver quality results to clients. i have expert knowledge in full stack engineering, software testing, and App development.
          </p>
          <div className="">Get Started</div>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div className="absolute left-1/2 transform bottom-0"
        animate={imgPosition}
        transition={{duration:1.2,type:'spring',}}
        initial={{x:'-50%'}}
      >
        <Image
          src="/img/priyanshusaini.png"
          width={400}
          height={400}
          alt="Priyanshu"
          className="w-[28rem] h-[28rem]"
          ref={imgRef}
        />
      </motion.div>

      {/* Right Background */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="bg-sky-950 w-1/2 h-screen flex items-center justify-center"
      >
        <div className="text-center -rotate-90 text-start flex flex-col font-yatra gap-5">
          <h1 className="text-7xl text-white font-bold">App Developer</h1>
          <h1 className="text-7xl text-zinc-400 font-bold">Web Developer</h1>
          <h1 className="text-7xl text-neutral-600 font-bold">Meta Developer</h1>
        </div>
      </motion.div>
    </section>
  );
};
