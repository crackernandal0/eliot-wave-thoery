import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState('default');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Professional GSAP animations
    if (window.gsap) {
      // Hero entrance with sophisticated timing
      const tl = window.gsap.timeline();
      
      tl.fromTo('.hero-content', 
        { opacity: 0, y: 100, rotationX: 45, scale: 0.8 },
        { opacity: 1, y: 0, rotationX: 0, scale: 1, duration: 1.5, ease: 'power3.out' }
      )
      .fromTo('.hero-subtitle', 
        { opacity: 0, y: 50, skewY: 5 },
        { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power2.out' }, '-=0.8'
      )
      .fromTo('.hero-cta', 
        { opacity: 0, scale: 0, rotation: 180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: 'back.out(2)' }, '-=0.5'
      );
      
      // Feature cards with staggered 3D entrance
      window.gsap.fromTo('.feature-card', 
        { opacity: 0, y: 80, rotationY: 45, scale: 0.7 },
        { 
          opacity: 1, 
          y: 0, 
          rotationY: 0, 
          scale: 1, 
          duration: 1.2, 
          stagger: {
            amount: 1.5,
            from: 'center',
            ease: 'power2.out'
          },
          ease: 'power3.out',
          delay: 0.8
        }
      );
      
      // Course spotlight with magnetic effect
      window.gsap.fromTo('.course-spotlight', 
        { opacity: 0, scale: 0.5, rotation: -10, y: 100 },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0, 
          y: 0, 
          duration: 1.5, 
          ease: 'elastic.out(1, 0.8)', 
          delay: 1.5 
        }
      );

      // Floating elements animation
      window.gsap.to('.floating-element', {
        y: '-=20',
        rotation: '+=5',
        duration: 3,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }
  }, []);

  const features = [
    {
      title: 'TradingView Charts',
      description: 'Advanced charting tools with real-time data and Elliott Wave overlays',
      icon: '📈',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'AI Trading Tools',
      description: 'Machine learning algorithms to identify wave patterns and market trends',
      icon: '🤖',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Smart Chatbot',
      description: 'Get instant answers about Elliott Wave theory and trading strategies',
      icon: '💬',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Trading Chatroom',
      description: 'Connect with fellow traders and share market insights in real-time',
      icon: '👥',
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Chart Posts',
      description: 'Share your analysis and learn from community chart breakdowns',
      icon: '📊',
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Chart Competition',
      description: 'Compete in prediction contests and win prizes for accurate forecasts',
      icon: '🏆',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      title: 'Premium Courses',
      description: 'Comprehensive Elliott Wave education from beginner to advanced levels',
      icon: '🎓',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Trader Profiles',
      description: 'Track your progress, achievements, and trading performance metrics',
      icon: '👤',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  return (
    <>
      <style jsx={true}>{`
        /* Professional Custom Cursors */
        .custom-cursor {
          position: fixed;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #8b5cf6, #fbbf24);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.1s ease;
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.5);
        }
        
        .cursor-trading {
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #10b981, #059669);
          border: 2px solid #ffffff;
          box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
        }
        
        .cursor-learning {
          width: 35px;
          height: 35px;
          background: linear-gradient(45deg, #3b82f6, #1d4ed8);
          border: 2px solid #ffffff;
          box-shadow: 0 0 25px rgba(59, 130, 246, 0.6);
        }
        
        /* Professional Keyframe Animations */
        @keyframes professional-float {
          0% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg); 
            filter: drop-shadow(0 10px 20px rgba(139, 92, 246, 0.2));
          }
          33% { 
            transform: translateY(-15px) rotateX(5deg) rotateY(2deg); 
            filter: drop-shadow(0 20px 40px rgba(139, 92, 246, 0.3));
          }
          66% { 
            transform: translateY(-8px) rotateX(-3deg) rotateY(-2deg); 
            filter: drop-shadow(0 15px 30px rgba(139, 92, 246, 0.25));
          }
          100% { 
            transform: translateY(0px) rotateX(0deg) rotateY(0deg); 
            filter: drop-shadow(0 10px 20px rgba(139, 92, 246, 0.2));
          }
        }
        
        @keyframes elegant-glow {
          0% { 
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(251, 191, 36, 0.6), inset 0 0 30px rgba(251, 191, 36, 0.2);
            transform: scale(1.02);
          }
          100% { 
            box-shadow: 0 0 20px rgba(251, 191, 36, 0.3), inset 0 0 20px rgba(251, 191, 36, 0.1);
            transform: scale(1);
          }
        }
        
        @keyframes sophisticated-shimmer {
          0% { 
            background-position: -200% center;
            text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
          }
          50% {
            text-shadow: 0 0 20px rgba(139, 92, 246, 0.6), 0 0 30px rgba(251, 191, 36, 0.4);
          }
          100% { 
            background-position: 200% center;
            text-shadow: 0 0 10px rgba(139, 92, 246, 0.3);
          }
        }
        
        @keyframes premium-pulse {
          0% { 
            transform: scale(1) rotateZ(0deg);
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.7);
          }
          25% { 
            transform: scale(1.05) rotateZ(1deg);
            box-shadow: 0 0 0 10px rgba(139, 92, 246, 0.4);
          }
          50% { 
            transform: scale(1.08) rotateZ(0deg);
            box-shadow: 0 0 0 20px rgba(139, 92, 246, 0.2);
          }
          75% { 
            transform: scale(1.05) rotateZ(-1deg);
            box-shadow: 0 0 0 10px rgba(139, 92, 246, 0.4);
          }
          100% { 
            transform: scale(1) rotateZ(0deg);
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
          }
        }
        
        @keyframes luxury-gradient {
          0% { 
            background-position: 0% 50%;
            filter: hue-rotate(0deg) brightness(1);
          }
          25% {
            background-position: 50% 0%;
            filter: hue-rotate(90deg) brightness(1.1);
          }
          50% { 
            background-position: 100% 50%;
            filter: hue-rotate(180deg) brightness(1.2);
          }
          75% {
            background-position: 50% 100%;
            filter: hue-rotate(270deg) brightness(1.1);
          }
          100% { 
            background-position: 0% 50%;
            filter: hue-rotate(360deg) brightness(1);
          }
        }
        
        @keyframes elite-border {
          0% { 
            border-image-source: linear-gradient(45deg, #8b5cf6, #fbbf24, #10b981, #3b82f6);
            transform: rotateY(0deg);
          }
          25% {
            border-image-source: linear-gradient(135deg, #fbbf24, #10b981, #3b82f6, #8b5cf6);
            transform: rotateY(5deg);
          }
          50% { 
            border-image-source: linear-gradient(225deg, #10b981, #3b82f6, #8b5cf6, #fbbf24);
            transform: rotateY(0deg);
          }
          75% {
            border-image-source: linear-gradient(315deg, #3b82f6, #8b5cf6, #fbbf24, #10b981);
            transform: rotateY(-5deg);
          }
          100% { 
            border-image-source: linear-gradient(45deg, #8b5cf6, #fbbf24, #10b981, #3b82f6);
            transform: rotateY(0deg);
          }
        }
        
        /* Professional Animation Classes */

        
        .premium-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          animation: professional-float 6s ease-in-out infinite;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(251, 191, 36, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .premium-card:hover::before {
          opacity: 1;
        }
        
        .premium-card:hover {
          transform: translateY(-20px) scale(1.05) rotateX(5deg);
          box-shadow: 0 30px 60px rgba(139, 92, 246, 0.3);
          animation-play-state: paused;
        }
        
        .luxury-button {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed, #fbbf24);
          background-size: 200% 200%;
          border: none;
          border-radius: 15px;
          color: white;
          font-weight: 600;
          padding: 15px 30px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          animation: elegant-glow 4s ease-in-out infinite;
        }
        
        .luxury-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .luxury-button:hover::before {
          left: 100%;
        }
        
        .luxury-button:hover {
          background-position: 100% 0;
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4);
          animation-play-state: paused;
        }
        
        .floating-element {
          animation: professional-float 8s ease-in-out infinite;
          filter: drop-shadow(0 10px 20px rgba(139, 92, 246, 0.3));
        }
        
        .elite-border-card {
          border: 3px solid;
          border-image: linear-gradient(45deg, #8b5cf6, #fbbf24, #10b981, #3b82f6) 1;
          animation: elite-border 6s linear infinite;
          border-radius: 20px;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #0f0f23, #1a1a3e, #2d1b69, #8b5cf6);
          background-size: 400% 400%;
          animation: luxury-gradient 8s ease-in-out infinite;
        }
        
        /* Premium Gradient Backgrounds */
        .hero-bg {
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a3e 25%, #2d1b69 50%, #8b5cf6 75%, #fbbf24 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 80% 20%, rgba(255, 187, 36, 0.3) 0%, transparent 50%),
                      radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%);
          animation: gradient-shift 8s ease-in-out infinite;
        }
        
        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none"><path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".1" fill="%23fbbf24"></path></svg>') no-repeat center bottom;
          background-size: cover;
          animation: sine-wave-flow 6s ease-in-out infinite;
        }
        
        .feature-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(251, 191, 36, 0.1) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .feature-card:hover::before {
          opacity: 1;
        }
        
        .feature-card:hover {
          transform: translateY(-15px) scale(1.05);
          box-shadow: 0 25px 50px rgba(139, 92, 246, 0.3);
        }
        
        .course-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 100%);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .course-card:hover {
          transform: scale(1.03) rotateY(5deg);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-10px) rotateX(5deg);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
        }
        
        .chatbot-float {
          animation: float-glow 4s ease-in-out infinite;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .chatbot-float:hover {
          animation-duration: 2s;
          transform: scale(1.2) !important;
        }
        
        .chatbot-spin {
          animation: swirl-magic 15s linear infinite;
        }
        
        .glow-text {
          background: linear-gradient(45deg, #fbbf24, #f59e0b, #8b5cf6, #7c3aed);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 3s ease infinite, text-glow 2s ease-in-out infinite;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #fbbf24 100%);
          background-size: 200% 200%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          background-position: 100% 0;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
        }
        
        .btn-secondary {
          background: linear-gradient(135deg, transparent 0%, rgba(251, 191, 36, 0.1) 50%, transparent 100%);
          border: 2px solid;
          border-image: linear-gradient(45deg, #fbbf24, #8b5cf6) 1;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: linear-gradient(135deg, #fbbf24 0%, #8b5cf6 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(251, 191, 36, 0.4);
        }
        
        /* Trading Chart Cursor */
        .chart-cursor {
          cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 24 32"><rect x="8" y="4" width="8" height="12" fill="%2310b981" rx="1"/><line x1="12" y1="0" x2="12" y2="4" stroke="%2310b981" stroke-width="2"/><line x1="12" y1="16" x2="12" y2="20" stroke="%2310b981" stroke-width="2"/><rect x="8" y="20" width="8" height="12" fill="%23ef4444" rx="1"/></svg>'), crosshair !important;
        }
        
        .feature-card {
          animation: wave-float 6s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover {
          animation-play-state: paused;
          transform: scale(1.05) translateY(-10px);
        }
        
        .cta-pulse {
          animation: pulse-hero 2s infinite;
        }
        
        .chart-demo {
          animation: wave-slide 1.5s ease-out;
        }
        
        .testimonial {
          animation: ripple 3s ease-in-out infinite;
        }
        
        .course-image {
          animation: spin-wave 10s linear infinite;
        }
        
        .chatbot-button {
          animation: spin 4s linear infinite;
        }
        
        .chatbot-button:hover {
          animation-play-state: paused;
        }
        
        .bounce-cta {
          animation: bounce 2s infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-transparent">
        <Header />
        
        {/* Custom Cursor */}
         <div 
           className={`custom-cursor ${cursorType === 'trading' ? 'cursor-trading' : cursorType === 'learning' ? 'cursor-learning' : ''}`}
           style={{
             left: mousePosition.x - 10,
             top: mousePosition.y - 10,
           }}
         />
        
        {/* Hero Section */}
        <section className="gradient-bg text-white py-20 lg:py-32 relative overflow-hidden">
          {/* Professional Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 text-green-400 text-6xl floating-element opacity-30">📈</div>
            <div className="absolute top-40 right-20 text-red-400 text-4xl floating-element opacity-40" style={{animationDelay: '1s'}}>📉</div>
            <div className="absolute bottom-20 left-20 text-yellow-400 text-5xl floating-element opacity-35" style={{animationDelay: '2s'}}>💰</div>
            <div className="absolute top-60 left-1/3 text-blue-400 text-3xl floating-element opacity-30" style={{animationDelay: '0.5s'}}>⚡</div>
            <div className="absolute bottom-40 right-10 text-purple-400 text-4xl floating-element opacity-40" style={{animationDelay: '1.5s'}}>🎯</div>
            <div className="absolute top-1/2 right-1/4 text-indigo-400 text-3xl floating-element opacity-25" style={{animationDelay: '3s'}}>🚀</div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="hero-content text-center max-w-6xl mx-auto">
              {/* Trading Icon */}
              <div className="mb-8 floating-element">
                <svg className="w-32 h-32 mx-auto text-yellow-400 drop-shadow-2xl" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  <circle cx="12" cy="12" r="2" fill="#10b981"/>
                  <circle cx="6" cy="18" r="1.5" fill="#ef4444"/>
                  <circle cx="18" cy="6" r="1.5" fill="#3b82f6"/>
                </svg>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-100">
                Master <span className="text-yellow-400 floating-element">Elliott Waves</span>
                <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                  Dominate Markets
                </span>
              </h1>
              
              <p className="text-2xl md:text-3xl mb-8 text-gray-300 max-w-4xl mx-auto">
                🚀 AI-Powered Trading • 📊 Real-Time Charts • 🏆 Community Competitions
              </p>
              
              {/* Trading Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <div className="premium-card bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
                  <div className="text-4xl font-bold text-green-400 mb-2">+847%</div>
                  <div className="text-green-200">Average Profit</div>
                </div>
                <div className="premium-card bg-gradient-to-br from-blue-500/20 to-blue-600/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30">
                  <div className="text-4xl font-bold text-blue-400 mb-2">12.5K+</div>
                  <div className="text-blue-200">Active Traders</div>
                </div>
                <div className="premium-card bg-gradient-to-br from-purple-500/20 to-purple-600/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
                  <div className="text-4xl font-bold text-purple-400 mb-2">94.2%</div>
                  <div className="text-purple-200">Success Rate</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Link 
                  to="/courses" 
                  className="btn-primary rounded-2xl"
                >
                  🎓 Start Trading Journey
                </Link>
                <Link 
                  to="/charts" 
                  className="btn-primary rounded-2xl"
                >
                  📈 Live Trading Charts
                </Link>
              </div>
              
              {/* Enhanced TradingView Chart Preview */}
              <div className="mt-16 chart-demo">
                <div className="premium-card bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl p-8 max-w-5xl mx-auto border border-yellow-400/30">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                    {/* Animated Chart Lines */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 200">
                      <path d="M0,150 Q100,50 200,100 T400,80" stroke="#10b981" strokeWidth="3" fill="none" className="floating-element"/>
                      <path d="M0,120 Q150,180 300,60 T400,140" stroke="#ef4444" strokeWidth="2" fill="none" className="floating-element"/>
                      <path d="M0,100 L100,80 L200,120 L300,40 L400,100" stroke="#fbbf24" strokeWidth="2" fill="none" className="floating-element"/>
                    </svg>
                    
                    <div className="text-center text-white relative z-10">
                      <div className="text-6xl mb-6 floating-element">📊</div>
                      <h3 className="text-3xl font-bold mb-4 text-white">Professional Trading Platform</h3>
                      <p className="text-xl text-gray-300 mb-6">Real-time Elliott Wave Analysis with AI Predictions</p>
                      <div className="flex justify-center space-x-8 text-sm">
                        <div className="text-green-400">🟢 BUY Signal: 89%</div>
                        <div className="text-yellow-400">⚡ Wave 3 Detected</div>
                        <div className="text-blue-400">📈 Trend: Bullish</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-transparent">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything You Need to Master Elliott Waves
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive tools and community support for wave-based trading success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="premium-card rounded-xl p-6"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center text-2xl mx-auto mb-4 floating-element`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Course Spotlight */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <div className="container mx-auto px-6">
                <div className="course-spotlight max-w-4xl mx-auto text-center text-white">
              <div className="premium-card bg-gradient-to-br from-white to-gray-100 rounded-2xl shadow-2xl p-8 md:p-12">
                <div className="course-image w-24 h-24 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center floating-element">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Master Elliott Wave Trading
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Our flagship course covering all 5 waves, corrections, and advanced patterns
                </p>
                <div className="flex items-center justify-center space-x-4 mb-8">
                  <span className="text-3xl font-bold text-teal-600">$297</span>
                  <span className="text-lg text-gray-500 line-through">$497</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold floating-element">40% OFF</span>
                </div>
                <Link 
                  to="/courses" 
                  className="btn-primary"
                >
                  Start Learning Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Community Section */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Join Our Trading Community
              </h2>
              
              <div className="premium-card bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-2xl p-8 mb-8">
                <div className="text-2xl mb-4 floating-element">💬</div>
                <blockquote className="text-xl md:text-2xl font-medium mb-4">
                  "ElliottEvery transformed my trading! The community support and AI tools helped me identify wave patterns I never saw before."
                </blockquote>
                <cite className="text-lg opacity-90">- Sarah Chen, Professional Trader</cite>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="premium-card bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Live Chatroom</h3>
                  <p className="text-gray-300 mb-4">Connect with traders worldwide and share real-time market insights</p>
                  <div className="text-sm text-gray-400">🟢 1,247 traders online</div>
                </div>
                <div className="premium-card bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-6 text-white">
                  <h3 className="text-xl font-bold mb-3">Chart Competition</h3>
                  <p className="text-gray-300 mb-4">Compete in weekly prediction contests and win prizes</p>
                  <div className="text-sm text-gray-400">🏆 $5,000 monthly prizes</div>
                </div>
              </div>
              
              <Link 
                to="/chatroom" 
                className="btn-primary"
              >
                Join the Community
              </Link>
            </div>
          </div>
        </section>
        
        {/* TradingView Demo */}
        <section className="py-20 bg-gradient-to-br from-slate-950 via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Professional Trading Tools
              </h2>
              
              <div className="chart-demo bg-white/5 rounded-2xl shadow-xl p-8 text-white border border-white/10">
                <div className="bg-gray-900 rounded-lg h-96 flex items-center justify-center mb-6">
                  <div className="text-center text-white">
                    <svg className="w-20 h-20 mx-auto mb-4 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                    </svg>
                    <h3 className="text-xl font-bold mb-2">TradingView Integration</h3>
                    <p className="text-gray-300">Advanced charting with Elliott Wave overlays</p>
                  </div>
                </div>
                
                <Link 
                  to="/charts" 
                  className="btn-primary"
                >
                  Try Live Charts
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Floating Chatbot */}
        <div className="fixed bottom-4 right-4 z-50">
          <button 
            onClick={() => setChatbotOpen(!chatbotOpen)}
            className="btn-primary w-16 h-16 rounded-full flex items-center justify-center"
            aria-label="Open chatbot"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </button>
          
          {chatbotOpen && (
            <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-xl p-4 w-80 border">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-bold text-gray-900">Elliott Wave Assistant</h3>
                <button 
                  onClick={() => setChatbotOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="bg-gray-50 rounded p-3 mb-3">
                <p className="text-sm text-gray-700">👋 Hi! Ask me about wave trading patterns, market analysis, or course recommendations!</p>
              </div>
              <div className="flex">
                <input 
                  type="text" 
                  placeholder="Ask about wave trading..."
                  className="flex-1 border rounded-l px-3 py-2 text-sm focus:outline-none focus:border-teal-500"
                />
                <button className="btn-primary px-4 py-2 rounded-r">
                  Send
                </button>
              </div>
            </div>
          )}
        </div>
        
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
