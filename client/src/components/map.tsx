import { MapPin } from "lucide-react";

interface SimpleMapProps {
  latitude: number;
  longitude: number;
  title: string;
}

export default function SimpleMap({ latitude, longitude, title }: SimpleMapProps) {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA5kEQCz9N5aN8Fa4HjTzgLQQmH7bOzNkE&q=${latitude},${longitude}&zoom=5`;
  
  return (
    <div className="bg-ranch-cream border border-warm-gray rounded-lg p-6">
      <div className="text-center mb-4">
        <h3 className="text-2xl font-merriweather font-bold text-texas-maroon mb-2">
          <MapPin className="inline-block mr-2 h-6 w-6" />
          {title}
        </h3>
        <p className="text-warm-gray">Central Texas • Lampasas County</p>
      </div>
      
      <div className="bg-white rounded-lg p-4 shadow-lg">
        <div className="aspect-video rounded-lg relative overflow-hidden">
          {/* Google Maps Embed */}
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyA5kEQCz9N5aN8Fa4HjTzgLQQmH7bOzNkE&q=${latitude},${longitude}&zoom=10`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Crawford Ranch Location"
          />
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs text-gray-600 pointer-events-none">
            <p className="font-semibold">Crawford Ranch</p>
            <p>Central Texas Hill Country</p>
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <a 
            href={`https://www.google.com/maps?q=${latitude},${longitude}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-texas-maroon hover:text-texas-maroon-light underline font-semibold"
          >
            View in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}