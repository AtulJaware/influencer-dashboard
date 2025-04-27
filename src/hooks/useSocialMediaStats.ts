import { useState, useEffect } from 'react';
import { SocialMediaStats } from '../types/types';
import { fetchSocialMediaStats } from '../services/socialMediaService';

export const useSocialMediaStats = () => {
  const [stats, setStats] = useState<SocialMediaStats | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getStats = async () => {
      try {
        setLoading(true);
        const data = await fetchSocialMediaStats();
        setStats(data);
        setError(null);
      } catch (err) {
        setError('Failed to load social media statistics');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getStats();
  }, []);

  return { stats, loading, error };
};