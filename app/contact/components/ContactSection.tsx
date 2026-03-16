"use client";

import Image from "next/image";
import { useState } from "react";
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
      duration: 0.5,
    },
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <motion.div 
      className="min-h-screen bg-white text-gray-900 md:px-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* ── SECTION 1: Reserve Form + Car Image ── */}
      <motion.section 
        className=" mx-auto px-8 pt-16 pb-24"
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-2 gap-8 items-start mt-20">
          {/* LEFT: Form */}
          <motion.div variants={containerVariants}>
            <motion.h1 
              className="text-3xl font-semibold text-gray-900 mb-8"
              variants={itemVariants}
            >
              Reserve Your EV Today!
            </motion.h1>

            {/* First Name + Last Name */}
            <motion.div className="grid grid-cols-2 gap-4 mb-5" variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <label className="block  text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-blue-50 rounded px-3 py-2  text-gray-500 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <label className="block  text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-blue-50 rounded px-3 py-2  text-gray-500 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-blue-200"
                />
              </motion.div>
            </motion.div>

            {/* Email ID */}
            <motion.div className="mb-5" variants={itemVariants}>
              <label className="block  text-gray-700 mb-1">Email ID</label>
              <input
                type="email"
                name="email"
                placeholder="Field email goes here"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-blue-50 rounded px-3 py-2  text-gray-500 placeholder-gray-400 border-0 focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </motion.div>

            {/* Message */}
            <motion.div className="mb-7" variants={itemVariants}>
              <label className="block  text-gray-700 mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-blue-50 rounded px-3 py-2  text-gray-500 placeholder-gray-400 border-0 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
              />
            </motion.div>

            {/* Book Now Button */}
            <motion.button
              onClick={handleSubmit}
              className="bg-black  text-white  font-medium px-6 py-2.5 rounded transition-colors duration-200"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </motion.div>

          {/* RIGHT: Car Image */}
          <motion.div 
            className="flex items-center justify-center h-full pt-10"
            variants={itemVariants}
          >
            <Image
              src="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773594858/TOJE%20AUTOS/image_2425_nfvybg.png"
              alt="Contact Us"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* ── SECTION 2: Contact Info Footer ── */}
      <motion.section 
        className="relative py-20 shadow-xl border mb-10 border-black/5 rounded-4xl overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Watermark background text */}
        <div
          className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden"
          style={{ paddingLeft: "2rem" }}
        >
          <span
            className="font-bold uppercase text-gray-300 whitespace-nowrap"
            style={{
              fontSize: "clamp(82px, 16vw, 250px)",
              lineHeight: 1,
              opacity: 0.4,
            }}
          >
            Contact
          </span>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-8 py-16 grid md:grid-cols-3 gap-8">
          {/* Col 1: Tagline */}
          <motion.div className="flex flex-col justify-end" variants={itemVariants}>
            <p className=" text-gray-500 mb-3 uppercase tracking-wider">
              Contact Info
            </p>
            <h2
              className="text-4xl font-bold text-gray-900 leading-snug"
              style={{ lineHeight: 1 }}
            >
              We are always
              <br />
              happy to assist you
            </h2>
          </motion.div>

          {/* Col 2: Email */}
          <motion.div className="flex flex-col justify-end" variants={itemVariants}>
            <p className=" font-semibold text-gray-800 mb-1">Email Address</p>
            <div className="w-6 h-0.5 bg-gray-800 mb-3" />
            <a
              href="mailto:help@info.com"
              className="text-gray-800  font-medium hover:underline mb-3"
            >
              help@info.com
            </a>
            <p className="text-gray-500  leading-relaxed">
              Assistance hours:
              <br />
              Monday - Friday 6 am to
              <br />8 pm EST
            </p>
          </motion.div>

          {/* Col 3: Number */}
          <motion.div className="flex flex-col justify-end" variants={itemVariants}>
            <p className=" font-semibold text-gray-800 mb-1">Number</p>
            <div className="w-6 h-0.5 bg-gray-800 mb-3" />
            <a
              href="tel:+18089983425"
              className="text-gray-800  font-medium hover:underline mb-3"
            >
              (808) 998-34256
            </a>
            <p className="text-gray-500  leading-relaxed">
              Assistance hours:
              <br />
              Monday - Friday 6 am to
              <br />8 pm EST
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}
