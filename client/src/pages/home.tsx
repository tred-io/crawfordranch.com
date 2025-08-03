import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { LonghornIcon, StarIcon, RopeIcon } from "@/components/icons/ranch-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080")'
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
            Welcome to<br />
            <span className="text-sunset-orange">Crawford Ranch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-crimson leading-relaxed">
            A multi-generational Central Texas cattle ranch perfect for unforgettable events,<br />
            outdoor adventures, and authentic ranch experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button className="bg-texas-red hover:bg-texas-red-light text-white px-8 py-4 text-lg font-semibold">
                Plan Your Event
              </Button>
            </Link>
            <Link href="/activities">
              <Button
                variant="outline"
                className="border-2 border-white hover:bg-white hover:text-ranch-brown text-white px-8 py-4 text-lg font-semibold"
              >
                Explore Activities
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white text-2xl h-8 w-8" />
        </div>
      </section>

      {/* Decorative Rope Divider */}
      <div className="bg-ranch-cream py-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
          <StarIcon className="text-texas-red h-6 w-6 mx-4" />
          <RopeIcon className="text-warm-gray h-4 w-32" />
          <LonghornIcon className="text-texas-red h-8 w-16 mx-4" />
          <RopeIcon className="text-warm-gray h-4 w-32" />
          <StarIcon className="text-texas-red h-6 w-6 mx-4" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
