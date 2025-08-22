import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingLogo from "@/components/floating-logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Armchair, Flame, Music, Fish, Target } from "lucide-react";
import { HorseshoeIcon, StarIcon } from "@/components/icons/ranch-icons";
import kitchenImage from "@assets/IMG_3639_1754201480314.jpg";
import creekImage from "@assets/IMG_3328_1754202354559.jpg";
import huntingImage from "@assets/IMG_7597_1754202325477.jpg";

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
      <FloatingLogo />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <HorseshoeIcon className="text-texas-maroon h-8 w-8 mx-4" />
                <StarIcon className="text-texas-maroon h-6 w-6 mx-2" />
                <HorseshoeIcon className="text-texas-maroon h-8 w-8 mx-4" />
              </div>
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-texas-maroon mb-6">Texas Ranch Activities & Outdoor Adventures</h1>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Experience authentic Central Texas ranch life with world-class hunting, creek fishing, 
                and premium Creekside Venue accommodations. Perfect for corporate team building, family vacations, and group adventures.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-merriweather font-bold text-texas-maroon mb-6">Creekside Venue</h2>
                <p className="text-lg text-warm-gray mb-6 leading-relaxed">
                  Welcome to Creekside Venue, your tranquil hill country retreat nestled under the shade of majestic pecan trees, 
                  where the soothing sound of the creek flows by. Our picturesque setting is designed to host a variety of events, 
                  with ample outdoor space and inviting indoor facilities that cater to all your event needs.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <feature.icon className="text-texas-maroon h-5 w-5" />
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
                  <CardTitle className="flex items-center text-2xl font-merriweather font-bold text-texas-maroon">
                    <Fish className="text-texas-maroon h-8 w-8 mr-4" />
                    Creek Fishing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={creekImage} 
                    alt="Crystal clear creek flowing through lush ranch landscape" 
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
                  <CardTitle className="flex items-center text-2xl font-merriweather font-bold text-texas-maroon">
                    <Target className="text-texas-maroon h-8 w-8 mr-4" />
                    Hunting Adventures
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={huntingImage} 
                    alt="White-tail deer and wild turkeys feeding at ranch" 
                    className="rounded-lg mb-4 w-full h-48 object-cover"
                  />
                  <p className="text-warm-gray leading-relaxed">
                    Welcome to our premier high-fence whitetail outfitting experience in the beautiful Texas Hill Country! 
                    Whether you're an experienced hunter or new to the sport, our expert guides are dedicated to delivering 
                    an unforgettable whitetail hunting experience, tailored to your needs.
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