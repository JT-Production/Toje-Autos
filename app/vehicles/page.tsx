"use client";
import React from "react";
import SearchFilter from "./components/SearchFilter";
import Vehicles from "@/components/Vehicles";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/HeroSection";

export default function Vehicle() {
  return (
    <>
      <Hero image="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773235248/TOJE%20AUTOS/image_9_p6rlxy.png" title="Vehicles" subtitle="HOME || VEHICLES" />
      <SearchFilter />
      <Vehicles/>
      <Banner/>
      <Footer/>
    </>
  );
}
