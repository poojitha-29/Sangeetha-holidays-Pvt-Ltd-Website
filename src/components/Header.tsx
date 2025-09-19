import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Menu, User, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activePolicy, setActivePolicy] = useState(null); // track which popup is open

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Destinations", href: "#DestinationCard" },
    { name: "Testimonals", href: "#Testimonals" },
    { name: "Gallery", href: "#Gallery" },
    { name: "About Us", href: "#about" },
  ];

  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    if (storedAuth === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
  };

  // Policy modal content
  const policyContent = {
    terms: {
      title: "📜 Terms & Conditions",
      points: [
        "Booking & Confirmation – Bookings are confirmed only after payment is received.",
        "Pricing – Prices may change due to airline/hotel revisions, currency fluctuations, or taxes.",
        "Responsibilities – We act as an intermediary between customers and airlines, hotels, transport providers. We are not liable for their delays, cancellations, or quality issues.",
        "Travel Documents – Customers must carry valid passport, visa, ID, and comply with travel rules.",
        "Itinerary Changes – Travel plans may be modified due to weather, strikes, government rules, or unforeseen events.",
        "Force Majeure – No liability for delays or cancellations caused by natural disasters, strikes, or political unrest.",
        "User Conduct – Clients are expected to behave responsibly and follow local laws during the trip.",
      ],
    },
    privacy: {
      title: "🔒 Privacy Policy",
      points: [
        "Information We Collect – Name, contact details, payment info, passport/ID (if required for booking).",
        "How We Use Information – To confirm bookings, provide services, send updates, process payments.",
        "Data Sharing – Shared only with airlines, hotels, transport providers, or partners necessary for your booking.",
        "Data Security – We use secure systems to protect your personal and payment details.",
        "Cookies/Tracking – Website may use cookies for improving experience and analytics.",
        "User Rights – You can request access, correction, or deletion of your data anytime.",
        "Updates – Policy may change; updated versions will be posted on our website.",
      ],
    },
    refund: {
      title: "💳 Refund & Cancellation Policy ",
      points: [
        "Non-Refundable Services – Visa fees, insurance, and certain flight/hotel bookings are non-refundable.",
        "Provider Cancellations – If an airline/hotel cancels, refund/alternative will be given as per their policy.",
        "Agency Service Fees – Convenience or service charges are usually non-refundable.",
        "Refund Timeline – Refunds will be processed within 25-30 working days after confirmation from providers.",
        "No-Show Policy – No refunds for travelers who fail to show up at departure without prior notice.",
      ],
    },
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo + Text */}
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold text-darkblue-600">
              Sangeetha Holidays Pvt Ltd
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
  <a
  href="https://wa.me/918106868686?text=Hello%20I%20would%20like%20to%20enquire%20about%20a%20trip"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="ghost" size="sm" className="text-foreground flex items-center">
    <FaWhatsapp className="h-4 w-4 mr-1 text-green-500" />
    Enquire Now
  </Button>
</a>


            {/* Policies Dropdown */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground flex items-center"
              >
                Policy
              </Button>
              <div className="absolute right-0 hidden group-hover:flex flex-col items-start bg-white text-black p-4 shadow-xl mt-3 min-w-[220px] rounded-xl space-y-2">
                <button
                  onClick={() => setActivePolicy("terms")}
                  className="hover:underline text-left w-full"
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => setActivePolicy("privacy")}
                  className="hover:underline text-left w-full"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setActivePolicy("refund")}
                  className="hover:underline text-left w-full"
                >
                  Refund & Cancellation Policy
                </button>
              </div>
            </div>

            {/* Admin Login */}
            <div className="relative group">
              <Button
                variant="ghost"
                size="sm"
                className="text-foreground flex items-center"
              >
                <User className="h-4 w-4 mr-1" />
                Admin Login
              </Button>

              <div className="absolute right-0 hidden group-hover:flex flex-col items-start bg-white text-black p-6 shadow-xl mt-3 min-w-[300px] max-w-xs z-50 rounded-xl space-y-4">
                {!isAuthenticated ? (
                  <>
                    <h3 className="text-lg font-bold text-gray-800">
                      Member Login
                    </h3>
                    <form onSubmit={handleLogin} className="w-full space-y-4">
                      <div>
                        <label className="block text-sm font-medium">
                          Username
                        </label>
                        <input
                          type="text"
                          placeholder="Enter username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium">
                          Password
                        </label>
                        <input
                          type="password"
                          placeholder="Enter password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                          required
                        />
                      </div>
                      {loginError && (
                        <p className="text-red-500 text-sm">{loginError}</p>
                      )}
                      <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-all"
                      >
                        Login
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="space-y-3">
                    <a
                      href="https://poojitha-29.github.io/trip-packet-pdf-gen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      SHPL Itinerary Generator
                    </a>
                    <a
                      href="https://preview--flight-horizon-reminders.lovable.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Flight Reminder App
                    </a>
                    <a
                      href="https://sangeethaholidayspvtltd.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:underline"
                    >
                      Starhealth Specials
                    </a>
                    <button
                      onClick={handleLogout}
                      className="text-red-600 hover:underline font-medium"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
              <div className="border-t border-border pt-4 space-y-2">
 <a
  href="https://wa.me/918106868686?text=Hello%20I%20would%20like%20to%20enquire%20about%20a%20trip"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="ghost" size="sm" className="text-foreground flex items-center">
    <FaWhatsapp size={28} className="h-4 w-4 mr-1 text-green-500" />
    Enquire Now
  </Button>
</a>


                {/* Policy mobile */}
                <button
                  onClick={() => setActivePolicy("terms")}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  Terms & Conditions
                </button>
                <button
                  onClick={() => setActivePolicy("privacy")}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setActivePolicy("refund")}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  Refund & Cancellation Policy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Policy Modal */}
      {activePolicy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative">
            <button
              onClick={() => setActivePolicy(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">
              {policyContent[activePolicy].title}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
              {policyContent[activePolicy].points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
