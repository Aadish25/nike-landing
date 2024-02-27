import {
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  bigShoe1,
  bigShoe2,
  bigShoe3,
} from "../assets/images";
import { arrowRight } from "../assets/icons";
import ShoeCard from "../components/ShoeCard";
import { useSelector } from "react-redux";

export default function Hero() {
  const shoeNum = useSelector((state) => state.shoeNum.value);
  const bigShoes = [bigShoe1, bigShoe2, bigShoe3];
  const shoesImg = [thumbnailShoe1, thumbnailShoe2, thumbnailShoe3];
  const shoes = shoesImg.map((item, index) => {
    return <ShoeCard key={index} index={index} img={item} curr={shoeNum} />;
  });
  return (
    <div className="relative font-montserrat w-full flex flex-col xl:flex-row">
      <div className="flex flex-col  padding-y padding gap-10 mt-9 md:mt-2 w-full md:w-3/5">
        <p className="text-coral-red py-2  text-lg md:text-xl">
          Our Summer collections
        </p>
        <p className="text-[60px] lg:text-8xl font-bold">
          <span className="md:absolute bg-white z-10 ">The New Arrival</span>
          <br />
          <span className="text-coral-red">Nike </span>
          Shoes
        </p>
        <p>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <button className="btn ">
          Shop now <img src={arrowRight} alt="arrow" />{" "}
        </button>
        <div className="flex gap-7  flex-wrap">
          <div className="">
            <p className="text-4xl font-bold">1k+</p>
            <p className="text-sm">Brands</p>
          </div>
          <div className="">
            <p className="text-4xl font-bold">500+</p>
            <p className="text-sm">Shops</p>
          </div>
          <div className="">
            <p className="text-4xl font-bold">250k+</p>
            <p className="text-sm">Customers</p>
          </div>
        </div>
      </div>
      <div className="bg-hero bg-center py-24 xl:absolute xl:top-0 xl:right-10 min-h-min w-full xl:w-1/2">
        <div className="mt-32 flex flex-col items-center w-full">
          <img src={bigShoes[shoeNum]} alt="" />
          <div className="flex p-6 xl:p-0 absolute -bottom-[5%] gap-3 justify-center">
            {shoes}
          </div>
        </div>
      </div>
    </div>
  );
}
