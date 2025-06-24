import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const NewsletterSignup: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    zipCode: '',
    interests: [] as string[]
  });

  const interests = [
    'Economic Development',
    'Education',
    'Healthcare',
    'Public Safety',
    'Community Events',
    'Volunteer Opportunities'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Newsletter signup:', formData);
    alert('Thank you for joining our community! We\'ll keep you updated on important initiatives and events.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      zipCode: '',
      interests: []
    });
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-red-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Join Our Community Network
        </h3>
        <p className="text-gray-600">
          Stay informed about community events, policy updates, and opportunities to get involved.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              {t('firstName')} *
            </label>
            <input
              type="text"
              id="firstName"
              required
              value={formData.firstName}
              onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
              {t('lastName')} *
            </label>
            <input
              type="text"
              id="lastName"
              required
              value={formData.lastName}
              onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            {t('email')} *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
          />
        </div>

        <div>
          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
            {t('zipCode')} *
          </label>
          <input
            type="text"
            id="zipCode"
            required
            pattern="[0-9]{5}"
            value={formData.zipCode}
            onChange={(e) => setFormData(prev => ({ ...prev, zipCode: e.target.value }))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 transition-colors duration-200"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3">
            What topics interest you? (Optional)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {interests.map((interest) => (
              <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                  className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <span className="text-sm text-gray-700">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 px-4 rounded-md hover:bg-red-700 focus:ring-4 focus:ring-red-200 transition-all duration-200 font-medium"
        >
          {t('joinMovement')}
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-4 text-center">
        By signing up, you agree to receive updates from the Georgia House Republican Caucus. You can unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;