import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import FloatingLogo from "@/components/floating-logo";
import { HorseshoeIcon, BluesonnetIcon } from "@/components/icons/ranch-icons";
import barnImage from "@assets/IMG_0518_1754201480310.jpg";
import fieldImage from "@assets/IMG_2196_1754202398409.jpg";
import cattleImage from "@assets/IMG_7989_1754205048016.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <FloatingLogo />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-texas-maroon mb-6">Crawford Ranch History - Texas Heritage Since 1880s</h1>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Discover the rich history and deep Texas roots of Crawford Ranch, a treasured multi-generational cattle ranch 
                in Lampasas County that has been hosting events and welcoming guests for over a century.
              </p>
            </div>
            
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src={barnImage} 
                    alt="Historic Crawford Ranch barn with cattle corrals" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">Deep Texas Roots</h2>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    Established in the late 1800s, Crawford Ranch has been a cornerstone of Lampasas County for over a century. 
                    Originally homesteaded by pioneers seeking fertile land and fresh water, our ranch sits on some of the most 
                    beautiful and productive acreage in Central Texas.
                  </p>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    The land has witnessed the transformation of Texas from frontier territory to modern state, serving as 
                    a working cattle ranch through economic booms, challenging droughts, and changing times while maintaining 
                    its commitment to stewardship of the land.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 space-y-6">
                  <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">Land of Natural Beauty</h2>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    Our ranch encompasses diverse ecosystems typical of the Texas Hill Country transition zone. Ancient limestone 
                    formations create natural springs that feed crystal-clear creeks, while native grasses support both wildlife 
                    and cattle grazing.
                  </p>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    Heritage oak trees, some over 200 years old, dot the landscape and provide natural gathering spaces that 
                    have sheltered generations of families, creating the perfect backdrop for today's celebrations and retreats.
                  </p>
                </div>
                
                <div className="order-1 md:order-2">
                  <img 
                    src={fieldImage} 
                    alt="Peaceful ranch field with heritage oak tree" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src={cattleImage} 
                    alt="Modern cattle operations at Crawford Ranch" 
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">Modern Ranch Life</h2>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    Today, Crawford Ranch seamlessly blends traditional ranching practices with modern hospitality. 
                    Our working cattle operation continues the legacy while welcoming families, couples, and groups 
                    to experience authentic Texas ranch life through events, retreats, and outdoor adventures.
                  </p>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    From intimate weddings under the Texas sky to corporate retreats that inspire innovation, 
                    we provide a unique setting where modern comfort meets timeless tradition. Our commitment 
                    to preserving this special place ensures future generations can continue to enjoy its beauty and heritage.
                  </p>
                </div>
              </div>

              <div className="bg-ranch-cream p-8 rounded-lg">
                <h2 className="text-3xl font-merriweather font-bold text-texas-maroon mb-6 text-center">Ranch Timeline</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-texas-maroon mb-2">1880s</div>
                    <div className="text-warm-gray">Original homestead established by pioneer families</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-texas-maroon mb-2">1920s</div>
                    <div className="text-warm-gray">Expanded to include modern cattle operations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-texas-maroon mb-2">Today</div>
                    <div className="text-warm-gray">Multi-generational ranch welcoming guests from around Texas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}