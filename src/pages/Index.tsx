import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TravelGallerySection from "@/components/TravelGallerySection";
import ContactUsSection from "@/components/ContactUsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DestinationsSection />
        <TestimonialsSection />
        <TravelGallerySection />
        <ContactUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
