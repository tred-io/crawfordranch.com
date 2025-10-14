import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HighlightCardProps {
  image: string;
  title: string;
  description: string;
  learnMoreLink: string;
  bookNowLink: string;
  learnMoreParams?: string;
  bookNowParams?: string;
  accent?: boolean;
}

export default function HighlightCard({
  image,
  title,
  description,
  learnMoreLink,
  bookNowLink,
  learnMoreParams = '',
  bookNowParams = '',
  accent = false,
}: HighlightCardProps) {
  return (
    <div className={`card group relative bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${accent ? 'card--accent' : ''}`}>
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url("${image}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-playfair font-bold text-white mb-2">
            {title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-warm-gray leading-relaxed mb-6 font-inter">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href={`${learnMoreLink}${learnMoreParams}`} className="flex-1">
            <Button
              variant="outline"
              className="w-full border-2 border-sage-teal text-sage-teal-dark hover:bg-sage-teal hover:text-white transition-colors group/btn"
            >
              <span>More Info</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </Link>
          <Link href={`${bookNowLink}${bookNowParams}`} className="flex-1">
            <Button className={`w-full transition-colors ${accent ? 'btn-accent' : 'bg-texas-maroon text-white hover:bg-texas-maroon-light'}`}>
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
