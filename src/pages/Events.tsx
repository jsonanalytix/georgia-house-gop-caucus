import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const Events: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const eventTypes = [
    { id: 'all', label: 'All Events' },
    { id: 'town-hall', label: 'Town Halls' },
    { id: 'community', label: 'Community Events' },
    { id: 'workshop', label: 'Workshops' },
    { id: 'cultural', label: 'Cultural Events' }
  ];

  const events = [
    {
      id: 1,
      title: 'Community Town Hall: Education Funding',
      type: 'town-hall',
      date: '2024-02-15',
      time: '7:00 PM - 8:30 PM',
      location: 'Atlanta Community Center',
      address: '123 Peachtree St, Atlanta, GA 30309',
      description: 'Join us for a discussion on education funding priorities and how we can support our teachers and students.',
      capacity: '200 people',
      image: 'https://images.pexels.com/photos/8926595/pexels-photo-8926595.jpeg'
    },
    {
      id: 2,
      title: 'Small Business Workshop',
      type: 'workshop',
      date: '2024-02-20',
      time: '6:00 PM - 8:00 PM',
      location: 'Gwinnett Chamber of Commerce',
      address: '6500 Sugarloaf Pkwy, Duluth, GA 30097',
      description: 'Learn about resources available to help start and grow your small business in Georgia.',
      capacity: '50 people',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    },
    {
      id: 3,
      title: 'Hispanic Heritage Month Celebration',
      type: 'cultural',
      date: '2024-02-25',
      time: '2:00 PM - 6:00 PM',
      location: 'Marietta Square',
      address: '100 Cherokee St, Marietta, GA 30060',
      description: 'Celebrating Hispanic heritage with food, music, and community dialogue about our shared priorities.',
      capacity: '500 people',
      image: 'https://images.pexels.com/photos/8926544/pexels-photo-8926544.jpeg'
    },
    {
      id: 4,
      title: 'Korean American Community Forum',
      type: 'community',
      date: '2024-03-05',
      time: '7:00 PM - 9:00 PM',
      location: 'Korean Community Center',
      address: '2295 Pleasant Hill Rd, Duluth, GA 30096',
      description: 'A forum to discuss issues important to the Korean American community in Georgia.',
      capacity: '100 people',
      image: 'https://images.pexels.com/photos/8092563/pexels-photo-8092563.jpeg'
    },
    {
      id: 5,
      title: 'Healthcare Access Town Hall',
      type: 'town-hall',
      date: '2024-03-10',
      time: '6:30 PM - 8:00 PM',
      location: 'Columbus Convention Center',
      address: '801 Front Ave, Columbus, GA 31901',
      description: 'Discussing healthcare access and affordability in rural and urban Georgia communities.',
      capacity: '300 people',
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg'
    },
    {
      id: 6,
      title: 'Youth Leadership Workshop',
      type: 'workshop',
      date: '2024-03-15',
      time: '10:00 AM - 3:00 PM',
      location: 'Savannah Civic Center',
      address: '301 W Oglethorpe Ave, Savannah, GA 31401',
      description: 'Empowering young leaders from diverse backgrounds to engage in the political process.',
      capacity: '75 people',
      image: 'https://images.pexels.com/photos/8926545/pexels-photo-8926545.jpeg'
    }
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleRSVP = (eventId: number) => {
    // RSVP logic would go here
    alert('Thank you for your RSVP! You will receive a confirmation email shortly.');
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-emerald-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Community Events
            </h1>
            <p className="text-xl leading-relaxed">
              Join us for meaningful conversations, community celebrations, and opportunities to 
              shape Georgia's future. All events are free and open to the public.
            </p>
          </div>
        </div>
      </section>

      {/* Event Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {eventTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedFilter(type.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                selectedFilter === type.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>
      </section>

      {/* Events Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.image})` }}>
                <div className="h-full bg-black bg-opacity-30 flex items-end">
                  <div className="p-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
                      {event.type.replace('-', ' ')}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {event.title}
                </h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Clock size={16} className="mr-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start text-gray-600 text-sm">
                    <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium">{event.location}</div>
                      <div>{event.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users size={16} className="mr-2" />
                    <span>Capacity: {event.capacity}</span>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>
                
                <button
                  onClick={() => handleRSVP(event.id)}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>RSVP for Event</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Can't Make It to an Event?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We want to hear from you! Share your thoughts and concerns with us anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="/get-involved"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Join Our Network
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;