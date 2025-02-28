import React, { useState } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import {
  Phone,
  ArrowRight,
  Ruler,
  Clock,
  CheckCircle2,
  Shield,
  Building2,
  Home,
  Check,
} from "lucide-react";
import Image from "next/image";

type CustomerType = "residential" | "commercial" | null;

interface FormData {
  name: string;
  phone: string;
  facilityType: string;
  projectSize: string;
  urgency: string;
  email: string;
  address: string;
  projectDetails: string;
}

const VancouverDrywallLandingPage = () => {
  const [customerType, setCustomerType] = useState<CustomerType>(null);
  const [facilityType, setFacilityType] = useState("");
  const [urgency, setUrgency] = useState("");
  const [projectSize, setProjectSize] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState<
    Pick<FormData, "name" | "phone" | "email" | "address" | "projectDetails">
  >({
    name: "",
    phone: "",
    email: "",
    address: "",
    projectDetails: "",
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
      facilityType,
      urgency,
      projectSize,
    };
    setShowSuccess(true);
  };

  const handleEmergencyCall = () => {
    window.location.href = "tel:+1(778)200-8827";
    const contactForm = document.querySelector("#contactform");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    }
  };

  // SEO-friendly data
  const pageTitle =
    "Pro Wall Repairs & Finishing - AZ Vancouver & Burnaby | Expert Wall Services";
  const pageDescription =
    "Professional wall repair and finishing services in Vancouver & Burnaby. Specializing in high-quality repairs, expert finishing, and flawless results for residential and commercial properties.";

  const serviceFeatures = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Expert Team",
      description: "Professional wall repair specialists",
    },
    {
      icon: <Ruler className="w-6 h-6" />,
      title: "Premium Finishes",
      description: "Flawless surface finishing",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Reliable Service",
      description: "On-time project completion",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assured",
      description: "Satisfaction guaranteed",
    },
  ];

  const serviceTypes = [
    {
      title: "Wall Repairs",
      points: [
        "Damage restoration",
        "Crack repairs",
        "Hole patching",
        "Surface preparation",
      ],
    },
    {
      title: "Expert Finishing",
      points: [
        "Texture matching",
        "Smooth finishing",
        "Paint preparation",
        "Premium materials",
      ],
    },
    {
      title: "Commercial Services",
      points: [
        "Office renovations",
        "Retail space repairs",
        "Property maintenance",
        "Multi-unit projects",
      ],
    },
    {
      title: "Residential Services",
      points: [
        "Home repairs",
        "Basement finishing",
        "Room renovations",
        "Custom solutions",
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
          content="wall repairs vancouver, wall finishing, professional wall repair, surface finishing, vancouver wall repairs, burnaby wall repairs"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vandrywall.com" />
        <link rel="canonical" href="https://vandrywall.com" />
      </Head>

      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="absolute inset-0 bg-grid-gray-100 bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row gap-12 items-center py-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                Professional Wall Repairs &amp; Finishing Services
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900">
                Expert repairs.
                <span className="block text-gray-900">Flawless finish.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Vancouver &amp; Burnaby&apos;s trusted experts in wall repairs
                and premium finishing. Quality workmanship guaranteed.
              </p>

              <button
                onClick={handleEmergencyCall}
                className="group inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                <span>Request a Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="relative h-96">
                <Image
                  src="/photos/homepage/2.jpg"
                  alt="Professional Wall Repairs & Finishing"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-xl"
                  priority
                />
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
              Professional Wall Services
            </h2>
            <p className="text-lg text-gray-600">
              Expert repairs and premium finishing in Vancouver &amp; Burnaby
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-gray-900 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive repair and finishing solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {type.title}
                </h3>
                <ul className="space-y-3">
                  {type.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gray-900" />
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
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Quality Wall Repairs &amp; Finishing
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Professional services in Vancouver &amp; Burnaby
          </p>
          <button
            onClick={handleEmergencyCall}
            className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 px-8 py-4 rounded-full text-xl font-bold hover:bg-gray-100 transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Call (778) 200-8827</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

const SuccessScreen = ({
  email,
  setShowSuccess,
}: {
  email: string;
  setShowSuccess: (val: boolean) => void;
}) => {
  return (
    <div className="p-8 flex flex-col items-center justify-center space-y-6 min-h-[400px]">
      <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
        <Check className="w-8 h-8 text-green-500" />
      </div>
      <h3 className="text-2xl font-medium text-gray-900">Message received</h3>

      <div className="space-y-2 text-center">
        <p className="text-gray-600">We&apos;ll get back to you shortly</p>
        <p className="text-gray-500 text-sm">
          Response will be sent to office@vandrywall.com
        </p>
      </div>

      <button
        onClick={() => setShowSuccess(false)}
        className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800"
      >
        Done
      </button>
    </div>
  );
};

export default VancouverDrywallLandingPage;
