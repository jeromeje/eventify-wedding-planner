
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About = () => {
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
            <h1 className="text-3xl md:text-4xl font-medium mb-4">Our Story</h1>
            <p className="text-muted-foreground">
              Simplifying wedding planning through elegant design and thoughtful technology.
            </p>
          </div>
          
          {/* Mission Statement */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-muted/50 p-8 md:p-12 rounded-xl">
              <h2 className="text-2xl font-medium mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed mb-6">
                At Eventify, we believe that planning your wedding should be as joyful as the celebration itself. 
                Our mission is to simplify the wedding planning process through thoughtful design and technology, 
                enabling couples to focus on what truly matters—creating unforgettable moments with their loved ones.
              </p>
              <p className="text-lg leading-relaxed">
                We strive to bring together the finest venues and vendors, curated with care, to help you create 
                a wedding day that authentically reflects your unique story and style.
              </p>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mb-20">
            <h2 className="text-2xl font-medium mb-12 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {team.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-muted-foreground mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Values Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-2xl font-medium mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-white p-8 rounded-xl border border-border">
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Journey Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium mb-10 text-center">Our Journey</h2>
            <div className="space-y-12">
              {journey.map((milestone, index) => (
                <div key={milestone.year} className="relative pl-12 md:pl-0">
                  <div className="md:flex items-start">
                    {/* Year bubble - visible on mobile only */}
                    <div className="absolute left-0 md:relative md:static flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-medium md:mr-6">
                      <span className="text-sm">{milestone.year}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="md:flex-grow">
                      <h3 className="text-xl font-medium mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Connecting line */}
                  {index < journey.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-0 w-px bg-border md:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Data
const team = [
  {
    name: 'Emma Richardson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    bio: 'With 10+ years in event planning, Emma founded Eventify to transform how couples plan their perfect day.'
  },
  {
    name: 'David Chen',
    role: 'Head of Partnerships',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    bio: 'David cultivates relationships with top-tier venues and vendors to ensure exceptional quality for our clients.'
  },
  {
    name: 'Sophia Martinez',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80',
    bio: 'Sophia brings her expertise in design and aesthetics to help create visually stunning and memorable weddings.'
  }
];

const values = [
  {
    title: 'Simplicity First',
    description: 'We believe in removing complexity from wedding planning. Every feature and design choice is guided by a commitment to simplicity and ease of use.'
  },
  {
    title: 'Quality & Curation',
    description: 'We carefully vet every venue and vendor to ensure exceptional quality. Our curation process means you only see the very best options.'
  },
  {
    title: 'Personalized Experience',
    description: 'We recognize that every couple is unique. Our platform adapts to your preferences and helps you create a wedding that authentically reflects your style.'
  },
  {
    title: 'Transparent & Trustworthy',
    description: 'We provide clear, honest information about all our venues and vendors, including pricing, availability, and reviews from real couples.'
  }
];

const journey = [
  {
    year: '2019',
    title: 'The Beginning',
    description: 'Eventify was founded with a vision to simplify the wedding planning process through thoughtful design and technology.'
  },
  {
    year: '2020',
    title: 'Building Partnerships',
    description: 'We established relationships with our first 50 premium venues and 100 trusted vendors across the country.'
  },
  {
    year: '2021',
    title: 'Platform Launch',
    description: 'Our wedding planning platform officially launched, offering couples a seamless way to discover, book, and manage wedding services.'
  },
  {
    year: '2022',
    title: 'Growing Community',
    description: 'We celebrated our 1,000th wedding and expanded our offerings to include additional services and planning tools.'
  },
  {
    year: '2023',
    title: 'Looking Forward',
    description: 'We continue to innovate and refine our platform, with a focus on creating even more personalized and joyful wedding planning experiences.'
  }
];

export default About;
