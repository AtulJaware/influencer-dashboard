import { SocialMediaStats } from '../types/types';

export const fetchSocialMediaStats = async (): Promise<SocialMediaStats> => {
  const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCfxMmGt0QZbJYCwrdUANdYA&key=AIzaSyC0Ex684aUCXbNtKL2B7FmazCiLaeYi9cM';

  let youtube = {
    subscribers: 78400,
    videos: 352,
    views: 37466404
  };

  try {
    const res = await fetch(youtubeApiUrl);
    const data = await res.json();

    if (data?.items?.length > 0) {
      const stats = data.items[0].statistics;
      youtube = {
        subscribers: parseInt(stats.subscriberCount, 10),
        videos: parseInt(stats.videoCount, 10),
        views: parseInt(stats.viewCount, 10)
      };
    }
  } catch (error) {
    console.error('Failed to fetch YouTube stats:', error);
  }

  // Instagram is still mocked
  return {
    instagram: {
      followers: 256000,
      posts: 350,
      engagement: 80.7
    },
    youtube
  };
};
