import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import EventsSection from "@/components/events-section";
import ActivitiesSection from "@/components/activities-section";
import FutureOfferingsSection from "@/components/future-offerings-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <ActivitiesSection />
      <FutureOfferingsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
