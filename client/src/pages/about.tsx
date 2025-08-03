import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { HorseshoeIcon, BluesonnetIcon } from "@/components/icons/ranch-icons";
import barnImage from "@assets/IMG_0518_1754201480310.jpg";
import fieldImage from "@assets/IMG_2196_1754202398409.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-texas-maroon mb-6">Our Heritage</h1>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Discover the rich history and deep roots that make Crawford Ranch a treasured piece of Central Texas.
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