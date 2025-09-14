import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// ✅ Features array for About section
const features = [
  {
    icon: <span className="text-blue-600">🌍</span>,
    title: "Global Reach",
    description: "Curated travel experiences across the world.",
  },
  {
    icon: <span className="text-green-600">✨</span>,
    title: "Unique Adventures",
    description: "Handpicked tours designed for unforgettable journeys.",
  },
  {
    icon: <span className="text-yellow-600">💼</span>,
    title: "Expert Guidance",
    description: "Our experts help you plan with ease.",
  },
  {
    icon: <span className="text-red-600">❤️</span>,
    title: "Customer Care",
    description: "We provide 24/7 assistance during your trips.",
  },
];

const ContactUsSection = () => {
  // ✅ Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // ✅ Google Maps URL
  const googleMapsUrl =
    "https://www.google.com/maps?q=M/S+Trinity+Work+Hub+Unit+No+1012,+10th+floor+Manjeera+Trinity+Corporate,+Beside+Lulu+Hyper+market,+Kphb+Phase-3,+Hyderabad,+Telangana+500072,+India";

  // ✅ WhatsApp submit handler
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, destination, message } = formData;

    const whatsappMessage = `Hello, I would like to enquire about a trip.%0A
*Name:* ${firstName} ${lastName}%0A
*Email:* ${email}%0A
*Phone:* ${phone}%0A
*Destination:* ${destination}%0A
*Message:* ${message}`;

    const phoneNumber = "918106868686"; // Your WhatsApp number (without +)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* ✅ About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div>
              <img
                src="https://static.toiimg.com/photo/msid-68113999,width-96,height-65.cms"
                alt="About Wanderlust"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            {/* About Content */}
            <div>
              <h2 className="text-4xl font-bold mb-6">
                We Help You Discover the World
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2017, Sangeetha Holidays has been helping travelers
                create unforgettable memories around the globe. Our mission is
                to make travel accessible, enjoyable, and enriching for everyone.
              </p>
              <p className="text-gray-600 mb-8">
                We handpick each destination and experience to ensure the highest
                quality and authentic travel adventures for our clients.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Contact Section */}
      <section id="Contact" className="py-16 md:py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to plan your next adventure? Get in touch with our travel
              experts
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        M/S Trinity Work Hub at Unit No 1012, 10th floor Manjeera
                        Trinity corporate, Beside Lullu Hyper market Kphb phase-3
                        <br />
                        Hyderabad, Telangana 500072
                        <br />
                        India
                      </p>
                      <a
                        href={googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block bg-primary text-white px-4 py-2 rounded-lg shadow-md hover:bg-primary/90 transition"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">
                        +91 8106868686
                        <br />
                        +91 8978903318
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">
                        venkatasrikanth@sangeethaholidays.com
                        <br />
                        operations@sangeethaholidays.com
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">
                        Business Hours
                      </h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 7:00 PM
                        <br />
                        Saturday: 10:00 AM - 5:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Send us a Message
              </h3>
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Your first name"
                      className="w-full"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Your last name"
                      className="w-full"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 12345 67890"
                    className="w-full"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Interested Destination
                  </label>
                  <Input
                    id="destination"
                    type="text"
                    placeholder="e.g., Kerala, Goa, Rajasthan"
                    className="w-full"
                    value={formData.destination}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your travel plans, budget, dates, and any special requirements..."
                    className="w-full min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Send via WhatsApp
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsSection;
