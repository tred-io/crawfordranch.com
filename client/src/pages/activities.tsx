import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Armchair, Flame, Music, Fish, Target } from "lucide-react";
import { HorseshoeIcon, StarIcon } from "@/components/icons/ranch-icons";
import kitchenImage from "@assets/IMG_3639_1754201480314.jpg";
import creekImage from "@assets/IMG_6890_1754201480319.jpg";
import huntingImage from "@assets/IMG_1144_1754201480312.jpg";

export default function Activities() {
  const features = [
    { icon: Utensils, label: "Full Outdoor Kitchen" },
    { icon: Armchair, label: "Covered Seating" },
    { icon: Flame, label: "Fire Pit Area" },
    { icon: Music, label: "Sound System" }
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <HorseshoeIcon className="text-texas-red h-8 w-8 mx-4" />
                <StarIcon className="text-texas-red h-6 w-6 mx-2" />
                <HorseshoeIcon className="text-texas-red h-8 w-8 mx-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-texas-red mb-6">Ranch Activities</h1>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Experience authentic Texas ranch life with world-class hunting, peaceful fishing, 
                and unmatched hospitality at our party house.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-playfair font-semibold text-ranch-brown mb-6">The Party House</h2>
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
                  src={kitchenImage} 
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
                    src={creekImage} 
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
                    src={huntingImage} 
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
      </div>
      <Footer />
    </div>
  );
}