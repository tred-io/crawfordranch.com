import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DecorativeDivider from "@/components/decorative-divider";
import { MapPin, Wine, Music, Home } from "lucide-react";
import bluebonnetImage from "@assets/IMG_2196_1756230374363.jpg";

export default function LocalAttractions() {
  const attractions = [
    {
      icon: Wine,
      title: "Texas Hill Country Wineries",
      description: "Explore world-class wineries and vineyards just minutes from the ranch. The Texas Hill Country is home to over 50 wineries offering tastings, tours, and stunning views.",
      distance: "15-30 minutes"
    },
    {
      icon: Music,
      title: "Live Music & Entertainment",
      description: "Experience authentic Texas music and culture in nearby towns like Fredericksburg and Luckenbach. From honky-tonks to concert halls, the Hill Country has a rich musical heritage.",
      distance: "20-40 minutes"
    },
    {
      icon: Home,
      title: "Historic Towns",
      description: "Visit charming German heritage towns with unique shops, museums, and restaurants. Fredericksburg and Comfort offer rich history and small-town hospitality.",
      distance: "25-35 minutes"
    },
    {
      icon: MapPin,
      title: "Natural Wonders",
      description: "Discover stunning natural attractions including Enchanted Rock State Natural Area, scenic rivers, and countless hiking trails throughout the Hill Country.",
      distance: "30-45 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${bluebonnetImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
              Local Central Texas Attractions
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-inter font-light leading-relaxed">
              Discover the best of the Texas Hill Country. From wineries to historic towns, adventure awaits beyond the ranch.
            </p>
          </div>
        </section>

        {/* Attractions Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-texas-maroon mb-4">
                Explore the Texas Hill Country
              </h2>
              <p className="text-lg text-warm-gray max-w-2xl mx-auto font-inter">
                Crawford Ranch is perfectly positioned to access the best attractions and experiences Central Texas has to offer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {attractions.map((attraction, index) => (
                <div
                  key={index}
                  className="bg-ranch-cream/50 rounded-lg p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-sage-teal/30"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-sage-teal/10 p-3 rounded-lg mr-4">
                      <attraction.icon className="h-8 w-8 text-sage-teal-dark" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-playfair font-bold text-texas-maroon mb-2">
                        {attraction.title}
                      </h3>
                      <p className="text-sm text-sage-teal-dark font-semibold font-inter">
                        {attraction.distance} from ranch
                      </p>
                    </div>
                  </div>
                  <p className="text-warm-gray font-inter leading-relaxed">
                    {attraction.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-white to-ranch-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-texas-maroon mb-6">
              Plan Your Hill Country Experience
            </h2>
            <p className="text-xl text-warm-gray mb-8 font-inter leading-relaxed">
              Let us help you create the perfect itinerary combining ranch activities with local attractions for an unforgettable Texas Hill Country experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact?context=local-attractions&source=attractions-cta">
                <Button className="bg-texas-maroon text-white hover:bg-texas-maroon-light px-8 py-6 text-lg font-semibold">
                  Contact Us
                </Button>
              </Link>
              <Link href="/activities">
                <Button
                  variant="outline"
                  className="border-2 border-sage-teal text-sage-teal-dark hover:bg-sage-teal hover:text-white px-8 py-6 text-lg font-semibold"
                >
                  View Ranch Activities
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <DecorativeDivider />
      </div>
      <Footer />
    </div>
  );
}
