import React from 'react';
import { Vote, FileText, Calendar, MapPin, Phone, ExternalLink, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const VoterResources: React.FC = () => {
  const { t } = useLanguage();

  const resources = [
    {
      icon: Vote,
      title: 'Voter Registration',
      description: 'Register to vote or update your registration information.',
      items: [
        { text: 'Register online at Georgia Secretary of State', link: 'https://registertovote.sos.ga.gov', external: true },
        { text: 'Download voter registration form', link: '#', external: false },
        { text: 'Find registration locations near you', link: '#', external: false },
        { text: 'Update your voter information', link: '#', external: false }
      ]
    },
    {
      icon: FileText,
      title: 'Voter ID Information',
      description: 'Learn about acceptable forms of ID for voting in Georgia.',
      items: [
        { text: 'Georgia driver\'s license (valid or expired)', link: '#', external: false },
        { text: 'Georgia ID card issued by DDS', link: '#', external: false },
        { text: 'U.S. passport or passport card', link: '#', external: false },
        { text: 'Military ID card', link: '#', external: false },
        { text: 'Tribal ID card', link: '#', external: false }
      ]
    },
    {
      icon: MapPin,
      title: 'Find Your Polling Place',
      description: 'Locate your polling location and get directions.',
      items: [
        { text: 'Georgia My Voter Page', link: 'https://www.mvp.sos.ga.gov', external: true },
        { text: 'Check your voter registration status', link: '#', external: false },
        { text: 'View your sample ballot', link: '#', external: false },
        { text: 'Find early voting locations', link: '#', external: false }
      ]
    },
    {
      icon: Calendar,
      title: 'Important Dates',
      description: 'Key deadlines and election dates you need to know.',
      items: [
        { text: 'Voter registration deadline: 28 days before election', link: '#', external: false },
        { text: 'Absentee ballot request deadline: 11 days before election', link: '#', external: false },
        { text: 'Early voting period: 17 days before election', link: '#', external: false },
        { text: 'Election day voting hours: 7 AM - 7 PM', link: '#', external: false }
      ]
    }
  ];

  const votingMethods = [
    {
      title: 'Election Day Voting',
      description: 'Vote at your assigned polling place on election day.',
      requirements: [
        'Valid photo ID required',
        'Polls open 7 AM - 7 PM',
        'Must vote at your assigned precinct'
      ],
      icon: Vote
    },
    {
      title: 'Early Voting',
      description: 'Vote early at designated early voting locations.',
      requirements: [
        'Valid photo ID required',
        'Available 17 days before election',
        'Extended hours at some locations'
      ],
      icon: Calendar
    },
    {
      title: 'Absentee Voting',
      description: 'Vote by mail if you qualify for absentee voting.',
      requirements: [
        'Must meet eligibility requirements',
        'Request ballot by deadline',
        'Return by 7 PM on election day'
      ],
      icon: FileText
    }
  ];

  const languageResources = [
    {
      language: 'Spanish',
      flag: '🇪🇸',
      resources: [
        'Información de Registro de Votantes',
        'Formularios en Español',
        'Asistencia Telefónica: (404) 656-2871'
      ]
    },
    {
      language: 'Korean',
      flag: '🇰🇷',
      resources: [
        '유권자 등록 정보',
        '한국어 양식',
        '전화 지원: (404) 656-2871'
      ]
    },
    {
      language: 'Chinese',
      flag: '🇨🇳',
      resources: [
        '选民登记信息',
        '中文表格',
        '电话协助: (404) 656-2871'
      ]
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Voter Resources
            </h1>
            <p className="text-xl leading-relaxed">
              Everything you need to know about voting in Georgia. Your voice matters, 
              and we're here to help you make it heard.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="https://registertovote.sos.ga.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Vote size={20} />
              <span className="font-semibold">Register to Vote</span>
            </a>
            <a
              href="https://www.mvp.sos.ga.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <MapPin size={20} />
              <span className="font-semibold">Find Polling Place</span>
            </a>
            <a
              href="#contact"
              className="bg-blue-600 text-white p-4 rounded-lg text-center hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Phone size={20} />
              <span className="font-semibold">Get Help</span>
            </a>
          </div>
        </div>
      </section>

      {/* Voter Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Voting Information
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find everything you need to participate in Georgia's elections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{resource.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{resource.description}</p>
              <ul className="space-y-3">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    {item.external ? (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors duration-200 flex items-center space-x-1"
                      >
                        <span>{item.text}</span>
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="text-gray-700">{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Voting Methods */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Vote in Georgia
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Georgia offers several convenient ways to cast your ballot.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {votingMethods.map((method, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {method.title}
                </h3>
                <p className="text-gray-600 text-center mb-6">
                  {method.description}
                </p>
                <ul className="space-y-2">
                  {method.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700 text-sm">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Language Resources */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Multilingual Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Voter information is available in multiple languages to serve our diverse communities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {languageResources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="text-4xl mb-4">{resource.flag}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.language}</h3>
              <ul className="space-y-2">
                {resource.resources.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact for Help */}
      <section id="contact" className="bg-blue-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Help Voting?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            We're here to help ensure you can exercise your right to vote. Contact us if you have questions or need assistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">(404) 656-2871</p>
              <p className="text-gray-500 text-xs mt-1">Multilingual support available</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
              <p className="text-gray-600 text-sm">voter-help@gahousegop.org</p>
              <p className="text-gray-500 text-xs mt-1">Response within 24 hours</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">In-Person Help</h3>
              <p className="text-gray-600 text-sm">Community offices statewide</p>
              <p className="text-gray-500 text-xs mt-1">
                <a href="/contact" className="text-blue-600 hover:text-blue-700">Find locations →</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoterResources;