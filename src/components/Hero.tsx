
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:py-36 lg:py-52 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted to-background z-0" />
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl" />
      
      <div className="container relative px-6 mx-auto z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-medium text-primary bg-primary/10 rounded-full animate-fade-down">
            Seamless Wedding Planning Experience
          </span>
          
          <h1 className="mb-6 text-4xl font-medium leading-tight md:text-5xl lg:text-6xl text-foreground animate-fade-down" style={{ animationDelay: '100ms' }}>
            Create your perfect <br /> wedding day with <span className="text-gradient font-semibold">Eventify</span>
          </h1>
          
          <p className="mb-10 text-lg text-muted-foreground leading-relaxed md:text-xl animate-fade-down" style={{ animationDelay: '200ms' }}>
            Discover exceptional venues, find reliable vendors, and manage every 
            detail of your special day—all in one elegant platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-down" style={{ animationDelay: '300ms' }}>
            <Link 
              to="/venues" 
              className="group px-6 py-3 text-white font-medium bg-primary hover:bg-primary/90 rounded-md transition-all duration-300 flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book The Venue
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link 
              to="/about" 
              className="px-6 py-3 text-foreground font-medium bg-white hover:bg-muted border rounded-md transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
