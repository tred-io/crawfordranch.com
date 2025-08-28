import { StarIcon, RopeIcon } from "@/components/icons/ranch-icons";
import barnWithBikesImage from "@assets/barn_with_bikes_sm_1756390597760.png";

export default function DecorativeDivider() {
  return (
    <div className="bg-ranch-cream py-6">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center">
        <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
        <RopeIcon className="text-warm-gray h-4 w-32" />
        <img 
          src={barnWithBikesImage} 
          alt="Barn with bikes" 
          className="h-24 mx-4"
        />
        <RopeIcon className="text-warm-gray h-4 w-32" />
        <StarIcon className="text-texas-maroon h-6 w-6 mx-4" />
      </div>
    </div>
  );
}