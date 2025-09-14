import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  rating: number;
  review: string;
}

const TestimonialCard = ({ name, location, rating, review }: TestimonialCardProps) => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Rating Stars */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Review Text */}
      <p className="text-muted-foreground mb-4 italic">
        "{review}"
      </p>

      {/* Customer Info */}
      <div className="border-t border-border pt-4">
        <h4 className="font-semibold text-foreground">{name}</h4>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ananth",
      location: "Hyderabad, India",
      rating: 5,
      review: "We went to Andaman in March 9th... we spent four days...we enjoyed a lot..receiving and pick up is very nice..we suggest this tours and travels like honeymoon and family trips..facilities are very good..Accommodation and hotels are fine. More over, we are planning another trip with same travels."
    },
    {
      name: "G.S.Sirisha",
      location: "Hyderabad, India",
      rating: 5,
      review: "We travelled to Malaysia trip planned by Sangeeta Tours in the mid of September. That was a very well organized trip and he was always ready on call to help anytime. Best Experience, will definitely plan with him again in the future.."
    },
    {
      name: "MSN Murthy",
      location: " Ananthapur, India",
      rating: 5,
      review: "went to Australia from May 3 to 27 th May to Melbourne, Sydney and Brisbane. Booked through Sangeetha travels. Value for Money. All 4 star hotels and Indian food arrangment. very well Satisfied."
    }
  ];

  return (
    <section id="Testimonals" className="py-16 md:py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Our Travelers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from real travelers who trusted us with their precious memories
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              location={testimonial.location}
              rating={testimonial.rating}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;