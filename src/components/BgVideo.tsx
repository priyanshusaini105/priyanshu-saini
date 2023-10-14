'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const BgVideo: React.FC = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleScroll = (e: React.WheelEvent<HTMLDivElement>) => {
    const deltaY = e.deltaY;
    const zoomIncrement = 0.05; // Adjust the increment as needed

    if (deltaY > 0) {
      // Scrolling down, zoom out
      setZoomLevel((prevZoom) => prevZoom - zoomIncrement);
    } else {
      // Scrolling up, zoom in
      setZoomLevel((prevZoom) => prevZoom + zoomIncrement);
    }
  };

  return (
    <div
      className="w-screen h-screen relative overflow-hidden"
      onWheel={handleScroll}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: zoomLevel }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="relative"
      >
        <div>
          <video
            src="/vid/bg.mp4"
            controls={false}
            loop
            autoPlay
            muted
            className="w-screen h-screen"
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-50 bg-black text-white p-4 rounded w-full h-full">
          Your overlay text goes here
        </div>
      </motion.div>
    </div>
  );
};

