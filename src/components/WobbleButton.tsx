'use client'
import { motion } from 'framer-motion'
import Image from 'next/image';
import React, { CSSProperties, FC } from 'react'

interface Props {
    className?:string,
    children?: React.ReactNode,
    title?:string,
    textStyle?:CSSProperties,
    type:'lg'|'md'|'sm'
}

export const WobbleButton:FC<Props> = ({className,children,title,textStyle,type}) => {

  const size={
    lg:'w-48 h-48',
    md:'w-36 p-2',
    sm:'w-24 h-24'
  }

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
    <div>
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
            <span className={`text-white flex ${size[type]} gap-4 items-center justify-center z-50 relative`}>
              <span className="text-3xl uppercase font-mont " style={textStyle}>{title??children} </span>
              <Image
                src="/icons/arrow-right.svg"
                width={24}
                height={24}
                alt="Arrow right"
                className="invert"
              />
            </span>
          </motion.div>
        </div>
  )
}

