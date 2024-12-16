import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-[#111111] text-white py-12"
      style={{
        position: "relative",
        bottom: 0,
        width: "100%",
        marginTop: "4rem",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Link href="/">
                <Image className="flex items-center space-x-2" src="/logo.webp" alt="Logo" width={80} height={80} />
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">LIENS</h3>
              <ul >
                <li className="hover:text-[#f9cb0c] transition duration-300 transform">
                  <Link href="/">
                    Accueil
                  </Link>
                </li>
                <li className="hover:text-[#f9cb0c] transition duration-300 transform">
                  <Link href="/#apropos">
                    À propos
                  </Link>
                </li >
                <li className="hover:text-[#f9cb0c] transition duration-300 transform">
                  <Link href="/#nos-motos">
                    Nos Motos
                  </Link>
                </li>
                <li className="hover:text-[#f9cb0c] transition duration-300 transform">
                  <Link href="/#faq">
                    Faq
                  </Link>
                </li>
                <li className="hover:text-[#f9cb0c] transition duration-300 transform">
                  <Link href="/#avis">
                    Avis
                  </Link>
                </li>
                <li className="hover:text-[#f9cb0c] transition duration-300 transform">
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>
                {/* Add more links as needed */}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="font-semibold text-lg mb-2">HEURES D&apos;OUVERTURE</h3>
              <p>Lun - Dim: 8:00 - 20:00 </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-2">CONTACT</h3>
              <p>MARRAKECH</p>
              <p>
                Email :{" "}
                <a
                  className="hover:text-[#f9cb0c] transition duration-300 transform"
                  href="mailto:Contact@thebatmoto-marrakech.com"
                >
                  Contact@thebatmoto-marrakech.com
                </a>
              </p>
              <p>
                Téléphone :{" "}
                <a
                  className="hover:text-[#f9cb0c] transition duration-300 transform"
                  href="tel:+33781195599"
                >
                  0781195599
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 md:mt-0 ">
            <h3 className="font-semibold text-lg mb-2">Réseaux Sociaux</h3>
            <div className="flex space-x-4 flex justify-center items-center">
              <a
                href="https://www.instagram.com/the_bat_moto_marrakech/"
                className="hover:transition duration-300 transform hover:scale-105"
              >
                <Image src="/insta.svg" alt="Instagram" className="w-6 h-6" width={25} height={25}/>
              </a>
              <a
                href="https://web.facebook.com/profile.php?id=61554856646747"
                className="hover:transition duration-300 transform hover:scale-105"
              >
                <Image src="/fb.svg" alt="FaceBook" className="w-6 h-6" width={25} height={25}/>
              </a>

              {/* Add more social media icons as needed */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
