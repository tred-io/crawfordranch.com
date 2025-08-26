import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingLogo from "@/components/floating-logo";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { LonghornIcon, StarIcon, RopeIcon, HorseshoeIcon, BluesonnetIcon } from "@/components/icons/ranch-icons";
import heroImage from "@assets/IMG_2196_1756230374363.jpg";
import barnImage from "@assets/IMG_0518_1754201480310.jpg";

export default function Home() {

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <FloatingLogo />

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("${heroImage}")`
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 pt-24">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-merriweather font-black mb-6 leading-tight">
            <span className="block sm:inline">Four Generations of</span>
            <span className="block sm:inline"> Texas Heritage</span><br className="hidden sm:block" />
            <span className="text-white block sm:inline">In the Beautiful Hill Country</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-crimson leading-relaxed">
            A generational cattle and hunting ranch where families gather, friends connect, and memories are made.<br />
            Experience the perfect blend of adventure and relaxation in one of Texas's most beautiful landscapes.
          </p>
          <div className="flex justify-center">
            <Link href="/events">
              <Button className="bg-texas-maroon hover:bg-texas-maroon-light text-white px-8 py-4 text-lg font-semibold">
                Plan Your Event
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
              <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">A Testament to Family, Tradition & the Great Outdoors</h2>
              <p className="text-lg text-warm-gray leading-relaxed">
                Nestled in the heart of the breathtaking Texas Hill Country, our generational cattle and hunting ranch stands as 
                a testament to the enduring spirit of family, tradition, and the great outdoors. For over four generations, we have 
                cultivated this land, not just as a business but as a way of life.
              </p>
              <p className="text-lg text-warm-gray leading-relaxed">
                Our ranch is now a place where families gather, friends connect, and memories are made. We invite visitors to 
                immerse themselves in the beauty of the Texas Hill Country, where nature and heritage intertwine to create 
                unforgettable experiences amid stunning landscapes.
              </p>
              
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
