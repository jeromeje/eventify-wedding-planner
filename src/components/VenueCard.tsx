
import { useState } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

interface VenueCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  capacity: number;
  rating: number;
}

const VenueCard = ({
  id,
  name,
  location,
  image,
  price,
  capacity,
  rating
}: VenueCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="group h-full rounded-xl overflow-hidden bg-white border border-border hover:shadow-lg transition-all duration-300 animate-scale-in">
      {/* Image container */}
      <div className="relative h-56 w-full overflow-hidden">
        <div className={`absolute inset-0 bg-muted ${imageLoaded ? 'hidden' : 'block'}`} />
        <img
          src={image}
          alt={name}
          className={`w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Pricing badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-md text-sm font-medium shadow-sm">
          ${price.toLocaleString()}<span className="text-xs text-muted-foreground">/day</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5">
        <div className="flex items-center mb-2">
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <span 
                key={i}
                className={`text-xs ${i < Math.floor(rating) ? 'text-amber-400' : 'text-muted'}`}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground ml-1">
            ({rating.toFixed(1)})
          </span>
        </div>
        
        <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
          <span className="truncate">{location}</span>
        </div>
        
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-1" />
            <span>Up to {capacity}</span>
          </div>
          
          <button 
            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors flex items-center"
          >
            Check availability
            <Calendar className="ml-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VenueCard;
