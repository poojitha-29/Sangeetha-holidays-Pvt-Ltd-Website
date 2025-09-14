import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroYacht1 from "@/assets/hero-yacht.jpg";
import heroYacht2 from "@/assets/hero-yacht2.jpg";
import heroYacht3 from "@/assets/hero-yacht3.jpg";
import heroYacht4 from "@/assets/hero-yacht4.jpg";
import heroYacht5 from "@/assets/hero-yacht5.jpg";
import heroYacht6 from "@/assets/hero-yacht6.jpg";

const images = [heroYacht1, heroYacht2, heroYacht3,heroYacht4,heroYacht5,heroYacht6];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up interval
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-white/90 text-sm md:text-base mb-4 font-medium">
              Explore the World with us
            </p>

            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8">
              Plan your
              <br />
              next memory
              <br />
              with us?
            </h1>

            <a href="#Contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-3 text-lg mb-12"
              >
                Contact Us
              </Button>
            </a>

            <div className="flex items-center text-white/80 text-sm">
              <MapPin className="h-4 w-4 mr-2" />
              <span>
                Somewhere on the seas of Phang Nga Bay near Phuket, Thailand
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden space-y-2 bg-Green-900 py-3">
        <p className="animate-scrollLeft whitespace-nowrap text-lg md:text-xl font-semibold tracking-wide text-white/80">
          ✈️ Air Ticketing &nbsp;&nbsp; • &nbsp;&nbsp; 🏨 Hotel Bookings &nbsp;&nbsp; • &nbsp;&nbsp; 📋 Visa & Passport Assistance &nbsp;&nbsp; • &nbsp;&nbsp; 📦 Customized Holidays
        </p>
        <p className="animate-scrollRight whitespace-nowrap text-lg md:text-xl font-semibold tracking-wide text-white/80">
          🚢 Cruise Packages &nbsp;&nbsp; • &nbsp;&nbsp; 💍 Destination Weddings &nbsp;&nbsp; • &nbsp;&nbsp; 🧳 Family Packages &nbsp;&nbsp; • &nbsp;&nbsp; 🌍 International and Domestic Tours
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
