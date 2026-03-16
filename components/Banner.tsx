"use client";

import Image from 'next/image'
import React from 'react'
import Button from './Button'
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

export default function Banner() {
  return (
    <motion.div 
      className='md:px-20 my-30'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
        <motion.div 
          className='relative  h-[80vh]'
          variants={itemVariants}
        >
            <img src="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773235242/TOJE%20AUTOS/Rectangle_12_qklbke.png" alt="Banner Image" width={1000} height={1000} className='w-full object-cover  h-full' />
            <motion.div 
              className='absolute top-30  ml-10 md:w-1/2 text-white'
              variants={containerVariants}
            >
                <motion.p 
                  className='md:text-6xl text-4xl font-bold mb-3' 
                  style={{lineHeight:0.9}}
                  variants={itemVariants}
                >
                  Book your luxury car detailing today
                </motion.p>
                <motion.p 
                  className='mb-3 w-2/3' 
                  style={{lineHeight:1}}
                  variants={itemVariants}
                >
                  Click the link bellow. Fill out the details and we'll get back to you in less than 24 hours.
                </motion.p>
                
                <motion.div variants={itemVariants}>
                  <Button text="Get a quote now" color='black' className=" font-bold text-lg" />
                </motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
