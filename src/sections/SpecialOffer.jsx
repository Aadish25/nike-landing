import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images/index";
export default function SpecialOffer() {
  return (
    <div className="flex items-center gap-5 lg:gap-0 justify-center lg:justify-between flex-col lg:flex-row ">
      <div className="w-full lg:w-3/6">
        <img src={offer} alt="offer" />
      </div>
      <div className="flex flex-col gap-6 w-full lg:w-3/6">
        <p className="text-3xl md:text-4xl font-semibold">
          <span className="text-coral-red">Special</span> Offer
        </p>
        <p className=" text-md md:text-xl text-slate-gray">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="text-md md:text-xl text-slate-gray">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex sm:text-xl flex-col sm:flex-row gap-6 ">
          <button className="btn ">
            Show now{" "}
            <span>
              <img src={arrowRight} alt="arrow" />
            </span>{" "}
          </button>
          <button className="px-4 py-2 border-2 border-slate-gray rounded-3xl">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
