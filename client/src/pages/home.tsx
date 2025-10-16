import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroCarousel from "@/components/hero-carousel";
import HighlightCard from "@/components/highlight-card";
import DecorativeDivider from "@/components/decorative-divider";
import FeatureSlab from "@/components/blocks/FeatureSlab";
import CtaBand from "@/components/blocks/CtaBand";
import { Link } from "wouter";
import heroImage1 from "@assets/IMG_2196_1756230374363.jpg";
import heroImage2 from "@assets/IMG_3326_1754202418292.jpg";
import heroImage3 from "@assets/IMG_3645_1754201480316.jpg";
import heroImage4 from "@assets/IMG_7597_1754202325477.jpg";
import heroImage5 from "@assets/IMG_2721_1756229798753.jpg";
import heroImage6 from "@assets/IMG_6604_1756230314550.jpg";
import barnImage from "@assets/IMG_0518_1754201480310.jpg";
import cardinalImage from "@assets/cardinal_1756393988044.png";
import weddingImage from "@assets/wed-283001_1756230624714.jpg";
import corporateImage from "@assets/IMG_3326_1754202418292.jpg";
import activitiesImage from "@assets/IMG_3645_1754201480316.jpg";
import attractionsImage from "@assets/IMG_2721_1756229798753.jpg";

export default function Home() {
  const heroSlides = [
    {
      image: heroImage1,
      title: "Four Generations of Texas Heritage",
      subtitle: "Experience authentic ranch life in the heart of the Texas Hill Country"
    },
    {
      image: heroImage2,
      title: "Where Memories Are Made",
      subtitle: "Host your special event surrounded by natural beauty and rustic elegance"
    },
    {
      image: heroImage3,
      title: "Adventure Awaits",
      subtitle: "Discover wildlife, authentic ranch experiences, and the spirit of the Old West"
    },
    {
      image: heroImage4,
      title: "Celebrate Under Texas Skies",
      subtitle: "From intimate gatherings to grand celebrations, create unforgettable moments"
    },
    {
      image: heroImage5,
      title: "Nature's Sanctuary",
      subtitle: "Witness breathtaking wildlife and pristine landscapes in every season"
    },
    {
      image: heroImage6,
      title: "Your Texas Story Begins Here",
      subtitle: "Hunting, outfitting, and authentic ranch experiences for every adventurer"
    }
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />

      {/* Hero Carousel */}
      <HeroCarousel slides={heroSlides} />

      {/* About Section */}
      <section className="py-20 bg-white texture-floral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Cardinal sitting on barn image */}
              <div className="absolute -top-6 right-4 z-20">
                <img
                  src={cardinalImage}
                  alt="Cardinal"
                  className="w-6 opacity-85"
                />
              </div>
              {/* Stamp decoration */}
              <div className="stamp" style={{ top: '-20px', right: '-20px' }}></div>
              <img
                src={barnImage}
                alt="Historic Crawford Ranch barn with cattle corrals"
                className="rounded-lg shadow-xl w-full"
              />
            </div>

            <div className="space-y-6">
              <h2 className="display text-texas-maroon">
                <em>A</em> Testament to Family
              </h2>
              <p className="copy text-warm-gray">
                Nestled in the heart of the breathtaking Texas Hill Country, our generational cattle and hunting ranch stands as
                a testament to the enduring spirit of family, tradition, and the great outdoors. For over four generations, we have
                cultivated this land, not just as a business but as a way of life.
              </p>
              <p className="copy text-warm-gray">
                Our ranch is now a place where families gather, friends connect, and memories are made. We invite visitors to
                immerse themselves in the beauty of the Texas Hill Country, where nature and heritage intertwine to create
                unforgettable experiences amid stunning landscapes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DecorativeDivider />

      {/* Feature Slab */}
      <FeatureSlab
        kicker="FOUR GENERATIONS STRONG"
        title="The Spirit of Texas Adventure"
        pattern="maroon"
        useTexturePattern={true}
        cta={
          <Link href="/about">
            <a className="btn-accent">Discover Our Story</a>
          </Link>
        }
      >
        <p className="mb-4">
          From working cattle drives to elegant weddings under ancient oaks, Crawford Ranch embodies the authentic
          Texas experience. Our 800+ acres of pristine Hill Country provide the perfect backdrop for life's most
          important moments.
        </p>
        <p>
          Whether you're seeking adventure, celebration, or connection with nature, our ranch offers a rare
          combination of rustic authenticity and refined hospitality that makes every visit unforgettable.
        </p>
      </FeatureSlab>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-texas-maroon mb-4">
              Discover Crawford Ranch
            </h2>
            <p className="text-xl text-warm-gray max-w-3xl mx-auto font-inter">
              From intimate gatherings to corporate retreats, experience the perfect blend of rustic charm and upscale amenities
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <HighlightCard
              image={weddingImage}
              title="Events"
              description="Create unforgettable memories with weddings, celebrations, and special events in our stunning Hill Country setting. Professional venues and authentic Texas hospitality await."
              learnMoreLink="/events"
              bookNowLink="/contact"
              learnMoreParams="?source=home-highlights"
              bookNowParams="?context=events&eventType=Wedding&source=home-highlights"
            />

            <HighlightCard
              image={heroImage4}
              title="Outfitting"
              description="Experience premier high-fence whitetail hunting in the beautiful Texas Hill Country. Expert guides and exceptional opportunities for trophy deer await."
              learnMoreLink="/outfitting"
              bookNowLink="/contact"
              learnMoreParams="?source=home-highlights"
              bookNowParams="?context=outfitting&eventType=Hunting%20Inquiry&source=home-highlights"
              accent={true}
            />

            <HighlightCard
              image={corporateImage}
              title="Corporate Retreats"
              description="Inspire your team with productive meetings and strategic planning in our tranquil ranch environment. Private spaces, team building activities, and natural beauty combine for success."
              learnMoreLink="/corporate"
              bookNowLink="/contact"
              learnMoreParams="?source=home-highlights"
              bookNowParams="?context=corporate&eventType=Corporate%20Retreat&source=home-highlights"
            />

            <HighlightCard
              image={activitiesImage}
              title="Activities"
              description="Experience authentic ranch life and discover the natural beauty of the Texas Hill Country through guided activities and adventures for all ages."
              learnMoreLink="/activities"
              bookNowLink="/contact"
              learnMoreParams="?source=home-highlights"
              bookNowParams="?context=activities&eventType=Activities%20Inquiry&source=home-highlights"
              accent={true}
            />
          </div>
        </div>
      </section>

      <DecorativeDivider />

      {/* Bold CTA Band with Blue Pattern */}
      <CtaBand
        title="Your Adventure Begins Here"
        copy="Ready to experience authentic Texas hospitality? Book your event, retreat, or ranch adventure today and create memories that last a lifetime."
        href="/contact?context=booking&source=home-cta"
        pattern="blue"
        useTexture2Pattern={true}
      />

      <DecorativeDivider showBarn={true} />

      <Footer />
    </div>
  );
}
