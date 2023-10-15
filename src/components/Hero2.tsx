'use client'
import { motion } from "framer-motion";
import React from "react";

const Hero2 = () => {

    return (
        <div className="relative h-screen bg-white">
            <div className="absolute inset-0">
                <img
                    className="w-full h-full object-cover"
                    src="/hero-background.jpg"
                    alt="Hero Background"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
            <div className="absolute inset-0 flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-white text-center"
                >
                    <h1 className="text-8xl font-bold mb-4">Welcome to my portfolio</h1>
                    <p className="text-lg mb-8">
                        I am a full-stack developer with experience in TypeScript, React,
                        and Node.js.
                    </p>
                    <button className="bg-white text-black py-2 px-4 rounded-full">
                        View my work
                    </button>
                </motion.div>
            </div>
            <Image src=''/>
        </div>
    );
};

export default Hero2;
