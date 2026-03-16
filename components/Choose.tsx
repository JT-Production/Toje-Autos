"use client";

import Image from "next/image";

const cards = [
  {
    title: "Choose Your Dream Car",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud",
    cta: "Get it now",
    bg: "bg-[#1a1f5e]",
    textColor: "text-white",
    descColor: "text-blue-200",
    btnClass: "bg-white text-black hover:bg-gray-100",
    image: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773233941/TOJE%20AUTOS/e4eb0f58fab0bc1b96d3b258bed8197e_1_a4hmll.png", // replace with your image
  },
  {
    title: "Unable to Find Your Car?",
    description:
      "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud",
    cta: "Let us know",
    bg: "bg-[#f5c400]",
    textColor: "text-black",
    descColor: "text-yellow-800",
    btnClass: "bg-white text-black hover:bg-gray-100",
    image: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773233938/TOJE%20AUTOS/00d323930178c00918e3cedaf4519da5_1_dp0hba.png", // replace with your image
  },
];

export default function DreamCar() {
  return (
    <section className="w-full px-6 py-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.title}
            className={`${card.bg} rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden`}
          >
            {/* Text content */}
            <div className="md:max-w-[55%] z-10 relative">
              <h3 className={`text-4xl font-bold  mb-3 ${card.textColor}`}>
                {card.title}
              </h3>
              <p className={` leading-relaxed mb-6 ${card.descColor}`}>
                {card.description}
              </p>
              <button
                className={`${card.btnClass} text- font-medium px-6 py-2.5 rounded-full transition-colors duration-200`}
              >
                {card.cta}
              </button>
            </div>

            {/* Car image — bottom right */}
            <div className="absolute bottom-0 right-0 w-[55%] h-full flex items-end">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={280}
                className="object-contain w-full drop-shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}