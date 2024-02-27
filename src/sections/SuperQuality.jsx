import { shoe8 } from "../assets/images";

export default function SuperQuality() {
  return (
    <div className="flex xl:-mt-32 flex-col gap-10 lg:gap-0 lg:flex-row justify-between items-center w-full">
      <div className="flex flex-col gap-4 max-w-xl ">
        <h1 className="text-4xl font-bold  font-montserrat">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h1>
        <p className=" text-slate-gray font-montserrat text-md md:text-xl">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className=" text-slate-gray font-montserrat text-md md:text-xl">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <button className="btn md:mt-6 text-xl">View details</button>
      </div>
      <img src={shoe8} alt="" />
    </div>
  );
}
