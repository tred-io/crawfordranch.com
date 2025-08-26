import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link, useLocation } from "wouter";
import { CattleBrandIcon } from "@/components/icons/ranch-icons";
import logoImage from "@assets/logo_1754206429175.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/events', label: 'Events' },
    { href: '/outfitter', label: 'Outfitter' },
    { href: '/gallery', label: 'Gallery' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            {/* Logo space reserved for floating logo */}
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors font-medium ${
                    location === item.href 
                      ? 'text-texas-maroon' 
                      : 'text-ranch-brown hover:text-texas-maroon'
                  }`}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/contact">
                <Button className="bg-texas-maroon text-white hover:bg-texas-maroon-light">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-ranch-brown" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-left px-3 py-2 transition-colors font-medium ${
                        location === item.href 
                          ? 'text-texas-maroon' 
                          : 'text-ranch-brown hover:text-texas-maroon'
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
                      className="bg-texas-maroon text-white hover:bg-texas-maroon-light mt-4"
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Contact
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
