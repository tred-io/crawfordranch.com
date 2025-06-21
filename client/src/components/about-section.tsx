export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-texas-red mb-6">Our Legacy</h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto leading-relaxed">
            For generations, our family has called this beautiful Central Texas land home. 
            Now we're sharing our piece of paradise with you.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Historic ranch house with wide porches" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-playfair font-semibold text-ranch-brown">A Piece of Texas History</h3>
            <p className="text-lg text-warm-gray leading-relaxed">
              Nestled in the heart of Lampasas County, our ranch spans hundreds of acres of pristine Central Texas landscape. 
              From rolling hills dotted with heritage oak trees to crystal-clear creeks that wind through our property, 
              every corner tells a story of Texas tradition.
            </p>
            <p className="text-lg text-warm-gray leading-relaxed">
              Our multi-generational cattle operation continues to this day, but we've opened our gates to share 
              this special place with couples seeking the perfect wedding venue, corporations planning memorable retreats, 
              and faith communities looking for a peaceful setting for spiritual renewal.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-texas-red">500+</div>
                <div className="text-warm-gray">Acres</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-texas-red">4</div>
                <div className="text-warm-gray">Generations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
