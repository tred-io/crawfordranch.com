import { MapPin } from "lucide-react";
import mapImage from "@assets/map_1756398718598.png";

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
          {/* Actual terrain map image */}
          <img 
            src={mapImage} 
            alt="Crawford Ranch Location - Central Texas Hill Country Terrain Map"
            className="w-full h-full object-cover rounded-lg"
          />
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs text-gray-600">
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