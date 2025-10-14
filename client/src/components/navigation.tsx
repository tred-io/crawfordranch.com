import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import wideLogoImage from "@assets/logo_wide_1754206705389.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events & Outfitting' },
    { href: '/corporate', label: 'Corporate Retreats' },
    { href: '/activities', label: 'Activities / Trails' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      isScrolled
        ? 'bg-white shadow-lg py-3'
        : 'bg-white/98 shadow-md py-6'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Hamburger Menu */}
          <div className="flex-shrink-0">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-texas-maroon hover:bg-ranch-cream/50 h-12 w-12"
                  aria-label="Open menu"
                >
                  <Menu className="h-8 w-8" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px] bg-ranch-cream">
                <nav className="flex flex-col space-y-1 mt-8" role="navigation" aria-label="Main navigation">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-left px-4 py-3 transition-colors font-medium text-lg rounded-md ${
                        location === item.href
                          ? 'text-texas-maroon bg-white/50'
                          : 'text-ranch-brown hover:text-texas-maroon hover:bg-white/30'
                      }`}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button
                      className="w-full bg-texas-maroon text-white hover:bg-texas-maroon-light mt-6"
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src={wideLogoImage}
                alt="Crawford Ranch"
                className={`transition-all duration-500 ease-out object-contain ${
                  isScrolled
                    ? 'h-12 md:h-14'
                    : 'h-16 md:h-20 lg:h-24'
                }`}
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </Link>
          </div>

          {/* Right: Book Now Button */}
          <div className="flex-shrink-0">
            <Link href="/contact?context=booking&source=header">
              <Button
                className="bg-texas-maroon text-white hover:bg-texas-maroon-light hover:shadow-lg transition-all duration-300 font-semibold px-6 py-5 text-base"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
