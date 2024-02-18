"use client"
import { motion } from "framer-motion"
const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    > About </motion.div>
  )
}

export default AboutPage