import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroSlide {
  image: string;
  title: string;
  subtitle: string;
}

interface HeroCarouselProps {
  slides: HeroSlide[];
  autoPlayInterval?: number;
}

export default function HeroCarousel({ slides, autoPlayInterval = 7000 }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 1000);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [slides.length, autoPlayInterval]);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Hero Image with Ken Burns effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center animate-kenburns"
          style={{
            backgroundImage: `url("${currentSlideData.image}")`,
            backgroundPosition: 'center center',
          }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 pt-32 md:pt-40">
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6 leading-tight transition-all duration-1000 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {currentSlideData.title}
        </h1>
        <p
          className={`text-xl md:text-2xl lg:text-3xl mb-8 font-inter font-light leading-relaxed transition-all duration-1000 delay-200 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {currentSlideData.subtitle}
        </p>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsTransitioning(false);
                }, 500);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown className="text-white h-10 w-10" />
      </button>
    </section>
  );
}
