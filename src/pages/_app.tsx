import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import additional packages you might need
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Import the config directly from the JSON object
const nextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de", "fr"],
  },
  fallbackLng: {
    default: ["en"],
  },
  nonExplicitSupportedLngs: true,
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [pageLoaded, setPageLoaded] = useState(false);

  // Fix for NextRouter was not mounted error
  useEffect(() => {
    setPageLoaded(true);
  }, []);

  // Extract the "transparent" prop from pageProps if it exists
  const { transparentHeader, ...remainingProps } = pageProps;

  if (!pageLoaded) {
    return null; // Return null on server-side to avoid hydration issues
  }

  return (
    <>
      <Navigation transparent={transparentHeader} />
      <Component {...remainingProps} />
      <Footer />
    </>
  );
}

// Pass the config directly
export default appWithTranslation(App, nextI18NextConfig);
