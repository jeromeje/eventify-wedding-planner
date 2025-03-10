
import { useState } from 'react';
import { ImageIcon, DollarSign, Type, FileText } from 'lucide-react';

type ServiceCategory = 'decoration' | 'party' | 'lighting';

const AdminServiceForm = () => {
  const [serviceData, setServiceData] = useState({
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    category: 'decoration' as ServiceCategory,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Service data:', serviceData);
    // Reset form
    setServiceData({
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      category: 'decoration',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setServiceData(prev => ({
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
            Service Name
          </label>
          <input
            type="text"
            name="name"
            value={serviceData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Service Category</label>
          <select
            name="category"
            value={serviceData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-md"
            required
          >
            <option value="decoration">Decoration</option>
            <option value="party">Party Planning</option>
            <option value="lighting">Lighting</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            <FileText className="w-4 h-4 inline mr-2" />
            Description
          </label>
          <textarea
            name="description"
            value={serviceData.description}
            onChange={handleChange}
            rows={3}
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
            value={serviceData.price}
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
            value={serviceData.imageUrl}
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
        Add Service
      </button>
    </form>
  );
};

export default AdminServiceForm;
