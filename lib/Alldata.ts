interface Vehicle {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
  image: string;
  badge: string;
}

export const vehicles : Vehicle[]=  [
  {
    id: 1,
    name: "Mercedes Benz AMG 450",
    price: 54500000,
    priceFormatted: "₦54,500,000",
    image: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773233940/TOJE%20AUTOS/image_2_u1zlpa.png",
    badge: "4 left",
  },
  {
    id: 2,
    name: "Toyota Corolla 2021",
    price: 14000000,
    priceFormatted: "₦14,000,000",
    image: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773233945/TOJE%20AUTOS/image_4_lxbmob.png",
    badge: "6 left",
  },
  {
    id: 3,
    name: "Mercedes Benz AMG 450",
    price: 54500000,
    priceFormatted: "₦54,500,000",
    image: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773233944/TOJE%20AUTOS/image_3_lbxxcv.png",
    badge: "3 left",
  },
  {
    id: 4,
    name: "Toyota Camry 2023",
    price: 54500000,
    priceFormatted: "₦54,500,000",
    image: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773233945/TOJE%20AUTOS/image_4_lxbmob.png",
    badge: "4 left",
  },
  {
    id: 5,
    name: "Lexus RX 350",
    price: 54500000,
    priceFormatted: "₦54,500,000",
    image: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773308603/TOJE%20AUTOS/image_7_gzxglv.png",
    badge: "2 left",
  },
  {
    id: 6,
    name: "Lexus IS 350",
    price: 54500000,
    priceFormatted: "₦54,500,000",
    image: "https://res.cloudinary.com/dmvwjmy23/image/upload/v1773235234/TOJE%20AUTOS/image_2428_yxmbg2.png",
    badge: "5 left",
  },
];