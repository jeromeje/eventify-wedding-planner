
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Calendar, Users, Clock, Info, ArrowLeft, Sparkles, Flower, Party, Lightbulb, Package } from 'lucide-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const BookingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { venue } = location.state || { venue: null };
  
  const [step, setStep] = useState(1);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [bookingDetails, setBookingDetails] = useState({
    date: '',
    startTime: '',
    endTime: '',
    guestCount: '',
    specialRequirements: '',
    services: {
      decoration: false,
      party: false,
      lighting: false,
      fullPackage: false
    }
  });

  // Handle login form input changes
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  // Handle booking form input changes
  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBookingDetails({ ...bookingDetails, [name]: value });
  };

  // Handle service checkbox changes
  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    
    // If full package is selected, select all services
    if (name === 'fullPackage' && checked) {
      setBookingDetails({
        ...bookingDetails,
        services: {
          decoration: true,
          party: true,
          lighting: true,
          fullPackage: true
        }
      });
    } else {
      setBookingDetails({
        ...bookingDetails,
        services: {
          ...bookingDetails.services,
          [name]: checked,
          // If any individual service is unchecked, uncheck fullPackage too
          fullPackage: name === 'fullPackage' ? checked : 
            checked && name !== 'fullPackage' ? 
              bookingDetails.services.decoration && 
              bookingDetails.services.party && 
              bookingDetails.services.lighting : false
        }
      });
    }
  };

  // Handle login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login credentials:', loginForm);
    // In a real app, this would authenticate with a backend
    setIsLoggedIn(true);
    setStep(2);
  };

  // Handle guest booking (skip login)
  const handleContinueAsGuest = () => {
    setStep(2);
  };

  // Handle booking submission
  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking details:', bookingDetails);
    // In a real app, this would send booking details to a backend
    setStep(3);
  };

  // Handle going back to previous step
  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate(-1);
    }
  };

  // Calculate estimated cost based on selected services
  const calculateEstimatedCost = () => {
    const basePrice = venue?.price || 1000;
    let totalPrice = basePrice;
    
    if (bookingDetails.services.fullPackage) {
      return basePrice * 1.5; // 50% extra for full package
    }
    
    if (bookingDetails.services.decoration) totalPrice += basePrice * 0.2;
    if (bookingDetails.services.party) totalPrice += basePrice * 0.15;
    if (bookingDetails.services.lighting) totalPrice += basePrice * 0.1;
    
    return totalPrice;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container px-6 mx-auto">
          <button 
            onClick={handleBack}
            className="mb-6 flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back
          </button>
          
          <div className="max-w-3xl mx-auto">
            {/* Header with venue details if provided */}
            {venue && (
              <div className="mb-8">
                <h1 className="text-3xl font-medium mb-2">{venue.name}</h1>
                <p className="text-muted-foreground">{venue.location}</p>
              </div>
            )}
            
            {/* Step 1: Login or Continue as Guest */}
            {step === 1 && (
              <div className="bg-white rounded-xl border border-border p-8 animate-fade-up">
                <h2 className="text-2xl font-medium mb-6">Sign in to book</h2>
                
                <form onSubmit={handleLogin} className="space-y-4 mb-8">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={loginForm.email}
                      onChange={handleLoginChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={loginForm.password}
                      onChange={handleLoginChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Sign In
                  </button>
                </form>
                
                <div className="flex items-center justify-between">
                  <div className="border-t border-border flex-grow"></div>
                  <span className="px-4 text-sm text-muted-foreground">or</span>
                  <div className="border-t border-border flex-grow"></div>
                </div>
                
                <button
                  onClick={handleContinueAsGuest}
                  className="w-full mt-6 bg-muted text-foreground py-2 rounded-md hover:bg-muted/80 transition-colors"
                >
                  Continue as Guest
                </button>
                
                <p className="mt-6 text-center text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <a href="/register" className="text-primary hover:underline">
                    Create an account
                  </a>
                </p>
              </div>
            )}
            
            {/* Step 2: Booking Form */}
            {step === 2 && (
              <div className="bg-white rounded-xl border border-border p-8 animate-fade-up">
                <h2 className="text-2xl font-medium mb-6">Book Your Event</h2>
                
                {isLoggedIn && (
                  <div className="mb-6 p-4 bg-primary/10 rounded-md">
                    <p className="text-sm text-primary">
                      Signed in as {loginForm.email}
                    </p>
                  </div>
                )}
                
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-1">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={bookingDetails.date}
                      onChange={handleBookingChange}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="startTime" className="block text-sm font-medium mb-1">
                        <Clock className="w-4 h-4 inline mr-1" />
                        Start Time
                      </label>
                      <input
                        type="time"
                        id="startTime"
                        name="startTime"
                        value={bookingDetails.startTime}
                        onChange={handleBookingChange}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="endTime" className="block text-sm font-medium mb-1">
                        <Clock className="w-4 h-4 inline mr-1" />
                        End Time
                      </label>
                      <input
                        type="time"
                        id="endTime"
                        name="endTime"
                        value={bookingDetails.endTime}
                        onChange={handleBookingChange}
                        className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium mb-1">
                      <Users className="w-4 h-4 inline mr-1" />
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      name="guestCount"
                      value={bookingDetails.guestCount}
                      onChange={handleBookingChange}
                      min="1"
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  {/* Vendor Services Section */}
                  <div className="mt-6">
                    <h3 className="text-lg font-medium mb-3 flex items-center">
                      <Sparkles className="w-5 h-5 mr-2 text-primary" />
                      Select Additional Services
                    </h3>
                    <div className="bg-muted/30 p-5 rounded-lg space-y-4">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="decoration"
                          name="decoration"
                          checked={bookingDetails.services.decoration}
                          onChange={handleServiceChange}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <label htmlFor="decoration" className="flex items-center font-medium">
                            <Flower className="w-4 h-4 mr-2 text-pink-500" />
                            Decoration Services
                          </label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Professional venue decoration with flowers, lighting, and themed setups.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="party"
                          name="party"
                          checked={bookingDetails.services.party}
                          onChange={handleServiceChange}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <label htmlFor="party" className="flex items-center font-medium">
                            <Party className="w-4 h-4 mr-2 text-purple-500" />
                            Party Planning
                          </label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Complete party coordination including catering, entertainment, and photography.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="lighting"
                          name="lighting"
                          checked={bookingDetails.services.lighting}
                          onChange={handleServiceChange}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <label htmlFor="lighting" className="flex items-center font-medium">
                            <Lightbulb className="w-4 h-4 mr-2 text-amber-500" />
                            Lighting & Sound
                          </label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Professional lighting setup and sound system for your event.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start pt-2 border-t border-border">
                        <input
                          type="checkbox"
                          id="fullPackage"
                          name="fullPackage"
                          checked={bookingDetails.services.fullPackage}
                          onChange={handleServiceChange}
                          className="mt-1 mr-3"
                        />
                        <div>
                          <label htmlFor="fullPackage" className="flex items-center font-medium">
                            <Package className="w-4 h-4 mr-2 text-emerald-500" />
                            Full Package (15% Discount)
                          </label>
                          <p className="text-sm text-muted-foreground mt-1">
                            Includes all services above plus premium benefits and dedicated event manager.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Estimated Cost Section */}
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h3 className="text-md font-medium mb-2">Estimated Cost</h3>
                    <p className="text-2xl font-semibold text-primary">
                      ${calculateEstimatedCost().toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Final price may vary based on specific requirements and customizations.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="specialRequirements" className="block text-sm font-medium mb-1">
                      <Info className="w-4 h-4 inline mr-1" />
                      Special Requirements
                    </label>
                    <textarea
                      id="specialRequirements"
                      name="specialRequirements"
                      value={bookingDetails.specialRequirements}
                      onChange={handleBookingChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Any special requirements, catering preferences, setup details, etc."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center"
                  >
                    Submit Booking Request
                  </button>
                </form>
              </div>
            )}
            
            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="bg-white rounded-xl border border-border p-8 animate-fade-up text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                
                <h2 className="text-2xl font-medium mb-4">Booking Request Received!</h2>
                <p className="text-muted-foreground mb-8">
                  We've received your booking request for {venue?.name || "the venue"}. 
                  Our team will review your request and get back to you within 24 hours.
                </p>
                
                <div className="p-6 bg-muted rounded-md mb-8">
                  <h3 className="font-medium mb-4">Booking Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-start">
                      <Calendar className="w-4 h-4 mr-2 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Date</p>
                        <p className="font-medium">{bookingDetails.date}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="w-4 h-4 mr-2 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Time</p>
                        <p className="font-medium">{bookingDetails.startTime} - {bookingDetails.endTime}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-4 h-4 mr-2 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Guests</p>
                        <p className="font-medium">{bookingDetails.guestCount}</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Package className="w-4 h-4 mr-2 mt-0.5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Services</p>
                        <p className="font-medium">
                          {bookingDetails.services.fullPackage 
                            ? "Full Package" 
                            : [
                                bookingDetails.services.decoration ? "Decoration" : "",
                                bookingDetails.services.party ? "Party Planning" : "",
                                bookingDetails.services.lighting ? "Lighting" : ""
                              ].filter(Boolean).join(", ") || "None"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="/venues"
                    className="flex-1 py-2 bg-white border border-input rounded-md hover:bg-muted transition-colors"
                  >
                    Browse More Venues
                  </a>
                  <a
                    href="/"
                    className="flex-1 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Return Home
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
