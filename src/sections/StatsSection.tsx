import React from 'react';
import { useSocialMediaStats } from '../hooks/useSocialMediaStats';
import StatCard from '../components/StatCard';
import { Instagram, Youtube, Zap, Users, Video, Eye } from 'lucide-react';

const StatsSection: React.FC = () => {
  const { stats, loading, error } = useSocialMediaStats();
  
  return (
    <section id="stats" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
            My Social Media Stats
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time metrics from my social platforms that show the potential reach for your brand.
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 p-4 rounded-md text-center">
            {error}
          </div>
        ) : stats ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <StatCard
                title="Instagram Followers"
                value={stats.instagram.followers}
                icon={<Instagram size={24} />}
                color="bg-gradient-to-r from-pink-500 to-purple-500"
              />
              
              <StatCard
                title="Instagram Posts"
                value={stats.instagram.posts}
                icon={<Zap size={24} />}
                color="bg-gradient-to-r from-purple-500 to-indigo-500"
              />
              
              <StatCard
                title="Instagram Engagement"
                value={stats.instagram.engagement}
                icon={<Users size={24} />}
                suffix="%"
                description="Average engagement rate per post"
                color="bg-gradient-to-r from-indigo-500 to-blue-500"
              />
              
              <StatCard
                title="YouTube Subscribers"
                value={stats.youtube.subscribers}
                icon={<Youtube size={24} />}
                color="bg-gradient-to-r from-red-500 to-pink-500"
              />
              
              <StatCard
                title="YouTube Videos"
                value={stats.youtube.videos}
                icon={<Video size={24} />}
                color="bg-gradient-to-r from-yellow-500 to-red-500"
              />
              
              <StatCard
                title="YouTube Views"
                value={stats.youtube.views}
                icon={<Eye size={24} />}
                description="Total views across all videos"
                color="bg-gradient-to-r from-orange-500 to-yellow-500"
              />
            </div>
            
            <div className="flex flex-col md:flex-row p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md items-center justify-between transition-colors duration-300">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Want more detailed analytics?
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get audience demographics, engagement rates, and more specific metrics for your campaign.
                </p>
              </div>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-lg shadow hover:opacity-90 transition-opacity"
              >
                Request Media Kit
              </a>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
};

export default StatsSection;