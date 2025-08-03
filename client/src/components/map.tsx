import { MapPin } from "lucide-react";

interface SimpleMapProps {
  latitude: number;
  longitude: number;
  title: string;
}

export default function SimpleMap({ latitude, longitude, title }: SimpleMapProps) {
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyA5kEQCz9N5aN8Fa4HjTzgLQQmH7bOzNkE&q=${latitude},${longitude}&zoom=12`;
  
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
        <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg relative overflow-hidden">
          {/* Stylized map representation */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-300">
            {/* Ranch location marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-texas-maroon rounded-full p-2 shadow-lg animate-pulse">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            
            {/* Decorative elements representing roads and terrain */}
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1 bg-gray-400 rounded transform rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/3 h-1 bg-gray-400 rounded transform -rotate-45"></div>
              <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full"></div>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 text-xs text-gray-600">
            <p className="font-semibold">Crawford Ranch</p>
            <p>Lampasas County, TX</p>
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