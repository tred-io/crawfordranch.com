import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import DecorativeDivider from "@/components/decorative-divider";
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
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url("${trailImage}")` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-playfair font-bold mb-6 leading-tight">
              Activities & Trails
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-inter font-light leading-relaxed">
              Experience the authentic beauty and adventure of the Texas Hill Country through guided activities and scenic trails.
            </p>
            <Link href="/contact?context=activities&eventType=Activities%20Inquiry&source=activities-hero">
              <Button className="bg-white text-texas-maroon hover:bg-ranch-cream border-2 border-white/40 px-8 py-6 text-lg font-semibold">
                Book an Experience
              </Button>
            </Link>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-texas-maroon mb-4">
                Explore the Ranch
              </h2>
              <p className="text-lg text-warm-gray max-w-2xl mx-auto font-inter">
                From peaceful nature walks to authentic cattle work, discover activities that connect you with the land and heritage of Texas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="group bg-ranch-cream/50 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
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
                    <p className="text-warm-gray font-inter leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/contact?context=activities&eventType=Activities%20Inquiry&source=activities-grid">
                <Button className="bg-texas-maroon text-white hover:bg-texas-maroon-light px-8 py-6 text-lg font-semibold">
                  Plan Your Visit
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-b from-white to-ranch-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-texas-maroon mb-6">
              Ready for an Adventure?
            </h2>
            <p className="text-xl text-warm-gray mb-8 font-inter leading-relaxed">
              Whether you're seeking tranquility or adventure, our experienced guides will help you create unforgettable memories in the heart of Texas.
            </p>
            <Link href="/contact?context=activities&source=activities-cta">
              <Button className="bg-sage-teal text-white hover:bg-sage-teal-dark px-10 py-6 text-lg font-semibold">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>

        <DecorativeDivider />
      </div>
      <Footer />
    </div>
  );
}
