"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {}

export const Hero: React.FC = () => {

  const imgRef=useRef<HTMLImageElement>(null);
  const [imgPosition,setImgPostion]=useState<{x:number|number[]|string,y:number|number[]}>({
    x:'-50%',y:0
  })

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
        <div className="text-center">
          <h1 className="text-6xl text-gray-800 font-bold" onClick={()=>moveImage()}>App Developer</h1>
          <p className="mt-4 text-xl text-gray-600">
            Turning Ideas into Reality
          </p>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div className="absolute left-1/2 transform bottom-0"
        animate={imgPosition}
        transition={{duration:1.5,type:'spring',}}
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
        <div className="text-center -rotate-90 text-start flex flex-col">
          <h1 className="text-6xl text-white font-bold">App Developer</h1>
          <h1 className="text-6xl text-zinc-400 opacity-70 font-bold">Web Developer</h1>
          <h1 className="text-6xl text-neutral-600 font-bold">Meta Developer</h1>
        </div>
      </motion.div>
    </section>
  );
};
