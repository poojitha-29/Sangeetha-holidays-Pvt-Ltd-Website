import gallery1 from "@/assets/pic1.png";
import gallery2 from "@/assets/pic2.png";
import gallery3 from "@/assets/pic3.png";
import gallery4 from "@/assets/pic4.png";
import gallery5 from "@/assets/pic5.png";
import gallery7 from "@/assets/pic7.png";
import gallery8 from "@/assets/pic8.jpg";
import gallery9 from "@/assets/pic9.jpg";
import gallery10 from "@/assets/pic10.jpg";
import gallery11 from "@/assets/pic11.jpg";

const TravelGallerySection = () => {
  const galleryImages = [
    {
      src: gallery1,
      alt: "Tropical beach sunset with palm trees",
      caption: "Beach Paradise"
    },
    {
      src: gallery5,
      alt: "Mountain landscape with snow peaks",
      caption: "Mountain Adventures"
    },
    {
      src: gallery8,
      alt: "Ancient temple architecture",
      caption: "Cultural Heritage"
    },
    {
      src: gallery4,
      alt: "Local market with colorful spices",
      caption: "Local Experiences"
    },
    {
      src: gallery7,
      alt: "Luxury resort infinity pool",
      caption: "Luxury Retreats"
    },
    {
      src: gallery11,
      alt: "Wildlife safari scene",
      caption: "Wildlife Safari"
    },
     {
      src: gallery9,
      alt: "Ancient temple architecture",
      caption: "Cultural Heritage"
    },
     {
      src: gallery10,
      alt: "Ancient temple architecture",
      caption: "Cultural Heritage"
    },
      {
      src: gallery2,
      alt: "Ancient temple architecture",
      caption: "Cultural Heritage"
    }
  ];

  return (
    <section id="Gallery" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Travel Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by stunning destinations and unforgettable moments captured by our travelers
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-square hover:shadow-xl transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">
                  {image.caption}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelGallerySection;