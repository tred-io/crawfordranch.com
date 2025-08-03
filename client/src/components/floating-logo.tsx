import { useState, useEffect } from "react";
import logoWideImage from "@assets/logo_wide_1754206705389.png";

export default function FloatingLogo() {
  const [logoTransform, setLogoTransform] = useState({
    scale: 1,
    translateX: 0,
    translateY: 0,
    opacity: 1
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const scrollThreshold = 50; // When navbar becomes transparent
      
      if (scrolled <= scrollThreshold) {
        const progress = scrolled / scrollThreshold;
        
        // Calculate transforms to move logo to navbar position
        const scale = 1 - (progress * 0.7); // Shrink to 30% size
        const translateX = -progress * 50; // Move left slightly 
        const translateY = -progress * 15; // Move up into navbar
        const opacity = Math.max(0.8, 1 - (progress * 0.2));
        
        setLogoTransform({ scale, translateX, translateY, opacity });
      } else {
        // Final navbar position - small and positioned in navbar
        setLogoTransform({ 
          scale: 0.3, 
          translateX: -50, 
          translateY: -15, 
          opacity: 0.8 
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-5 z-50 pointer-events-none transition-all duration-500 ease-out"
      style={{ 
        opacity: logoTransform.opacity,
        left: 'max(1.5rem, calc((100vw - 1280px) / 2 + 2.5rem))',
        transform: `translate(${logoTransform.translateX}px, ${logoTransform.translateY}px) scale(${logoTransform.scale})`
      }}
    >
      <img 
        src={logoWideImage} 
        alt="Crawford Ranch Logo" 
        className="h-20 md:h-24 lg:h-28 w-auto"
        style={{
          filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))'
        }}
      />
    </div>
  );
}