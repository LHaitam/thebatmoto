import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [scrolling, setScrolling] = useState(false);

  
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("rgba(255, 255, 255, 255)");
        setTextColor("#000000");
        setScrolling(true);
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${
        scrolling ? "shadow-md" : ""
      }`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="logo"
            width={80}
            height={80}
            loading="lazy"
          />
        </Link>
        <ul
          style={{ color: `${textColor}` }}
          className="hidden sm:flex items-center"
        >
          <li className="p-4 hover:text-[#C4AF89] transition duration-300 transform">
            <Link href="/">ACCUEIL</Link>
          </li>
          <li className="p-4 hover:text-[#C4AF89] transition duration-300 transform">
            <Link href="/#apropos">À PROPOS</Link>
          </li>
          <li className="p-4 hover:text-[#C4AF89] transition duration-300 transform">
            <Link href="/#faq">FAQ</Link>
          </li>
          <li className="p-4 hover:text-[#C4AF89] transition duration-300 transform">
            <Link href="/#tarification">TARIFICATION</Link>
          </li>
          <li className="p-4 hover:text-[#C4AF89] transition duration-300 transform">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
        <div className="hidden sm:flex items-center">
          <p
            className="text-xl font-semibold text-white"
            style={{
              fontFamily: "Sacramento",
              fontStyle: "italic",
              color: `${textColor}`,
            }}
          >
            Appelez-nous :{" "}
            <a
              style={{
                fontFamily: "Raleway",
              }}
              className="hover:text-[#C4AF89] transition transform"
              href="tel:+33781195599"
            >
              0781195599
            </a>
          </p>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={40} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={40} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#8c7e62] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li onClick={handleNav} className="p-4 text-4xl">
              <Link href="/">ACCUEIL</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl">
              <Link href="/#apropos">À PROPOS</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl">
              <Link href="/#faq">FAQ</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl">
              <Link href="/#tarification">TARIFICATION</Link>
            </li>
            <li onClick={handleNav} className="p-4 text-4xl">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
