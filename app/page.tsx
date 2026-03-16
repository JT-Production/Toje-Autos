"use client";
import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import DreamCar from "@/components/Choose";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Navbar from "@/components/Navbar";
import TestimonialsHorizontal from "@/components/Testimonial";
import Vehicles from "@/components/Vehicles";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return( <>
   
  <Hero/>
  <Brands/>
  <Vehicles/>
  <Why/>
  <Metrics/>
  <DreamCar/>
  <TestimonialsHorizontal/>
  <Banner/>
     <Footer/>
  </>);
}
