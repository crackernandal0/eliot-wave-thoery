import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Professional GSAP animations
    if (window.gsap) {
      // Hero profile animation
      window.gsap.fromTo('.profile-hero', 
        { opacity: 0, y: 100, rotationX: 15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.5, ease: 'power3.out' }
      );
      
      // Stats cards with stagger
      window.gsap.fromTo('.stat-card', 
        { opacity: 0, scale: 0.8, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, stagger: 0.1, ease: 'back.out(1.4)', delay: 0.3 }
      );
      
      // Chart posts with sophisticated entrance
      window.gsap.fromTo('.chart-post', 
        { opacity: 0, x: -100, rotationY: -15 },
        { opacity: 1, x: 0, rotationY: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.8 }
      );
      
      // Achievement badges with elegant reveal
      window.gsap.fromTo('.achievement-badge', 
        { opacity: 0, scale: 0, rotation: 180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, stagger: 0.08, ease: 'elastic.out(1, 0.6)', delay: 1.2 }
      );

      // Tab animations
      window.gsap.fromTo('.tab-content', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 1.5 }
      );
    }
  }, []);

  const userStats = {
    name: 'Alex Thompson',
    username: '@alextrader',
    joinDate: 'March 2023',
    location: 'New York, USA',
    bio: 'Professional Elliott Wave trader with 8+ years of experience. Specializing in cryptocurrency and forex markets. Sharing insights and helping fellow traders grow.',
    avatar: '👨‍💼',
    level: 'Wave Master',
    totalTrades: 1247,
    winRate: 73.2,
    totalProfit: 156780,
    followers: 2847,
    following: 156,
    coursesCompleted: 5,
    postsShared: 89
  };

  const chartPosts = [
    {
      id: 1,
      title: 'BTCUSD - Perfect 5-Wave Structure Complete',
      symbol: 'BTCUSD',
      timeframe: '4H',
      date: '2024-01-15',
      likes: 234,
      comments: 45,
      shares: 12,
      analysis: 'Clear 5-wave impulse pattern completed. Expecting ABC correction to 38.2% Fibonacci level around $41,500.',
      image: '📈',
      tags: ['Elliott Wave', 'Bitcoin', 'Bullish'],
      accuracy: 'Predicted: $42,000 | Actual: $41,850'
    },
    {
      id: 2,
      title: 'EURUSD - Wave 3 Extension in Progress',
      symbol: 'EURUSD',
      timeframe: '1D',
      date: '2024-01-12',
      likes: 189,
      comments: 32,
      shares: 8,
      analysis: 'Wave 3 showing strong extension characteristics. Target 1.618 extension at 1.1250 level.',
      image: '📊',
      tags: ['Forex', 'EUR', 'Wave 3'],
      accuracy: 'Predicted: 1.1240 | Actual: 1.1235'
    },
    {
      id: 3,
      title: 'AAPL - Corrective Wave B Bounce',
      symbol: 'AAPL',
      timeframe: '2H',
      date: '2024-01-10',
      likes: 156,
      comments: 28,
      shares: 15,
      analysis: 'Classic Wave B bounce in progress. Expecting failure around $185 before Wave C decline.',
      image: '📉',
      tags: ['Stocks', 'Apple', 'Correction'],
      accuracy: 'Predicted: $184.50 | Actual: $184.20'
    },
    {
      id: 4,
      title: 'ETHUSD - Triangle Breakout Confirmed',
      symbol: 'ETHUSD',
      timeframe: '6H',
      date: '2024-01-08',
      likes: 298,
      comments: 67,
      shares: 23,
      analysis: 'Symmetrical triangle pattern breakout confirmed. Wave 5 target at $2,850 based on wave equality.',
      image: '🚀',
      tags: ['Ethereum', 'Breakout', 'Triangle'],
      accuracy: 'Predicted: $2,840 | Actual: $2,865'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'Wave Master',
      description: 'Completed all Elliott Wave courses',
      icon: '🌊',
      color: 'from-blue-500 to-blue-600',
      earned: true,
      date: '2024-01-01'
    },
    {
      id: 2,
      title: 'Prediction Pro',
      description: '90%+ accuracy on 50+ predictions',
      icon: '🎯',
      color: 'from-green-500 to-green-600',
      earned: true,
      date: '2023-12-15'
    },
    {
      id: 3,
      title: 'Community Leader',
      description: '1000+ followers and active engagement',
      icon: '👑',
      color: 'from-yellow-500 to-yellow-600',
      earned: true,
      date: '2023-11-20'
    },
    {
      id: 4,
      title: 'Chart Artist',
      description: 'Shared 100+ high-quality chart analyses',
      icon: '🎨',
      color: 'from-purple-500 to-purple-600',
      earned: true,
      date: '2023-10-10'
    },
    {
      id: 5,
      title: 'Fibonacci Expert',
      description: 'Master of Fibonacci relationships',
      icon: '📐',
      color: 'from-red-500 to-red-600',
      earned: true,
      date: '2023-09-05'
    },
    {
      id: 6,
      title: 'AI Pioneer',
      description: 'Early adopter of AI trading tools',
      icon: '🤖',
      color: 'from-teal-500 to-teal-600',
      earned: false,
      date: null
    }
  ];

  return (
    <>
      <style jsx={true}>{`
        .profile-cursor {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          mix-blend-mode: difference;
        }
        
        .cursor-trading {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #f093fb, #f5576c);
          border: 3px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }
        
        .cursor-stats {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          border-radius: 12px;
          border: 2px solid rgba(255, 255, 255, 0.6);
        }
        
        @keyframes professional-float {
          0% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(-4px) rotate(-0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes elegant-glow {
          0% { box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15); }
          50% { box-shadow: 0 12px 48px rgba(102, 126, 234, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1); }
          100% { box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15); }
        }
        
        @keyframes sophisticated-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes premium-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes luxury-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes elite-border {
          0% { border-color: rgba(102, 126, 234, 0.3); }
          50% { border-color: rgba(118, 75, 162, 0.6); }
          100% { border-color: rgba(102, 126, 234, 0.3); }
        }
        

        
        .premium-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: elegant-glow 4s ease-in-out infinite;
        }
        
        .luxury-button {
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          background-size: 300% 300%;
          animation: luxury-gradient 3s ease infinite;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .luxury-button:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.4);
        }
        
        .stat-card {
          animation: professional-float 6s ease-in-out infinite;
        }
        
        .stat-card:nth-child(2) {
          animation-delay: 1s;
        }
        
        .stat-card:nth-child(3) {
          animation-delay: 2s;
        }
        
        .stat-card:nth-child(4) {
          animation-delay: 3s;
        }
        
        .achievement-badge {
          animation: premium-pulse 3s ease-in-out infinite;
        }
        
        .chart-post {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .chart-post:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        .tab-button {
          position: relative;
          overflow: hidden;
        }
        
        .tab-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .tab-button:hover::before {
          left: 100%;
        }
        
        .floating-element {
          animation: professional-float 6s ease-in-out infinite;
        }
        
        .floating-element:nth-child(2) {
          animation-delay: 1s;
        }
        
        .floating-element:nth-child(3) {
          animation-delay: 2s;
        }
        
        .floating-element:nth-child(4) {
          animation-delay: 3s;
        }
        
        .avatar {
          animation: professional-float 4s ease-in-out infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        {/* Profile Header */}
        <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16 profile-hero">
          <div className="container mx-auto px-6">
            <div className="premium-card max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                {/* Avatar */}
                <div className="avatar flex-shrink-0">
                  <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center text-6xl border-4 border-white border-opacity-30">
                    {userStats.avatar}
                  </div>
                </div>
                
                {/* User Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl md:text-4xl font-bold mb-2">{userStats.name}</h1>
                      <p className="text-xl text-gray-200 mb-2">{userStats.username}</p>
                      <div className="inline-block bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-bold text-sm floating-element">
                        {userStats.level}
                      </div>
                    </div>
                    <button className="luxury-button mt-4 md:mt-0 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                      Edit Profile
                    </button>
                  </div>
                  
                  <p className="text-gray-200 mb-6 max-w-2xl">{userStats.bio}</p>
                  
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                      </svg>
                      Joined {userStats.joinDate}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {userStats.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
              <div className="premium-card floating-element text-center p-4 bg-gray-50 rounded-lg" style={{ animationDelay: '0s' }}>
                <div className="text-2xl font-bold text-teal-600">{userStats.totalTrades.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Trades</div>
              </div>
              <div className="premium-card floating-element text-center p-4 bg-gray-50 rounded-lg" style={{ animationDelay: '0.1s' }}>
                <div className="text-2xl font-bold text-green-600">{userStats.winRate}%</div>
                <div className="text-sm text-gray-600">Win Rate</div>
              </div>
              <div className="premium-card floating-element text-center p-4 bg-gray-50 rounded-lg" style={{ animationDelay: '0.2s' }}>
                <div className="text-2xl font-bold text-blue-600">${userStats.totalProfit.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Profit</div>
              </div>
              <div className="premium-card floating-element text-center p-4 bg-gray-50 rounded-lg" style={{ animationDelay: '0.3s' }}>
                <div className="text-2xl font-bold text-purple-600">{userStats.followers.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Followers</div>
              </div>
              <div className="premium-card floating-element text-center p-4 bg-gray-50 rounded-lg" style={{ animationDelay: '0.4s' }}>
                <div className="text-2xl font-bold text-orange-600">{userStats.following}</div>
                <div className="text-sm text-gray-600">Following</div>
              </div>
              <div className="premium-card floating-element text-center p-4 bg-gray-50 rounded-lg" style={{ animationDelay: '0.5s' }}>
                <div className="text-2xl font-bold text-red-600">{userStats.coursesCompleted}</div>
                <div className="text-sm text-gray-600">Courses</div>
              </div>
              <div className="premium-card floating-element text-center p-4 bg-gray-50 rounded-lg" style={{ animationDelay: '0.6s' }}>
                <div className="text-2xl font-bold text-yellow-600">{userStats.postsShared}</div>
                <div className="text-sm text-gray-600">Posts</div>
              </div>
              <div className="premium-card floating-element text-center p-4 bg-gray-50 rounded-lg" style={{ animationDelay: '0.7s' }}>
                <div className="text-2xl font-bold text-teal-600">{achievements.filter(a => a.earned).length}</div>
                <div className="text-sm text-gray-600">Badges</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Chart Posts */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Recent Chart Posts</h2>
                  <button className="luxury-button bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                    New Post
                  </button>
                </div>
                
                <div className="space-y-6">
                  {chartPosts.map((post, index) => (
                    <div 
                      key={post.id}
                      className="premium-card floating-element bg-white rounded-lg shadow-md p-6"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-3xl">{post.image}</div>
                          <div>
                            <h3 className="font-bold text-gray-900">{post.title}</h3>
                            <div className="flex items-center space-x-2 text-sm text-gray-600">
                              <span className="font-medium">{post.symbol}</span>
                              <span>•</span>
                              <span>{post.timeframe}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </button>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{post.analysis}</p>
                      
                      {post.accuracy && (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                          <div className="text-sm font-medium text-green-800">Prediction Accuracy</div>
                          <div className="text-sm text-green-700">{post.accuracy}</div>
                        </div>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-6 text-sm text-gray-600">
                          <button className="flex items-center space-x-1 hover:text-red-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-green-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                            <span>{post.shares}</span>
                          </button>
                        </div>
                        <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                          View Chart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Achievements Sidebar */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={achievement.id}
                      className={`premium-card floating-element p-4 rounded-lg border-2 transition-all duration-300 ${
                        achievement.earned 
                          ? 'bg-white border-teal-200 shadow-md' 
                          : 'bg-gray-50 border-gray-200 opacity-60'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-center">
                        <div className={`w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center text-2xl`}>
                          {achievement.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-1">{achievement.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                        {achievement.earned && achievement.date && (
                          <div className="text-xs text-teal-600 font-medium">
                            Earned {achievement.date}
                          </div>
                        )}
                        {!achievement.earned && (
                          <div className="text-xs text-gray-500">
                            Not earned yet
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Quick Actions */}
                <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link to="/courses" className="luxury-button block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-2 rounded-lg font-medium transition-colors">
                      Browse Courses
                    </Link>
                    <Link to="/chatroom" className="luxury-button block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-medium transition-colors">
                      Join Chatroom
                    </Link>
                    <Link to="/chart-competition" className="luxury-button block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-2 rounded-lg font-medium transition-colors">
                      Enter Competition
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default ProfilePage;