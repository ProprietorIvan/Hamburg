import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  ArrowRight,
  Check,
  Dna,
  FlaskConical,
  Database,
  Heart,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({
  icon,
  title,
  description,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    viewport={{ once: true }}
    className="p-8 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 transition-colors duration-300"
  >
    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-4 text-gray-300">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </motion.div>
);

interface CategoryProps {
  title: string;
  description: string;
  image: string;
  delay: number;
}

const Category: React.FC<CategoryProps> = ({
  title,
  description,
  image,
  delay,
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: delay * 0.1 }}
    viewport={{ once: true }}
    className="relative h-96 rounded-xl overflow-hidden group"
  >
    <Image
      src={image}
      alt={`${title} - Premium Cannabis Seeds`}
      layout="fill"
      objectFit="cover"
      className="group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-300 text-sm mt-2">{description}</p>
    </div>
  </motion.div>
);

const HamburgSeedDispensaryLandingPage = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0.2]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.05]);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on load
  }, []);

  const handleContact = () => {
    window.location.href = "tel:+49-123-456789";
  };

  const pageTitle = "Hamburg Seed Vault - Premium Cannabis Seeds";
  const pageDescription =
    "Discover the world’s finest cannabis seeds at Hamburg Seed Vault. Engineered for collectors and enthusiasts, our premium genetics redefine excellence.";
  const siteUrl = "https://hamburgseedvault.de";
  const canonicalUrl = `${siteUrl}/`; // Assuming this is the homepage
  const keywords = [
    "premium cannabis seeds",
    "hamburg seed vault",
    "cannabis genetics",
    "rare strains",
    "autoflowering seeds",
    "feminized seeds",
    "therapeutic seeds",
    "collector seeds",
    "germany cannabis",
    "seed dispensary",
  ].join(", ");

  // Structured Data (JSON-LD) for Organization and Product
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Hamburg Seed Vault",
        url: siteUrl,
        logo: `${siteUrl}/images/logo.webp`, // Replace with actual logo path if available
        description: pageDescription,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Hamburg",
          addressCountry: "DE",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+49-123-456789",
          contactType: "Customer Service",
        },
      },
      {
        "@type": "Product",
        name: "Premium Cannabis Seeds",
        description:
          "A curated collection of autoflowering, feminized, therapeutic, and collector’s cannabis seeds.",
        brand: {
          "@type": "Brand",
          name: "Hamburg Seed Vault",
        },
        category: "Cannabis Seeds",
        image: `${siteUrl}/images/hero-seeds.webp`,
        offers: {
          "@type": "Offer",
          url: canonicalUrl,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  const features = [
    {
      icon: <Dna className="w-6 h-6" />,
      title: "Genetic Precision",
      description: "Every seed is a masterpiece of stability and potency.",
      delay: 1,
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Lab Perfected",
      description: "Tested for purity, viability, and performance.",
      delay: 2,
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Heritage Vault",
      description: "Rare strains preserved for generations.",
      delay: 3,
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Collector’s Craft",
      description: "Curated for those who demand the best.",
      delay: 4,
    },
  ];

  const categories = [
    {
      title: "Autoflowering Seeds",
      description: "Fast. Compact. Powerful. Harvest in just 60 days.",
      image: "/images/autoflower.webp",
      delay: 1,
    },
    {
      title: "Feminized Seeds",
      description: "99.9% female. Unmatched consistency and yield.",
      image: "/images/feminized.webp",
      delay: 2,
    },
    {
      title: "Therapeutic Seeds",
      description: "Balanced CBD profiles for targeted wellness.",
      image: "/images/therapeutic.webp",
      delay: 3,
    },
    {
      title: "Collector’s Seeds",
      description: "Rare genetics. Limited editions. Timeless value.",
      image: "/images/collector.webp",
      delay: 4,
    },
  ];

  return (
    <div
      className="bg-black text-white font-sans"
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <Head>
        {/* Basic Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="author" content="Hamburg Seed Vault" />

        {/* Canonical URL */}
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta
          property="og:image"
          content={`${siteUrl}/images/hero-seeds.webp`}
        />
        <meta
          property="og:image:alt"
          content="Premium Cannabis Seeds from Hamburg Seed Vault"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Hamburg Seed Vault" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta
          name="twitter:image"
          content={`${siteUrl}/images/hero-seeds.webp`}
        />
        <meta
          name="twitter:image:alt"
          content="Premium Cannabis Seeds from Hamburg Seed Vault"
        />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-seeds.webp"
            alt="Premium Cannabis Seeds - Hamburg Seed Vault"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/80" />
        </motion.div>
        <div className="relative z-10 text-center px-6 max-w-[1920px] mx-auto w-full">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-bold leading-tight"
          >
            The World’s Finest
            <br />
            Cannabis Seeds
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mt-6 max-w-2xl mx-auto"
          >
            Engineered with precision. Crafted for collectors. Hamburg Seed
            Vault redefines genetic excellence.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContact}
            className="mt-10 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Discover Now
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-gray-300 animate-bounce" />
        </motion.div>
      </section>

      {/* Why Seeds Matter Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-[1920px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-12"
          >
            Why Seeds Matter
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <Image
                src="/images/seed-closeup.webp"
                alt="Close-Up of Premium Cannabis Seed"
                width={800}
                height={600}
                className="rounded-xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <p className="text-lg text-gray-300 mb-6">
                Seeds are the foundation of cannabis innovation. At Hamburg Seed
                Vault, we don’t just sell seeds—we preserve the future. Each one
                is a genetic blueprint, meticulously selected and tested to
                deliver unmatched quality and potential.
              </p>
              <p className="text-lg text-gray-300">
                Whether you’re a collector seeking rare strains or an enthusiast
                building your legacy, our seeds are engineered to perform. This
                isn’t just cultivation—it’s a revolution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1920px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Built for Perfection
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-[1920px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Genetic Vault
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, index) => (
              <Category key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-[1920px] mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8"
          >
            Unlock the Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Visit our Hamburg Vault. Explore the pinnacle of cannabis genetics.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleContact}
            className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors duration-300"
          >
            Contact Us
          </motion.button>
        </div>
      </section>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-gray-900 rounded-xl p-8 max-w-md w-full shadow-2xl border border-gray-800"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Inquiry Sent
            </h3>
            <p className="text-gray-300">
              We’ll reach out soon. Expect greatness.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowSuccess(false)}
              className="mt-6 bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-gray-200"
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HamburgSeedDispensaryLandingPage;
