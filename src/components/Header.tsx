import { Button } from "@/components/ui/button";
import { Menu, X, Phone, User } from "lucide-react";
import { useEffect, useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#" },
    { name: "Destinations", href: "#DestinationCard" },
    { name: "Testimonals", href: "#Testimonals" },
    { name: "Gallery", href: "#Gallery" },
    { name: "About Us", href: "#about" },
  ];
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [loginError, setLoginError] = useState('');

useEffect(() => {
  const storedAuth = localStorage.getItem('isAuthenticated');
  if (storedAuth === 'true') {
    setIsAuthenticated(true);
  }
}, []);

const handleLogin = (e) => {
  e.preventDefault();
  if (username === 'admin' && password === 'password') {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
    setLoginError('');
  } else {
    setLoginError('Invalid username or password');
  }
};

const handleLogout = () => {
  setIsAuthenticated(false);
  localStorage.removeItem('isAuthenticated');
};
  

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       {/* Logo + Text */}
  <div className="flex justify-between items-center h-16"> {/* Logo */} <div className="flex-shrink-0"> <div className="text-2xl font-bold text-darkblue-600"> Sangeetha Holidays Pvt Ltd </div> </div>



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
  <Button variant="ghost" size="sm" className="text-foreground">
    <Phone className="h-4 w-4 mr-1" />
    Enquire Now
  </Button>
</a>

           <div className="relative group">
  <Button variant="ghost" size="sm" className="text-foreground flex items-center">
    <User className="h-4 w-4 mr-1" />
    Admin Login
  </Button>

  <div className="absolute right-0 hidden group-hover:flex group-focus-within:flex flex-col items-start bg-white text-black p-6 shadow-xl mt-3 min-w-[300px] max-w-xs z-50 rounded-xl space-y-4 transition-all duration-200">
    {!isAuthenticated ? (
      <>
        <h3 className="text-lg font-bold text-gray-800">Member Login</h3>
        <form onSubmit={handleLogin} className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium">Username</label>
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
            <label className="block text-sm font-medium">Password</label>
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
              <div className="border-t border-border pt-4">
                <a
                  href="https://wa.me/918106868686"
  target="_blank"
  rel="noopener noreferrer"
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  Enquire Now 
                </a>
                <a
                  href="#"
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;