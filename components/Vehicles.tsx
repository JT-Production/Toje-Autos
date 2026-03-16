import { vehicles } from "@/lib/Alldata";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
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
      duration: 0.5,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Vehicles() {
  return (
    <motion.div 
      className="md:px-30 px-4 md:mt-40 mt-70"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
        <motion.p 
          className="text-4xl font-bold"
          variants={titleVariants}
        >
          Available Vehicles
        </motion.p>

      <motion.div 
        className="grid md:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {vehicles.map((vehicle, index) => (
          <motion.div 
            key={index} 
            className="p-4 group cursor-pointer"
            variants={itemVariants}
          >
           <motion.div 
             className=" overflow-hidden rounded-2xl"
             whileHover={{ scale: 1.02 }}
             transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
           >
            <div className="flex gap-2 absolute items-center ml-2 mt-2 bg-white/50 px-3 py-1 text-sm text-white rounded-2xl z-50">
              <span className="w-2.5 h-2.5 bg-green-400 rounded-full border-green-300 border-2 "></span>
              <p>4 slot left</p>
            </div>
             <Image
              src={vehicle.image}
              alt={vehicle.name}
              width={400}
              height={300}
              className="object-cover rounded-2xl rounded-b-none h-56 -z-1 group-hover:scale-105 transition-all duration-300 ease-in-out"
            />
            
           </motion.div>
            <motion.div 
              className="border border-black/20 rounded-2xl p-4  bg-white w-full  -translate-y-5 z-50 space-y-2"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <h2 className="text-xl font-bold  w-full b">{vehicle.name}</h2>
              <hr className="text-black/10" />
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">
                  ₦{vehicle.price.toLocaleString()}
                </p>
                <Button
                  text="Buy Now"
                  color="black"
                  className="bg-black text-white  py-1 rounded-full"
                />
              </div>
            </motion.div>
            
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
      >
        <Button text="View All Vehicles" color="black" className="bg-black text-white mt-10 mx-auto block" />
      </motion.div>
    </motion.div>
  );
}
