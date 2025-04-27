import { Plan } from '../types/types';

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: 999,
    description: 'Perfect for brands looking to test the waters with influencer marketing',
    features: [
      '1 Instagram Post',
      '1 Instagram Story',
      'Basic Analytics Report',
      '24-hour Content Review',
      'One Round of Revisions',
      '30-day Usage Rights'
    ]
  },
  {
    id: 'standard',
    name: 'Growth Package',
    price: 2499,
    description: 'Ideal for brands wanting comprehensive social media coverage',
    features: [
      '2 Instagram Posts',
      '3 Instagram Stories',
      '1 YouTube Integration',
      'Detailed Analytics Report',
      'Two Rounds of Revisions',
      '60-day Usage Rights',
      'Whitelisting Rights',
      'Content Strategy Call'
    ],
    popular: true
  },
  {
    id: 'premium',
    name: 'Premium Package',
    price: 4999,
    description: 'Complete brand integration across all platforms',
    features: [
      '4 Instagram Posts',
      '6 Instagram Stories',
      '2 YouTube Dedicated Videos',
      'Advanced Analytics Dashboard',
      'Unlimited Revisions',
      '90-day Usage Rights',
      'Whitelisting Rights',
      'Content Strategy Call',
      'Exclusive Brand Rights (Category)',
      'Custom Content Calendar'
    ]
  },
  {
    id: 'custom',
    name: 'Custom Package',
    price: 0,
    description: 'Tailored solutions for unique brand requirements',
    features: [
      'Custom Content Mix',
      'Flexible Platform Selection',
      'Bespoke Analytics Requirements',
      'Custom Usage Rights',
      'Priority Support',
      'Dedicated Account Manager',
      'Custom Integration Options'
    ]
  }
];