import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="bg-[#27221b] text-white py-12"
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
              <a className="flex items-center space-x-2">
                <Image src="/logo.webp" alt="Logo" width={80} height={80} />
              </a>
            </Link>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">LIENS</h3>
              <ul>
                <li>
                  <Link href="/">
                    <a>Accueil</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#apropos">
                    <a>À propos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#faq">
                    <a>Faq</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#tarification">
                    <a>Tarification</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a>Contact</a>
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
              <p>13 Rue du Clos d&apos;en Haut</p>
              <p>78700 Conflans-Sainte-Honorine, France</p>
              <p>
                Email :{" "}
                <a
                  className="hover:text-[#C4AF89] transition duration-300 transform"
                  href="mailto:Contact@laserrush.fr"
                >
                  Contact@laserrush.fr
                </a>
              </p>
              <p>
                Téléphone :{" "}
                <a
                  className="hover:text-[#C4AF89] transition duration-300 transform"
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
                href="#"
                className="hover:transition duration-300 transform hover:scale-105"
              >
                <Image src="/insta.svg" alt="Instagram" className="w-6 h-6" width={25} height={25}/>
              </a>
              <a
                href="#"
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
