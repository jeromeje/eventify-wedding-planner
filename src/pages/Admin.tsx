
import { useState } from 'react';
import { PlusCircle, ImageIcon, DollarSign, Type, FileText } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import AdminServiceForm from '../components/AdminServiceForm';
import AdminVenueForm from '../components/AdminVenueForm';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState<'venues' | 'services'>('venues');

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('venues')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'venues'
                ? 'bg-primary text-white'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Venues
          </button>
          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'services'
                ? 'bg-primary text-white'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            Services
          </button>
        </div>

        {activeTab === 'venues' ? (
          <AdminVenueForm />
        ) : (
          <AdminServiceForm />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default AdminPage;
