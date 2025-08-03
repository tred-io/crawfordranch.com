// Custom SVG icons for Crawford Ranch with rustic, old west styling

export const CattleBrandIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="3" fill="none">
      {/* Stylized "C" for Crawford */}
      <path d="M35 25 Q25 25 25 50 Q25 75 35 75" strokeLinecap="round"/>
      {/* Stylized "R" */}
      <path d="M45 25 L45 75 M45 25 L55 25 Q65 25 65 40 Q65 50 55 50 L45 50 M55 50 L65 75" strokeLinecap="round"/>
    </g>
  </svg>
);

export const LonghornIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 120 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="2" fill="none">
      {/* Longhorn silhouette */}
      <path d="M10 30 Q20 20 30 25 Q40 30 50 28 Q60 30 70 28 Q80 30 90 25 Q100 20 110 30" strokeLinecap="round"/>
      {/* Head */}
      <ellipse cx="60" cy="35" rx="8" ry="5"/>
      {/* Horns */}
      <path d="M30 25 Q15 15 5 20" strokeLinecap="round"/>
      <path d="M90 25 Q105 15 115 20" strokeLinecap="round"/>
    </g>
  </svg>
);

export const CowboyHatIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.1">
      {/* Hat brim */}
      <ellipse cx="50" cy="45" rx="35" ry="8"/>
      {/* Hat crown */}
      <path d="M30 45 Q30 25 40 20 Q50 15 60 20 Q70 25 70 45" strokeLinecap="round"/>
      {/* Hat crease */}
      <path d="M45 25 Q50 22 55 25" strokeWidth="1" fill="none"/>
    </g>
  </svg>
);

export const HorseshoeIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="3" fill="none">
      {/* Horseshoe shape */}
      <path d="M20 30 Q20 50 30 65 Q40 75 50 75 Q60 75 70 65 Q80 50 80 30" strokeLinecap="round"/>
      {/* Nail holes */}
      <circle cx="25" cy="40" r="2" fill="currentColor"/>
      <circle cx="30" cy="55" r="2" fill="currentColor"/>
      <circle cx="50" cy="65" r="2" fill="currentColor"/>
      <circle cx="70" cy="55" r="2" fill="currentColor"/>
      <circle cx="75" cy="40" r="2" fill="currentColor"/>
    </g>
  </svg>
);

export const BluesonnetIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g>
      {/* Stem */}
      <path d="M40 70 L40 30" stroke="currentColor" strokeWidth="2" fill="none"/>
      {/* Leaves */}
      <path d="M40 50 Q30 45 35 40 Q40 45 40 50" fill="currentColor" opacity="0.6"/>
      <path d="M40 60 Q50 55 45 50 Q40 55 40 60" fill="currentColor" opacity="0.6"/>
      {/* Flower petals */}
      <circle cx="35" cy="25" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="40" cy="20" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="45" cy="25" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="38" cy="30" r="3" fill="currentColor" opacity="0.8"/>
      <circle cx="42" cy="30" r="3" fill="currentColor" opacity="0.8"/>
    </g>
  </svg>
);

export const StarIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 5 L35 20 L50 20 L40 30 L45 45 L30 37 L15 45 L20 30 L10 20 L25 20 Z" 
          stroke="currentColor" strokeWidth="1" fill="currentColor" opacity="0.8"/>
  </svg>
);

export const RopeIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 100 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="3" fill="none">
      {/* Rope pattern */}
      <path d="M5 10 Q15 5 25 10 Q35 15 45 10 Q55 5 65 10 Q75 15 85 10 Q95 5 100 10" strokeLinecap="round"/>
      <path d="M0 10 Q10 15 20 10 Q30 5 40 10 Q50 15 60 10 Q70 5 80 10 Q90 15 95 10" strokeLinecap="round"/>
    </g>
  </svg>
);