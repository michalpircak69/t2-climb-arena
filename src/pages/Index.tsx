import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import EventsSection from "@/components/EventsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import PricingSection from "@/components/PricingSection";
import HoursSection from "@/components/HoursSection";
import GallerySection from "@/components/GallerySection";
import CoursesSection from "@/components/CoursesSection";
import FAQSection from "@/components/FAQSection";
import ReviewsSection from "@/components/ReviewsSection";
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
        <EventsSection />
        <FacilitiesSection />
        <PricingSection />
        <HoursSection />
        <GallerySection />
        <CoursesSection />
        <FAQSection />
        <ReviewsSection />
        <ContactSection />
      </div>
    </main>
    <Footer />
  </>
);

export default Index;
