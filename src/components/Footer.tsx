import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
  Sprout,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    about: {
      title: "Hamburg Seed Vault",
      description:
        "Discover the pinnacle of cannabis genetics at Hamburg Seed Vault. Our curated collection of premium seeds is engineered for collectors and enthusiasts, backed by expert precision.",
      details: [
        "Locally operated in Hamburg",
        "Established in St. Pauli since 2019",
      ],
    },
    collection: [
      {
        text: "Autoflowering Seeds",
        url: "/autoflowering",
        ariaLabel: "Autoflowering Seeds Collection",
      },
      {
        text: "Feminized Seeds",
        url: "/feminized",
        ariaLabel: "Feminized Seeds Collection",
      },
      {
        text: "Therapeutic Seeds",
        url: "/cbd",
        ariaLabel: "Therapeutic CBD Seeds",
      },
      {
        text: "Collector’s Seeds",
        url: "/limited-editions",
        ariaLabel: "Limited Edition Seeds",
      },
    ],
    contact: {
      hours: [
        "Monday - Saturday",
        "10:00 AM - 7:00 PM",
        "Expert consultation available",
      ],
      info: [
        {
          icon: <Phone size={16} />,
          text: "+49-123-456789",
          href: "tel:+49-123-456789",
          ariaLabel: "Call us",
        },
        {
          icon: <Mail size={16} />,
          text: "info@hamburgseeds.de",
          href: "mailto:info@hamburgseeds.de",
          ariaLabel: "Email us",
        },
        {
          icon: <MapPin size={16} />,
          text: "St. Pauli District, Hamburg, Germany",
          href: "#",
          ariaLabel: "Our location",
        },
      ],
      social: [
        {
          icon: <Facebook size={20} />,
          href: "#",
          ariaLabel: "Follow us on Facebook",
        },
        {
          icon: <Instagram size={20} />,
          href: "#",
          ariaLabel: "Follow us on Instagram",
        },
        {
          icon: <ExternalLink size={20} />,
          href: "#",
          ariaLabel: "Visit our external site",
        },
      ],
    },
    legal: [
      {
        text: "Privacy Policy",
        url: "/privacy",
        ariaLabel: "View Privacy Policy",
      },
      {
        text: "Terms & Conditions",
        url: "/terms",
        ariaLabel: "View Terms & Conditions",
      },
    ],
  };

  return (
    <footer className="bg-black text-gray-300 py-16 px-6">
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:col-span-2"
        >
          <h3 className="text-xl font-semibold mb-4 flex items-center text-white">
            <Sprout className="mr-2 h-6 w-6" /> {footerSections.about.title}
          </h3>
          <div className="h-1 w-16 bg-gray-700 mb-6" />
          <p className="text-gray-400 mb-6 leading-relaxed">
            {footerSections.about.description}
          </p>
          <div className="text-gray-500 text-sm space-y-2">
            {footerSections.about.details.map((detail, index) => (
              <p key={index} className={index === 1 ? "text-white" : ""}>
                {detail}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Collection Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">
            OUR <span className="text-white">COLLECTION</span>
          </h3>
          <div className="h-1 w-16 bg-gray-700 mb-6" />
          <ul className="space-y-3 text-gray-400">
            {footerSections.collection.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
                className="hover:text-white transition-colors duration-300"
              >
                <Link href={item.url} passHref>
                  <a aria-label={item.ariaLabel}>{item.text}</a>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-4">
            GET IN <span className="text-white">TOUCH</span>
          </h3>
          <div className="h-1 w-16 bg-gray-700 mb-6" />
          <div className="text-gray-400 space-y-4">
            <div>
              <p className="font-semibold mb-2">Store Hours:</p>
              {footerSections.contact.hours.map((hour, index) => (
                <p key={index} className="text-white font-semibold">
                  {hour}
                </p>
              ))}
            </div>
            <div className="pt-4 border-t border-gray-800">
              {footerSections.contact.info.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 hover:text-white transition-colors duration-300 mb-3"
                  aria-label={item.ariaLabel}
                >
                  {item.icon}
                  <p>{item.text}</p>
                </a>
              ))}
            </div>
            <div className="flex space-x-4 pt-4">
              {footerSections.contact.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 hover:bg-gray-700 transition-colors duration-300 rounded-lg"
                  aria-label={social.ariaLabel}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1920px] mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left mb-4 md:mb-0"
          >
            © {currentYear} Hamburg Seed Vault - Premium Cannabis Genetics. All
            Rights Reserved.
          </motion.p>
          <div className="flex space-x-8">
            {footerSections.legal.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={item.url} passHref>
                  <a
                    className="hover:text-white transition-colors duration-300 uppercase"
                    aria-label={item.ariaLabel}
                  >
                    {item.text}
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
