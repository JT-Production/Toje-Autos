"use client";

import React from 'react'
import { motion } from 'framer-motion'

export default function Button({text, color, className}: {text: string; color: string; className?: string}) {
  return (
    <motion.button 
      className={`bg-${color} hover:bg-${color}-700 cursor-pointer py-3 px-8 rounded-full ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {text}
    </motion.button>
  )
}
