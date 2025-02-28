import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import Image from "next/image";
import { useTranslation } from "next-i18next";

interface NavigationProps {
  currentPage?: string;
  showActions?: boolean;
  transparent?: boolean;
}

const Navigation = ({
  currentPage,
  showActions = true,
  transparent,
}: NavigationProps) => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: t("navHome"), url: `/${router.locale}` },
    { text: t("navCollection"), url: `/${router.locale}/collection` },
    { text: t("navAbout"), url: `/${router.locale}/about` },
    { text: t("navContact"), url: `/${router.locale}/contact` },
    { text: t("navFaq"), url: `/${router.locale}/faq` },
  ];

  // Function to change language
  const changeLanguage = (locale: string) => {
    router.push(router.pathname, router.asPath, { locale });
  };

  return (
    <nav
      className={`relative ${
        transparent
          ? "bg-transparent !absolute left-0 top-0 w-full z-50"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <Sprout
                className={`h-8 w-8 ${
                  transparent ? "text-white" : "text-green-700"
                }`}
              />
              <span
                className={`ml-2 text-xl font-bold ${
                  transparent ? "text-white" : "text-gray-900"
                }`}
              >
                {t("brandName")}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <div className="flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(link.url);
                  }}
                  className={`text-base font-medium hover:text-green-600 transition-colors ${
                    transparent
                      ? "text-white hover:text-green-200"
                      : "text-gray-900"
                  }`}
                >
                  {link.text}
                </a>
              ))}

              {/* Language Selector */}
              <div className="relative ml-4">
                <select
                  onChange={(e) => changeLanguage(e.target.value)}
                  value={router.locale}
                  className={`appearance-none py-2 pl-3 pr-8 rounded-md cursor-pointer ${
                    transparent
                      ? "bg-transparent text-white border border-white"
                      : "bg-white text-gray-900 border border-gray-300"
                  }`}
                >
                  <option value="en">EN</option>
                  <option value="de">DE</option>
                  <option value="fr">FR</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                  <svg
                    className={`h-4 w-4 ${
                      transparent ? "text-white" : "text-gray-900"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <a
                href="tel:+49-123-456789"
                className="ml-4 inline-flex items-center justify-center bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-green-800 transition-colors"
              >
                +49-123-456789
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile Language Selector */}
            <select
              onChange={(e) => changeLanguage(e.target.value)}
              value={router.locale}
              className="appearance-none py-1 pl-2 pr-6 rounded-md text-sm border border-gray-300"
            >
              <option value="en">EN</option>
              <option value="de">DE</option>
              <option value="fr">FR</option>
            </select>

            <a
              href="tel:+49-123-456789"
              className="inline-flex items-center justify-center bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors"
            >
              {t("callNow")}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X
                  className={`h-6 w-6 ${
                    transparent ? "stroke-white" : "stroke-gray-900"
                  }`}
                />
              ) : (
                <Menu
                  className={`h-6 w-6 ${
                    transparent ? "stroke-white" : "stroke-gray-900"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(link.url);
                    setIsMenuOpen(false);
                  }}
                  className="block py-3 px-4 text-gray-900 hover:bg-green-50 rounded-xl transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
