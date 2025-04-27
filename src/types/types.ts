export interface SocialMediaStats {
  instagram: {
    followers: number;
    posts: number;
    engagement: number;
  };
  youtube: {
    subscribers: number;
    videos: number;
    views: number;
  };
}

export interface Collaboration {
  id: string;
  brandName: string;
  logo: string;
  campaign: string;
  date: string;
  engagement: {
    impressions: number;
    likes: number;
    comments: number;
    shares: number;
  };
  link: string;
}

export interface Theme {
  isDark: boolean;
  toggleTheme: () => void;
}

export interface Review {
  id: string;
  name: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
}