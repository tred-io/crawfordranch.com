import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { BluesonnetIcon, RopeIcon } from "@/components/icons/ranch-icons";
import DecorativeDivider from "@/components/decorative-divider";
import Lightbox from "@/components/lightbox";
import ThumbnailImage from "@/components/thumbnail-image";
import image1 from "@assets/IMG_0518_1754201480310.jpg";
import image2 from "@assets/IMG_1144_1754201480312.jpg";
import image3 from "@assets/IMG_2788_1754201480313.jpg";
import image4 from "@assets/IMG_3639_1754201480314.jpg";
import image5 from "@assets/IMG_3645_1754201480316.jpg";
import image6 from "@assets/IMG_3673_1754201480317.jpg";
import image7 from "@assets/IMG_6885_1754201480318.jpg";
import image8 from "@assets/IMG_6890_1754201480319.jpg";
import image9 from "@assets/IMG_6973_1754201480320.jpg";
import image10 from "@assets/IMG_7582_1754201480321.jpg";
import image11 from "@assets/IMG_7584_1754201480322.jpg";
import image12 from "@assets/IMG_7588_1754201480323.jpg";
import image13 from "@assets/IMG_7597_1754202325477.jpg";
import image14 from "@assets/IMG_3328_1754202354559.jpg";
import image15 from "@assets/IMG_2196_1754202398409.jpg";
import image16 from "@assets/IMG_3326_1754202418292.jpg";
import image17 from "@assets/IMG_3327_1754202418294.jpg";
import image18 from "@assets/IMG_2786_2_1756229049596.jpg";
import image19 from "@assets/IMG_2721_1756229798753.jpg";
import image20 from "@assets/IMG_3645_1756229827038.jpg";
import image21 from "@assets/IMG_6604_1756230314550.jpg";
import image22 from "@assets/IMG_5016_1756230324987.jpg";
import image23 from "@assets/IMG_2196_1756230374363.jpg";
import image24 from "@assets/wed-283001_1756230624714.jpg";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const images = [
    {
      src: image1,
      alt: "Historic Crawford Ranch barn with cattle corrals",
      className: "h-64 object-cover"
    },
    {
      src: image2,
      alt: "Ranch landscape with natural hunting grounds", 
      className: "h-64 object-cover"
    },
    {
      src: image3,
      alt: "Rolling Texas hills with cattle at sunrise",
      className: "h-64 object-cover"
    },
    {
      src: image4,
      alt: "Modern outdoor kitchen and entertaining area",
      className: "h-64 object-cover"
    },
    {
      src: image5,
      alt: "Beautiful ranch property with Creekside Venue",
      className: "md:col-span-2 h-64 object-cover"
    },
    {
      src: image6,
      alt: "Scenic bluebonnet fields in spring",
      className: "h-64 object-cover"
    },
    {
      src: image7,
      alt: "Ranch grounds perfect for outdoor events",
      className: "h-64 object-cover"
    },
    {
      src: image8,
      alt: "Crystal clear creek flowing through property",
      className: "h-64 object-cover"
    },
    {
      src: image9,
      alt: "Peaceful ranch setting with mature oak trees",
      className: "h-64 object-cover"
    },
    {
      src: image10,
      alt: "Scenic ranch landscape at golden hour",
      className: "h-64 object-cover"
    },
    {
      src: image11,
      alt: "Ranch facilities and natural surroundings",
      className: "h-64 object-cover"
    },
    {
      src: image12,
      alt: "Expansive ranch views with Central Texas terrain",
      className: "h-64 object-cover"
    },
    {
      src: image13,
      alt: "White-tail deer and wild turkeys at ranch feeding area",
      className: "md:col-span-2 h-64 object-cover"
    },
    {
      src: image14,
      alt: "Pristine creek with clear water perfect for fishing",
      className: "h-64 object-cover"
    },
    {
      src: image15,
      alt: "Peaceful ranch field with majestic oak tree at sunset",
      className: "h-64 object-cover"
    },
    {
      src: image16,
      alt: "Rustic fire pit area with ranch fencing and scenic views",
      className: "h-64 object-cover"
    },
    {
      src: image17,
      alt: "Heritage oak tree surrounded by ranch fencing",
      className: "h-64 object-cover"
    },
    {
      src: image18,
      alt: "Black cattle grazing in Texas Hill Country pasture",
      className: "h-64 object-cover"
    },
    {
      src: image19,
      alt: "Whitetail deer with wild turkeys on ranch property",
      className: "h-64 object-cover"
    },
    {
      src: image20,
      alt: "Ranch lodge accommodations under oak trees",
      className: "h-64 object-cover"
    },
    {
      src: image21,
      alt: "Successful turkey hunters with impressive harvest",
      className: "md:col-span-2 h-64 object-cover"
    },
    {
      src: image22,
      alt: "Multi-generational ranchers on lodge porch",
      className: "h-64 object-cover"
    },
    {
      src: image23,
      alt: "Sunset over Texas ranch with heritage oak tree",
      className: "h-64 object-cover"
    },
    {
      src: image24,
      alt: "Beautiful wedding ceremony under ranch oak trees",
      className: "h-64 object-cover"
    }
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-merriweather font-black text-texas-maroon mb-6">Crawford Ranch Gallery</h1>
              <div className="flex items-center justify-center mb-6">
                <BluesonnetIcon className="text-texas-maroon h-8 w-8 mx-2" />
                <RopeIcon className="text-warm-gray h-4 w-24 mx-4" />
                <BluesonnetIcon className="text-texas-maroon h-8 w-8 mx-2" />
              </div>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Take a visual journey through our beautiful property and see why guests fall in love with our ranch.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <ThumbnailImage
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={image.className}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>

            <Lightbox
              images={images}
              currentIndex={currentImageIndex}
              isOpen={lightboxOpen}
              onClose={closeLightbox}
              onNext={nextImage}
              onPrevious={previousImage}
            />
          </div>
        </section>

        <DecorativeDivider />
      </div>
      <Footer />
    </div>
  );
}