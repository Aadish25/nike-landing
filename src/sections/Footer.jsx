import { footerLogo } from "../assets/images";
import { copyrightSign, facebook, instagram, twitter } from "../assets/icons";
export default function Footer() {
  return (
    <div className="flex flex-col  gap-24 px-2 py-4 text-white  font-montserrat">
      <div className="grid gap-24 grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 px-2">
        <div className="flex flex-col gap-4 ">
          <img className="h-16 w-32" src={footerLogo} alt="nike" />
          <p className="text-md">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-4">
            <img
              className="bg-white rounded-full p-3 text-black"
              src={facebook}
              alt="fb"
            />
            <img
              className="bg-white rounded-full p-3 text-black"
              src={twitter}
              alt="twitter"
            />
            <img
              className="bg-white rounded-full p-3 text-black"
              src={instagram}
              alt="instagram"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Products</h1>
          <ul className="flex flex-col gap-4">
            <l1>Air Force 1</l1>
            <l1>Air MAx 1</l1>
            <l1>Air Jordan 1</l1>
            <l1>Air Force 2</l1>
            <l1>Nike Waffle Racer</l1>
            <l1>Nike Cortez</l1>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Help</h1>
          <ul className="flex flex-col gap-4">
            <l1>About us</l1>
            <l1>FAQs</l1>
            <l1>How it works</l1>
            <l1>Privacy policy</l1>
            <l1>Payment policy</l1>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">Get in touch</h1>
          <ul className="flex flex-col gap-4">
            <l1>customer@nike.com</l1>
            <li>+92554862354</li>
          </ul>
        </div>
      </div>
      <div className="flex gap-4 max-sm:text-center flex-col sm:flex-row sm:justify-between sm:items-center">
        <p className="flex gap-2 items-center">
          <span>
            <img src={copyrightSign} alt="copyright" />
          </span>{" "}
          Copyright. All rights reserved.
        </p>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
}
