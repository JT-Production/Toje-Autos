"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const models = [
  "Toyota Camry",
  "Honda Accord",
  "BMW 3 Series",
  "Mercedes C-Class",
  "Audi A4",
  "Ford Mustang",
  "Chevrolet Corvette",
  "Tesla Model 3",
];

const priceRanges = [
  "Under ₦10,000",
  "₦10,000 – ₦20,000",
  "₦20,000 – ₦35,000",
  "₦35,000 – ₦50,000",
  "₦50,000 – ₦75,000",
  "Over ₦75,000",
];

const conditions = ["Brand New", "Used", "Certified Pre-Owned"];

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export default function SearchFilter() {
  const [search, setSearch] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const totalResults = 12;

  const handleSearch = () => {
    console.log({ search, model, price, condition });
  };

  return (
    <motion.div 
      className=" flex items-center justify-center p-6 md:px-20 md:-translate-y-24 -translate-y-50 z-50 absolute w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
  
      {/* Filter Card */}
      <motion.div className="relative w-full" variants={containerVariants}>
        <motion.div className="bg-white rounded-2xl shadow-2xl px-8 py-6" variants={itemVariants}>
          {/* Filter Row */}
          <div className="grid  md:grid-cols-5 gap-6">
            {/* Search */}
            <div className="flex flex-col gap-1.5 col-span-2">
              <label className=" font-bold">
                Search
              </label>
              <input
                type="text"
                placeholder="Search transactions"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition"
              />
            </div>

            {/* Any Models */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold ">
                Any Models
              </label>
              <div className="relative">
                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition bg-white cursor-pointer"
                >
                  <option value="">Select Model</option>
                  {models.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Any Prices */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold ">
                Any Prices
              </label>
              <div className="relative">
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition bg-white cursor-pointer"
                >
                  <option value="">Select a price</option>
                  {priceRanges.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Brand New / Used */}
            <div className="flex flex-col gap-1.5">
              <label className="font-bold">
                Brand New / Used
              </label>
              <div className="relative">
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full appearance-none border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition bg-white cursor-pointer"
                >
                  <option value="">Select one</option>
                  {conditions.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Row */}
          <div className="flex items-center justify-between mt-5">
            <p className="text-sm text-gray-400">
              Showing{" "}
              <span className="text-gray-600 font-medium">{totalResults}</span>{" "}
              of{" "}
              <span className="text-gray-600 font-medium">{totalResults}</span>{" "}
              transactions
            </p>
            <button
              onClick={handleSearch}
              className="bg-black hover:bg-gray-700 active:scale-95 text-white font-semibold px-12 py-2.5 rounded-full transition-all duration-150 shadow-md"
            >
              Search
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}