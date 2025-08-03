import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { BluesonnetIcon, RopeIcon } from "@/components/icons/ranch-icons";
import image1 from "@assets/IMG_2788_1754201480313.jpg";
import image2 from "@assets/IMG_3645_1754201480316.jpg";
import image3 from "@assets/IMG_6890_1754201480319.jpg";
import image4 from "@assets/IMG_3639_1754201480314.jpg";
import image5 from "@assets/IMG_7582_1754201480321.jpg";
import image6 from "@assets/IMG_6885_1754201480318.jpg";

export default function Gallery() {
  const images = [
    {
      src: image1,
      alt: "Rolling Texas hills with cattle at sunrise",
      className: "md:col-span-2 lg:col-span-1 h-64 lg:h-80"
    },
    {
      src: image2,
      alt: "Beautiful ranch property with party house",
      className: "h-64"
    },
    {
      src: image3,
      alt: "Clear creek flowing through the ranch",
      className: "h-64"
    },
    {
      src: image4,
      alt: "Outdoor kitchen and entertaining area",
      className: "h-64"
    },
    {
      src: image5,
      alt: "Scenic ranch landscape at golden hour",
      className: "md:col-span-2 h-64"
    },
    {
      src: image6,
      alt: "Ranch grounds perfect for events",
      className: "h-64"
    }
  ];

  return (
    <div className="min-h-screen bg-ranch-cream">
      <Navigation />
      <div className="pt-16">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-texas-red mb-6">Ranch Gallery</h1>
              <div className="flex items-center justify-center mb-6">
                <BluesonnetIcon className="text-texas-red h-8 w-8 mx-2" />
                <RopeIcon className="text-warm-gray h-4 w-24 mx-4" />
                <BluesonnetIcon className="text-texas-red h-8 w-8 mx-2" />
              </div>
              <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
                Take a visual journey through our beautiful property and see why guests fall in love with our ranch.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className={image.className}>
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="rounded-lg shadow-lg w-full h-full object-cover hover:shadow-xl transition-shadow cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}