
import { Flower, Music, Lightbulb, Package, Sparkles, Camera, Cake, Mic, Speaker, Palette, Glasses } from 'lucide-react';
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
  const decorationServices = [
    {
      id: 'decoration',
      name: 'Premium Floral Decoration',
      description: 'Luxurious floral arrangements and venue decoration.',
      price: basePrice * 0.15,
      icon: Flower,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'decoration-2',
      name: 'Theme Decoration',
      description: 'Custom themed decorations for your special event.',
      price: basePrice * 0.12,
      icon: Palette,
      image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'decoration-3',
      name: 'Elegant Lighting Decor',
      description: 'Sophisticated lighting arrangements and installations.',
      price: basePrice * 0.1,
      icon: Sparkles,
      image: 'https://images.unsplash.com/photo-1515169273894-7e876dcf13da?auto=format&fit=crop&q=80&w=500',
    }
  ];

  const partyServices = [
    {
      id: 'party',
      name: 'Complete Party Planning',
      description: 'Full-service party planning including coordination and entertainment.',
      price: basePrice * 0.2,
      icon: Music,
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'party-2',
      name: 'Photography Service',
      description: 'Professional photography coverage for your event.',
      price: basePrice * 0.15,
      icon: Camera,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'party-3',
      name: 'Catering Service',
      description: 'Premium catering service with customized menu options.',
      price: basePrice * 0.25,
      icon: Cake,
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&q=80&w=500',
    }
  ];

  const lightingServices = [
    {
      id: 'lighting',
      name: 'Professional Sound System',
      description: 'High-quality sound system with professional setup.',
      price: basePrice * 0.12,
      icon: Speaker,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'lighting-2',
      name: 'DJ Services',
      description: 'Professional DJ with state-of-the-art equipment.',
      price: basePrice * 0.15,
      icon: Mic,
      image: 'https://images.unsplash.com/photo-1571266014759-371c8f645be4?auto=format&fit=crop&q=80&w=500',
    },
    {
      id: 'lighting-3',
      name: 'Ambient Lighting',
      description: 'Custom ambient lighting setup for your venue.',
      price: basePrice * 0.1,
      icon: Lightbulb,
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=500',
    }
  ];

  const fullPackageService = {
    id: 'fullPackage',
    name: 'Full Package (20% Discount)',
    description: 'All services included with premium benefits and dedicated event manager.',
    price: basePrice * 0.8, // 20% discount on total
    icon: Package,
    image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=500',
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold mb-4">Decoration Services</h3>
        <div className="space-y-4">
          {decorationServices.map((service) => (
            <ServiceOption
              key={service.id}
              {...service}
              checked={services[service.id as keyof Service] || false}
              onChange={onChange}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Party Planning Services</h3>
        <div className="space-y-4">
          {partyServices.map((service) => (
            <ServiceOption
              key={service.id}
              {...service}
              checked={services[service.id as keyof Service] || false}
              onChange={onChange}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Sound & Lighting Services</h3>
        <div className="space-y-4">
          {lightingServices.map((service) => (
            <ServiceOption
              key={service.id}
              {...service}
              checked={services[service.id as keyof Service] || false}
              onChange={onChange}
            />
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-border">
        <ServiceOption
          {...fullPackageService}
          checked={services.fullPackage}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default ServicesSection;
