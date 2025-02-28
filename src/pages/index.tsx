import React, { useState } from "react";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps } from "next";
import {
  Sprout,
  ArrowRight,
  Leaf,
  Clock,
  CheckCircle2,
  Shield,
  Building2,
  Home,
  Check,
  Phone,
} from "lucide-react";
import Image from "next/image";

type CustomerType = "hobbyist" | "collector" | null;

interface FormData {
  name: string;
  phone: string;
  experience: string;
  interests: string;
  contactPreference: string;
  email: string;
  location: string;
  inquiryDetails: string;
}

const HamburgSeedDispensaryLandingPage = () => {
  const { t } = useTranslation("common");

  const [customerType, setCustomerType] = useState<CustomerType>(null);
  const [experience, setExperience] = useState("");
  const [contactPreference, setContactPreference] = useState("");
  const [interests, setInterests] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<
    Pick<FormData, "name" | "phone" | "email" | "location" | "inquiryDetails">
  >({
    name: "",
    phone: "",
    email: "",
    location: "",
    inquiryDetails: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      ...formData,
      customerType,
      experience,
      contactPreference,
      interests,
    };
    setShowSuccess(true);
  };

  const handleContact = () => {
    window.location.href = "tel:+49-123-456789";
    const contactForm = document.querySelector("#contactform");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  // SEO-friendly data
  const pageTitle = t(
    "seoTitle",
    "Premium Cannabis Seeds Hamburg | Quality Collection & Genetic Preservation"
  );
  const pageDescription = t(
    "seoDescription",
    "Hamburg's premier cannabis seed dispensary offering rare genetics, expert advice, and premium quality seeds for collectors and enthusiasts. Visit our St. Pauli location today."
  );

  const serviceFeatures = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: t("premiumGenetics"),
      description: t("geneticsDescription"),
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: t("expertKnowledge"),
      description: t("knowledgeDescription"),
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("reliableService"),
      description: t("serviceDescription"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("qualityAssured"),
      description: t("qualityDescription"),
    },
  ];

  const productCategories = [
    {
      title: t("autoflowering"),
      points: [
        t("autoPoint1", "Fast lifecycle varieties"),
        t("autoPoint2", "Beginner-friendly options"),
        t("autoPoint3", "Compact growing profiles"),
        t("autoPoint4", "High-yield potential"),
      ],
    },
    {
      title: t("feminized"),
      points: [
        t("femPoint1", "99% female guarantee"),
        t("femPoint2", "Premium photoperiod varieties"),
        t("femPoint3", "Stable genetics"),
        t("femPoint4", "Award-winning strains"),
      ],
    },
    {
      title: t("cbdRich"),
      points: [
        t("cbdPoint1", "Low-THC options"),
        t("cbdPoint2", "Therapeutic profiles"),
        t("cbdPoint3", "Balanced ratios"),
        t("cbdPoint4", "Unique terpene combinations"),
      ],
    },
    {
      title: t("limitedEditions"),
      points: [
        t("limitedPoint1", "Rare landrace genetics"),
        t("limitedPoint2", "Exclusive collaborations"),
        t("limitedPoint3", "Heritage preservation"),
        t("limitedPoint4", "Collector's items"),
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head Section */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content={t(
            "seoKeywords",
            "cannabis seeds hamburg, premium cannabis genetics, seed collection, autoflowering seeds, feminized seeds, CBD seeds, german seed bank"
          )}
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hamburgseeds.de" />
        <link rel="canonical" href="https://hamburgseeds.de" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-green-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                {t("heroTagline", "Hamburg's Premier Seed Dispensary")}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                {t("heroTitle")}
                <span className="block text-green-700">
                  {t("heroSubtitle")}
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t("heroDescription")}
              </p>

              <button
                onClick={handleContact}
                className="group inline-flex items-center justify-center gap-3 bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-green-800 transition-all duration-300"
              >
                <Sprout className="w-6 h-6" />
                <span>{t("ctaButton")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-96">
                <div className="absolute inset-0 bg-green-100 rounded-xl flex items-center justify-center">
                  <Sprout className="w-32 h-32 text-green-700 opacity-30" />
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t("featuresTitle")}
            </h2>
            <p className="text-lg text-gray-600">{t("featuresSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-green-700 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {t("collectionTitle")}
            </h2>
            <p className="text-lg text-gray-600">{t("collectionSubtitle")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-700" />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-green-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            {t("callCta")}
          </h2>
          <p className="text-xl mb-8 text-green-100">{t("visitCta")}</p>
          <button
            onClick={handleContact}
            className="group inline-flex items-center justify-center gap-3 bg-white text-green-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>{t("callButton")}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Success Modal Component */}
      {showSuccess && (
        <SuccessModal email={formData.email} setShowSuccess={setShowSuccess} />
      )}
    </div>
  );
};

const SuccessModal = ({
  email,
  setShowSuccess,
}: {
  email: string;
  setShowSuccess: (val: boolean) => void;
}) => {
  const { t } = useTranslation("common");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="p-8 flex flex-col items-center justify-center space-y-6">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-medium text-gray-900">
            {t("inquiryReceived", "Inquiry received")}
          </h3>

          <div className="space-y-2 text-center">
            <p className="text-gray-600">
              {t("getBackShortly", "We'll get back to you shortly")}
            </p>
            <p className="text-gray-500 text-sm">
              {t("responseSentTo", "Response will be sent to")}{" "}
              {email || "info@hamburgseeds.de"}
            </p>
          </div>

          <button
            onClick={() => setShowSuccess(false)}
            className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full hover:bg-green-800"
          >
            {t("done", "Done")}
          </button>
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
      // This prop will be passed to the page component as props
      transparentHeader: true,
    },
  };
};

export default HamburgSeedDispensaryLandingPage;
