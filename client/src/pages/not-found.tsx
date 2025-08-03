import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ranch-cream">
      <div className="text-center">
        <h1 className="text-6xl font-playfair font-bold text-texas-red mb-4">404</h1>
        <p className="text-xl text-warm-gray mb-8">This page could not be found on the ranch</p>
        <Link href="/">
          <Button className="bg-texas-red hover:bg-texas-red-light text-white px-8 py-3">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
