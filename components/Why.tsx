'use client';
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay: 0.2,
    },
  },
};

export default function Why() {
  return (
    <motion.div 
      className="md:px-30 px-4 my-30"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="grid md:grid-cols-2 gap-20 h-[70vh]">
        <motion.div variants={containerVariants}>
          <motion.p 
            className="text-6xl font-bold border-l-3 px-2"
            variants={itemVariants}
          >
            Why Choose <br /> TOJE AUTOS®
          </motion.p>
          <motion.p 
            className="text-lg mt-5 text-black/40" 
            style={{lineHeight:1}}
            variants={itemVariants}
          >
            At Carsy, we prioritize your vehicle's performance and your
            satisfaction. Our expert team delivers top-quality service using the
            latest technology and industry best practices. We offer
            comprehensive automotive care, from routine maintenance to complex
            repairs, ensuring your car runs smoothly and efficiently.
          </motion.p>
          <motion.ul 
            className="list-none space-y-4 mt-5"
            variants={containerVariants}
          >
            {["Quality and efficiency", "Fast and Reliable", "Decades of experience", "Versatility"].map((item) => (
              <motion.li 
                key={item} 
                className="flex items-center gap-3 py-4 border-b border-gray-200 cursor-pointer"
                variants={itemVariants}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <span className="w-3 h-3 bg-black flex-shrink-0" />
                <span className="">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div variants={imageVariants}>
          <Image
            src="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773235236/TOJE%20AUTOS/image_2435_wybkhh.png"
            alt="why choose us"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover rounded-2xl border-4"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
