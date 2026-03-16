"use client";
import Image from "next/image";
import Navbar from "./Navbar";
import Button from "./Button";
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

// const imageVariants = {
//   hidden: { scale: 1 },
//   visible: {
//     scale: 1.05,
//     transition: {
//       duration: 8,

//       repeat: Infinity,
//       repeatType: "reverse" as const,
//     },
//   },
// };

const marqueeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.6,

    },
  },
};


const imageVariants = {
  hidden: { scale: 1 },
  visible: {
    scale: 1,  // 👈 change to 1 (no scale)
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};
export default function Hero() {
  return (
    <div className="absolut top-0 h-screen w-full overflow-hidden -z-50 md:px-0 px-">
      <Navbar/>
      <motion.div
        className="absolute inset-0 overflow-hidden"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773233942/TOJE%20AUTOS/image_1_i09gtm.png"
          alt="hero"
          fill
          className="w-full h-full object-cover overflow-x-hidden"
        />
      </motion.div>

      <motion.div 
        className="flex items-center relative z-10 md:w-1/2 h-full md:px-20 text-white px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={containerVariants}>
          <motion.h1 
            variants={itemVariants}
            className="md:text-7xl text-5xl font-bold mb-4" 
            style={{ lineHeight: 0.9 }}
          >
            Your trusted car dealership in Frankfurt
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg mb-8" 
            style={{ lineHeight: 0.9 }}
          >
            Discover a curated selection of luxury vehicles built for <br />{" "}
            performance.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Button
              text="Explore Vehicles"
              color="white"
              className="text-black bg-white"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      
      <motion.div 
        className="absolute -bottom-15 left-0 w-full overflow-hidden z-10"
        variants={marqueeVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex animate-scroll whitespace-nowrap">
          <p className="md:text-[200px] font-bol text-4xl text-white pr-8">
            TOJE AUTOS
          </p>
          <p className="md:text-[200px] font-bol text-4xl text-white pr-8">
            TOJE AUTOS 
          </p>
        </div>
      </motion.div>
       <style jsx>{`
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      .animate-scroll {
        animation: scroll 15s linear infinite;
      }
    `}</style>
      
    </div>
  );
}
