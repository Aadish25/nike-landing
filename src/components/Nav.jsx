import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
export default function Nav() {
  return (
    <header className=" px-10 md:px-20 py-8 absolute z-10 w-full font-montserrat">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" />
        </a>
        <img
          className="block lg:hidden h-4 w-4"
          src={hamburger}
          alt="hamburger"
        />
        <ul className="hidden lg:flex justify-center items-center space-x-16  text-lg text-gray-400">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About Us</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Contact Us</li>
        </ul>
        <p className="hidden lg:block text-lg font-medium">
          <span className="cursor-pointer">Sign in</span> /{" "}
          <span className="cursor-pointer">Explore now</span>
        </p>
      </nav>
    </header>
  );
}
