import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { CowboyHatIcon, StarIcon } from "@/components/icons/ranch-icons";
import partyHouseImage from "@assets/wed-283001_1756230624714.jpg";
import landscapeImage from "@assets/IMG_3326_1754202418292.jpg";
import bluebonnetImage from "@assets/IMG_2196_1754202398409.jpg";
import familyGetawaysImage from "@assets/IMG_7989_1754205048016.jpg";
import huntingPartiesImage from "@assets/IMG_5829_1754205067288.jpg";

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
        <section className="py-20 bg-ranch-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
                <CowboyHatIcon className="text-texas-maroon h-8 w-12 mx-2" />
                <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-texas-maroon mb-6">Texas Ranch Events & Venue Rentals</h1>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Our ranch is a place where families gather, friends connect, and memories are made. We invite you to experience 
                the perfect blend of adventure and relaxation in the beautiful Texas Hill Country, where your vision becomes reality 
                in a serene and enchanting environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
              {events.map((event, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow flex flex-col">
                  <div className="overflow-hidden rounded-t-lg">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-merriweather font-bold text-texas-maroon">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-warm-gray mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <ul className="space-y-2 mb-4 flex-1">
                      {event.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-warm-gray">
                          <Check className="h-4 w-4 text-texas-maroon mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link href={`/contact?event=${encodeURIComponent(event.title)}`}>
                        <Button className="w-full bg-texas-maroon hover:bg-texas-maroon-light text-white">
                          More Information
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}