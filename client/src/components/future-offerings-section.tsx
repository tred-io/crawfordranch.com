import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Scissors } from "lucide-react";

export default function FutureOfferingsSection() {
  const offerings = [
    {
      icon: Store,
      title: "Outfitter Shop",
      description: "Your one-stop shop for all hunting and outdoor gear. From ammunition and equipment to ranch-branded merchandise, we'll have everything you need for your outdoor adventures.",
      opening: "Opening Spring 2024"
    },
    {
      icon: Scissors,
      title: "Ranch Meat Shop",
      description: "Farm-to-table at its finest. Purchase premium beef raised right here on our ranch, along with locally sourced game meat and specialty cuts prepared by master butchers.",
      opening: "Opening Summer 2024"
    }
  ];

  return (
    <section className="py-20 bg-ranch-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-texas-red mb-6">Coming Soon</h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            We're expanding our offerings to provide even more authentic ranch experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {offerings.map((offering, index) => (
            <Card key={index} className="bg-white shadow-lg text-center">
              <CardHeader>
                <div className="flex justify-center mb-6">
                  <offering.icon className="text-texas-red h-12 w-12" />
                </div>
                <CardTitle className="text-2xl font-playfair font-semibold text-ranch-brown">
                  {offering.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-warm-gray leading-relaxed mb-6">
                  {offering.description}
                </p>
                <div className="text-texas-red font-semibold">
                  {offering.opening}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
