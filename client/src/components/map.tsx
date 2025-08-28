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
          {/* Terrain-style map representation */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-100 via-yellow-50 to-orange-100">
            {/* Hill Country terrain texture */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/6 left-1/4 w-32 h-16 bg-green-300 rounded-full transform rotate-12"></div>
              <div className="absolute top-1/3 right-1/4 w-24 h-12 bg-green-400 rounded-full transform -rotate-6"></div>
              <div className="absolute bottom-1/3 left-1/6 w-28 h-14 bg-green-300 rounded-full transform rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/3 w-20 h-10 bg-green-400 rounded-full transform -rotate-12"></div>
            </div>
            
            {/* Ranch location marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-texas-maroon rounded-full p-3 shadow-lg animate-pulse">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
            
            {/* Roads and features */}
            <div className="absolute top-0 left-0 w-full h-full opacity-40">
              {/* Major highways */}
              <div className="absolute top-1/5 left-0 w-full h-1 bg-gray-600 rounded"></div>
              <div className="absolute top-3/4 left-0 w-full h-1 bg-gray-600 rounded"></div>
              <div className="absolute top-0 left-2/3 w-1 h-full bg-gray-600 rounded"></div>
              
              {/* Local roads */}
              <div className="absolute top-1/3 left-1/4 w-1/2 h-0.5 bg-gray-500 rounded transform rotate-30"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1/3 h-0.5 bg-gray-500 rounded transform -rotate-45"></div>
              
              {/* Towns */}
              <div className="absolute top-1/4 right-1/6 w-2 h-2 bg-gray-700 rounded"></div>
              <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-gray-700 rounded"></div>
              
              {/* Water features */}
              <div className="absolute top-2/3 left-1/3 w-6 h-1 bg-blue-500 rounded-full"></div>
              <div className="absolute top-1/4 right-1/3 w-4 h-1 bg-blue-500 rounded-full"></div>
            </div>
          </div>
          
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