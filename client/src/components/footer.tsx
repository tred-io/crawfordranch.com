import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  const quickLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/events', label: 'Events' },
    { href: '/activities', label: 'Activities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    'Wedding Venues',
    'Corporate Retreats',
    'Christian Retreats',
    'Hunting Trips',
    'Creek Fishing',
  ];

  return (
    <footer className="bg-ranch-brown text-ranch-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-playfair font-bold mb-4">
              🐄 Crawford Ranch
            </div>
            <p className="text-ranch-cream/80 mb-4 leading-relaxed">
              A multi-generational Central Texas cattle ranch dedicated to creating unforgettable experiences 
              for weddings, corporate events, and outdoor adventures.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-ranch-cream/60 hover:text-sunset-orange transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-ranch-cream/60 hover:text-sunset-orange transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-ranch-cream/60 hover:text-sunset-orange transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-ranch-cream/80">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-sunset-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-ranch-cream/80">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ranch-cream/20 mt-8 pt-8 text-center text-ranch-cream/60">
          <p>&copy; 2024 Crawford Ranch. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
