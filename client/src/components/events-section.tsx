import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function EventsSection() {
  const events = [
    {
      title: "Weddings",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
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
      image: "https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      description: "Find peace and spiritual renewal in God's creation. Our serene setting provides the perfect atmosphere for worship, fellowship, and reflection.",
      features: [
        "Quiet prayer spaces",
        "Natural amphitheater",
        "Fellowship hall",
        "Peaceful walking trails"
      ]
    }
  ];

  return (
    <section id="events" className="py-20 bg-ranch-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-texas-red mb-6">Unforgettable Events</h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            From intimate weddings to large corporate gatherings, our ranch provides the perfect backdrop 
            for your most important moments.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-playfair font-semibold text-ranch-brown">
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
                      <Check className="h-4 w-4 text-texas-red mr-2 flex-shrink-0" />
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
  );
}
