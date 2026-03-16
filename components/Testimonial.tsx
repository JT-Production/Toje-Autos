"use client";

import { useEffect, useRef } from "react"
import Image from "next/image"
import user from "../public/user.webp"
import user2 from "../public/user2.webp"
import user3 from "../public/user3.webp"
import user4 from "../public/user4.webp"

const testimonials = [
  {
    label: "AND SECURE",
    text:
      "They didn’t just create campaigns—they told our story in a way that resonated deeply with our customers.",
    name: "Nicole Bergson",
    date: "Feb 2025",
  },
  {
    label: "SEAMLESS EXPERIENCE",
    text:
      "From planning to execution, the process was flawless. Every campaign aligned perfectly with our goals.",
    name: "Jaylon Siphron",
    date: "18, Feb 2025",
  },
  {
    label: "CUSTOMER SERVICE",
    text:
      "Their media planning and creative designs brought a fresh perspective to our marketing efforts.",
    name: "Davis Curtis",
    date: "22, Feb 2025",
  },
]

export default function TestimonialsHorizontal() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let scrollAmount = 0
    const speed = 0.4

    const scroll = () => {
      scrollAmount += speed
      if (scrollAmount >= el.scrollWidth / 2) {
        scrollAmount = 0
      }
      el.scrollLeft = scrollAmount
    }

    const interval = setInterval(scroll, 16)

    const stop = () => clearInterval(interval)
    el.addEventListener("mouseenter", stop)
    el.addEventListener("mouseleave", () => {
      setInterval(scroll, 16)
    })

    return () => clearInterval(interval)
  }, [])

  return (
     <div className="md:px-14 ">
    <p className="md:text-8xl text-5xl max-w-5xl px-4 pt-10 md:ml-10">Trusted By <span className="text-yellow-300">25,000+</span> Happy Customers</p>
    <section className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-12 py-20 md:px-10">
      {/* LEFT – FIXED RATING CARD */}
      <div className="sticky md:block hidden top-24 h- bg-white  p-8 border-l mx-auto">
        <h2 className="text-7xl  text-gray-900 text-center">4.9</h2>

        <div className="flex gap-1 my-3 justify-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-yellow-400 text-2xl">★</span>
          ))}
        </div>

        <p className="text-center text-gray-500 mb-6">2000+ Reviews</p>

        <div className="flex -space-x-3">
          {[user, user2, user3, user4].map((img, i) => (
            <Image
              key={i}
              src={img}
              alt="User"
              width={1000}
              height={1000}
              className="rounded-full border-2 border-white h-16 w-16"
            />
          ))}
        </div>
      </div>

      {/* RIGHT – SIDEWAYS AUTO SCROLL */}
      <div
        ref={scrollRef}
        className="overflow-hidden"
      >
        <div className="flex gap-20 w-1/3">
          {[...testimonials, ...testimonials].map((item, i) => (
            <div
              key={i}
              className="min-w-[320px] border-l pl-8"
            >
              <p className="uppercase text-xs tracking-widest text-gray-400 mb-4">
                {item.label}
              </p>

              <p className="text-3xl text-gray-800 mb-20">
                “{item.text}”
              </p>

              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
