
import { useState } from 'react';
import { ImageIcon, DollarSign, Type, MapPin } from 'lucide-react';

const AdminVenueForm = () => {
  const [venueData, setVenueData] = useState({
    name: '',
    location: '',
    price: '',
    imageUrl: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Venue data:', venueData);
    // Reset form
    setVenueData({
      name: '',
      location: '',
      price: '',
      imageUrl: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVenueData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            <Type className="w-4 h-4 inline mr-2" />
            Venue Name
          </label>
          <input
            type="text"
            name="name"
            value={venueData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            <MapPin className="w-4 h-4 inline mr-2" />
            Location
          </label>
          <input
            type="text"
            name="location"
            value={venueData.location}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            <DollarSign className="w-4 h-4 inline mr-2" />
            Price
          </label>
          <input
            type="number"
            name="price"
            value={venueData.price}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            <ImageIcon className="w-4 h-4 inline mr-2" />
            Image URL
          </label>
          <input
            type="url"
            name="imageUrl"
            value={venueData.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
      >
        Add Venue
      </button>
    </form>
  );
};

export default AdminVenueForm;
