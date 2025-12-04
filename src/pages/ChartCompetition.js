import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ChartCompetition = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('weekly');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // GSAP animations
    if (window.gsap) {
      window.gsap.fromTo('.competition-header', 
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
      
      window.gsap.fromTo('.leaderboard-entry', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
      );
      
      window.gsap.fromTo('.submission-card', 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: 'back.out(1.7)', delay: 0.8 }
      );
      
      window.gsap.fromTo('.prize-card', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', delay: 0.5 }
      );
    }
  }, []);

  const currentCompetition = {
    title: 'Weekly Elliott Wave Challenge',
    description: 'Predict the next major move in BTCUSD using Elliott Wave analysis',
    symbol: 'BTCUSD',
    timeframe: '4H',
    startDate: '2024-01-15',
    endDate: '2024-01-22',
    prize: '$2,500',
    participants: 847,
    submissions: 234,
    timeLeft: '3 days 14 hours'
  };

  const leaderboard = [
    {
      rank: 1,
      user: 'WaveMaster_Pro',
      avatar: '👑',
      score: 2847,
      accuracy: 94.2,
      predictions: 67,
      winStreak: 12,
      badge: 'Champion',
      change: 0
    },
    {
      rank: 2,
      user: 'ElliottExpert',
      avatar: '🌊',
      score: 2756,
      accuracy: 91.8,
      predictions: 73,
      winStreak: 8,
      badge: 'Expert',
      change: 1
    },
    {
      rank: 3,
      user: 'FibonacciKing',
      avatar: '📐',
      score: 2689,
      accuracy: 89.5,
      predictions: 82,
      winStreak: 15,
      badge: 'Master',
      change: -1
    },
    {
      rank: 4,
      user: 'ChartWizard',
      avatar: '🧙‍♂️',
      score: 2634,
      accuracy: 87.3,
      predictions: 91,
      winStreak: 6,
      badge: 'Pro',
      change: 2
    },
    {
      rank: 5,
      user: 'TrendAnalyst',
      avatar: '📈',
      score: 2578,
      accuracy: 85.7,
      predictions: 78,
      winStreak: 4,
      badge: 'Advanced',
      change: -1
    },
    {
      rank: 6,
      user: 'CryptoWaves',
      avatar: '🚀',
      score: 2523,
      accuracy: 84.1,
      predictions: 69,
      winStreak: 7,
      badge: 'Pro',
      change: 0
    },
    {
      rank: 7,
      user: 'PatternSeeker',
      avatar: '🔍',
      score: 2467,
      accuracy: 82.9,
      predictions: 85,
      winStreak: 3,
      badge: 'Advanced',
      change: 3
    },
    {
      rank: 8,
      user: 'MarketMaven',
      avatar: '📊',
      score: 2412,
      accuracy: 81.4,
      predictions: 76,
      winStreak: 5,
      badge: 'Pro',
      change: -2
    }
  ];

  const recentSubmissions = [
    {
      id: 1,
      user: 'TechnicalTrader',
      avatar: '📊',
      title: 'BTCUSD - Wave 5 Extension Target',
      prediction: 'Bullish to $48,500',
      confidence: 87,
      timeframe: '4H',
      submittedAt: '2 hours ago',
      likes: 23,
      comments: 8,
      analysis: 'Clear 5-wave structure with Wave 3 extension. Expecting Wave 5 to reach 1.618 Fibonacci extension.',
      image: '📈'
    },
    {
      id: 2,
      user: 'WaveCounter',
      avatar: '🌊',
      title: 'ETHUSD - ABC Correction Complete',
      prediction: 'Bullish to $2,850',
      confidence: 92,
      timeframe: '6H',
      submittedAt: '4 hours ago',
      likes: 31,
      comments: 12,
      analysis: 'ABC correction completed at 0.618 retracement. New impulse wave starting.',
      image: '🚀'
    },
    {
      id: 3,
      user: 'FibMaster',
      avatar: '📐',
      title: 'EURUSD - Triangle Breakout',
      prediction: 'Bearish to 1.0850',
      confidence: 78,
      timeframe: '1D',
      submittedAt: '6 hours ago',
      likes: 18,
      comments: 5,
      analysis: 'Symmetrical triangle pattern breaking to the downside. Target based on triangle height.',
      image: '📉'
    },
    {
      id: 4,
      user: 'PatternPro',
      avatar: '🎯',
      title: 'AAPL - Wave 4 Correction',
      prediction: 'Sideways $175-$185',
      confidence: 85,
      timeframe: '2H',
      submittedAt: '8 hours ago',
      likes: 27,
      comments: 9,
      analysis: 'Wave 4 correction in progress. Expecting complex sideways movement before Wave 5.',
      image: '📊'
    }
  ];

  const prizes = [
    { place: '1st', prize: '$1,000', color: 'from-yellow-400 to-yellow-500', icon: '🥇' },
    { place: '2nd', prize: '$600', color: 'from-gray-300 to-gray-400', icon: '🥈' },
    { place: '3rd', prize: '$400', color: 'from-orange-400 to-orange-500', icon: '🥉' },
    { place: '4th-10th', prize: '$50 each', color: 'from-blue-400 to-blue-500', icon: '🏆' }
  ];

  const handleSubmitChart = () => {
    alert('Chart submission feature coming soon! Please prepare your Elliott Wave analysis.');
  };

  return (
    <>
      <style jsx={true}>{`
        .chart-cursor {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          transition: all 0.1s ease;
        }
        
        .cursor-candle {
          width: 8px;
          height: 20px;
          position: relative;
        }
        
        .cursor-candle::before {
          content: '';
          position: absolute;
          left: 50%;
          top: -5px;
          width: 1px;
          height: 30px;
          background: currentColor;
          transform: translateX(-50%);
        }
        
        .cursor-candle.green {
          background: #10b981;
          color: #10b981;
        }
        
        .cursor-candle.red {
          background: #ef4444;
          color: #ef4444;
        }
        
        .cursor-indicator {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 2px 6px;
          border-radius: 4px;
          font-size: 10px;
          white-space: nowrap;
        }
        
        @keyframes cursor-pulse {
          0% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.1); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        
        .cursor-pulse {
          animation: cursor-pulse 1s ease-in-out infinite;
        }
        @keyframes professional-float {
          0% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(4px) rotate(-0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes elegant-glow {
          0% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6), 0 0 30px rgba(59, 130, 246, 0.3); }
          100% { box-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
        }
        
        @keyframes sophisticated-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes premium-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes luxury-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes elite-border {
          0% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(59, 130, 246, 0.8); }
          100% { border-color: rgba(59, 130, 246, 0.3); }
        }
        

        
        .premium-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          animation: elegant-glow 4s ease-in-out infinite;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .premium-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .luxury-button {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-size: 200% 200%;
          animation: luxury-gradient 3s ease infinite;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .luxury-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .floating-element {
          animation: professional-float 6s ease-in-out infinite;
        }
        
        .elite-border-card {
          border: 2px solid transparent;
          background: linear-gradient(white, white) padding-box, linear-gradient(45deg, #3b82f6, #8b5cf6) border-box;
          animation: elite-border 3s ease-in-out infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 400% 400%;
          animation: luxury-gradient 8s ease infinite;
        }
        
        .rank-change.up {
          color: #10b981;
        }
        
        .rank-change.down {
          color: #ef4444;
        }
        
        .rank-change.same {
          color: #6b7280;
        }
      `}</style>
      
      {/* Custom Trading Cursor */}
      <div 
        className="custom-cursor"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          display: mousePosition.x === 0 && mousePosition.y === 0 ? 'none' : 'block'
        }}
      >
        <div className={`cursor-candle ${Math.random() > 0.5 ? 'green' : 'red'} cursor-pulse`}>
          <div className="cursor-indicator">
            {Math.random() > 0.5 ? '📈 BUY' : '📉 SELL'}
          </div>
        </div>
      </div>
      
      <div className="min-h-screen bg-transparent chart-cursor">
        <Header />
        
        {/* Competition Header */}
        <section className="bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute top-32 right-20 w-16 h-16 bg-green-400 rounded-full opacity-10 animate-bounce"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-10 animate-ping"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
             <div className="floating-element text-center max-w-4xl mx-auto">
              <div className="inline-block bg-yellow-500 text-gray-900 px-4 py-2 rounded-full font-bold text-sm mb-4">
                🏆 LIVE COMPETITION
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                {currentCompetition.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                {currentCompetition.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="premium-card floating-element bg-gradient-to-br from-yellow-500 to-orange-500 bg-opacity-90 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-2xl font-bold text-gray-900">{currentCompetition.prize}</div>
                  <div className="text-sm text-gray-800">Total Prize Pool</div>
                </div>
                <div className="premium-card floating-element bg-gradient-to-br from-green-500 to-emerald-500 bg-opacity-90 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-2xl font-bold text-white">{currentCompetition.participants}</div>
                  <div className="text-sm text-gray-100">Participants</div>
                </div>
                <div className="premium-card floating-element bg-gradient-to-br from-blue-500 to-cyan-500 bg-opacity-90 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-2xl font-bold text-white">{currentCompetition.submissions}</div>
                  <div className="text-sm text-gray-100">Submissions</div>
                </div>
                <div className="premium-card floating-element bg-gradient-to-br from-red-500 to-pink-500 bg-opacity-90 rounded-xl p-4 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
                  <div className="text-2xl font-bold text-white">{currentCompetition.timeLeft}</div>
                  <div className="text-sm text-gray-100">Time Left</div>
                </div>
              </div>
              
              <button 
                onClick={handleSubmitChart}
                className="btn-primary px-8 py-4 rounded-xl font-bold text-lg"
              >
                🚀 Submit Your Analysis
              </button>
            </div>
          </div>
        </section>
        
        {/* Prize Structure */}
        <section className="py-16 bg-gradient-to-br from-slate-950 via-gray-900 to-black relative overflow-hidden text-white">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-bounce"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
             <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Prize Structure
              </h2>
              <p className="text-xl text-gray-300">
                Compete for your share of the prize pool
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {prizes.map((prize, index) => (
                <div 
                  key={index}
                  className="card-dark floating-element text-center p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`floating-element w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${prize.color} flex items-center justify-center text-2xl`}>
                    {prize.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{prize.place} Place</h3>
                  <p className="text-2xl font-bold text-teal-300">{prize.prize}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Leaderboard */}
              <div className="lg:col-span-2">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Leaderboard</h2>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setSelectedTimeframe('weekly')}
                      className={`${selectedTimeframe === 'weekly' ? 'btn-primary' : 'btn-secondary'} px-6 py-3 rounded-xl font-medium`}
                    >
                      📅 Weekly
                    </button>
                    <button 
                      onClick={() => setSelectedTimeframe('monthly')}
                      className={`${selectedTimeframe === 'monthly' ? 'btn-primary' : 'btn-secondary'} px-6 py-3 rounded-xl font-medium`}
                    >
                      🗓️ Monthly
                    </button>
                    <button 
                      onClick={() => setSelectedTimeframe('alltime')}
                      className={`${selectedTimeframe === 'alltime' ? 'btn-primary' : 'btn-secondary'} px-6 py-3 rounded-xl font-medium`}
                    >
                      🏆 All Time
                    </button>
                  </div>
                </div>
                
                <div className="card-dark rounded-xl shadow-xl overflow-hidden">
                  <div className="bg-white/5 px-6 py-3 border-b border-white/10">
                    <div className="grid grid-cols-12 gap-4 text-sm font-medium text-gray-600">
                      <div className="col-span-1">Rank</div>
                      <div className="col-span-4">Trader</div>
                      <div className="col-span-2">Score</div>
                      <div className="col-span-2">Accuracy</div>
                      <div className="col-span-2">Streak</div>
                      <div className="col-span-1">Change</div>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-gray-100">
                    {leaderboard.map((entry, index) => (
                      <div 
                        key={entry.rank}
                        className="premium-card floating-element px-6 py-4 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-1">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                              entry.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                              entry.rank === 2 ? 'bg-gray-100 text-gray-800' :
                              entry.rank === 3 ? 'bg-orange-100 text-orange-800' :
                              'bg-blue-100 text-blue-800'
                            }`}>
                              {entry.rank}
                            </div>
                          </div>
                          
                          <div className="col-span-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-lg">
                                {entry.avatar}
                              </div>
                              <div>
                                <div className="font-medium text-gray-900">{entry.user}</div>
                                <div className={`text-xs px-2 py-0.5 rounded-full inline-block ${
                                  entry.badge === 'Champion' ? 'bg-purple-100 text-purple-800' :
                                  entry.badge === 'Expert' ? 'bg-red-100 text-red-800' :
                                  entry.badge === 'Master' ? 'bg-yellow-100 text-yellow-800' :
                                  entry.badge === 'Pro' ? 'bg-blue-100 text-blue-800' :
                                  'bg-green-100 text-green-800'
                                }`}>
                                  {entry.badge}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="col-span-2">
                            <div className="font-bold text-gray-900">{entry.score.toLocaleString()}</div>
                            <div className="text-sm text-gray-600">{entry.predictions} predictions</div>
                          </div>
                          
                          <div className="col-span-2">
                            <div className="font-bold text-green-600">{entry.accuracy}%</div>
                          </div>
                          
                          <div className="col-span-2">
                            <div className="flex items-center space-x-1">
                              <span className="text-orange-500">🔥</span>
                              <span className="font-bold text-gray-900">{entry.winStreak}</span>
                            </div>
                          </div>
                          
                          <div className="col-span-1">
                            {entry.change > 0 && (
                              <div className="rank-change up flex items-center">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L10 4.414 6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">{entry.change}</span>
                              </div>
                            )}
                            {entry.change < 0 && (
                              <div className="rank-change down flex items-center">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 15.586l3.293-3.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">{Math.abs(entry.change)}</span>
                              </div>
                            )}
                            {entry.change === 0 && (
                              <div className="rank-change same">
                                <span className="text-sm">-</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Recent Submissions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Submissions</h2>
                <div className="space-y-4">
                  {recentSubmissions.map((submission, index) => (
                    <div 
                      key={submission.id}
                      className="premium-card floating-element bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-6 border border-blue-100 hover:shadow-xl transition-all duration-300"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-lg">
                          {submission.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-gray-900">{submission.user}</div>
                          <div className="text-sm text-gray-600">{submission.submittedAt}</div>
                        </div>
                        <div className="text-2xl">{submission.image}</div>
                      </div>
                      
                      <h3 className="font-bold text-gray-900 mb-2">{submission.title}</h3>
                      <p className="text-sm text-gray-700 mb-3">{submission.analysis}</p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          submission.prediction.includes('Bullish') ? 'bg-green-100 text-green-800' :
                          submission.prediction.includes('Bearish') ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {submission.prediction}
                        </div>
                        <div className="text-sm text-gray-600">
                          {submission.confidence}% confidence
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <button className="flex items-center space-x-1 hover:text-red-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span>{submission.likes}</span>
                          </button>
                          <button className="flex items-center space-x-1 hover:text-blue-500">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            <span>{submission.comments}</span>
                          </button>
                        </div>
                        <span className="text-xs text-gray-500">{submission.timeframe}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Competition Rules */}
                <div className="mt-8 premium-card floating-element bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-lg p-6 border border-purple-100">
                  <h3 className="font-bold text-gray-900 mb-4">Competition Rules</h3>
                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Submit Elliott Wave analysis with clear wave count</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Include price targets and timeframes</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>One submission per competition</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Scoring based on accuracy and timing</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-teal-500 mt-1">•</span>
                      <span>Winners announced after competition ends</span>
                    </div>
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

export default ChartCompetition;
