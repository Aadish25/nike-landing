import { shoe4, shoe5, shoe6, shoe7 } from "../assets/images";

import ProductsCard from "../components/ProductsCard";
export default function PopularProducts() {
  const shoeDetails = [
    {
      url: shoe4,
      rating: "4.5",
      model: "Nike Air Jordan-01",
      price: "$200.20",
    },
    {
      url: shoe5,
      rating: "4.5",
      model: "Nike Air Jordan-10",
      price: "$210.20",
    },
    {
      url: shoe6,
      rating: "4.5",
      model: "Nike Air Jordan-100",
      price: "$220.20",
    },
    {
      url: shoe7,
      rating: "4.5",
      model: "Nike Air Jordan-001",
      price: "$230.20",
    },
  ];
  const shoes = shoeDetails.map((item, index) => {
    return <ProductsCard key={index} shoe={item} />;
  });
  return (
    <div className="pt-16">
      <div className="flex flex-col max-lg:text-center gap-4 w-full min-h-screen">
        <h1 className="text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        <p className="text-lg lg:max-w-lg block-inline text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        <div className="flex flex-wrap max-lg:justify-center gap-6 md:gap-20">
          {shoes}
        </div>
      </div>
    </div>
  );
}
