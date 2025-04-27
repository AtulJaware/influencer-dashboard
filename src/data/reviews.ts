import { Review } from '../types/types';
import SMA from '../images/SMA.jpg'; 
import sanskruti from '../images/sanskruti.jpg'; 
import mihani from '../images/mihani.jpg'; 
import pjmens from '../images/pjmens.jpg'; 

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Shashvat Umbarkar',
    company: 'Shree Mahalaxmi Alankar',
    avatar: SMA,
    content: 'Working with Pratik was an absolute game-changer for our brand. His authentic approach to content creation resonated perfectly with our target audience. The engagement rates exceeded our expectations by 200%!',
    rating: 5
  },
  {
    id: '2',
    name: 'Ayush Chincholkar',
    company: 'Sanskruti Selection Nandura',
    avatar: sanskruti,
    content: 'Pratik has an incredible ability to create content that feels natural and engaging. His audience is highly responsive, and we saw a significant boost in our social media following after our collaboration.',
    rating: 5
  },
  {
    id: '3',
    name: 'Piyush Mihani',
    company: 'MIHANI ENTERPRISES',
    avatar: mihani,
    content: 'The professionalism and creativity Pratik brought to our campaign were outstanding. He understood our brand values perfectly and created content that truly showcased our products in the best light.',
    rating: 5
  },
  {
    id: '4',
    name: 'Pankaj Jadhav',
    company: 'PJ - The Perfect Mens Wear',
    avatar: pjmens,
    content: 'Our collaboration with Pratik delivered exceptional ROI. His engaging style and authentic approach helped us reach new audiences and drive meaningful engagement with our brand.',
    rating: 5
  }
];