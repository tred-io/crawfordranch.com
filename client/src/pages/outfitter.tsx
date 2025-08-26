import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Target, MapPin, Users, Award, Fish } from "lucide-react";
import { StarIcon, LonghornIcon } from "@/components/icons/ranch-icons";
import huntingImage from "@assets/IMG_7597_1754202325477.jpg";
import deerImage from "@assets/IMG_2721_1756229798753.jpg";
import creekImage from "@assets/IMG_3328_1754202354559.jpg";
import lodgeImage from "@assets/IMG_3645_1756229827038.jpg";
import guideImage from "@assets/IMG_6604_1756230314550.jpg";

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
              <div className="bg-texas-maroon p-8 -mx-4 sm:-mx-6 lg:-mx-8">
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
              <Card className="bg-ranch-cream hover:bg-ranch-cream/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
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
                    Experience the thrill of the hunt in one of Texas's most beautiful landscapes. Our high-fence operation 
                    ensures excellent hunting opportunities with mature whitetail deer and expert guides.
                  </p>
                  <ul className="space-y-2 text-warm-gray">
                    <li>• Trophy-class whitetail deer</li>
                    <li>• Prime hunting grounds</li>
                    <li>• Professional field dressing</li>
                    <li>• Group accommodations</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ranch-cream hover:bg-ranch-cream/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-merriweather font-bold text-texas-maroon">
                    Creek Fishing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={creekImage} 
                    alt="Crystal clear creek flowing through ranch property" 
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <p className="text-warm-gray leading-relaxed mb-4">
                    Cast your line in our pristine creeks that wind through the property. These crystal-clear waters 
                    are home to bass, catfish, and perch, offering peaceful fishing experiences for all skill levels.
                  </p>
                  <ul className="space-y-2 text-warm-gray">
                    <li>• Multiple creek locations</li>
                    <li>• Catch and release policy</li>
                    <li>• Family-friendly spots</li>
                    <li>• Equipment available</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-ranch-cream hover:bg-ranch-cream/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-merriweather font-bold text-texas-maroon">
                    Lodge & Accommodations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={lodgeImage} 
                    alt="Crawford Ranch lodge accommodations" 
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <p className="text-warm-gray leading-relaxed mb-4">
                    Our comfortable lodge provides the perfect base for your outdoor adventure. 
                    Relax in rustic comfort after a successful day in the field or on the water.
                  </p>
                  <ul className="space-y-2 text-warm-gray">
                    <li>• Comfortable guest rooms</li>
                    <li>• Fire pit gatherings</li>
                    <li>• Game processing facilities</li>
                    <li>• Trophy preparation area</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-ranch-cream hover:bg-ranch-cream/90 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-merriweather font-bold text-texas-maroon">
                    Guided Experiences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={guideImage} 
                    alt="Expert hunting guide with successful hunter" 
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <p className="text-warm-gray leading-relaxed mb-4">
                    Whether you're an experienced hunter or new to the sport, our expert guides are dedicated 
                    to delivering unforgettable outdoor experiences tailored to your needs.
                  </p>
                  <ul className="space-y-2 text-warm-gray">
                    <li>• Experienced local guides</li>
                    <li>• Traditional hunting experience</li>
                    <li>• Year-round availability</li>
                    <li>• Taxidermy recommendations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center bg-texas-maroon text-white p-8 rounded-lg">
              <h2 className="text-3xl font-merriweather font-bold mb-4">Ready to Book Your Outdoor Adventure?</h2>
              <p className="text-xl mb-6 leading-relaxed">
                Contact us today to discuss packages, pricing, and availability for your Texas Hill Country hunting and fishing experience.
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