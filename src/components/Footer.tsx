import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentTime = new Date().toLocaleTimeString();

  const socialLinks = [
    { icon: <Facebook className="h-6 w-6" />, href: "https://www.facebook.com/share/1BS8K7vX4d/" },
    { icon: <Instagram className="h-6 w-6" />, href: "https://www.instagram.com/sangeethaholidays?igsh=MXF5Z2x0emlzajY1YQ==" },
    { icon: <Youtube className="h-6 w-6" />, href: "https://youtube.com/@sangeethaholidays302?si=LJVLtwnn0UzQ355B" },
  ];

  const stats = [
    { value: 956, label: "Total Visitors" },
    { value: 40, label: "Today" },
    { value: 3, label: "Online Now" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-blue-600 to-green-500 text-white py-10 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-black/20 rounded-full blur-3xl animate-ping"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 relative z-10">
        
        {/* Social Media Links */}
        <div className="flex space-x-6">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="p-3 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Website Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/20 rounded-2xl p-6 shadow-lg backdrop-blur-md">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl font-extrabold">{stat.value}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
          <div className="text-center">
            <div className="text-sm opacity-70">Time</div>
            <div className="text-lg font-semibold">{currentTime}</div>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-sm mt-8 opacity-70 relative z-10">
        © {new Date().getFullYear()} Sangeetha Holidays Pvt Ltd | All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
