import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import Image from "next/image";

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
  const { push } = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: "Home", url: "/" },
    { text: "Collection", url: "/collection" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" },
    { text: "FAQ", url: "/faq" },
  ];

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
                Hamburg Seeds
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
                    push(link.url);
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
            <a
              href="tel:+49-123-456789"
              className="inline-flex items-center justify-center bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-800 transition-colors"
            >
              Call Now
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
                    push(link.url);
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
