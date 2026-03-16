"use client";

import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,

    },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
};

const imageZoomVariants = {
  hidden: { scale: 1.1 },
  visible: {
    scale: 1,
    transition: {
      duration: 0.8,

    },
  },
};

export default function Hero({image, title, subtitle}:{image:string, title:string, subtitle:string}) {
  return (
    <div className="absolut top-0 h-[90vh] w-full overflow-hidden -z-50">
        <Navbar/>
        <div className="absolute inset-0 bg-black/50 z-1 md:h-[90vh] h-[70vh]"></div>
        <motion.div
          variants={imageZoomVariants}
          initial="hidden"
          animate="visible"
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt="hero"
            width={1000}
            height={1000}
            className="w-full object-cover object-center md:h-[90vh] h-[70vh]"
          />
        </motion.div>

        <motion.div 
          className='flex justify-center items-center z-10 absolute top-0 left-0 w-full h-[80vh] flex-col text-white'
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={titleVariants}
            className='text-8xl'
          >
            {title}
          </motion.h1>
          <motion.p variants={subtitleVariants}>
            {subtitle}
          </motion.p>
        </motion.div>
    </div>
  )
}
