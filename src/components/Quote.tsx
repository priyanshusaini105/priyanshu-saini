"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const cards = [
  { title: ["Book", "More Meetings"] },
  { title: ["Convert ", "More Sales"] },
  { title: ["Build", "More Trust"] },
];

export const Quote = () => {
  const quoteContainerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: quoteContainerRef,
  });
  const x = useTransform(scrollYProgress, [0, 0.45, 1], ["0%", "0%", "-66%"]);
  return (
    <section className="h-[300vh] bg-purple-800 relative rounded-b-4xl">
      <div className="bg-accent flex sticky overflow-hidden h-screen top-0">
        <motion.div className="flex-row flex items-center" style={{ x }}>
          {cards.map((card, i) => (
            <div
              className="flex flex-col justify-center items-center w-[92vw] h-96 rounded-xl m-10"
              key={i}
            >
              <h2 className="text-[7rem] font-bold text-center text-white leading-[90%] font-mont">
                {card.title[0]}
                <br />
                {card.title[1]}
              </h2>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
