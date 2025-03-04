
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import VenueCard from '../components/VenueCard';
import { Search, Filter, ChevronDown } from 'lucide-react';

// Mock data for venues
const allVenues = [
  {
    id: '1',
    name: 'Crystal Garden Palace',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1498&q=80',
    price: 4500,
    capacity: 250,
    rating: 4.8
  },
  {
    id: '2',
    name: 'Oceanfront Villa',
    location: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1536&q=80',
    price: 6200,
    capacity: 180,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Mountain View Lodge',
    location: 'Denver, CO',
    image: 'https://images.unsplash.com/photo-1604537466573-5e94508fd243?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    price: 3800,
    capacity: 150,
    rating: 4.6
  },
  {
    id: '4',
    name: 'Sunset Beach Resort',
    location: 'San Diego, CA',
    image: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    price: 5200,
    capacity: 200,
    rating: 4.9
  },
  {
    id: '5',
    name: 'Historic Mansion',
    location: 'Boston, MA',
    image: 'https://images.unsplash.com/photo-1505232530843-7e94d7faac73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 4200,
    capacity: 120,
    rating: 4.5
  },
  {
    id: '6',
    name: 'Lakeside Retreat',
    location: 'Chicago, IL',
    image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    price: 3600,
    capacity: 160,
    rating: 4.4
  }
];

const Venues = () => {
  const [venues, setVenues] = useState(allVenues);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Filter venues based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setVenues(allVenues);
    } else {
      const filtered = allVenues.filter(venue => 
        venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        venue.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setVenues(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container px-6 mx-auto">
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl font-medium mb-4">Discover Perfect Venues</h1>
            <p className="text-muted-foreground max-w-3xl">
              Browse our collection of stunning venues for your special day. From elegant ballrooms to 
              breathtaking outdoor settings, find the perfect backdrop for your celebration.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search venues by name or location..."
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button
                className="flex items-center px-4 py-3 bg-white border border-input rounded-md md:w-auto"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                <Filter size={18} className="mr-2" />
                Filters
                <ChevronDown size={18} className={`ml-2 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            
            {/* Expandable Filters */}
            {isFiltersOpen && (
              <div className="p-6 bg-white border border-input rounded-md mb-6 animate-fade-down">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Price Range</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Any Price</option>
                      <option>$1000 - $3000</option>
                      <option>$3000 - $5000</option>
                      <option>$5000 - $7000</option>
                      <option>$7000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Capacity</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>Any Size</option>
                      <option>Up to 100 guests</option>
                      <option>100 - 200 guests</option>
                      <option>200 - 300 guests</option>
                      <option>300+ guests</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Venue Type</label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option>All Types</option>
                      <option>Ballroom</option>
                      <option>Garden</option>
                      <option>Beach</option>
                      <option>Historic</option>
                      <option>Modern</option>
                    </select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-primary/90 transition-colors">
                    Apply Filters
                  </button>
                </div>
              </div>
            )}
          </div>
          
          {/* Venues Grid */}
          {venues.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {venues.map((venue) => (
                <VenueCard key={venue.id} {...venue} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-medium mb-2">No venues found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filters to find venues.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Venues;
