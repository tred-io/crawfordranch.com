import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { LonghornIcon, StarIcon, RopeIcon, HorseshoeIcon, BluesonnetIcon } from "@/components/icons/ranch-icons";
import heroImage from "@assets/IMG_2788_1754201480313.jpg";
import barnImage from "@assets/IMG_0518_1754201480310.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroImage}")`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-20">
          <h1 className="text-5xl md:text-7xl font-merriweather font-black mb-6 leading-tight">
            Welcome to<br />
            <span className="text-sunset-orange">Crawford Ranch</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-crimson leading-relaxed">
            Premier event venue and corporate retreat center in Lampasas County, Texas.<br />
            Weddings, hunting parties, family getaways, and Christian retreats since 1880s.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/events">
              <Button className="bg-texas-maroon hover:bg-texas-maroon-light text-white px-8 py-4 text-lg font-semibold">
                Plan Your Event
              </Button>
            </Link>
            <Link href="/activities">
              <Button
                variant="outline"
                className="border-2 border-white bg-transparent hover:bg-white hover:text-ranch-brown text-white px-8 py-4 text-lg font-semibold"
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

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={barnImage} 
                alt="Historic Crawford Ranch barn with cattle corrals" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">Texas Event Venue & Corporate Retreat Center</h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                Crawford Ranch is a premier event venue and corporate retreat center nestled in Lampasas County, Central Texas. 
                Our working cattle ranch spans hundreds of acres of pristine landscape with heritage oak trees, crystal-clear creeks, 
                and authentic Texas charm that makes every event unforgettable.
              </p>
              <p className="text-lg text-warm-gray leading-relaxed">
                From intimate ranch weddings to large corporate team-building retreats, hunting parties to Christian retreats, 
                we provide the perfect Texas Hill Country setting. Our family has been welcoming guests to experience authentic 
                ranch hospitality while maintaining our multi-generational cattle operation since the 1880s.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center flex flex-col items-center">
                  <HorseshoeIcon className="text-texas-maroon h-8 w-8 mb-2" />
                  <div className="text-3xl font-bold text-texas-maroon">500+</div>
                  <div className="text-warm-gray">Acres</div>
                </div>
                <div className="text-center flex flex-col items-center">
                  <BluesonnetIcon className="text-texas-maroon h-8 w-8 mb-2" />
                  <div className="text-3xl font-bold text-texas-maroon">4</div>
                  <div className="text-warm-gray">Generations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Rope Divider */}
      <div className="bg-ranch-cream py-8">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
          <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
          <RopeIcon className="text-warm-gray h-4 w-32" />
          <LonghornIcon className="text-texas-maroon h-8 w-16 mx-4" />
          <RopeIcon className="text-warm-gray h-4 w-32" />
          <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
