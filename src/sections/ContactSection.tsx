import React from 'react';
import ContactForm from '../components/ContactForm';
import { Star, PackageCheck, Users, Calendar } from 'lucide-react';

const ContactSection: React.FC = () => {
  const offerings = [
    {
      title: 'Sponsored Content',
      description: 'Authentic integration of your brand into my regular content flow.',
      icon: <Star className="h-6 w-6 text-yellow-500" />
    },
    {
      title: 'Product Reviews',
      description: 'In-depth, honest reviews of your products with my unique perspective.',
      icon: <PackageCheck className="h-6 w-6 text-green-500" />
    },
    {
      title: 'Brand Ambassadorship',
      description: 'Long-term partnerships for continuous brand exposure to my audience.',
      icon: <Users className="h-6 w-6 text-blue-500" />
    },
    {
      title: 'Event Coverage',
      description: 'Live coverage of your events, launches, or special occasions.',
      icon: <Calendar className="h-6 w-6 text-purple-500" />
    }
  ];
  
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            Work With Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Let's create authentic content that resonates with my audience and achieves your marketing goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Service Offerings */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-300">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">What I Offer</h3>
              
              <div className="space-y-6">
                {offerings.map((offering, index) => (
                  <div key={index} className="flex">
                    <div className="flex-shrink-0 mt-1">
                      {offering.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        {offering.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        {offering.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                  Why Work With Me?
                </h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Engaged audience with high interaction rates
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Professional content creation with quick turnaround
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Authentic brand integration that resonates with viewers
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Detailed analytics and campaign reports
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;