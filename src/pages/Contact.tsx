
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24 pb-20">
        <div className="container px-6 mx-auto">
          {/* Header */}
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Get in Touch</h1>
            <p className="text-muted-foreground">
              Have questions or need assistance? We're here to help you plan your perfect day.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-medium mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Tell us more about your needs..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full md:w-auto px-6 py-3 text-white font-medium bg-primary hover:bg-primary/90 rounded-md transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-medium mb-6">Contact Information</h2>
                <div className="bg-muted/50 p-8 rounded-xl mb-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Email</h3>
                        <a href="mailto:hello@eventify.com" className="text-primary hover:underline">
                          hello@eventify.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We aim to respond within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Phone</h3>
                        <a href="tel:+1-800-123-4567" className="text-primary hover:underline">
                          +1 (800) 123-4567
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          Monday through Friday, 9AM-6PM EST
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Office</h3>
                        <p>123 Wedding Plaza, Suite 200</p>
                        <p>New York, NY 10001</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-4">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-1">Business Hours</h3>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 3:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* FAQ section */}
                <div>
                  <h2 className="text-xl font-medium mb-4">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    <details className="group bg-white border border-input rounded-md">
                      <summary className="cursor-pointer p-4 font-medium flex justify-between items-center">
                        How do I book a venue?
                        <svg 
                          className="w-5 h-5 transition-transform group-open:rotate-180" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 text-muted-foreground">
                        <p>You can browse our venues, check availability for your desired date, and book directly through our platform. A 50% deposit is required to secure your reservation.</p>
                      </div>
                    </details>
                    
                    <details className="group bg-white border border-input rounded-md">
                      <summary className="cursor-pointer p-4 font-medium flex justify-between items-center">
                        Can I cancel my booking?
                        <svg 
                          className="w-5 h-5 transition-transform group-open:rotate-180" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 text-muted-foreground">
                        <p>Yes, cancellations are accepted up to 60 days before your event date for a full refund of your deposit. Cancellations within 60 days are subject to our cancellation policy.</p>
                      </div>
                    </details>
                    
                    <details className="group bg-white border border-input rounded-md">
                      <summary className="cursor-pointer p-4 font-medium flex justify-between items-center">
                        How do I contact vendors?
                        <svg 
                          className="w-5 h-5 transition-transform group-open:rotate-180" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-4 pb-4 text-muted-foreground">
                        <p>Once you've created an account, you can message vendors directly through our platform. You can also request appointments or quotes through your dashboard.</p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
