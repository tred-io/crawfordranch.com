import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Target, MapPin, Users, Award } from "lucide-react";
import { StarIcon, LonghornIcon } from "@/components/icons/ranch-icons";
import huntingImage from "@assets/IMG_7597_1754202325477.jpg";
import deerImage from "@assets/IMG_5829_1754205067288.jpg";

export default function Outfitter() {
  const features = [
    { icon: Target, label: "Expert Guides" },
    { icon: MapPin, label: "Prime Hunting Grounds" },
    { icon: Users, label: "Group Accommodations" },
    { icon: Award, label: "High Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
                <LonghornIcon className="text-texas-maroon h-8 w-16 mx-2" />
                <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-texas-maroon mb-6">Premier Texas Hill Country Outfitting</h1>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Welcome to our premier high-fence whitetail outfitting experience in the beautiful Texas Hill Country! 
                Nestled in a tranquil setting, our sprawling ranch offers the perfect blend of adventure and relaxation.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src={huntingImage} 
                  alt="White-tail deer and wild turkeys feeding at ranch" 
                  className="rounded-lg shadow-xl w-full"
                />
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">Exceptional Hunting Experience</h2>
                <p className="text-lg text-warm-gray leading-relaxed">
                  Our lodge provides comfortable accommodations, ensuring you feel right at home while enjoying the thrill of the hunt. 
                  With easy access to town, you can indulge in local dining and shopping while still being surrounded by the stunning 
                  natural beauty of the Hill Country.
                </p>
                <p className="text-lg text-warm-gray leading-relaxed">
                  Whether you're an experienced hunter or new to the sport, our expert guides are dedicated to delivering an unforgettable 
                  whitetail hunting experience, tailored to your needs. Join us for an adventure that combines exceptional hunting and 
                  serene surroundings, making memories that will last a lifetime.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <feature.icon className="text-texas-maroon h-5 w-5" />
                      <span className="text-warm-gray">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-ranch-cream">
                <CardHeader>
                  <CardTitle className="text-2xl font-merriweather font-bold text-texas-maroon">
                    High-Fence Whitetail Hunting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={deerImage} 
                    alt="Whitetail deer at Crawford Ranch" 
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <p className="text-warm-gray leading-relaxed mb-4">
                    Our high-fence operation ensures excellent hunting opportunities with mature whitetail deer. 
                    The controlled environment allows for sustainable wildlife management while providing 
                    hunters with the best possible experience.
                  </p>
                  <ul className="space-y-2 text-warm-gray">
                    <li>• Trophy-class whitetail deer</li>
                    <li>• Year-round hunting seasons</li>
                    <li>• Professional field dressing</li>
                    <li>• Taxidermy recommendations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ranch-cream">
                <CardHeader>
                  <CardTitle className="text-2xl font-merriweather font-bold text-texas-maroon">
                    Lodge & Accommodations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-warm-gray/20 rounded-lg h-48 mb-4 flex items-center justify-center">
                    <p className="text-warm-gray text-center">Lodge accommodations photo</p>
                  </div>
                  <p className="text-warm-gray leading-relaxed mb-4">
                    Our comfortable lodge provides the perfect base for your hunting adventure. 
                    Relax in rustic comfort after a successful day in the field, with all the 
                    amenities you need for a memorable stay.
                  </p>
                  <ul className="space-y-2 text-warm-gray">
                    <li>• Comfortable guest rooms</li>
                    <li>• Communal dining areas</li>
                    <li>• Game processing facilities</li>
                    <li>• Trophy preparation area</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center bg-texas-maroon text-white p-8 rounded-lg">
              <h2 className="text-3xl font-merriweather font-bold mb-4">Ready to Book Your Hunt?</h2>
              <p className="text-xl mb-6 leading-relaxed">
                Contact us today to discuss packages, pricing, and availability for your Texas Hill Country hunting adventure.
              </p>
              <Link href="/contact">
                <Button className="bg-white text-texas-maroon hover:bg-ranch-cream px-8 py-4 text-lg font-semibold">
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}