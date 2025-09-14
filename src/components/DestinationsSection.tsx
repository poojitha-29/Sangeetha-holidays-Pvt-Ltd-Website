import DestinationCard from "./DestinationCard";
import DubaiImg from "@/assets/Dubai.png";
import ThailandImg from "@/assets/Thailand.png";
import VietnamImg from "@/assets/Vietnam.png";
import kashmirImg from "@/assets/kashmir.jpg";
import ootyImg from "@/assets/ooty.png";
import UjjainImg from "@/assets/Ujjain.png";

const DestinationsSection = () => {
  const destinations = [
    {
      image: DubaiImg,
      title: "Dubai",
      price: "Starting From 56,000 PP",
    },
    {
      image: ThailandImg,
      title: "Thailand",
      price: "Starting From 40,000 PP",
    },
    {
      image: VietnamImg,
      title: "Vietnam",
      price: "Starting From 40,000 PP",
    },
    {
      image: kashmirImg,
      title: "Kashmir",
      price: "Starting From 30,000 PP",
    },
      {
      image: ootyImg,
      title: "Ooty",
      price: "Starting From 26,000 PP",
    },
       {
      image: UjjainImg,
      title: "Ujjain & Omkareshwar",
      price: "Starting From 20,000 PP",
    }
  ];

  return (
    <section id="DestinationCard" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Trending Indian Destinations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover India's finest destinations with a handpicked selection of must-visit gems
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={index}
              image={destination.image}
              title={destination.title}
              price={destination.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;