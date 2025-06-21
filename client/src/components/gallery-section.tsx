export default function GallerySection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1516431883659-655d41c09bf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Rolling Texas hills with cattle at sunrise",
      className: "md:col-span-2 lg:col-span-1 h-64 lg:h-80"
    },
    {
      src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Rustic wedding reception with string lights",
      className: "h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Clear creek flowing over limestone rocks",
      className: "h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Group enjoying barbecue at outdoor kitchen",
      className: "h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Majestic oak tree against Texas sunset",
      className: "md:col-span-2 h-64"
    },
    {
      src: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      alt: "Wild turkeys in meadow with wildflowers",
      className: "h-64"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-texas-red mb-6">Ranch Gallery</h2>
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
  );
}
