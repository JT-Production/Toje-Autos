"use client";

import React from 'react'
import { motion } from 'framer-motion'

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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export default function About() {
  return (
    <motion.div 
      className='md:px-20 px-4'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
        <motion.div className="grid md:grid-cols-2 gap-10 mt-20 items-center" variants={containerVariants}>
            <motion.div variants={imageVariants}>
                <img src="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773235229/TOJE%20AUTOS/image_2426_ioclcx.png" alt="About Us Image" className='w-full rounded-2xl' />
            </motion.div>
            <motion.div className="space-y-4" variants={containerVariants}>
                <motion.p 
                  className="text-6xl font-bold border-l-3 px-2"
                  variants={itemVariants}
                >
            TOJE AUTOS®
          </motion.p>
                <motion.p 
                  className="text-black/40 leading-relaxed text-lg"
                  variants={itemVariants}
                >
                At TojeAutos, we are passionate about providing top-notch car detailing services that go beyond just cleaning. We believe that a professionally detailed car is not just a vehicle; it's a statement of elegance and refinement. Our mission is to transform your car into a masterpiece of beauty and sophistication, ensuring that every inch radiates prestige and excellence.
                </motion.p>
            </motion.div>
        </motion.div>

    </motion.div>
  )
}
