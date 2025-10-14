import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { CowboyHatIcon, StarIcon } from "@/components/icons/ranch-icons";
import DecorativeDivider from "@/components/decorative-divider";
import partyHouseImage from "@assets/wed-283001_1756230624714.jpg";
import landscapeImage from "@assets/IMG_3326_1754202418292.jpg";
import bluebonnetImage from "@assets/IMG_2196_1754202398409.jpg";
import familyGetawaysImage from "@assets/IMG_7989_1754205048016.jpg";
import huntingPartiesImage from "@assets/IMG_5829_1754205067288.jpg";
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
      <div className="pt-16">
        <section className="py-20 bg-gradient-to-b from-ranch-cream to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
                <CowboyHatIcon className="text-texas-maroon h-8 w-12 mx-2" />
                <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-texas-maroon mb-6">Texas Ranch Events & Venue Rentals</h1>
              <p className="text-xl text-ranch-brown max-w-3xl mx-auto leading-relaxed">
                Our ranch is a place where families gather, friends connect, and memories are made. We invite you to experience 
                the perfect blend of adventure and relaxation in the beautiful Texas Hill Country, where your vision becomes reality 
                in a serene and enchanting environment.
              </p>
            </div>
            
            <div className="space-y-16">
              {events.map((event, index) => {
                const isEven = index % 2 === 0;
                const bgColors = [
                  'bg-white text-ranch-brown', 
                  'bg-texas-maroon text-white', 
                  'bg-ranch-brown text-ranch-cream'
                ];
                const textBgColor = bgColors[index % bgColors.length];
                
                return (
                  <div key={index} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className={`grid md:grid-cols-5 ${!isEven ? 'md:grid-flow-col-dense' : ''}`}>
                      {/* Image Section */}
                      <div className={`${!isEven ? 'md:col-start-3 md:col-span-3' : 'md:col-span-3'} relative`}>
                        {/* Cardinal sitting on first event image */}
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
                          className="w-full h-full min-h-[400px] md:min-h-[500px] object-cover"
                        />
                      </div>
                      
                      {/* Content Section */}
                      <div className={`${textBgColor} p-8 md:p-12 flex flex-col justify-center ${!isEven ? 'md:col-start-1 md:col-span-2' : 'md:col-span-2'}`}>
                        <h2 className="text-3xl md:text-4xl font-merriweather font-bold mb-6">
                          {event.title}
                        </h2>
                        <p className="text-lg mb-6 leading-relaxed opacity-90">
                          {event.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                          {event.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${index === 0 ? 'text-texas-maroon' : 'text-current opacity-75'}`} />
                              <span className="font-medium">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-auto">
                          <Link href={`/contact?event=${encodeURIComponent(event.title)}`}>
                            <Button className={`px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all ${
                              index === 0 ? 'bg-texas-maroon hover:bg-texas-maroon-light text-white' :
                              index === 1 ? 'bg-ranch-cream hover:bg-white text-texas-maroon' :
                              'bg-texas-maroon hover:bg-texas-maroon-light text-white'
                            }`}>
                              More Information
                            </Button>
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

        {/* Textured Accent Bar */}
        <div className="section-bar texture-brand py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-3">
              Your Event, Your Way
            </h3>
            <p className="text-lg text-white/90 max-w-2xl mx-auto font-inter">
              Personalized service and attention to detail make every Crawford Ranch event extraordinary
            </p>
          </div>
        </div>

        <DecorativeDivider />
      </div>
      <Footer />
    </div>
  );
}