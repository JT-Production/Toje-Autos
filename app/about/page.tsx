"use client";
import Hero from "@/components/HeroSection";
import React from "react";
import About from "./components/About";
import Metrics from "@/components/Metrics";
import BentoGrid from "./components/BentoGrid";
import VideoPlayer from "./components/VideoPlayer";
import TestimonialsHorizontal from "@/components/Testimonial";
import Footer from "@/components/Footer";

export default function Aboutus() {
  return (
    <>
      <Hero
        image="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773235239/TOJE%20AUTOS/image_2430_zo7r3s.png"
        title="About"
        subtitle="HOME || ABOUT"
      />
      <About/>
      <Metrics/>
      <BentoGrid/>
      <VideoPlayer/>
      <TestimonialsHorizontal/>
      <Footer/>

    </>
  );
}
