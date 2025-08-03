import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/logo_1754206429175.png";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ranch-cream">
      <div className="text-center">
        <div className="mb-8">
          <img 
            src={logoImage} 
            alt="Crawford Ranch Logo" 
            className="h-24 w-auto mx-auto mb-6"
          />
        </div>
        <h1 className="text-6xl font-merriweather font-black text-texas-maroon mb-4">404</h1>
        <p className="text-xl text-warm-gray mb-8">This page could not be found on the ranch</p>
        <Link href="/">
          <Button className="bg-texas-maroon hover:bg-texas-maroon-light text-white px-8 py-3">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
