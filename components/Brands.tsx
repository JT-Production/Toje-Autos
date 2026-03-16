import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const brands = [
  { name: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773273470/TOJE%20AUTOS/lexus_diknen.png", id: 1},
  { name: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773273468/TOJE%20AUTOS/Hyundai_tkfa4v.png", id: 2},
  { name: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773273473/TOJE%20AUTOS/toyota_cxdvzy.png", id: 3},
  { name: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773273461/TOJE%20AUTOS/chevrolet-removebg-preview_oueawn.png", id: 4},
    { name: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773273452/TOJE%20AUTOS/Audi-removebg-preview_lsff89.png", id: 5},
    { name: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773273453/TOJE%20AUTOS/benz_nnla9p.png", id: 6},
    { name: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773273465/TOJE%20AUTOS/honda-removebg-preview_czkkcy.png", id: 7},
];

const allBrands = [...brands, ...brands];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,

    },
  },
};

const marqueeVariants = {
  animate: {
    x: [0, -1800],
    transition: {
      duration: 28,
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  },
};

export default function Brands() {
  return (
    <section className="bg-white pt-20 overflow-hidden">
      {/* Heading */}
      <motion.div 
        className="text-center mb-12 px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2  
          style={{ lineHeight: 0.9 }} 
          className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug mb-3"
          variants={itemVariants}
        >
          We offer vehicles from <br />
          the world's most iconic brands
        </motion.h2>
        <motion.p  
          style={{ lineHeight: 1 }} 
          className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Our success is driven by people who share a passion for cars,
          precision, and exceptional service.
        </motion.p>
      </motion.div>

      {/* Marquee */}
      <div className="relative w-full">
        {/* Fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex w-max"
          variants={marqueeVariants}
          animate="animate"
        >
          {allBrands.map((brand, i) => (
            <div key={i} className="flex items-center gap-2 px-10">
              <span className="text-sm uppercase tracking-widest text-gray-300 font-medium whitespace-nowrap">
               <Image src={brand.name} alt={brand.name} width={100} height={100} className="object-contain w-30 h-20 grayscale hover:grayscale-0 transition-all duration-300"/>
              </span>
              <span className="w-1 h-1 rounded-full bg-gray-200 ml-8" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}