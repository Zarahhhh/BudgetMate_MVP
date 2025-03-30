import React from "react";
import Navbar from "./components/Navbar";
import IntroSection from "./pages/IntroSection";
import FeaturesSection from "./pages/FeaturesSection";
import AboutSection from "./pages/AboutSection";
import VideoSection from "./pages/VideoSection";

const App = () => {
  return (
    <>
      <Navbar />
      <IntroSection />
      <FeaturesSection />
      <AboutSection />
      <VideoSection />
    </>
  );
};

export default App;
