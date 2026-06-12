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
const Home = () => {
  return (
    <>
      <Navbar />
  <Hero />
  <SafetyDashboard />
  <About />
  <Experience />
    <Gallery />
    
  <Projects />
  <ControlRoom />
  <EmergencyFlow />
  <Certifications />
  <Contact />
  <Footer />
    </>
  );
};

export default Home;