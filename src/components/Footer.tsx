import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative mt-16">
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">
              Pro Wall Repairs &amp; Finishing
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in professional wall repairs and finishing
              across Vancouver &amp; Burnaby. Our expert team delivers quality
              workmanship with premium materials and techniques for flawless
              results.
            </p>
            <div className="text-gray-400 text-sm">
              <p>Locally owned and operated in Vancouver</p>
              <p className="flex items-center gap-2 text-white mt-2">
                Licensed &amp; Insured in British Columbia
              </p>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              OUR <span className="text-white">SERVICES</span>
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/wall-repair">Wall Repairs</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/wall-finishing">Expert Finishing</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/commercial">Commercial Services</Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href="/residential">Residential Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              GET IN <span className="text-white">TOUCH</span>
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <div className="text-gray-300 space-y-4">
              <div>
                <p className="font-semibold mb-2">Business Hours:</p>
                <p className="text-white font-semibold">Monday - Friday</p>
                <p className="text-white font-semibold">8:00 AM - 5:00 PM</p>
                <p className="mt-2 text-white font-semibold">
                  Professional Service
                </p>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+1(778)200-8827"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3"
                >
                  <Phone size={16} />
                  <p>(778) 200-8827</p>
                </a>
                <a
                  href="mailto:office@vandrywall.com"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3"
                >
                  <Mail size={16} />
                  <p>office@vandrywall.com</p>
                </a>
                <div className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p>Vancouver, BC</p>
                    <p>Canada</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-lg"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>
                © {new Date().getFullYear()} Pro Wall Repairs &amp; Finishing -
                AZ Vancouver &amp; Burnaby. ALL RIGHTS RESERVED
              </p>
            </div>
            <div className="flex space-x-8">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                PRIVACY POLICY
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                TERMS &amp; CONDITIONS
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
