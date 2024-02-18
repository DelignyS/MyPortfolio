"use client";

import { motion } from "framer-motion";

const TestPage = () => {
  const variants = {
    variants1: {
      x: 400,
      y: 300,
      oppacity: 0.5,
      transition:{
        yoyo: Infinity,
        duration: 2,
        ease: "easeInOut",
        flip: Infinity,
      }
    },
    variants2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };

  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-500 rounded"
        variants={variants}
        animate="variants1"
      ></motion.div>
    </div>
  );
};

export default TestPage;
