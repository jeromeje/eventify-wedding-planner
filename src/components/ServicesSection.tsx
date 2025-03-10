
import { Flower, Music, Lightbulb, Package } from 'lucide-react';
import ServiceOption from './ServiceOption';

interface Service {
  decoration: boolean;
  party: boolean;
  lighting: boolean;
  fullPackage: boolean;
}

interface ServicesSectionProps {
  services: Service;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  basePrice: number;
}

const ServicesSection = ({ services, onChange, basePrice }: ServicesSectionProps) => {
  const serviceOptions = [
    {
      id: 'decoration',
      name: 'Decoration Services',
      description: 'Professional venue decoration with flowers, lighting, and themed setups.',
      price: basePrice * 0.2,
      icon: Flower,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'party',
      name: 'Party Planning',
      description: 'Complete party coordination including catering, entertainment, and photography.',
      price: basePrice * 0.15,
      icon: Music,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'lighting',
      name: 'Lighting & Sound',
      description: 'Professional lighting setup and sound system for your event.',
      price: basePrice * 0.1,
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'fullPackage',
      name: 'Full Package (15% Discount)',
      description: 'Includes all services above plus premium benefits and dedicated event manager.',
      price: basePrice * 0.45, // Total of all services with 15% discount
      icon: Package,
      image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=500',
    }
  ];

  return (
    <div className="space-y-4">
      {serviceOptions.map((service) => (
        <ServiceOption
          key={service.id}
          {...service}
          checked={services[service.id as keyof Service]}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default ServicesSection;
