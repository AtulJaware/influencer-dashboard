import { Collaboration } from '../types/types';

export const collaborations: Collaboration[] = [
  {
    id: '1',
    brandName: 'FitGenix',
    logo: 'https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg?auto=compress&cs=tinysrgb&h=100',
    campaign: 'Summer Fitness Collection',
    date: '2024-06-15',
    engagement: {
      impressions: 250000,
      likes: 34500,
      comments: 1200,
      shares: 3500
    },
    link: 'https://www.instagram.com/p/abc123'
  },
  {
    id: '2',
    brandName: 'TechVision',
    logo: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&h=100',
    campaign: 'NextGen Smartphone Launch',
    date: '2024-05-10',
    engagement: {
      impressions: 320000,
      likes: 42000,
      comments: 2100,
      shares: 5200
    },
    link: 'https://www.youtube.com/watch?v=xyz456'
  },
  {
    id: '3',
    brandName: 'TravelEase',
    logo: 'https://images.pexels.com/photos/1051075/pexels-photo-1051075.jpeg?auto=compress&cs=tinysrgb&h=100',
    campaign: 'Vacation Essentials',
    date: '2024-04-22',
    engagement: {
      impressions: 180000,
      likes: 28000,
      comments: 980,
      shares: 2100
    },
    link: 'https://www.instagram.com/p/def789'
  },
  {
    id: '4',
    brandName: 'GourmetDelight',
    logo: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&h=100',
    campaign: 'Gourmet Home Cooking',
    date: '2024-03-18',
    engagement: {
      impressions: 210000,
      likes: 31000,
      comments: 1500,
      shares: 4200
    },
    link: 'https://www.youtube.com/watch?v=ghi101'
  }
];