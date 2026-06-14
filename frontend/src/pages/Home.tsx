import { useEffect, useState } from "react";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import SafetyDashboard from "../components/SafetyDashboard/SafetyDashboard";
import Experience from "../components/Experience/Experience";
import EmergencyFlow from "../components/EmergencyFlow/EmergencyFlow";
import Certifications from "../components/Certifications/Certifications";
import ControlRoom from "../components/ControlRoom/ControlRoom";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Gallery from "../components/Gallery/Gallery";
import Achievements from "../components/Achievements/Achievements";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import Cursor from "../components/Cursor/Cursor";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import BackToTop from "../components/BackToTop/BackToTop";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    
    <ProgressBar />
      <Cursor />
  
      <Navbar />

      <Hero />

      <SafetyDashboard />

      <About />

      <Experience />

      <Gallery />

      <Achievements />

      <Projects />

      <ControlRoom />

      <EmergencyFlow />

      <Certifications />

      <Contact />
      <BackToTop />
      <Footer />
    </>
  );
};

export default Home;