import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Problem from "../components/Problem";
import Solution from "../components/Solution";
import HowItWorks from "../components/Solution";
import CustomerSuccess from "../components/CustomerSuccess";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
function Home() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero /> 
      <Stats />
      <Features />
      <Problem />
      <Solution />
      <HowItWorks />
      <CustomerSuccess />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;