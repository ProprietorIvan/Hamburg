import React from "react";
import { useTranslation } from "next-i18next";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Sprout,
  Leaf,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <div className="relative mt-16">
      <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Sprout className="mr-2 h-6 w-6" />{" "}
              {t("brandName", "Hamburg Seeds")}
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t(
                "footerAbout",
                "Hamburg's premier cannabis seed dispensary, offering a curated collection of premium genetics for collectors and enthusiasts. Our expert team provides personalized guidance to help you discover the perfect additions to your collection."
              )}
            </p>
            <div className="text-gray-400 text-sm">
              <p>
                {t("locallyOwned", "Locally owned and operated in Hamburg")}
              </p>
              <p className="flex items-center gap-2 text-white mt-2">
                {t("established", "Established in St. Pauli since 2019")}
              </p>
            </div>
          </div>

          {/* Collection Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t("ourCollection", "OUR COLLECTION")}
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors duration-300">
                <Link href={`/${router.locale}/autoflowering`}>
                  {t("autofloweringSeeds", "Autoflowering Seeds")}
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href={`/${router.locale}/feminized`}>
                  {t("feminizedSeeds", "Feminized Seeds")}
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href={`/${router.locale}/cbd`}>
                  {t("cbdVarieties", "CBD-Rich Varieties")}
                </Link>
              </li>
              <li className="hover:text-white transition-colors duration-300">
                <Link href={`/${router.locale}/limited-editions`}>
                  {t("limitedEditionsFooter", "Limited Editions")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              {t("getInTouch", "GET IN TOUCH")}
            </h3>
            <div className="h-1 w-16 bg-white mb-6"></div>
            <div className="text-gray-300 space-y-4">
              <div>
                <p className="font-semibold mb-2">
                  {t("storeHours", "Store Hours:")}
                </p>
                <p className="text-white font-semibold">
                  {t("weekdays", "Monday - Saturday")}
                </p>
                <p className="text-white font-semibold">
                  {t("hours", "10:00 AM - 7:00 PM")}
                </p>
                <p className="mt-2 text-white font-semibold">
                  {t("expertConsultation", "Expert Consultation Available")}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+49-123-456789"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3"
                >
                  <Phone size={16} />
                  <p>+49-123-456789</p>
                </a>
                <a
                  href="mailto:info@hamburgseeds.de"
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 cursor-pointer mb-3"
                >
                  <Mail size={16} />
                  <p>info@hamburgseeds.de</p>
                </a>
                <div className="flex items-start gap-2 hover:text-white transition-colors duration-300">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <div>
                    <p>{t("stPauli", "St. Pauli District")}</p>
                    <p>{t("hamburg", "Hamburg, Germany")}</p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4 pt-4">
                <a
                  href="#"
                  className="p-2 bg-green-800 hover:bg-white hover:text-green-900 transition-all duration-300 rounded-lg"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-green-800 hover:bg-white hover:text-green-900 transition-all duration-300 rounded-lg"
                >
                  <Leaf size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-green-800 hover:bg-white hover:text-green-900 transition-all duration-300 rounded-lg"
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
                © {new Date().getFullYear()}{" "}
                {t(
                  "copyright",
                  "Hamburg Seeds - Premium Cannabis Genetics. ALL RIGHTS RESERVED"
                )}
              </p>
            </div>
            <div className="flex space-x-8">
              <Link
                href={`/${router.locale}/privacy`}
                className="hover:text-white transition-colors duration-300"
              >
                {t("privacyPolicy", "PRIVACY POLICY")}
              </Link>
              <Link
                href={`/${router.locale}/terms`}
                className="hover:text-white transition-colors duration-300"
              >
                {t("termsConditions", "TERMS & CONDITIONS")}
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
