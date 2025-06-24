import React, { useState } from 'react';
import { Users, Calendar, MessageSquare, Heart, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const GetInvolved: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('volunteer');

  const opportunities = [
    {
      id: 'volunteer',
      title: 'Volunteer',
      icon: Users,
      description: 'Join our volunteer network and help us engage with communities across Georgia.',
      activities: [
        'Community event support',
        'Voter registration assistance',
        'Translation services',
        'Social media advocacy',
        'Phone banking',
        'Neighborhood canvassing'
      ]
    },
    {
      id: 'events',
      title: 'Attend Events',
      icon: Calendar,
      description: 'Participate in town halls, workshops, and community celebrations.',
      activities: [
        'Monthly town halls',
        'Small business workshops',
        'Cultural heritage celebrations',
        'Policy roundtables',
        'Youth leadership programs',
        'Senior community forums'
      ]
    },
    {
      id: 'advocate',
      title: 'Advocate',
      icon: MessageSquare,
      description: 'Use your voice to advocate for the issues that matter to your community.',
      activities: [
        'Contact elected officials',
        'Share your story',
        'Write letters to editors',
        'Testify at hearings',
        'Join advocacy coalitions',
        'Mentor new advocates'
      ]
    },
    {
      id: 'support',
      title: 'Support',
      icon: Heart,
      description: 'Support our efforts to build bridges and create opportunities for all Georgians.',
      activities: [
        'Monthly donations',
        'Event sponsorship',
        'In-kind contributions',
        'Professional services',
        'Venue hosting',
        'Resource sharing'
      ]
    }
  ];

  const [volunteerForm, setVolunteerForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    interests: [] as string[],
    skills: [] as string[],
    availability: '',
    experience: '',
    languages: [] as string[]
  });

  const interestOptions = [
    'Community Outreach',
    'Event Planning',
    'Translation Services',
    'Social Media',
    'Phone Banking',
    'Data Entry',
    'Graphic Design',
    'Photography',
    'Writing',
    'Public Speaking'
  ];

  const languageOptions = ['English', 'Spanish', 'Korean', 'Chinese', 'Vietnamese', 'Arabic'];

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Volunteer application:', volunteerForm);
    alert('Thank you for your interest in volunteering! We will contact you soon with opportunities that match your interests and skills.');
    setVolunteerForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      zipCode: '',
      interests: [],
      skills: [],
      availability: '',
      experience: '',
      languages: []
    });
  };

  const handleArrayChange = (field: keyof typeof volunteerForm, value: string) => {
    setVolunteerForm(prev => ({
      ...prev,
      [field]: (prev[field] as string[]).includes(value)
        ? (prev[field] as string[]).filter(item => item !== value)
        : [...(prev[field] as string[]), value]
    }));
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('getInvolvedTitle')}
            </h1>
            <p className="text-xl leading-relaxed">
              Your voice and participation make our democracy stronger. Join us in building 
              bridges and creating opportunities for all Georgians.
            </p>
          </div>
        </div>
      </section>

      {/* Opportunities Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              onClick={() => setActiveTab(opportunity.id)}
              className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-200 ${
                activeTab === opportunity.id
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 bg-white hover:border-red-300'
              }`}
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-red-100">
                <opportunity.icon className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Tab Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {opportunities.map((opportunity) => (
          activeTab === opportunity.id && (
            <div key={opportunity.id} className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {opportunity.title} Opportunities
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    {opportunity.description}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Ways to {opportunity.title}:
                    </h3>
                    <ul className="space-y-3">
                      {opportunity.activities.map((activity, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Volunteer Form */}
                {activeTab === 'volunteer' && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Volunteer Application
                    </h3>
                    <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('firstName')} *
                          </label>
                          <input
                            type="text"
                            required
                            value={volunteerForm.firstName}
                            onChange={(e) => setVolunteerForm(prev => ({ ...prev, firstName: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('lastName')} *
                          </label>
                          <input
                            type="text"
                            required
                            value={volunteerForm.lastName}
                            onChange={(e) => setVolunteerForm(prev => ({ ...prev, lastName: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={volunteerForm.email}
                          onChange={(e) => setVolunteerForm(prev => ({ ...prev, email: e.target.value }))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={volunteerForm.phone}
                            onChange={(e) => setVolunteerForm(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Zip Code *
                          </label>
                          <input
                            type="text"
                            required
                            pattern="[0-9]{5}"
                            value={volunteerForm.zipCode}
                            onChange={(e) => setVolunteerForm(prev => ({ ...prev, zipCode: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Areas of Interest (select all that apply)
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {interestOptions.map((interest) => (
                            <label key={interest} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={volunteerForm.interests.includes(interest)}
                                onChange={() => handleArrayChange('interests', interest)}
                                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                              />
                              <span className="text-sm text-gray-700">{interest}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Languages You Speak
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {languageOptions.map((language) => (
                            <label key={language} className="flex items-center space-x-2">
                              <input
                                type="checkbox"
                                checked={volunteerForm.languages.includes(language)}
                                onChange={() => handleArrayChange('languages', language)}
                                className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                              />
                              <span className="text-sm text-gray-700">{language}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium"
                      >
                        Submit Volunteer Application
                      </button>
                    </form>
                  </div>
                )}

                {/* Other tab content placeholders */}
                {activeTab !== 'volunteer' && (
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      Get Started
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Ready to {opportunity.title.toLowerCase()}? Contact us to learn more about current opportunities.
                    </p>
                    <div className="space-y-4">
                      <a
                        href="/contact"
                        className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                      >
                        <span>Contact Us</span>
                        <ArrowRight size={18} />
                      </a>
                      <a
                        href="/events"
                        className="w-full border-2 border-red-600 text-red-600 py-3 px-4 rounded-md hover:bg-red-600 hover:text-white transition-colors duration-200 font-medium flex items-center justify-center space-x-2"
                      >
                        <span>View Upcoming Events</span>
                        <Calendar size={18} />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        ))}
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Community Impact Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how community members like you are making a difference across Georgia.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Rodriguez',
                role: 'Volunteer Coordinator',
                quote: 'Volunteering with the caucus has given me the opportunity to help my community and ensure Hispanic voices are heard in the political process.',
                image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
              },
              {
                name: 'David Kim',
                role: 'Community Advocate',
                quote: 'Through advocacy training, I\'ve learned how to effectively communicate with elected officials about issues that matter to Korean Americans.',
                image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg'
              },
              {
                name: 'Jennifer Washington',
                role: 'Event Organizer',
                quote: 'Organizing community events has helped build bridges between different communities and created lasting friendships.',
                image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{story.name}</h4>
                    <p className="text-sm text-red-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{story.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;