import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Chatroom = () => {
  const [message, setMessage] = useState('');
  const [isUserListOpen, setIsUserListOpen] = useState(false);

  useEffect(() => {
    // GSAP animations
    if (window.gsap) {
      window.gsap.fromTo('.chat-message', 
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }
      );
      
      window.gsap.fromTo('.user-item', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', delay: 0.5 }
      );
      
      window.gsap.fromTo('.chat-header', 
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    }
  }, []);

  const chatMessages = [
    {
      id: 1,
      user: 'TradeMaster_Pro',
      avatar: '👨‍💼',
      message: 'Just spotted a perfect Elliott Wave setup on EURUSD! Wave 3 is about to begin 🚀',
      time: '10:45 AM',
      type: 'message',
      isOwn: false
    },
    {
      id: 2,
      user: 'WaveAnalyst',
      avatar: '👩‍💻',
      message: 'Nice catch! I see the same pattern. The 1.618 extension target looks solid.',
      time: '10:46 AM',
      type: 'message',
      isOwn: false
    },
    {
      id: 3,
      user: 'You',
      avatar: '👤',
      message: 'Thanks for sharing! Could you post the chart? I\'d love to see your wave count.',
      time: '10:47 AM',
      type: 'message',
      isOwn: true
    },
    {
      id: 4,
      user: 'CryptoWaves',
      avatar: '🚀',
      message: 'BTC looking bullish too! Just broke out of the triangle pattern.',
      time: '10:48 AM',
      type: 'message',
      isOwn: false
    },
    {
      id: 5,
      user: 'FibonacciKing',
      avatar: '📐',
      message: 'The 0.618 retracement held perfectly on SPY. Classic Wave 2 behavior!',
      time: '10:50 AM',
      type: 'message',
      isOwn: false
    },
    {
      id: 6,
      user: 'ElliottGuru',
      avatar: '🌊',
      message: 'Remember everyone, Wave 4 should not overlap with Wave 1 in an impulse. Keep that rule in mind!',
      time: '10:52 AM',
      type: 'tip',
      isOwn: false
    },
    {
      id: 7,
      user: 'MarketMaven',
      avatar: '📊',
      message: 'Great tip! That\'s one of the most important Elliott Wave rules.',
      time: '10:53 AM',
      type: 'message',
      isOwn: false
    },
    {
      id: 8,
      user: 'You',
      avatar: '👤',
      message: 'Absolutely! Non-overlapping waves are crucial for valid impulse patterns.',
      time: '10:54 AM',
      type: 'message',
      isOwn: true
    }
  ];

  const onlineUsers = [
    { id: 1, name: 'TradeMaster_Pro', avatar: '👨‍💼', status: 'online', level: 'Expert' },
    { id: 2, name: 'WaveAnalyst', avatar: '👩‍💻', status: 'online', level: 'Pro' },
    { id: 3, name: 'CryptoWaves', avatar: '🚀', status: 'online', level: 'Advanced' },
    { id: 4, name: 'FibonacciKing', avatar: '📐', status: 'online', level: 'Expert' },
    { id: 5, name: 'ElliottGuru', avatar: '🌊', status: 'online', level: 'Master' },
    { id: 6, name: 'MarketMaven', avatar: '📊', status: 'online', level: 'Pro' },
    { id: 7, name: 'ChartWizard', avatar: '🧙‍♂️', status: 'away', level: 'Advanced' },
    { id: 8, name: 'TrendFollower', avatar: '📈', status: 'online', level: 'Intermediate' },
    { id: 9, name: 'VolatilityTrader', avatar: '⚡', status: 'online', level: 'Pro' },
    { id: 10, name: 'SwingMaster', avatar: '🎯', status: 'away', level: 'Advanced' }
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      alert(`Message sent: "${message}"`);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <style jsx={true}>{`
        @keyframes professional-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes elegant-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(20, 184, 166, 0.3); }
          50% { box-shadow: 0 0 20px rgba(20, 184, 166, 0.6), 0 0 30px rgba(20, 184, 166, 0.4); }
        }
        
        @keyframes sophisticated-shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes premium-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        
        @keyframes luxury-gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes elite-border {
          0% { border-color: rgba(20, 184, 166, 0.3); }
          50% { border-color: rgba(20, 184, 166, 0.8); }
          100% { border-color: rgba(20, 184, 166, 0.3); }
        }
        
        @keyframes typing-indicator {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        

        
        .premium-card {
          animation: professional-float 6s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .premium-card:hover {
          animation: elegant-glow 2s ease-in-out infinite;
          transform: translateY(-5px) scale(1.02);
        }
        
        .floating-element {
          animation: professional-float 4s ease-in-out infinite;
        }
        
        .luxury-button {
          background: linear-gradient(135deg, #14b8a6, #0d9488, #0f766e);
          background-size: 200% 200%;
          animation: luxury-gradient 3s ease infinite;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .luxury-button:hover {
          animation: premium-pulse 1s ease-in-out infinite;
          box-shadow: 0 10px 25px rgba(20, 184, 166, 0.4);
        }
        
        .elite-border-card {
          border: 2px solid rgba(20, 184, 166, 0.3);
          animation: elite-border 3s ease-in-out infinite;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #f0fdfa, #ccfbf1, #99f6e4);
          background-size: 200% 200%;
          animation: luxury-gradient 8s ease infinite;
        }
        
        .typing-dot {
          animation: typing-indicator 1.5s ease-in-out infinite;
        }
        
        .online-indicator {
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        {/* Chat Header */}
        <div className="premium-card bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full online-indicator"></div>
                <h1 className="text-2xl font-bold text-gray-900">Elliott Wave Trading Room</h1>
              </div>
              <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                {onlineUsers.filter(u => u.status === 'online').length} online
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setIsUserListOpen(!isUserListOpen)}
                className="lg:hidden luxury-button text-white px-4 py-2 rounded-lg font-medium"
              >
                Users
              </button>
              <button className="premium-card bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                Settings
              </button>
            </div>
          </div>
        </div>
        
        {/* Main Chat Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Chat Messages */}
          <div className="flex-1 flex flex-col">
            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg, index) => (
                <div 
                  key={msg.id}
                  className={`premium-card floating-element flex items-start space-x-3 ${
                    msg.isOwn ? 'flex-row-reverse space-x-reverse' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center text-lg">
                      {msg.avatar}
                    </div>
                  </div>
                  
                  <div className={`flex-1 max-w-xs md:max-w-md ${
                    msg.isOwn ? 'text-right' : ''
                  }`}>
                    <div className="flex items-center space-x-2 mb-1">
                      <span className={`font-medium text-sm ${
                        msg.isOwn ? 'text-teal-600' : 'text-gray-900'
                      }`}>
                        {msg.user}
                      </span>
                      <span className="text-xs text-gray-500">{msg.time}</span>
                    </div>
                    
                    <div className={`rounded-lg px-4 py-2 ${
                      msg.isOwn 
                        ? 'bg-teal-600 text-white' 
                        : msg.type === 'tip'
                        ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                        : 'bg-white text-gray-900 border border-gray-200'
                    }`}>
                      {msg.type === 'tip' && (
                        <div className="flex items-center space-x-1 mb-1">
                          <span className="text-yellow-600">💡</span>
                          <span className="text-xs font-medium text-yellow-700">Trading Tip</span>
                        </div>
                      )}
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                  👩‍💻
                </div>
                <div className="bg-white border border-gray-200 rounded-lg px-4 py-2">
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-gray-600">WaveAnalyst is typing</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full typing-dot" style={{ animationDelay: '0s' }}></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full typing-dot" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full typing-dot" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Message Input */}
            <div className="border-t border-gray-200 p-4 bg-white">
              <div className="flex items-end space-x-3">
                <div className="flex-1">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message... (Press Enter to send)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    rows="2"
                  />
                </div>
                <button
                  onClick={handleSendMessage}
                  className="luxury-button text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2"
                >
                  <span>Send</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                  </svg>
                </button>
              </div>
              
              <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
                <div className="flex items-center space-x-4">
                  <button className="hover:text-teal-600 transition-colors">
                    📎 Attach Chart
                  </button>
                  <button className="hover:text-teal-600 transition-colors">
                    😊 Emoji
                  </button>
                  <button className="hover:text-teal-600 transition-colors">
                    📊 Share Analysis
                  </button>
                </div>
                <span>Shift + Enter for new line</span>
              </div>
            </div>
          </div>
          
          {/* User List Sidebar */}
          <div className={`bg-white border-l border-gray-200 w-80 flex-shrink-0 ${
            isUserListOpen ? 'block' : 'hidden lg:block'
          }`}>
            <div className="p-4 border-b border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">Online Users ({onlineUsers.filter(u => u.status === 'online').length})</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search users..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
                <svg className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div className="overflow-y-auto h-full pb-20">
              {onlineUsers.map((user, index) => (
                <div 
                  key={user.id}
                  className="premium-card floating-element p-3 border-b border-gray-100 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-sm">
                        {user.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                        user.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-gray-900 text-sm truncate">{user.name}</div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          user.level === 'Master' ? 'bg-purple-100 text-purple-800' :
                          user.level === 'Expert' ? 'bg-red-100 text-red-800' :
                          user.level === 'Pro' ? 'bg-blue-100 text-blue-800' :
                          user.level === 'Advanced' ? 'bg-green-100 text-green-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {user.level}
                        </span>
                        <span className={`text-xs ${
                          user.status === 'online' ? 'text-green-600' : 'text-yellow-600'
                        }`}>
                          {user.status}
                        </span>
                      </div>
                    </div>
                    
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile User List Overlay */}
        {isUserListOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsUserListOpen(false)}>
            <div className="absolute right-0 top-0 h-full w-80 bg-white" onClick={(e) => e.stopPropagation()}>
              {/* Same user list content as sidebar */}
            </div>
          </div>
        )}
        
        <Footer />
      </div>
    </>
  );
};

export default Chatroom;