import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X, Sprout } from "lucide-react";
import Link from "next/link"; // Import Link from next/link
import { motion } from "framer-motion";

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
    { text: "Home", url: "/", ariaLabel: "Go to Home page" },
    {
      text: "Collection",
      url: "/collection",
      ariaLabel: "View Seed Collection",
    },
    { text: "About", url: "/about", ariaLabel: "Learn About Us" },
    {
      text: "Contact",
      url: "/contact",
      ariaLabel: "Contact Hamburg Seed Vault",
    },
    { text: "FAQ", url: "/faq", ariaLabel: "Frequently Asked Questions" },
  ];

  const handleNavigation = (url: string) => {
    push(url);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`relative ${
        transparent
          ? "bg-transparent !absolute left-0 top-0 w-full z-50"
          : "bg-black"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-[1920px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" passHref>
              <a
                className="flex items-center"
                aria-label="Hamburg Seed Vault Home"
                onClick={(e) => {
                  // Optional: Prevent default only if additional logic is needed
                  handleNavigation("/");
                }}
              >
                <Sprout className="h-8 w-8 text-white" />
                <span className="ml-2 text-xl font-bold text-white">
                  Hamburg Seed Vault
                </span>
              </a>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={link.url} passHref>
                  <a
                    className={`text-base font-medium text-gray-300 hover:text-white transition-colors duration-300 ${
                      currentPage === link.url ? "border-b-2 border-white" : ""
                    }`}
                    aria-label={link.ariaLabel}
                    aria-current={currentPage === link.url ? "page" : undefined}
                    onClick={(e) => {
                      // Optional: Prevent default if needed, but Link handles navigation
                      handleNavigation(link.url);
                    }}
                  >
                    {link.text}
                  </a>
                </Link>
              </motion.div>
            ))}
            {showActions && (
              <motion.a
                href="tel:+49-123-456789"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 inline-flex items-center justify-center bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                aria-label="Call Hamburg Seed Vault"
              >
                +49-123-456789
              </motion.a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {showActions && (
              <motion.a
                href="tel:+49-123-456789"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-300"
                aria-label="Call Hamburg Seed Vault"
              >
                Call Now
              </motion.a>
            )}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-2 rounded-xl hover:bg-gray-800 transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm shadow-lg z-50"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link href={link.url} passHref>
                    <a
                      className="block py-3 px-4 text-white hover:bg-gray-800 rounded-xl transition-colors duration-300"
                      aria-label={link.ariaLabel}
                      onClick={(e) => {
                        // Optional: Prevent default if needed, but Link handles navigation
                        handleNavigation(link.url);
                      }}
                    >
                      {link.text}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
