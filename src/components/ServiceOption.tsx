
import { LucideIcon } from 'lucide-react';

interface ServiceOptionProps {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: LucideIcon;
  image: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ServiceOption = ({
  id,
  name,
  description,
  price,
  icon: Icon,
  image,
  checked,
  onChange
}: ServiceOptionProps) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg border border-border bg-white/50 backdrop-blur-sm hover:bg-muted/20 transition-colors">
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={checked}
        onChange={onChange}
        className="mt-1"
      />
      <div className="flex-grow">
        <label htmlFor={id} className="flex items-center font-medium cursor-pointer">
          <Icon className="w-4 h-4 mr-2 text-primary" />
          {name}
        </label>
        <div className="mt-2 flex gap-4">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 object-cover rounded-md"
          />
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              {description}
            </p>
            <p className="text-sm font-medium text-primary">
              ${price.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOption;
