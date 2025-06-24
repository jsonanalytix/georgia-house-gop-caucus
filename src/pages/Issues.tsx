import React from 'react';
import { DollarSign, GraduationCap, Shield, Heart, Home, Briefcase } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Issues: React.FC = () => {
  const { t } = useLanguage();

  const issues = [
    {
      icon: DollarSign,
      title: 'Economic Opportunity',
      subtitle: 'Creating Jobs and Supporting Small Business',
      description: 'We believe in policies that create jobs, support small businesses, and help families build wealth. Our tax cuts have saved Georgia families billions while maintaining essential services.',
      achievements: [
        'Largest income tax cut in Georgia history',
        'Support for minority-owned small businesses',
        'Job training programs in underserved communities',
        'Economic development in rural and urban areas'
      ],
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    },
    {
      icon: GraduationCap,
      title: 'Education Excellence',
      subtitle: 'Investing in Teachers and Students',
      description: 'Every child deserves a quality education. We\'ve increased teacher pay and funding for schools while supporting innovative programs that prepare students for tomorrow\'s jobs.',
      achievements: [
        '$5,000 teacher pay raise implemented',
        'Increased per-pupil funding',
        'Support for technical education programs',
        'School choice options for families'
      ],
      image: 'https://images.pexels.com/photos/8926545/pexels-photo-8926545.jpeg'
    },
    {
      icon: Shield,
      title: 'Public Safety',
      subtitle: 'Building Trust While Keeping Communities Safe',
      description: 'We support law enforcement while working to build trust between police and communities. Our criminal justice reforms focus on rehabilitation and reducing recidivism.',
      achievements: [
        'Criminal justice reform initiatives',
        'Community policing programs',
        'Second chance employment programs',
        'Juvenile justice improvements'
      ],
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg'
    },
    {
      icon: Heart,
      title: 'Healthcare Access',
      subtitle: 'Expanding Access and Reducing Costs',
      description: 'Healthcare should be accessible and affordable for all Georgians. We support innovative solutions that increase access while controlling costs.',
      achievements: [
        'Expanded telehealth services',
        'Mental health program funding',
        'Support for community health centers',
        'Prescription drug cost reduction efforts'
      ],
      image: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg'
    },
    {
      icon: Home,
      title: 'Housing Opportunity',
      subtitle: 'Making Homeownership Attainable',
      description: 'Every family should have the opportunity to own a home. We support policies that increase housing supply and make homeownership more affordable.',
      achievements: [
        'First-time homebuyer programs',
        'Affordable housing initiatives',
        'Zoning reform to increase supply',
        'Down payment assistance programs'
      ],
      image: 'https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg'
    },
    {
      icon: Briefcase,
      title: 'Workforce Development',
      subtitle: 'Preparing Workers for Tomorrow\'s Jobs',
      description: 'We invest in programs that give Georgians the skills they need for good-paying jobs in growing industries like technology, healthcare, and advanced manufacturing.',
      achievements: [
        'Technical college partnerships',
        'Apprenticeship programs',
        'STEM education initiatives',
        'Adult learning and retraining programs'
      ],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('ourPriorities')}
            </h1>
            <p className="text-xl leading-relaxed">
              We're focused on the issues that matter most to Georgia families and communities. 
              Our policies are designed to create opportunity, build prosperity, and ensure that 
              every Georgian has the chance to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Issues Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {issues.map((issue, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <issue.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{issue.title}</h2>
                    <p className="text-lg text-blue-600 font-semibold">{issue.subtitle}</p>
                  </div>
                </div>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {issue.description}
                </p>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements:</h3>
                  <ul className="space-y-3">
                    {issue.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="relative">
                  <img
                    src={issue.image}
                    alt={issue.title}
                    className="rounded-xl shadow-lg w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Voice Shapes Our Priorities
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            These issues reflect what we've heard from communities across Georgia. We want to continue 
            that conversation and ensure your concerns help guide our work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Share Your Priorities
            </a>
            <a
              href="/events"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200"
            >
              Attend a Town Hall
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Issues;