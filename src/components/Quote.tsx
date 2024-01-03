"use client";
import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, } from "framer-motion";

const cards = [
  { title: "Card 1", content: "This is the first card." },
  { title: "Card 2", content: "This is the second card." },
  { title: "Card 3", content: "This is the third card." },
];

export const Quote = () => {
  const quoteContainerRef = useRef<HTMLDivElement|null>(null);
  const { scrollYProgress } = useScroll({
    target: quoteContainerRef,
  });
  const x=useTransform(scrollYProgress,[0,1],['1%', '-66%'])
  return (
    <div className="h-[300vh] bg-purple-300 relative">
      <div className="bg-purple-800 flex sticky overflow-hidden h-screen top-0">
        <motion.div className="flex-row flex" style={{x}}>
          {cards.map((card, i) => (
            <div
              className="flex flex-col justify-center items-center w-[92vw] h-96 rounded-xl m-10"
              key={i}
            >
              <h2 className="text-2xl font-bold text-center">{card.title}</h2>
              <p className="text-center">{card.content}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
