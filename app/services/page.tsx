"use client";
import Hero from "@/components/HeroSection";
import Footer from "@/components/Footer";
import Why from "@/components/Why";
import Banner from "@/components/Banner";
import ServiceCards from "./components/ServicesCard";

export default function Services() {
  return (
    <>
      <Hero
        image="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773407180/TOJE%20AUTOS/ac071fcd8a1f9c085a7e670f31061464_kk2zyl.jpg"
        title=" Services"
        subtitle="HOME || SERVICES"
      />
      <ServiceCards/>
      <Why/>

      <Banner/>
      <Footer/>

    </>
  );
}
