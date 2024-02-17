
import FooterLogo from '../assets/logo-white.svg'
import { FaFacebookSquare } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-VeryDarkBlue">
      {/* container */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* logo and social links */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2024, All Rights Reserved
          </div>
          <div>
            <img src={FooterLogo} alt="footer logo" className="h-8 mb-8" />
          </div>
          {/* social links */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
            >
              <FaFacebookSquare className="text-3xl text-white hover:text-BrightRed transition-all duration-500 ease-in-out"/>
            </a>

            <a
              href="#"
            >
              <TiSocialYoutube className="text-3xl text-white hover:text-BrightRed transition-all duration-500 ease-in-out"/>
            </a>

            <a
              href="#"
            >
              <FaTwitter className="text-3xl text-white hover:text-BrightRed transition-all duration-500 ease-in-out"/>
            </a>

            <a
              href="#"
            >
              <FaPinterest className="text-3xl text-white hover:text-BrightRed transition-all duration-500 ease-in-out"/>
            </a>

            <a
              href="#"
            >
              <FaInstagram className="text-3xl text-white hover:text-BrightRed transition-all duration-500 ease-in-out"/>
            </a>
          </div>
        </div>

        {/* footer links */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            <a
              href="#"
              className="hover:text-BrightRed transition-all duration-500 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-BrightRed transition-all duration-500 ease-in-out"
            >
              Pricing
            </a>
            <a
              href="#"
              className="hover:text-BrightRed transition-all duration-500 ease-in-out"
            >
              Product
            </a>
            <a
              href="#about"
              className="hover:text-BrightRed transition-all duration-500 ease-in-out"
            >
              About Us
            </a>
          </div>

          <div className="flex flex-col space-y-3 text-white">
            <a
              href="#"
              className="hover:text-BrightRed transition-all duration-500 ease-in-out"
            >
              Careers
            </a>
            <a
              href="#"
              className="hover:text-BrightRed transition-all duration-500 ease-in-out"
            >
              Community
            </a>
            <a
              href="#"
              className="hover:text-BrightRed transition-all duration-500 ease-in-out"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        {/* input container */}
        <div className="flex flex-col justify-between">
          <form action="#">
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
                required
              />

              <button className="px-6 py-2 text-white rounded-full bg-BrightRed hover:bg-BrightRedLight transition-all duration-500 ease-in-out focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2024, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
