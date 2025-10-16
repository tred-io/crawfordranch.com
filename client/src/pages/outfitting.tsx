import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DecorativeDivider from "@/components/decorative-divider";
import FeatureSlab from "@/components/blocks/FeatureSlab";
import CtaBand from "@/components/blocks/CtaBand";
import { Target, MapPin, Users, Award } from "lucide-react";
import huntingImage from "@assets/IMG_7597_1754202325477.jpg";
import deerImage from "@assets/IMG_5829_1754205067288.jpg";
import cardinalImage from "@assets/cardinal_1756393988044.png";

export default function Outfitting() {
  const features = [
    { icon: Target, label: "Expert Guides" },
    { icon: MapPin, label: "Prime Hunting Grounds" },
    { icon: Users, label: "Group Hunting" },
    { icon: Award, label: "High Success Rate" }
  ];

  const whitetailFeatures = [
    "Trophy-class whitetail deer",
    "Year-round hunting seasons",
    "Professional field dressing",
    "Taxidermy recommendations"
  ];

  const ranchFeatures = [
    "800+ acres of Hill Country",
    "Managed game populations",
    "Game processing facilities",
    "Trophy preparation area"
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-24">

        {/* Hero Header */}
        <section className="py-16 bg-ranch-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="eyebrow mb-4 text-texas-maroon">PREMIER OUTFITTING</p>
            <h1 className="display text-ranch-brown mb-6">
              <em>Hunting</em> the Hill Country
            </h1>
            <p className="copy text-warm-gray max-w-3xl mx-auto">
              Welcome to our premier high-fence whitetail outfitting experience in the beautiful Texas Hill Country.
              Whether you're an experienced hunter or new to the sport, our expert guides deliver unforgettable hunting experiences.
            </p>
          </div>
        </section>

        {/* Main Content Section - Start with content, no slab */}
        <section className="py-20 bg-white texture-floral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="stamp" style={{ top: '-20px', left: '-20px' }}></div>
                <img
                  src={huntingImage}
                  alt="White-tail deer and wild turkeys feeding at ranch"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>

              <div className="space-y-6">
                <h2 className="display text-texas-maroon">
                  <em>Exceptional</em> Hunting Experience
                </h2>
                <p className="copy text-warm-gray">
                  Our ranch provides professional outfitting services in the heart of the Texas Hill Country. With easy access
                  to nearby towns for dining and supplies, you'll enjoy the perfect balance of wilderness adventure and convenience.
                </p>
                <p className="copy text-warm-gray">
                  Join us for an adventure that combines exceptional hunting opportunities and the stunning natural beauty of
                  the Hill Country, creating memories that will last a lifetime.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <feature.icon className="text-sage-teal h-5 w-5" />
                      <span className="text-ranch-brown font-inter">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Cards */}
            <div className="text-center mb-12">
              <h2 className="display text-texas-maroon mb-4">
                <em>Our</em> Hunting Services
              </h2>
              <p className="copy text-warm-gray max-w-2xl mx-auto">
                Premium hunting experiences with expert guides and world-class facilities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="card bg-white rounded-lg overflow-hidden">
                <div className="relative">
                  {/* Cardinal decoration */}
                  <div className="absolute -bottom-2 right-4 z-20">
                    <img
                      src={cardinalImage}
                      alt="Cardinal"
                      className="w-6 opacity-85"
                    />
                  </div>
                  <img
                    src={deerImage}
                    alt="Whitetail deer at Crawford Ranch"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-texas-maroon mb-4">
                    High-Fence Whitetail Hunting
                  </h3>
                  <p className="copy text-warm-gray mb-4">
                    Our high-fence operation ensures excellent hunting opportunities with mature whitetail deer.
                    The controlled environment allows for sustainable wildlife management while providing
                    hunters with the best possible experience.
                  </p>
                  <ul className="space-y-2">
                    {whitetailFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sage-teal mr-2">•</span>
                        <span className="text-ranch-brown font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="card card--accent bg-white rounded-lg overflow-hidden">
                <div className="bg-ranch-cream h-48 flex items-center justify-center">
                  <p className="text-warm-gray text-center font-inter">Ranch facilities</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-texas-maroon mb-4">
                    Ranch & Facilities
                  </h3>
                  <p className="copy text-warm-gray mb-4">
                    Our ranch offers exceptional hunting grounds and professional facilities to support
                    your hunting adventure. From game processing to trophy preparation, we provide
                    everything you need for a successful hunt.
                  </p>
                  <ul className="space-y-2">
                    {ranchFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-sage-teal mr-2">•</span>
                        <span className="text-ranch-brown font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Slab in middle - Different placement */}
        <FeatureSlab
          kicker="TROPHY WHITETAIL"
          title="Your Hunt Awaits"
          pattern="blue"
          useTexture2Pattern={true}
          cta={
            <Link href="/contact?context=outfitting&eventType=Hunting%20Inquiry&source=outfitting-mid">
              <a className="btn-accent">Book Your Hunt</a>
            </Link>
          }
        >
          <p className="mb-4">
            Experience exceptional hunting opportunities in our managed high-fence environment. With over 800 acres of
            prime Hill Country terrain, we provide the ideal setting for pursuing trophy whitetail deer.
          </p>
          <p>
            Our professional outfitting services combine expert guidance, quality game management, and authentic Texas
            hospitality to ensure a memorable hunting experience.
          </p>
        </FeatureSlab>

        <DecorativeDivider showBarn={true} />
      </div>
      <Footer />
    </div>
  );
}
