import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Armchair, Flame, Music, Fish, Target } from "lucide-react";

export default function ActivitiesSection() {
  const features = [
    { icon: Utensils, label: "Full Outdoor Kitchen" },
    { icon: Armchair, label: "Covered Seating" },
    { icon: Flame, label: "Fire Pit Area" },
    { icon: Music, label: "Sound System" }
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-texas-red mb-6">Ranch Activities</h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            Experience authentic Texas ranch life with world-class hunting, peaceful fishing, 
            and unmatched hospitality at our party house.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl font-playfair font-semibold text-ranch-brown mb-6">The Party House</h3>
            <p className="text-lg text-warm-gray mb-6 leading-relaxed">
              Our centerpiece party house features a state-of-the-art outdoor kitchen perfect for 
              entertaining. Whether you're hosting a family reunion, bachelor party, or corporate event, 
              this space combines rustic charm with modern amenities.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <feature.icon className="text-texas-red h-5 w-5" />
                  <span className="text-warm-gray">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern outdoor kitchen with stone countertops" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-ranch-cream">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-playfair font-semibold text-ranch-brown">
                <Fish className="text-texas-red h-8 w-8 mr-4" />
                Creek Fishing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                alt="Peaceful creek with clear water and oak trees" 
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <p className="text-warm-gray leading-relaxed">
                Cast your line in our pristine creeks that wind through the property. 
                These crystal-clear waters are home to bass, catfish, and perch, offering 
                peaceful fishing experiences for all skill levels.
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-ranch-cream">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-playfair font-semibold text-ranch-brown">
                <Target className="text-texas-red h-8 w-8 mr-4" />
                Hunting Adventures
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img 
                src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300" 
                alt="Deer in natural oak tree habitat" 
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <p className="text-warm-gray leading-relaxed">
                Our hundreds of acres provide excellent hunting opportunities for white-tail deer 
                and wild turkey. Guided hunts available with experienced local guides who know 
                every trail and feeding ground on the property.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
