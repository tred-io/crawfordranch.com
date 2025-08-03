import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  images: Array<{
    src: string;
    alt: string;
    thumbnail?: string;
  }>;
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function Lightbox({ 
  images, 
  currentIndex, 
  isOpen, 
  onClose, 
  onNext, 
  onPrevious 
}: LightboxProps) {
  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        {/* Close button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Previous button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute left-4 z-10 text-white hover:bg-white/20"
          onClick={onPrevious}
          disabled={currentIndex === 0}
        >
          <ChevronLeft className="h-8 w-8" />
        </Button>

        {/* Next button */}
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute right-4 z-10 text-white hover:bg-white/20"
          onClick={onNext}
          disabled={currentIndex === images.length - 1}
        >
          <ChevronRight className="h-8 w-8" />
        </Button>

        {/* Main image */}
        <div className="max-w-4xl max-h-full w-full h-full flex items-center justify-center">
          <img 
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* Image counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}