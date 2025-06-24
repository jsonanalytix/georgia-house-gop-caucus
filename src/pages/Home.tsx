import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Calendar, MessageSquare, ArrowRight, Heart, Handshake, Vote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import NewsletterSignup from '../components/NewsletterSignup';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const communityStats = [
    { icon: Users, label: 'Community Members', value: '25,000+' },
    { icon: Calendar, label: 'Events This Year', value: '150+' },
    { icon: MessageSquare, label: 'Conversations Started', value: '5,000+' }
  ];

  const priorities = [
    {
      icon: Heart,
      title: t('economicOpportunity'),
      description: 'Supporting small businesses, job creation, and economic growth in all communities.',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    },
    {
      icon: Vote,
      title: t('education'),
      description: 'Investing in teacher pay raises and educational excellence for all students.',
      image: 'https://images.pexels.com/photos/8926545/pexels-photo-8926545.jpeg'
    },
    {
      icon: Handshake,
      title: t('publicSafety'),
      description: 'Working with communities to build trust and ensure safety for all families.',
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-emerald-800 text-white">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8092563/pexels-photo-8092563.jpeg)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                {t('welcomeTitle')}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {t('welcomeSubtitle')}
              </p>
              <p className="text-lg mb-8 leading-relaxed max-w-2xl">
                {t('welcomeDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/get-involved"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>{t('joinMovement')}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200 flex items-center justify-center"
                >
                  {t('learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Engagement Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('communityTitle')}
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t('communityDescription')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Town Halls & Listening Tours</h4>
                    <p className="text-gray-600">Regular community meetings in neighborhoods across Georgia</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Cultural Community Events</h4>
                    <p className="text-gray-600">Celebrating heritage months, festivals, and community traditions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Small Business Workshops</h4>
                    <p className="text-gray-600">Supporting entrepreneurship and economic opportunity</p>
                  </div>
                </div>
              </div>
              <Link
                to="/events"
                className="inline-flex items-center space-x-2 mt-8 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                <span>View Upcoming Events</span>
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8926595/pexels-photo-8926595.jpeg"
                alt="Community engagement"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('ourPriorities')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Working together on the issues that matter most to Georgia families and communities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {priorities.map((priority, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group">
              <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url(${priority.image})` }}>
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-20 transition-opacity duration-200"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <priority.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{priority.title}</h3>
                <p className="text-gray-600 leading-relaxed">{priority.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/issues"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            <span>Learn More About Our Priorities</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
};

export default Home;