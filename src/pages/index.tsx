import React, { useState, useEffect } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import {
  Sprout,
  ArrowRight,
  Leaf,
  Clock,
  CheckCircle2,
  Shield,
  Award,
  FlaskConical,
  Database,
  Sparkles,
  Zap,
  Check,
  Phone,
  Dna,
  Heart,
  Star,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

type CustomerType = "hobbyist" | "collector" | "professional" | null;

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

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, gradient, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    viewport={{ once: true }}
    className={`bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ${gradient} border border-gray-100`}
  >
    <div className="text-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

interface CategoryCardProps {
  title: string;
  points: string[];
  icon: React.ReactNode;
  accentColor: string;
  delay: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, points, icon, accentColor, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
  >
    <div className={`${accentColor} w-12 h-12 rounded-full flex items-center justify-center mb-6`}>
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4 text-gray-900">{title}</h3>
    <ul className="space-y-3">
      {points.map((point, pointIndex) => (
        <li key={pointIndex} className="flex items-center gap-3">
          <CheckCircle2 className={`w-5 h-5 ${accentColor.replace('bg-', 'text-')}`} />
          <span className="text-gray-600">{point}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, location, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: delay * 0.1 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-xl shadow-md"
  >
    <div className="flex gap-2 mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
      ))}
    </div>
    <p className="text-gray-600 italic mb-4">&rdquo;{quote}&#34;</p>
    <div className="font-medium">{author}</div>
    <div className="text-sm text-gray-500">{location}</div>
  </motion.div>
);

const HamburgSeedDispensaryLandingPage = () => {
  const [customerType, setCustomerType] = useState<CustomerType>(null);
  const [experience, setExperience] = useState("");
  const [contactPreference, setContactPreference] = useState("");
  const [interests, setInterests] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [formData, setFormData] = useState<
    Pick<FormData, "name" | "phone" | "email" | "location" | "inquiryDetails">
  >({
    name: "",
    phone: "",
    email: "",
    location: "",
    inquiryDetails: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const pageTitle =
    "Premium Cannabis Seeds Hamburg | Extraordinary Genetic Selection";
  const pageDescription =
    "Discover the future of cannabis genetics at Hamburg's premier seed dispensary. Our curated collection of rare & premium seeds combines exceptional quality with genetic innovation. Visit our St. Pauli boutique today.";

  const serviceFeatures = [
    {
      icon: <Dna className="w-6 h-6" />,
      title: "Genetic Excellence",
      description: "Meticulously curated selection of premium genetics with verified lineage",
      gradient: "bg-gradient-to-br from-green-700 to-green-500",
      delay: 1,
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: "Laboratory Verified",
      description: "Every seed batch scientifically tested for genetic purity and viability",
      gradient: "bg-gradient-to-br from-blue-700 to-blue-500",
      delay: 2,
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Genetic Archive",
      description: "Preserving rare landrace genetics and heritage varieties for the future",
      gradient: "bg-gradient-to-br from-purple-700 to-purple-500",
      delay: 3,
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Personalized consultation with certified genetic specialists",
      gradient: "bg-gradient-to-br from-amber-700 to-amber-500",
      delay: 4,
    },
  ];

  const productCategories = [
    {
      title: "Autoflowering Revolution",
      points: [
        "Rapid 60-70 day seed-to-harvest lifecycle",
        "Space-efficient genetics ideal for urban cultivators",
        "Enhanced trichome production through selective breeding",
        "Ruderalis genetics optimized for stability & consistency",
      ],
      icon: <Zap className="w-6 h-6 text-white" />,
      accentColor: "bg-green-600",
      delay: 1,
    },
    {
      title: "Feminized Perfection",
      points: [
        "99.9% female guarantee through advanced techniques",
        "Photoperiod varieties with exceptional cannabinoid profiles",
        "Genetic stability verified through multi-generational testing",
        "Cup-winning genetics with documented lineage",
      ],
      icon: <Award className="w-6 h-6 text-white" />,
      accentColor: "bg-blue-600",
      delay: 2,
    },
    {
      title: "Therapeutic CBD Portfolio",
      points: [
        "High-CBD varieties with precise cannabinoid ratios",
        "Terpene profiles optimized for specific therapeutic effects",
        "Low-THC options for compliance with various regulations",
        "Unique chemovars with rare minor cannabinoid expressions",
      ],
      icon: <Heart className="w-6 h-6 text-white" />,
      accentColor: "bg-purple-600",
      delay: 3,
    },
    {
      title: "Collector's Treasures",
      points: [
        "Rare landrace genetics from remote global regions",
        "Limited-edition collaborations with master breeders",
        "Heritage preservation strains with documented provenance",
        "Experimental crosses pushing genetic boundaries",
      ],
      icon: <Star className="w-6 h-6 text-white" />,
      accentColor: "bg-amber-600",
      delay: 4,
    },
  ];

  const testimonials = [
    {
      quote: "The genetic diversity and quality available here is unmatched. Their autoflowering collection transformed my small-space cultivation.",
      author: "A. Müller",
      location: "Berlin Collector",
      delay: 1,
    },
    {
      quote: "Their CBD varieties have consistent chemotypes that I haven't found anywhere else in Germany. Exceptional service too.",
      author: "T. Schmidt",
      location: "Munich Enthusiast",
      delay: 2,
    },
    {
      quote: "As a collector of rare genetics, their limited editions are treasures. Documentation and genetic verification is impressive.",
      author: "M. Weber",
      location: "Hamburg Collector",
      delay: 3,
    },
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Head Section */}
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="premium cannabis seeds, hamburg seed bank, rare cannabis genetics, autoflowering seeds, feminized seeds, CBD genetics, hemp seed collection, genetic preservation, cannabis collectors, premium seed dispensary"
        />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hamburgseeds.de" />
        <link rel="canonical" href="https://hamburgseeds.de" />
      </Head>

      <Navigation transparent />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/subtle-pattern.png')] opacity-10"
          style={{
            backgroundSize: "30px 30px",
            transform: `translateY(${scrollPosition * 0.2}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 relative z-10 py-20">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="inline-flex items-center bg-green-900 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
                <Sprout className="mr-2 h-4 w-4" />
                <span>Hamburg&apos;s Premier Seed Dispensary</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                Genetic
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600">
                  Excellence.
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Experience the future of cannabis genetics – meticulously selected, 
                scientifically verified, and expertly preserved for collectors and enthusiasts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleContact}
                  className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300"
                >
                  <Sprout className="w-6 h-6" />
                  <span>Experience Our Collection</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  href="#seed-catalog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-medium border border-green-600 text-green-700 hover:bg-green-50 transition-all duration-300"
                >
                  <span>Explore Genetics</span>
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 relative"
            >
              <div className="relative h-[500px] w-full">
                <div className="absolute top-[10%] right-[10%] w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-[20%] left-[20%] w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[20%] left-[35%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-50 to-green-100 shadow-xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Sprout className="w-32 h-32 md:w-40 md:h-40 text-green-700 opacity-80" />
                    </div>
                    <div className="absolute -inset-4 rounded-full border-2 border-green-200 opacity-50"></div>
                    <div className="absolute -inset-8 rounded-full border border-green-100 opacity-30"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll to discover</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center items-start p-1"
          >
            <motion.div
              animate={{ height: ["20%", "40%", "20%"] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="bg-gray-400 w-1 rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4"
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                The Science of <span className="text-green-600">Quality</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our commitment to genetic excellence is backed by scientific rigor and 
                decades of botanical expertise
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
                delay={feature.delay}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section id="seed-catalog" className="py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Exceptional <span className="text-green-600">Genetics</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our curated collection represents the pinnacle of cannabis breeding, 
              selected for collectors and enthusiasts who demand excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productCategories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                points={category.points}
                icon={category.icon}
                accentColor={category.accentColor}
                delay={category.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Collector <span className="text-green-600">Experiences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a community of enthusiasts who trust our genetic expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                location={testimonial.location}
                delay={testimonial.delay}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-green-600">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we ensure every seed meets our exceptional standards
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <Image
                src="/images/lab-placeholder.jpg"
                alt="Our Genetic Testing Process"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
                style={{ objectFit: "cover" }}
                // Real image would replace this placeholder
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Genetic Selection</h3>
                    <p className="text-gray-600">Our experts travel globally to source exceptional genetic material, evaluating stability, expression, and uniqueness.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Laboratory Verification</h3>
                    <p className="text-gray-600">Each genetic line undergoes rigorous testing for viability, germination rates, and genetic markers to ensure authenticity.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Documentation & Preservation</h3>
                    <p className="text-gray-600">Complete genetic profiles are created, documenting lineage, characteristics, and preservation protocols for future generations.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-green-100 rounded-full h-10 w-10 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-1">Expert Consultation</h3>
                    <p className="text-gray-600">Our specialists provide personalized guidance, matching collectors with varieties that meet their specific interests and requirements.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-900 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat bg-center" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-4 relative z-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Experience Genetic Excellence
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Visit our boutique in St. Pauli for expert consultation and access to our premium genetic library
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContact}
            className="group inline-flex items-center justify-center gap-3 bg-white text-green-900 px-8 py-4 rounded-full text-xl font-bold hover:shadow-lg transition-all duration-300"
          >
            <Phone className="w-6 h-6" />
            <span>Contact Our Specialists</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>

      {/* Success Modal Component */}
      {showSuccess && (
        <SuccessModal email={formData.email} setShowSuccess={setShowSuccess} />
      )}

      {/* Additional Styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: scale(1) translate(0px, 0px);
          }
          33% {
            transform: scale(1.1) translate(30px, -50px);
          }
          66% {
            transform: scale(0.9) translate(-20px, 20px);
          }
          100% {
            transform: scale(1) translate(0px, 0px);
          }
        }
        .animate-blob {
          animation: blob 7s infinite alternate;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
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
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-xl max-w-md w-full shadow-2xl"
      >
        <div className="p-8 flex flex-col items-center justify-center space-y-6">
          <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-medium text-gray-900">
            Inquiry received
          </h3>

          <div className="space-y-2 text-center">
            <p className="text-gray-600">We&apos;ll get back to you shortly</p>
            <p className="text-gray-500 text-sm">
              Response will be sent to {email || "info@hamburgseeds.de"}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowSuccess(false)}
            className="mt-8 bg-gradient-to-r from-green-700 to-green-600 text-white px-8 py-3 rounded-full hover:shadow-lg"
          >
            Done
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default HamburgSeedDispensaryLandingPage;