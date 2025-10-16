import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import DecorativeDivider from "@/components/decorative-divider";
import FeatureSlab from "@/components/blocks/FeatureSlab";
import CtaBand from "@/components/blocks/CtaBand";
import { Link } from "wouter";
import barnImage from "@assets/IMG_5016_1756230324987.jpg";
import fieldImage from "@assets/IMG_3673_1754201480317.jpg";
import cattleFieldImage from "@assets/IMG_2786_2_1756229049596.jpg";
import cattleImage from "@assets/IMG_7989_1754205048016.jpg";
import cardinalImage from "@assets/cardinal_1756393988044.png";

export default function About() {
  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-24">

        {/* Hero Header */}
        <section className="py-16 bg-ranch-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="eyebrow mb-4 text-texas-maroon">FOUR GENERATIONS STRONG</p>
            <h1 className="display text-ranch-brown mb-6">
              <em>Our</em> Family Legacy
            </h1>
            <p className="copy text-warm-gray max-w-3xl mx-auto">
              Nestled in the heart of the breathtaking Texas Hill Country, our generational cattle and hunting ranch
              stands as a testament to the enduring spirit of family, tradition, and the great outdoors. For over four
              generations, we have cultivated this land as a way of life where nature and heritage intertwine.
            </p>
          </div>
        </section>

        {/* Feature Slab */}
        <FeatureSlab
          kicker="HERITAGE & TRADITION"
          title="A Way of Life"
          pattern="maroon"
          useTexturePattern={true}
          cta={
            <Link href="/contact?context=about&source=about-hero">
              <a className="btn-accent">Visit the Ranch</a>
            </Link>
          }
        >
          <p className="mb-4">
            Our story is woven into the very fabric of this land. What began with a vision has blossomed into a
            legacy that spans four generations, each adding their own chapter to the Crawford Ranch story.
          </p>
          <p>
            Today, we're proud to share this special place with visitors who seek authentic Texas experiences,
            from working cattle operations to memorable events under the Hill Country sky.
          </p>
        </FeatureSlab>

        <section className="py-20 bg-white texture-floral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src={barnImage}
                    alt="Historic Crawford Ranch barn with cattle corrals"
                    className="rounded-lg shadow-xl w-full h-80 object-cover"
                    style={{objectPosition: '60% 40%'}}
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="display text-texas-maroon">
                    <em>Where</em> It All Began
                  </h2>
                  <p className="copy text-warm-gray">
                    Our story began with my great grandfather, a passionate rancher and hunter who saw the beauty in the rolling hills
                    and fertile pastures of Texas. With a vision to create a sustainable ranching operation, his love for the land
                    and its wildlife laid the foundation for what would become a cherished family legacy.
                  </p>
                  <p className="copy text-warm-gray">
                    For over four generations, we have cultivated this land, not just as a business but as a way of life, where
                    nature and heritage intertwine to create unforgettable experiences. Each generation has brought innovation and
                    a deeper understanding of sustainable ranching practices.
                  </p>
                </div>
              </div>

              <div className="panel panel--floating p-8 md:p-12 rounded-lg">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1 space-y-6">
                    <h2 className="display text-texas-maroon">
                      <em>Exceptional</em> Cattle & Conservation
                    </h2>
                    <p className="copy text-warm-gray">
                      We focused on breeding exceptional cattle, ensuring that each generation was stronger and healthier than the last.
                      Our cattle grazed on the natural grasses of the Hill Country, resulting in superior quality beef that reflects
                      the essence of our land.
                    </p>
                    <p className="copy text-warm-gray">
                      Our family also recognized the importance of the abundant wildlife that called our ranch home. Responsible hunting
                      practices created a balanced ecosystem that benefited both the land and the animals. This commitment to conservation
                      has attracted hunters from all over the country, eager to experience the thrill of the hunt in one of Texas's most beautiful landscapes.
                    </p>
                  </div>

                  <div className="order-1 md:order-2 relative">
                    {/* Cardinal decoration */}
                    <div className="absolute -bottom-2 left-4 z-20">
                      <img
                        src={cardinalImage}
                        alt="Cardinal"
                        className="w-6 opacity-85"
                      />
                    </div>
                    <img
                      src={cattleFieldImage}
                      alt="Black cattle grazing in Texas Hill Country pasture"
                      className="rounded-lg w-full h-96 object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="stamp" style={{ top: '-20px', right: '-20px' }}></div>
                  <img
                    src={cattleImage}
                    alt="Modern cattle operations at Crawford Ranch"
                    className="rounded-lg shadow-xl w-full"
                  />
                </div>

                <div className="space-y-6">
                  <h2 className="display text-texas-maroon">
                    <em>Carrying</em> On the Legacy
                  </h2>
                  <p className="copy text-warm-gray">
                    Today, I am proud to carry on this legacy alongside my own family. We have embraced our roots while adapting
                    to the modern era of ranching and hunting. Our ranch is now a place where families gather, friends connect,
                    and memories are made.
                  </p>
                  <p className="copy text-warm-gray">
                    We offer guided hunting experiences that not only provide an adrenaline rush but also educate our guests
                    about the importance of wildlife management and conservation. At our ranch, the experience goes far beyond
                    hunting and ranching. We invite visitors to immerse themselves in the beauty of the Texas Hill Country.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <DecorativeDivider />

        {/* CTA Band - Maroon to match */}
        <CtaBand
          title="Join Our Journey"
          copy="Our generational cattle and hunting ranch in the Texas Hill Country is more than just a business; it is a legacy built on love for the land and a commitment to preserving its beauty for future generations."
          href="/contact?context=about&source=about-cta"
          pattern="maroon"
          useTexturePattern={true}
        />

        <DecorativeDivider showBarn={true} />
      </div>
      <Footer />
    </div>
  );
}