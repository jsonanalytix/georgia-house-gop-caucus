import React from 'react';
import { Users, Target, Heart, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Heart,
      title: 'Inclusive Representation',
      description: 'We believe every voice in Georgia deserves to be heard and represented in our democratic process.'
    },
    {
      icon: Users,
      title: 'Community Partnership',
      description: 'Building lasting relationships through year-round engagement, not just during election seasons.'
    },
    {
      icon: Target,
      title: 'Focused Solutions',
      description: 'Addressing the real issues that matter to families: education, jobs, safety, and opportunity.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Delivering tangible outcomes like teacher pay raises, tax cuts, and criminal justice reform.'
    }
  ];

  const leadership = [
    {
      name: 'Speaker Jon Burns',
      title: 'Speaker of the House',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg',
      bio: 'Leading Georgia\'s House with a commitment to fiscal responsibility and community engagement.'
    },
    {
      name: 'Rep. Houston Gaines',
      title: 'Majority Leader',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      bio: 'Championing education excellence and economic development across Georgia communities.'
    },
    {
      name: 'Rep. Steven Sainz',
      title: 'Minority Outreach Chair',
      image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg',
      bio: 'Building bridges with diverse communities and ensuring inclusive representation in our caucus.'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About Our Caucus
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                The Georgia House Republican Caucus is committed to representing all Georgians through 
                principled leadership, community engagement, and collaborative solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that strong communities are built through active participation, open dialogue, 
                and shared commitment to the values that make Georgia great: opportunity, family, and freedom.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8926544/pexels-photo-8926544.jpeg"
                alt="Georgia State Capitol"
                className="rounded-xl shadow-lg w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            To build a stronger Georgia by fostering inclusive dialogue, delivering results-oriented 
            governance, and ensuring that every community has a voice in shaping our state's future. 
            We are committed to year-round engagement with all Georgians, particularly those communities 
            that have been historically underrepresented in the political process.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            These core values guide our work and shape how we engage with communities across Georgia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the leaders working to build bridges and create opportunities for all Georgians.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${leader.image})` }}></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{leader.title}</p>
                  <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-emerald-700 rounded-2xl text-white p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to You
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              We pledge to listen actively, engage meaningfully, and work tirelessly to represent 
              the interests of all Georgians. Your voice matters, your concerns are heard, and 
              your participation makes our democracy stronger.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">365</div>
                <div className="text-lg">Days of Community Engagement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-lg">Commitment to Transparency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">Every Voice</div>
                <div className="text-lg">Matters in Our Process</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;