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
      className={`${className} relative overflow-hidden rounded-lg shadow-lg bg-ranch-cream/50 cursor-pointer group`}
      onClick={onClick}
    >
      {/* Placeholder while loading */}
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gradient-to-br from-ranch-cream to-warm-gray/10 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-texas-maroon/50 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Default placeholder when not in view */}
      {!isInView && (
        <div className="absolute inset-0 bg-gradient-to-br from-ranch-cream to-warm-gray/10"></div>
      )}
      
      {/* Actual image - only load when in viewport */}
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            isLoaded ? 'opacity-100 group-hover:shadow-xl' : 'opacity-0'
          }`}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
          style={{
            contentVisibility: 'auto',
            containIntrinsicSize: '300px 200px',
            imageRendering: 'high-quality' as any
          }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}
    </div>
  );
}