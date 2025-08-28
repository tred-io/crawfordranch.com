import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { HorseshoeIcon, BluesonnetIcon } from "@/components/icons/ranch-icons";
import DecorativeDivider from "@/components/decorative-divider";
import barnImage from "@assets/IMG_5016_1756230324987.jpg";
import fieldImage from "@assets/IMG_0518_1754201480310.jpg";
import cattleFieldImage from "@assets/IMG_2786_2_1756229049596.jpg";
import cattleImage from "@assets/IMG_7989_1754205048016.jpg";
import cardinalImage from "@assets/cardinal_1756393988044.png";

export default function About() {
  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-16">
        <div className="bg-texas-maroon py-16 relative">
          {/* Cardinal positioned on header section */}
          <div className="absolute top-8 right-4 md:right-16 z-20">
            <img 
              src={cardinalImage} 
              alt="Cardinal" 
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 opacity-75"
            />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-white mb-6">Our Family Legacy - Four Generations in the Texas Hill Country</h1>
              <p className="text-xl text-ranch-cream max-w-3xl mx-auto leading-relaxed">
                Nestled in the heart of the breathtaking Texas Hill Country, our generational cattle and hunting ranch 
                stands as a testament to the enduring spirit of family, tradition, and the great outdoors.
              </p>
            </div>
          </div>
        </div>
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <img 
                    src={barnImage} 
                    alt="Historic Crawford Ranch barn with cattle corrals" 
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                    style={{objectPosition: '60% 40%'}}
                  />
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">Where It All Began</h2>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    Our story began with my great grandfather, a passionate rancher and hunter who saw the beauty in the rolling hills 
                    and fertile pastures of Texas. With a vision to create a sustainable ranching operation, his love for the land 
                    and its wildlife laid the foundation for what would become a cherished family legacy.
                  </p>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    For over four generations, we have cultivated this land, not just as a business but as a way of life, where 
                    nature and heritage intertwine to create unforgettable experiences. Each generation has brought innovation and 
                    a deeper understanding of sustainable ranching practices.
                  </p>
                </div>
              </div>

              <div className="bg-ranch-cream p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 space-y-6">
                    <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">Exceptional Cattle & Conservation</h2>
                    <p className="text-lg text-warm-gray leading-relaxed">
                      We focused on breeding exceptional cattle, ensuring that each generation was stronger and healthier than the last. 
                      Our cattle grazed on the natural grasses of the Hill Country, resulting in superior quality beef that reflects 
                      the essence of our land.
                    </p>
                    <p className="text-lg text-warm-gray leading-relaxed">
                      Our family also recognized the importance of the abundant wildlife that called our ranch home. Responsible hunting 
                      practices created a balanced ecosystem that benefited both the land and the animals. This commitment to conservation 
                      has attracted hunters from all over the country, eager to experience the thrill of the hunt in one of Texas's most beautiful landscapes.
                    </p>
                  </div>
                  
                  <div className="order-1 md:order-2">
                    <img 
                      src={cattleFieldImage} 
                      alt="Black cattle grazing in Texas Hill Country pasture" 
                      className="rounded-lg shadow-xl w-full h-96 object-cover object-center"
                    />
                  </div>
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
                  <h2 className="text-3xl font-merriweather font-bold text-texas-maroon">Carrying On the Legacy</h2>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    Today, I am proud to carry on this legacy alongside my own family. We have embraced our roots while adapting 
                    to the modern era of ranching and hunting. Our ranch is now a place where families gather, friends connect, 
                    and memories are made.
                  </p>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    We offer guided hunting experiences that not only provide an adrenaline rush but also educate our guests 
                    about the importance of wildlife management and conservation. At our ranch, the experience goes far beyond 
                    hunting and ranching. We invite visitors to immerse themselves in the beauty of the Texas Hill Country.
                  </p>
                </div>
              </div>

              <div className="bg-ranch-cream p-8 rounded-lg">
                <h2 className="text-3xl font-merriweather font-bold text-texas-maroon mb-6 text-center">Our Commitment to the Future</h2>
                <div className="text-center max-w-4xl mx-auto">
                  <p className="text-lg text-warm-gray leading-relaxed mb-6">
                    As we look to the future, we remain committed to our core values: sustainability, family, and community. 
                    We are dedicated to ensuring that our ranch continues to thrive for generations to come, ensuring that our traditions live on.
                  </p>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    Our generational cattle and hunting ranch in the Texas Hill Country is more than just a business; it is a legacy 
                    built on love for the land and a commitment to preserving its beauty for future generations. We invite you to join us 
                    on this journey, to experience the thrill of the hunt, the joy of ranch life, and the warmth of our hospitality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DecorativeDivider />
      </div>
      <Footer />
    </div>
  );
}