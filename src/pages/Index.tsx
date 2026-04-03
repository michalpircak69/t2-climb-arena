import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import PricingSection from "@/components/PricingSection";
import HoursSection from "@/components/HoursSection";
import GallerySection from "@/components/GallerySection";
import CoursesSection from "@/components/CoursesSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import DecorativeShapes from "@/components/DecorativeShapes";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <div className="relative">
        <DecorativeShapes />
        <AboutSection />
        <ServicesSection />
        <FacilitiesSection />
        <PricingSection />
        <HoursSection />
        <GallerySection />
        <CoursesSection />
        <FAQSection />
        <ContactSection />
      </div>
    </main>
    <Footer />
  </>
);

export default Index;
