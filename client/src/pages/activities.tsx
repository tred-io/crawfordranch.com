import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DecorativeDivider from "@/components/decorative-divider";
import FeatureSlab from "@/components/blocks/FeatureSlab";
import CtaBand from "@/components/blocks/CtaBand";
import { Compass, Mountain, Camera, Heart } from "lucide-react";
import trailImage from "@assets/IMG_3645_1754201480316.jpg";
import wildlifeImage from "@assets/IMG_2788_1754201480313.jpg";
import landscapeImage from "@assets/IMG_2721_1756229798753.jpg";

export default function Activities() {
  const activities = [
    {
      icon: Compass,
      title: "Guided Trail Rides",
      description: "Explore scenic trails on horseback through the beautiful Texas Hill Country",
      image: trailImage
    },
    {
      icon: Mountain,
      title: "Hiking & Nature Walks",
      description: "Discover hidden gems and breathtaking vistas across our expansive property",
      image: landscapeImage
    },
    {
      icon: Camera,
      title: "Wildlife Viewing",
      description: "Observe native Texas wildlife including deer, wild turkey, and countless bird species",
      image: wildlifeImage
    },
    {
      icon: Heart,
      title: "Ranch Experiences",
      description: "Authentic cattle work and hands-on ranch activities for all skill levels",
      image: trailImage
    }
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-24">

        {/* Hero Header */}
        <section className="py-16 bg-ranch-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="eyebrow mb-4 text-texas-maroon">EXPLORE THE HILL COUNTRY</p>
            <h1 className="display text-ranch-brown mb-6">
              <em>Adventure</em> Awaits
            </h1>
            <p className="copy text-warm-gray max-w-3xl mx-auto">
              Experience the authentic beauty and adventure of the Texas Hill Country through guided activities and
              hands-on ranch experiences. From peaceful nature walks to authentic cattle work, discover activities designed
              for all ages and skill levels that connect you with the land and heritage of Texas.
            </p>
          </div>
        </section>

        {/* Feature Slab - Blue for variety */}
        <FeatureSlab
          kicker="AUTHENTIC EXPERIENCES"
          title="Discover the Ranch"
          pattern="blue"
          useTexture2Pattern={true}
          cta={
            <Link href="/contact?context=activities&eventType=Activities%20Inquiry&source=activities-hero">
              <a className="btn-accent">Book an Experience</a>
            </Link>
          }
        >
          <p className="mb-4">
            Immerse yourself in the authentic spirit of ranch life with activities that showcase the natural beauty
            and working heritage of Crawford Ranch. Each experience is designed to create lasting connections with
            the land and wildlife of the Texas Hill Country.
          </p>
          <p>
            From guided horseback rides to wildlife viewing and hands-on ranch work, our activities offer something
            special for every adventurer, nature lover, and Texas enthusiast.
          </p>
        </FeatureSlab>

        {/* Activities Grid */}
        <section className="py-20 bg-white texture-floral">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="display text-texas-maroon mb-4">
                <em>Explore</em> the Ranch
              </h2>
              <p className="copy text-warm-gray max-w-2xl mx-auto">
                From peaceful nature walks to authentic cattle work, discover activities that connect you with the land and heritage of Texas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="card group bg-white rounded-lg overflow-hidden"
                >
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url("${activity.image}")` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <activity.icon className="h-10 w-10 text-white mb-3" />
                      <h3 className="text-2xl font-playfair font-bold text-white">
                        {activity.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="copy text-warm-gray">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact?context=activities&eventType=Activities%20Inquiry&source=activities-grid">
                <a className="btn-accent">
                  Plan Your Visit
                </a>
              </Link>
            </div>
          </div>
        </section>

        <DecorativeDivider />

        {/* CTA Band - Maroon for contrast */}
        <CtaBand
          title="Ready for an Adventure?"
          copy="Whether you're seeking tranquility or adventure, our experienced guides will help you create unforgettable memories in the heart of Texas Hill Country."
          href="/contact?context=activities&source=activities-cta"
          pattern="maroon"
          useTexturePattern={true}
        />

        <DecorativeDivider showBarn={true} />
      </div>
      <Footer />
    </div>
  );
}
