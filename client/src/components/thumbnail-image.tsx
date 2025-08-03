import { useState, useRef, useEffect } from "react";

interface ThumbnailImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
}

export default function ThumbnailImage({ src, alt, className, onClick }: ThumbnailImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (placeholderRef.current) {
      observer.observe(placeholderRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div 
      ref={placeholderRef}
      className={`${className} relative overflow-hidden rounded-lg shadow-lg bg-ranch-cream animate-pulse`}
      onClick={onClick}
    >
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-ranch-cream to-warm-gray/20 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-texas-maroon border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Actual image - only load when in viewport */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-300 cursor-pointer hover:scale-105 ${
            isLoaded ? 'opacity-100 hover:shadow-xl' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
          style={{
            contentVisibility: 'auto',
            containIntrinsicSize: '300px 200px'
          }}
        />
      )}
    </div>
  );
}