"use client";

import { motion } from "framer-motion";

const TestPage = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-500 rounded"
        initial={{ x: -100 }}
        animate={{ x: 300, y: 200, opacity: 0.9 }}
        transition={{ delay:2, duration: 2 }}

      ></motion.div>
    </div>
  );
};

export default TestPage;
