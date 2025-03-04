
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import VenueCard from './VenueCard';

// Mock data for featured venues
const featuredVenues = [
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
  }
];

const FeaturedVenues = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-medium mb-4">Featured Venues</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover our handpicked selection of stunning venues perfect for your special day.
            </p>
          </div>
          <Link
            to="/venues"
            className="group mt-4 md:mt-0 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View all venues
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVenues.map((venue) => (
            <VenueCard key={venue.id} {...venue} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedVenues;
