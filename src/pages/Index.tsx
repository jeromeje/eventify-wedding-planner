
import { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedVenues from '../components/FeaturedVenues';
import { Check, Calendar, Users, Gift } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Index = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section className="py-20">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-medium mb-4">
                Simplified Wedding Planning
              </h2>
              <p className="text-muted-foreground">
                We've streamlined the wedding planning process so you can focus on what matters most—creating memories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div 
                  key={feature.title} 
                  className="bg-white p-8 rounded-xl border border-border hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <FeaturedVenues />
        
        {/* How It Works Section */}
        <section className="py-20">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-medium mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Our simple three-step process makes planning your wedding effortless.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step, index) => (
                <div key={step.title} className="relative">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-medium mb-6">
                    {index + 1}
                  </div>
                  
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-6 left-12 right-0 h-0.5 bg-border" />
                  )}
                  
                  <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 bg-muted/50">
          <div className="container px-6 mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-medium mb-4">
                What Our Couples Say
              </h2>
              <p className="text-muted-foreground">
                Real experiences from couples who planned their perfect day with us.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 md:p-12 border border-border shadow-sm">
              <p className="text-xl leading-relaxed italic mb-8">
                "Eventify made our wedding planning experience truly delightful. From finding the perfect venue to 
                coordinating with vendors, everything was seamless and stress-free. We couldn't have asked for a better platform 
                to help us create our dream wedding."
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-muted overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" 
                    alt="Sarah and Michael" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah & Michael</h4>
                  <p className="text-sm text-muted-foreground">Married June 2023</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container px-6 mx-auto">
            <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-12">
              <h2 className="text-3xl font-medium mb-4">
                Ready to Start Planning Your Dream Wedding?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Join thousands of couples who've created unforgettable wedding experiences with Eventify.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="/register" 
                  className="px-6 py-3 text-white font-medium bg-primary hover:bg-primary/90 rounded-md transition-colors"
                >
                  Get Started
                </a>
                <a 
                  href="/contact" 
                  className="px-6 py-3 text-foreground font-medium bg-white hover:bg-muted border rounded-md transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Data
const features = [
  {
    icon: Check,
    title: 'Curated Venues',
    description: 'Discover handpicked venues that match your style, budget, and guest count requirements.'
  },
  {
    icon: Calendar,
    title: 'Simplified Booking',
    description: 'Our streamlined booking process makes securing your ideal venue and vendors effortless.'
  },
  {
    icon: Users,
    title: 'Vetted Vendors',
    description: 'Connect with professional, reliable vendors who have been thoroughly reviewed and verified.'
  },
  {
    icon: Gift,
    title: 'All-in-One Packages',
    description: 'Choose from carefully crafted packages that combine venues and services for remarkable value.'
  },
  {
    icon: Calendar,
    title: 'Easy Scheduling',
    description: 'Manage appointments, bookings, and important dates with our intuitive planning tools.'
  },
  {
    icon: Check,
    title: 'Secure Payments',
    description: 'Process deposits and payments confidently through our secure, transparent payment system.'
  }
];

const steps = [
  {
    title: 'Find Your Venue',
    description: 'Browse our curated collection of venues and filter by location, capacity, style, and budget to find your perfect match.'
  },
  {
    title: 'Select Vendors',
    description: 'Choose from our network of professional photographers, caterers, decorators, and more to complete your vision.'
  },
  {
    title: 'Book & Manage',
    description: 'Secure your selections with our simple booking process and manage all the details in one convenient place.'
  }
];

export default Index;
