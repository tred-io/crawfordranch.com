import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import DecorativeDivider from "@/components/decorative-divider";
import FeatureSlab from "@/components/blocks/FeatureSlab";
import CtaBand from "@/components/blocks/CtaBand";
import partyHouseImage from "@assets/wed-283001_1756230624714.jpg";
import landscapeImage from "@assets/IMG_3326_1754202418292.jpg";
import familyGetawaysImage from "@assets/IMG_7989_1754205048016.jpg";
import cardinalImage from "@assets/cardinal_1756393988044.png";

export default function Events() {
  const events = [
    {
      title: "Weddings",
      image: partyHouseImage,
      description: "Say \"I do\" under the Texas sky. Our ranch offers breathtaking ceremony sites, from creek-side vows to hilltop celebrations with panoramic views.",
      features: [
        "Indoor/outdoor ceremony options",
        "Bridal suite in Creekside Venue",
        "Professional outdoor kitchen",
        "Accommodates up to 200 guests"
      ]
    },
    {
      title: "Retreats",
      image: landscapeImage,
      description: "Inspire your team or group with a change of scenery in the tranquil hill country. Our ranch provides the perfect environment for productive meetings, team building, and strategic planning surrounded by stunning natural beauty.",
      features: [
        "Private meeting spaces",
        "Team building activities",
        "Catering services available",
        "Technology support",
        "Quiet spaces for reflection",
        "Natural amphitheater"
      ]
    },
    {
      title: "Family Getaways",
      image: familyGetawaysImage,
      description: "Create lasting memories with authentic ranch experiences where families gather and friends connect. Enjoy hands-on activities with cattle, explore the beautiful property, and bond in our peaceful hill country setting.",
      features: [
        "Cattle interaction experiences",
        "Family-friendly activities",
        "Safe environment for children",
        "Educational ranch tours"
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-24">

        {/* Hero Header */}
        <section className="py-16 bg-ranch-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="eyebrow mb-4 text-texas-maroon">CELEBRATE WITH US</p>
            <h1 className="display text-ranch-brown mb-6">
              <em>Events</em> Worth Remembering
            </h1>
            <p className="copy text-warm-gray max-w-3xl mx-auto">
              Our ranch is a place where families gather, friends connect, and memories are made. From intimate weddings
              under ancient oaks to celebrations that inspire, your vision becomes reality in a serene and enchanting
              environment crafted by four generations of Texas hospitality.
            </p>
          </div>
        </section>

        {/* Feature Slab - Blue variant */}
        <FeatureSlab
          kicker="YOUR PERFECT VENUE"
          title="Make it Unforgettable"
          pattern="blue"
          useTexture2Pattern={true}
          cta={
            <Link href="/contact?context=events&source=events-hero">
              <a className="btn-accent">Plan Your Event</a>
            </Link>
          }
        >
          <p className="mb-4">
            Whether you're planning an intimate family gathering or a grand celebration, our ranch offers the perfect
            blend of natural beauty and refined amenities to bring your vision to life.
          </p>
          <p>
            With breathtaking ceremony sites, versatile event spaces, and authentic Texas hospitality, every detail
            is crafted to create memories that last a lifetime.
          </p>
        </FeatureSlab>

        <section className="py-20 bg-white texture-floral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="display text-texas-maroon mb-4">
                <em>Your</em> Special Occasion
              </h2>
              <p className="copy text-warm-gray max-w-3xl mx-auto">
                Whether you're planning a wedding, corporate retreat, or family gathering, we offer the perfect setting
              </p>
            </div>
            
            <div className="space-y-12">
              {events.map((event, index) => {
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className="card group relative bg-white rounded-lg overflow-hidden">
                    <div className={`grid md:grid-cols-5 ${!isEven ? 'md:grid-flow-col-dense' : ''}`}>
                      {/* Image Section */}
                      <div className={`${!isEven ? 'md:col-start-3 md:col-span-3' : 'md:col-span-3'} relative`}>
                        {/* Cardinal decoration */}
                        {index === 0 && (
                          <div className="absolute -bottom-2 left-4 z-20">
                            <img
                              src={cardinalImage}
                              alt="Cardinal"
                              className="w-6 opacity-80"
                            />
                          </div>
                        )}
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full min-h-[400px] md:min-h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Content Section */}
                      <div className={`p-8 md:p-12 flex flex-col justify-center ${!isEven ? 'md:col-start-1 md:col-span-2' : 'md:col-span-2'} ${index === 1 ? 'bg-ranch-cream' : 'bg-white'}`}>
                        <h3 className="text-3xl font-playfair font-bold text-texas-maroon mb-4">
                          {event.title}
                        </h3>
                        <p className="copy text-warm-gray mb-6">
                          {event.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {event.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start">
                              <Check className="h-5 w-5 mr-3 flex-shrink-0 text-sage-teal mt-0.5" />
                              <span className="text-ranch-brown font-inter">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          <Link href={`/contact?context=events&eventType=${encodeURIComponent(event.title)}&source=events-${event.title.toLowerCase()}`}>
                            <a className={index === 1 ? 'btn-accent' : 'bg-texas-maroon text-white hover:bg-texas-maroon-light px-6 py-3 rounded-lg font-semibold inline-block transition-colors'}>
                              More Information
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <DecorativeDivider />

        {/* CTA Band */}
        <CtaBand
          title="Start Planning Today"
          copy="Ready to create unforgettable memories at Crawford Ranch? Our team is here to help you plan the perfect event, from intimate gatherings to grand celebrations."
          href="/contact?context=events&source=events-cta"
          pattern="maroon"
          useTexturePattern={true}
        />

        <DecorativeDivider showBarn={true} />
      </div>
      <Footer />
    </div>
  );
}