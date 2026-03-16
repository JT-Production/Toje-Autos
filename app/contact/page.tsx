"use client";
import Hero from "@/components/HeroSection";
import React from "react";
import TestimonialsHorizontal from "@/components/Testimonial";
import Footer from "@/components/Footer";
import ContactPage from "./components/ContactSection";

export default function Contact() {
  return (
    <>
      <Hero
        image="https://res.cloudinary.com/dmvwjmy23/image/upload/v1773407185/TOJE%20AUTOS/image_2427_ry8y61.png"
        title="Contact"
        subtitle="HOME || CONTACT"
      />
      <ContactPage/>

      <Footer/>

    </>
  );
}
