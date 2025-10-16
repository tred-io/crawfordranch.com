import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DecorativeDivider from "@/components/decorative-divider";
import FeatureSlab from "@/components/blocks/FeatureSlab";
import CtaBand from "@/components/blocks/CtaBand";
import { Check, Users, Coffee, Target, Lightbulb } from "lucide-react";
import landscapeImage from "@assets/IMG_3326_1754202418292.jpg";
import venueImage from "@assets/IMG_3639_1754201480314.jpg";

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

        {/* Hero Header */}
        <section className="py-16 bg-ranch-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="eyebrow mb-4 text-texas-maroon">INSPIRE YOUR TEAM</p>
            <h1 className="display text-ranch-brown mb-6">
              <em>Corporate</em> Retreats Reimagined
            </h1>
            <p className="copy text-warm-gray max-w-3xl mx-auto">
              Inspire your team with a change of scenery in the heart of the Texas Hill Country. From intimate leadership
              gatherings to full-scale company retreats, we offer private spaces and authentic ranch experiences that foster
              collaboration, creativity, and connection surrounded by stunning natural beauty.
            </p>
          </div>
        </section>

        {/* Benefits Grid - Start with content */}
        <section className="py-20 bg-white texture-floral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="display text-texas-maroon mb-4">
                <em>Why</em> Choose Crawford Ranch
              </h2>
              <p className="copy text-warm-gray max-w-2xl mx-auto">
                Our ranch provides the perfect balance of professional amenities and natural inspiration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="card text-center p-6 rounded-lg bg-white hover:shadow-lg transition-all">
                  <benefit.icon className="h-12 w-12 text-sage-teal mx-auto mb-4" />
                  <h3 className="text-xl font-playfair font-semibold text-texas-maroon mb-3">
                    {benefit.title}
                  </h3>
                  <p className="copy text-warm-gray">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-20 bg-ranch-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="display text-texas-maroon mb-6">
                  <em>Retreat</em> Amenities & Services
                </h2>
                <p className="copy text-warm-gray mb-8">
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
                  <a className="btn-accent">
                    Request Information
                  </a>
                </Link>
              </div>

              <div className="relative">
                <div className="stamp" style={{ top: '-20px', right: '-20px' }}></div>
                <img
                  src={venueImage}
                  alt="Crawford Ranch venue"
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Slab - Maroon variant for variety */}
        <FeatureSlab
          kicker="TEAM SUCCESS"
          title="Transform Your Retreat"
          pattern="maroon"
          useTexturePattern={true}
          cta={
            <Link href="/contact?context=corporate&eventType=Corporate%20Retreat&source=corporate-slab">
              <a className="btn-accent">Plan Your Retreat</a>
            </Link>
          }
        >
          <p className="mb-4">
            Step away from the office and into an environment designed to inspire innovation and strengthen bonds.
            Our ranch offers the perfect balance of professional meeting spaces and unique team-building opportunities.
          </p>
          <p>
            Whether you're planning strategic sessions, leadership development, or company-wide gatherings, Crawford
            Ranch provides an unmatched setting for corporate success.
          </p>
        </FeatureSlab>

        <DecorativeDivider showBarn={true} />
      </div>
      <Footer />
    </div>
  );
}
