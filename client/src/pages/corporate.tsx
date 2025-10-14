import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DecorativeDivider from "@/components/decorative-divider";
import { Check, Users, Coffee, Target, Lightbulb } from "lucide-react";
import landscapeImage from "@assets/IMG_3326_1754202418292.jpg";
import barnImage from "@assets/IMG_0518_1754201480310.jpg";

export default function Corporate() {
  const benefits = [
    {
      icon: Users,
      title: "Team Building",
      description: "Foster collaboration through outdoor activities and ranch experiences"
    },
    {
      icon: Coffee,
      title: "Private Meeting Spaces",
      description: "Dedicated venues for productive sessions away from office distractions"
    },
    {
      icon: Target,
      title: "Strategic Planning",
      description: "Clear thinking in a peaceful environment surrounded by nature"
    },
    {
      icon: Lightbulb,
      title: "Creative Workshops",
      description: "Inspire innovation with hands-on activities and unique settings"
    }
  ];

  const amenities = [
    "Private meeting spaces with WiFi",
    "Natural amphitheater for larger gatherings",
    "Catering services available",
    "Team building activities (cattle work, trail rides)",
    "Indoor/outdoor venue options",
    "AV equipment support",
    "Quiet reflection areas",
    "Customizable retreat packages"
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${landscapeImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
              Corporate Retreats in the Texas Hill Country
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-inter font-light leading-relaxed">
              Inspire your team with a change of scenery. Elevate productivity and morale in our tranquil ranch setting.
            </p>
            <Link href="/contact?context=corporate&eventType=Corporate%20Retreat&source=corporate-hero">
              <Button className="bg-white text-texas-maroon hover:bg-ranch-cream border-2 border-white/40 px-8 py-6 text-lg font-semibold">
                Plan Your Retreat
              </Button>
            </Link>
          </div>
        </section>

        {/* Textured Accent Bar */}
        <div className="section-bar texture-map py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xl font-playfair text-ranch-brown italic">
              "The perfect escape for teams seeking inspiration and connection"
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-texas-maroon mb-4">
                Why Choose Crawford Ranch
              </h2>
              <p className="text-lg text-warm-gray max-w-2xl mx-auto">
                Our ranch provides the perfect balance of professional amenities and natural inspiration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-ranch-cream/50 hover:bg-ranch-cream transition-colors">
                  <benefit.icon className="h-12 w-12 text-sage-teal mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-semibold text-texas-maroon mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-warm-gray font-inter">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 bg-gradient-to-b from-white to-ranch-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-texas-maroon mb-6">
                  Retreat Amenities & Services
                </h2>
                <p className="text-lg text-warm-gray mb-8 font-inter leading-relaxed">
                  Everything your team needs for a successful and memorable retreat experience in the heart of Texas Hill Country.
                </p>

                <ul className="space-y-4 mb-8">
                  {amenities.map((amenity, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-sage-teal mr-3 flex-shrink-0 mt-1" />
                      <span className="text-ranch-brown font-inter">{amenity}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact?context=corporate&eventType=Corporate%20Retreat&source=corporate-amenities">
                  <Button className="bg-texas-maroon text-white hover:bg-texas-maroon-light px-8 py-6 text-lg font-semibold">
                    Request Information
                  </Button>
                </Link>
              </div>

              <div className="relative">
                <img
                  src={barnImage}
                  alt="Crawford Ranch venue"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        <DecorativeDivider />
      </div>
      <Footer />
    </div>
  );
}
