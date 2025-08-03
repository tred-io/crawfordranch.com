import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { CowboyHatIcon, StarIcon } from "@/components/icons/ranch-icons";
import partyHouseImage from "@assets/IMG_3645_1754201480316.jpg";
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
        "Bridal suite in party house",
        "Professional outdoor kitchen",
        "Accommodates up to 200 guests"
      ]
    },
    {
      title: "Corporate Retreats",
      image: landscapeImage,
      description: "Inspire your team with a change of scenery. Our ranch provides the perfect environment for productive meetings, team building, and strategic planning.",
      features: [
        "Private meeting spaces",
        "Team building activities",
        "Catering services available",
        "Technology support"
      ]
    },
    {
      title: "Christian Retreats",
      image: bluebonnetImage,
      description: "Find peace and spiritual renewal in God's creation. Our serene setting provides the perfect atmosphere for worship, fellowship, and reflection.",
      features: [
        "Quiet prayer spaces",
        "Natural amphitheater",
        "Fellowship hall",
        "Peaceful walking trails"
      ]
    },
    {
      title: "Family Getaways",
      image: familyGetawaysImage,
      description: "Create lasting memories with authentic ranch experiences. Families can enjoy hands-on activities with cattle, explore the property, and bond in a peaceful countryside setting.",
      features: [
        "Cattle interaction experiences",
        "Family-friendly activities",
        "Safe environment for children",
        "Educational ranch tours"
      ]
    },
    {
      title: "Hunting Parties",
      image: huntingPartiesImage,
      description: "Gather around the fire after a successful hunt. Our ranch offers excellent hunting opportunities followed by comfortable accommodations and great fellowship.",
      features: [
        "Prime hunting grounds",
        "Fire pit gatherings",
        "Group accommodation",
        "Traditional hunting experience"
      ]
    }
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
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-texas-maroon mb-6">Unforgettable Events</h1>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                From intimate weddings to large corporate gatherings, our ranch provides the perfect backdrop 
                for your most important moments.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.slice(0, 3).map((event, index) => (
                <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
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
                  <CardContent>
                    <p className="text-warm-gray mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <ul className="space-y-2">
                      {event.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-warm-gray">
                          <Check className="h-4 w-4 text-texas-maroon mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
              {events.slice(3).map((event, index) => (
                <Card key={index + 3} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="overflow-hidden rounded-t-lg">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className={`w-full h-64 object-cover ${event.title === 'Hunting Parties' ? 'brightness-125 contrast-90' : ''}`}
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-merriweather font-bold text-texas-maroon">
                      {event.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-warm-gray mb-4 leading-relaxed">
                      {event.description}
                    </p>
                    <ul className="space-y-2">
                      {event.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-warm-gray">
                          <Check className="h-4 w-4 text-texas-maroon mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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