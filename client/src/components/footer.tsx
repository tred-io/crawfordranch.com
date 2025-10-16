import { Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "wouter";
import { CattleBrandIcon } from "@/components/icons/ranch-icons";
import logoImage from "@assets/logo_1754206429175.png";

export default function Footer() {
  const quickLinks = [
    { href: '/about', label: 'About the Ranch' },
    { href: '/events', label: 'Events' },
    { href: '/outfitting', label: 'Outfitting' },
    { href: '/corporate', label: 'Corporate Retreats' },
    { href: '/activities', label: 'Activities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    { href: '/events', label: 'Wedding Venues' },
    { href: '/outfitting', label: 'Hunting & Outfitting' },
    { href: '/corporate', label: 'Corporate Retreats' },
    { href: '/local-attractions', label: 'Local Attractions' },
  ];

  return (
    <footer className="bg-ranch-brown text-ranch-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="Crawford Ranch Logo" 
                className="h-16 w-auto"
              />
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
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-sunset-orange transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-ranch-cream/20 mt-8 pt-8">
          <div className="bg-ranch-brown -mx-8 -mb-12 px-8 py-6 text-center">
            <p className="text-ranch-cream">&copy; 2025 Crawford Ranch. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
