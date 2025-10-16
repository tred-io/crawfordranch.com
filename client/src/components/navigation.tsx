import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0.98);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const isHomePage = location === '/';

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // On home page: fade from transparent (0) to white (1) over 200px
      // On other pages: fade from 0.98 to 1.0 over 100px
      if (isHomePage) {
        const opacity = Math.min(scrollY / 200, 1.0);
        setScrollOpacity(opacity);
      } else {
        const opacity = Math.min(0.98 + (scrollY / 100) * 0.02, 1.0);
        setScrollOpacity(opacity);
      }
    };

    // Initialize opacity on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/outfitting', label: 'Outfitting' },
    { href: '/corporate', label: 'Corporate Retreats' },
    { href: '/activities', label: 'Activities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'py-3' : 'py-4'
      }`}
      style={{ backgroundColor: `rgba(255, 255, 255, ${scrollOpacity})` }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Hamburger Menu */}
          <div className="flex-shrink-0">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-texas-maroon hover:bg-ranch-cream/50 h-14 w-14"
                  aria-label="Open menu"
                >
                  <Menu className="h-10 w-10" style={{ width: '2rem', height: '2rem' }} />
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
                  <Link href="/contact?context=booking&source=mobile-menu">
                    <Button
                      className="w-full bg-texas-maroon text-white hover:bg-texas-maroon-light mt-6 py-6 text-lg font-semibold"
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Book Now
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="w-full border-texas-maroon text-texas-maroon hover:bg-white/50 mt-2"
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
                src="/images/CrawfordRanchLogoHorizontal_alpha_clean.png"
                alt="Crawford Ranch"
                className={`transition-all duration-500 ease-out object-contain ${
                  isScrolled
                    ? 'h-10 md:h-12'
                    : 'h-14 md:h-16 lg:h-20'
                }`}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  filter: 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.9)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.6))'
                }}
              />
            </Link>
          </div>

          {/* Right: Book Now Button - Hidden on mobile */}
          <div className="flex-shrink-0 hidden md:block">
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
