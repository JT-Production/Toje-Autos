"use client";

import Image from "next/image";
import logo from "../public/logomain.png";
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
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function Footer() {
  return (
    <motion.footer 
      className="bg-black text-white w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Top section */}
      <div className="px-8 md:px-20 pt-12 pb-8 grid grid-cols-1 md:grid-cols-5 gap-1 justify-center">
        {/* Brand */}
        <div className="col-span-2 mx-aut ">
          {/* <h3 className="font-bold text-base mb-3">TojeAutos</h3> */}
          <Image
            src={logo}
            alt="TojeAutos Logo"
            width={1000}
            height={1000}
            className="w-1/4"
          />
          <p className="text-gray-400  leading-relaxed">
            Experience the prestige of a professionally detailed car, radiating
            elegance and refinement at every turn.
          </p>
        </div>

        {/* Website */}
        <div  className="md:mx-auto ">
          <h4 className="text-white/30 text-lg font-bold mb-4">Website</h4>
          <ul className="space-y-3">
            {["Services", "Pricing", "About"].map((item) => (
              <li key={item}>
                <a href="#" className="font-bold text-lg hover:text-gray-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:mx-auto">
          <h4 className="text-white/30 text-lg font-bold mb-4">Contact</h4>
          <ul className="space-y-3">
            {["Get a quote", "Contact form", "Email us"].map((item) => (
              <li key={item}>
                <a href="#" className="font-bold text-lg hover:text-gray-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div className="md:mx-auto">
          <h4 className="text-white/30 text-lg font-bold  mb-4">Social Media</h4>
          <ul className="space-y-3">
            {["Facebook", "Instagram", "Twitter", "Youtube"].map((item) => (
              <li key={item}>
                <a href="#" className="font-bold text-lg hover:text-gray-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Giant marquee text */}
      <div className="overflow-hidden py-4 md:px-20">
        <p className="text-[clamp(5rem,18vw,14rem)] font-black leading-none tracking-tight whitespace-nowrap text-white">
          TOJE AUTOS &nbsp; TOJE AUTOS
        </p>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 px-8 md:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text- text-gray-400">
        <span>TojeAutos © 2026</span>
        <div className="flex gap-6">
          {["Cookie policy", "Terms of service", "Privacy policy"].map((item) => (
            <a key={item} href="#" className="hover:text-white transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}