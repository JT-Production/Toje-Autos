"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function BentoGrid() {
  return (
    <motion.div 
      className="md:px-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.div className="grid md:grid-cols-3 gap-5 mt-20" variants={containerVariants}>
        <motion.div 
          className="bg-gray-300  rounded-2xl md:col-span-2 h-full p-10 space-y-2"
          variants={itemVariants}
        >
          <h1 className="text-5xl font-bold">Our Story</h1>
          <p className="text-2xl text-black/80 font-bold">
            Built with Purpose, Driven by Integrity
          </p>
          <p className="text-lg text-black/50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.{" "}
          </p>
        </motion.div>
        <motion.div variants={imageVariants}>
          <Image
            src="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773235229/TOJE%20AUTOS/image_2426_ioclcx.png"
            alt="About Us Image"
            className="w-full rounded-2xl"
            width={1000}
            height={1000}
          />
        </motion.div>
      </motion.div>

      <motion.div className="grid md:not-only-of-type:grid-cols-3 gap-5 mt-10 " variants={containerVariants}>
        <motion.div variants={imageVariants}>
          <Image
            src="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773235229/TOJE%20AUTOS/image_2426_ioclcx.png"
            alt="About Us Image"
            className="w-full rounded-2xl"
            width={1000}
            height={1000}
          />
        </motion.div>
        <motion.div 
          className="bg-black text-white  rounded-2xl md:col-span-2 h-full p-10 space-y-2 order-first md:order-last"
          variants={itemVariants}
        >
          <h1 className="text-5xl font-bold"> Our Customer Service</h1>
          <p className="text-2xl text-white/60 font-bold">
            Providing excellent customer service and support.
          </p>
          <p className="text-lg text-white/50">
            Pivot Motors entered the brand new vehicle retail market for only
            one reason “Satisfactory Customer Service”. At Pivot Motors, we are
            bold to assert ourselves as a customer-centered automobile company.
            All our vehicle are fully certified with no encumbrance and we stand
            passionatelybehind our acclamation. When you think of great vehicle
            at very competitive price, think Pivot Motors.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
