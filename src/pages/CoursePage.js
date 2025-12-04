import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CoursePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorType, setCursorType] = useState('default');

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
      window.gsap.fromTo('.course-card', 
        { opacity: 0, y: 50, rotationX: 15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 1.2, stagger: 0.15, ease: 'power3.out' }
      );
      
      window.gsap.fromTo('.featured-course', 
        { opacity: 0, scale: 0.8, rotationY: 10 },
        { opacity: 1, scale: 1, rotationY: 0, duration: 1.5, ease: 'back.out(1.7)', delay: 0.3 }
      );
      
      window.gsap.fromTo('.testimonial-card', 
        { opacity: 0, x: -100, rotation: -5 },
        { opacity: 1, x: 0, rotation: 0, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.8 }
      );

      window.gsap.fromTo('.hero-element', 
        { opacity: 0, scale: 0, rotation: 180 },
        { opacity: 1, scale: 1, rotation: 0, duration: 2, stagger: 0.1, ease: 'elastic.out(1, 0.5)' }
      );
    }
  }, []);

  const courses = [
    {
      id: 1,
      title: 'Elliott Wave Fundamentals',
      level: 'Beginner',
      duration: '8 hours',
      price: 97,
      originalPrice: 147,
      description: 'Master the basics of Elliott Wave theory and identify the 5-wave patterns',
      features: ['Wave counting basics', 'Impulse vs corrective waves', 'Fibonacci relationships', 'Practice exercises'],
      color: 'from-blue-500 to-blue-600',
      icon: '📚'
    },
    {
      id: 2,
      title: 'Advanced Wave Analysis',
      level: 'Intermediate',
      duration: '12 hours',
      price: 197,
      originalPrice: 297,
      description: 'Deep dive into complex wave structures and advanced pattern recognition',
      features: ['Complex corrections', 'Wave extensions', 'Alternation rules', 'Real market examples'],
      color: 'from-purple-500 to-purple-600',
      icon: '🔬'
    },
    {
      id: 3,
      title: 'Professional Trading Strategies',
      level: 'Advanced',
      duration: '16 hours',
      price: 297,
      originalPrice: 497,
      description: 'Complete trading system using Elliott Wave with risk management',
      features: ['Entry/exit strategies', 'Risk management', 'Position sizing', 'Live trading sessions'],
      color: 'from-green-500 to-green-600',
      icon: '💼'
    },
    {
      id: 4,
      title: 'AI-Powered Wave Detection',
      level: 'Expert',
      duration: '10 hours',
      price: 397,
      originalPrice: 597,
      description: 'Learn to use AI tools for automated wave pattern recognition',
      features: ['Machine learning basics', 'AI pattern detection', 'Automated alerts', 'Custom indicators'],
      color: 'from-red-500 to-red-600',
      icon: '🤖'
    },
    {
      id: 5,
      title: 'Cryptocurrency Wave Analysis',
      level: 'Intermediate',
      duration: '6 hours',
      price: 147,
      originalPrice: 197,
      description: 'Apply Elliott Wave theory to volatile cryptocurrency markets',
      features: ['Crypto market dynamics', 'Altcoin analysis', 'DeFi patterns', 'Portfolio strategies'],
      color: 'from-yellow-500 to-yellow-600',
      icon: '₿'
    },
    {
      id: 6,
      title: 'Forex Wave Trading',
      level: 'Intermediate',
      duration: '8 hours',
      price: 167,
      originalPrice: 247,
      description: 'Master currency pair analysis using Elliott Wave principles',
      features: ['Currency correlations', 'Central bank impact', 'News trading', 'Multi-timeframe analysis'],
      color: 'from-teal-500 to-teal-600',
      icon: '💱'
    }
  ];

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      role: 'Day Trader',
      content: 'The Elliott Wave Fundamentals course changed my trading completely. I can now spot patterns I never noticed before!',
      rating: 5,
      course: 'Elliott Wave Fundamentals'
    },
    {
      name: 'Sarah Kim',
      role: 'Portfolio Manager',
      content: 'Advanced Wave Analysis gave me the confidence to trade larger positions with better risk management.',
      rating: 5,
      course: 'Advanced Wave Analysis'
    },
    {
      name: 'David Chen',
      role: 'Crypto Trader',
      content: 'The AI-Powered Wave Detection course is revolutionary. The automated alerts have improved my win rate significantly.',
      rating: 5,
      course: 'AI-Powered Wave Detection'
    }
  ];

  return (
    <>
      <style jsx={true}>{`
        .course-cursor {
          cursor: none;
        }
        
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #667eea, #764ba2);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: all 0.1s ease;
          mix-blend-mode: difference;
        }
        
        .cursor-learning {
          width: 40px;
          height: 40px;
          background: linear-gradient(45deg, #f093fb, #f5576c);
          border: 2px solid white;
        }
        
        .cursor-book {
          width: 50px;
          height: 50px;
          background: linear-gradient(45deg, #4facfe, #00f2fe);
          border-radius: 10px;
        }
        
        @keyframes premium-float {
          0% { transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1); }
          25% { transform: translateY(-25px) rotateX(8deg) rotateY(3deg) scale(1.02); }
          50% { transform: translateY(-15px) rotateX(-5deg) rotateY(-2deg) scale(1.05); }
          75% { transform: translateY(-30px) rotateX(10deg) rotateY(4deg) scale(1.03); }
          100% { transform: translateY(0px) rotateX(0deg) rotateY(0deg) scale(1); }
        }
        
        @keyframes luxury-glow {
          0% { 
            box-shadow: 0 0 30px rgba(102, 126, 234, 0.4), 0 0 60px rgba(102, 126, 234, 0.2), inset 0 0 20px rgba(255,255,255,0.1); 
            filter: brightness(1) saturate(1);
          }
          50% { 
            box-shadow: 0 0 60px rgba(102, 126, 234, 0.8), 0 0 120px rgba(102, 126, 234, 0.4), inset 0 0 40px rgba(255,255,255,0.2); 
            filter: brightness(1.2) saturate(1.3);
          }
          100% { 
            box-shadow: 0 0 30px rgba(102, 126, 234, 0.4), 0 0 60px rgba(102, 126, 234, 0.2), inset 0 0 20px rgba(255,255,255,0.1); 
            filter: brightness(1) saturate(1);
          }
        }
        
        @keyframes elite-shimmer {
          0% { background-position: -300% 0; transform: skewX(-15deg); }
          50% { transform: skewX(0deg); }
          100% { background-position: 300% 0; transform: skewX(15deg); }
        }
        
        @keyframes premium-bounce {
          0% { transform: translateY(0) scale(1) rotateX(0) rotateZ(0deg); }
          15% { transform: translateY(-40px) scale(1.15) rotateX(15deg) rotateZ(2deg); }
          30% { transform: translateY(-20px) scale(1.08) rotateX(-8deg) rotateZ(-1deg); }
          45% { transform: translateY(-35px) scale(1.12) rotateX(12deg) rotateZ(3deg); }
          60% { transform: translateY(-10px) scale(1.05) rotateX(-5deg) rotateZ(-2deg); }
          80% { transform: translateY(-15px) scale(1.03) rotateX(3deg) rotateZ(1deg); }
          100% { transform: translateY(0) scale(1) rotateX(0) rotateZ(0deg); }
        }
        
        @keyframes luxury-pulse {
          0% { 
            transform: scale(1) rotate(0deg) perspective(1000px) rotateY(0deg); 
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0.8), 0 0 30px rgba(102, 126, 234, 0.3); 
          }
          25% { 
            transform: scale(1.08) rotate(3deg) perspective(1000px) rotateY(5deg); 
            box-shadow: 0 0 0 5px rgba(102, 126, 234, 0.4), 0 0 50px rgba(102, 126, 234, 0.5); 
          }
          50% { 
            transform: scale(1.12) rotate(0deg) perspective(1000px) rotateY(0deg); 
            box-shadow: 0 0 0 15px rgba(102, 126, 234, 0.2), 0 0 80px rgba(102, 126, 234, 0.7); 
          }
          75% { 
            transform: scale(1.05) rotate(-2deg) perspective(1000px) rotateY(-3deg); 
            box-shadow: 0 0 0 8px rgba(102, 126, 234, 0.1), 0 0 40px rgba(102, 126, 234, 0.4); 
          }
          100% { 
            transform: scale(1) rotate(0deg) perspective(1000px) rotateY(0deg); 
            box-shadow: 0 0 0 0 rgba(102, 126, 234, 0), 0 0 30px rgba(102, 126, 234, 0.3); 
          }
        }
        
        @keyframes elite-wave {
          0% { transform: translateX(-100%) skewX(-15deg) rotateY(0deg) scaleY(1); opacity: 0; }
          20% { transform: translateX(-60%) skewX(-8deg) rotateY(8deg) scaleY(1.15); opacity: 0.3; }
          40% { transform: translateX(-20%) skewX(-3deg) rotateY(5deg) scaleY(0.85); opacity: 0.7; }
          60% { transform: translateX(10%) skewX(2deg) rotateY(-3deg) scaleY(1.2); opacity: 0.9; }
          80% { transform: translateX(15%) skewX(5deg) rotateY(-5deg) scaleY(0.9); opacity: 0.8; }
          100% { transform: translateX(0%) skewX(0deg) rotateY(0deg) scaleY(1); opacity: 1; }
        }
        
        @keyframes premium-morph {
          0% { 
            border-radius: 25px; 
            transform: rotate(0deg) scale(1) perspective(1000px) rotateX(0deg); 
            filter: hue-rotate(0deg) brightness(1);
          }
          20% { 
            border-radius: 40px 15px 35px 20px; 
            transform: rotate(8deg) scale(1.03) perspective(1000px) rotateX(5deg); 
            filter: hue-rotate(30deg) brightness(1.1);
          }
          40% { 
            border-radius: 15px 40px 20px 35px; 
            transform: rotate(-5deg) scale(1.08) perspective(1000px) rotateX(-3deg); 
            filter: hue-rotate(60deg) brightness(1.2);
          }
          60% { 
            border-radius: 30px 25px 40px 15px; 
            transform: rotate(12deg) scale(1.05) perspective(1000px) rotateX(8deg); 
            filter: hue-rotate(90deg) brightness(1.15);
          }
          80% { 
            border-radius: 20px 35px 15px 30px; 
            transform: rotate(-8deg) scale(1.02) perspective(1000px) rotateX(-5deg); 
            filter: hue-rotate(45deg) brightness(1.05);
          }
          100% { 
            border-radius: 25px; 
            transform: rotate(0deg) scale(1) perspective(1000px) rotateX(0deg); 
            filter: hue-rotate(0deg) brightness(1);
          }
        }
        
        @keyframes hero-particles {
          0% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(0.8); 
            opacity: 0.9; 
            filter: blur(0px) hue-rotate(0deg) brightness(1);
          }
          10% { 
            transform: translateY(-60px) translateX(40px) rotate(36deg) scale(1.05); 
            opacity: 1; 
            filter: blur(0.5px) hue-rotate(30deg) brightness(1.2);
          }
          25% { 
            transform: translateY(-140px) translateX(80px) rotate(90deg) scale(1.15); 
            opacity: 0.95; 
            filter: blur(1px) hue-rotate(75deg) brightness(1.1);
          }
          40% { 
            transform: translateY(-220px) translateX(30px) rotate(144deg) scale(0.9); 
            opacity: 0.85; 
            filter: blur(1.5px) hue-rotate(120deg) brightness(1.3);
          }
          55% { 
            transform: translateY(-300px) translateX(-30px) rotate(198deg) scale(1.25); 
            opacity: 0.7; 
            filter: blur(2px) hue-rotate(165deg) brightness(1.15);
          }
          70% { 
            transform: translateY(-380px) translateX(-70px) rotate(252deg) scale(0.75); 
            opacity: 0.5; 
            filter: blur(2.5px) hue-rotate(210deg) brightness(1.05);
          }
          85% { 
            transform: translateY(-460px) translateX(-40px) rotate(306deg) scale(0.6); 
            opacity: 0.3; 
            filter: blur(3px) hue-rotate(255deg) brightness(0.9);
          }
          95% { 
            transform: translateY(-520px) translateX(-10px) rotate(342deg) scale(0.4); 
            opacity: 0.15; 
            filter: blur(4px) hue-rotate(285deg) brightness(0.8);
          }
          100% { 
            transform: translateY(-580px) translateX(0) rotate(360deg) scale(0.2); 
            opacity: 0; 
            filter: blur(5px) hue-rotate(315deg) brightness(0.7);
          }
        }
        
        .course-card {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.98) 0%,
            rgba(248, 250, 252, 0.95) 50%,
            rgba(241, 245, 249, 0.92) 100%
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(226, 232, 240, 0.8);
          border-radius: 24px;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .course-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 25px rgba(0, 0, 0, 0.1),
            0 10px 10px rgba(0, 0, 0, 0.04);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .course-card-first {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 1) 0%,
            rgba(249, 250, 251, 1) 100%
          );
          border: 2px solid rgba(229, 231, 235, 0.8);
          transition: all 0.3s ease;
        }
        
        .course-card-first:hover {
          transform: translateY(-4px);
          box-shadow: 
            0 10px 15px rgba(0, 0, 0, 0.08),
            0 4px 6px rgba(0, 0, 0, 0.05);
          border-color: rgba(156, 163, 175, 0.4);
        }
        
        .featured-video {
          background: linear-gradient(135deg, 
            rgba(15, 23, 42, 0.95) 0%,
            rgba(30, 41, 59, 0.9) 20%,
            rgba(51, 65, 85, 0.85) 40%,
            rgba(71, 85, 105, 0.8) 60%,
            rgba(100, 116, 139, 0.75) 80%,
            rgba(148, 163, 184, 0.7) 100%
          );
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          border: 3px solid transparent;
          background-clip: padding-box;
          animation: premium-float 8s ease-in-out infinite;
        }
        
        .featured-video::before {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          right: -3px;
          bottom: -3px;
          background: linear-gradient(45deg, 
            #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe
          );
          background-size: 300% 300%;
          border-radius: 28px;
          z-index: -1;
          animation: elite-shimmer 4s ease-in-out infinite;
        }
        
        .featured-video:hover {
          transform: scale(1.08) perspective(1000px) rotateY(5deg);
          box-shadow: 
            0 40px 80px rgba(102, 126, 234, 0.5),
            0 20px 40px rgba(118, 75, 162, 0.4),
            0 10px 20px rgba(240, 147, 251, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.1);
          filter: brightness(1.1) saturate(1.2);
        }
        
        .testimonial-card {
          background: linear-gradient(135deg, 
            rgba(255, 255, 255, 0.98) 0%,
            rgba(248, 250, 252, 0.95) 100%
          );
          color: #1f2937;
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(229, 231, 235, 0.8);
          border-radius: 20px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 
            0 4px 6px rgba(0, 0, 0, 0.05),
            0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 
            0 20px 25px rgba(0, 0, 0, 0.1),
            0 10px 10px rgba(0, 0, 0, 0.04);
          border-color: rgba(99, 102, 241, 0.3);
        }
        
        .level-badge {
          background: linear-gradient(135deg, 
            #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%
          );
          background-size: 200% 200%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 20px;
          padding: 0.5rem 1rem;
          color: white;
          font-weight: 600;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 4px 8px rgba(102, 126, 234, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          animation: premium-float 8s ease-in-out infinite, shimmer 4s ease-in-out infinite;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .level-badge:hover {
          transform: scale(1.15) rotate(8deg) perspective(1000px) rotateY(10deg);
          animation: premium-bounce 0.8s ease-out;
          box-shadow: 
            0 8px 16px rgba(102, 126, 234, 0.5),
            0 4px 8px rgba(118, 75, 162, 0.4),
            inset 0 2px 4px rgba(255, 255, 255, 0.3);
          filter: brightness(1.2) saturate(1.3);
        }
        
        .course-icon {
          background: linear-gradient(135deg, 
            rgba(102, 126, 234, 0.2) 0%,
            rgba(118, 75, 162, 0.2) 50%,
            rgba(240, 147, 251, 0.2) 100%
          );
          border-radius: 50%;
          padding: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          animation: luxury-pulse 4s ease-in-out infinite;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .course-icon:hover {
          transform: scale(1.25) rotate(15deg) perspective(1000px) rotateX(10deg);
          filter: brightness(1.3) saturate(1.4);
          box-shadow: 
            0 10px 20px rgba(102, 126, 234, 0.4),
            0 5px 10px rgba(118, 75, 162, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.5);
        }
        
        .hero-particle {
          position: absolute;
          width: 8px;
          height: 8px;
          background: linear-gradient(45deg, 
            #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe
          );
          background-size: 200% 200%;
          border-radius: 50%;
          box-shadow: 
            0 0 10px rgba(102, 126, 234, 0.6),
            0 0 20px rgba(118, 75, 162, 0.4),
            0 0 30px rgba(240, 147, 251, 0.3);
          animation: hero-particles 20s linear infinite, shimmer 3s ease-in-out infinite;
        }
        
        .hero-particle:nth-child(2n) {
          width: 12px;
          height: 12px;
          background: linear-gradient(135deg, 
            #f093fb, #f5576c, #4facfe, #00f2fe, #667eea, #764ba2
          );
          animation-duration: 25s;
          animation-delay: -5s;
        }
        
        .hero-particle:nth-child(3n) {
          width: 6px;
          height: 6px;
          background: linear-gradient(225deg, 
            #4facfe, #00f2fe, #667eea, #764ba2, #f093fb, #f5576c
          );
          animation-duration: 18s;
          animation-delay: -10s;
        }
        
        .hero-particle:nth-child(4n) {
          width: 10px;
          height: 10px;
          background: radial-gradient(circle, 
            #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%
          );
          animation-duration: 22s;
          animation-delay: -15s;
          filter: blur(0.5px);
        }
        
        .shimmer-text {
          background: linear-gradient(45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #ffecd2, #fcb69f);
          background-size: 600% 600%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s ease-in-out infinite;
          position: relative;
          display: inline-block;
        }
        
        .shimmer-text::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transform: translateX(-100%);
          animation: shimmer-overlay 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: 0% 50%; transform: scale(1) rotateX(0deg); }
          25% { background-position: 50% 25%; transform: scale(1.02) rotateX(2deg); }
          50% { background-position: 100% 50%; transform: scale(1.05) rotateX(0deg); }
          75% { background-position: 50% 75%; transform: scale(1.02) rotateX(-2deg); }
          100% { background-position: 0% 50%; transform: scale(1) rotateX(0deg); }
        }
        
        @keyframes shimmer-overlay {
          0% { transform: translateX(-100%) skewX(-15deg); }
          50% { transform: translateX(0%) skewX(0deg); }
          100% { transform: translateX(100%) skewX(15deg); }
        }
        
        .premium-button {
          background: linear-gradient(135deg, 
            #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%
          );
          background-size: 300% 300%;
          border: 2px solid transparent;
          border-radius: 20px;
          padding: 1.2rem 2.5rem;
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
          box-shadow: 
            0 8px 16px rgba(102, 126, 234, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          animation: premium-float 6s ease-in-out infinite, shimmer 5s ease-in-out infinite;
        }
        
        .premium-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255, 255, 255, 0.4), 
            transparent
          );
          transition: left 0.6s ease;
        }
        
        .premium-button:hover {
          transform: translateY(-5px) scale(1.08) perspective(1000px) rotateX(5deg);
          box-shadow: 
            0 20px 40px rgba(102, 126, 234, 0.5),
            0 10px 20px rgba(118, 75, 162, 0.4),
            0 5px 10px rgba(240, 147, 251, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.3);
          animation: luxury-glow 2s ease-in-out infinite;
          filter: brightness(1.2) saturate(1.3);
          border-color: rgba(255, 255, 255, 0.4);
        }
        
        .premium-button:hover::before {
          left: 100%;
        }
        
        .premium-button:active {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 
            0 10px 20px rgba(102, 126, 234, 0.4),
            inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }
      `}</style>
      
      <div className="min-h-screen bg-transparent course-cursor">
        {/* Custom Cursor */}
        <div 
          className={`custom-cursor ${
            cursorType === 'learning' ? 'cursor-learning' : 
            cursorType === 'book' ? 'cursor-book' : ''
          }`}
          style={{
            transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)`
          }}
        />
        
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white py-20 overflow-hidden">
          {/* Animated Background Particles */}
          <div className="absolute inset-0">
            <div className="hero-particle absolute top-20 left-10 opacity-70" style={{animationDelay: '0s'}}></div>
             <div className="hero-particle absolute top-40 right-20 opacity-60" style={{animationDelay: '3s'}}></div>
             <div className="hero-particle absolute bottom-40 left-20 opacity-80" style={{animationDelay: '6s'}}></div>
             <div className="hero-particle absolute top-60 left-1/3 opacity-70" style={{animationDelay: '9s'}}></div>
             <div className="hero-particle absolute bottom-60 right-1/3 opacity-50" style={{animationDelay: '12s'}}></div>
             <div className="hero-particle absolute top-80 right-10 opacity-90" style={{animationDelay: '15s'}}></div>
             <div className="hero-particle absolute top-32 left-1/4 opacity-65" style={{animationDelay: '2s'}}></div>
             <div className="hero-particle absolute bottom-32 right-1/4 opacity-75" style={{animationDelay: '8s'}}></div>
             <div className="hero-particle absolute top-72 left-3/4 opacity-55" style={{animationDelay: '11s'}}></div>
             <div className="hero-particle absolute bottom-72 right-3/4 opacity-85" style={{animationDelay: '14s'}}></div>
             <div className="hero-particle absolute top-96 left-1/2 opacity-60" style={{animationDelay: '5s'}}></div>
             <div className="hero-particle absolute bottom-96 right-1/2 opacity-70" style={{animationDelay: '17s'}}></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="hero-element mb-8">
                <h1 className="text-6xl md:text-8xl font-black mb-6 shimmer-text leading-tight">
                  Master Elliott Wave Trading
                </h1>
              </div>
              
              <div className="hero-element mb-12">
                <p className="text-2xl md:text-3xl mb-8 text-gray-200 font-light leading-relaxed">
                  Transform into a <span className="text-yellow-400 font-bold">Professional Trader</span> with our 
                  <span className="text-pink-400 font-bold">World-Class</span> Elliott Wave Courses
                </p>
              </div>
              
              <div className="hero-element flex flex-wrap justify-center gap-6 text-lg mb-12">
                <div 
                  className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 backdrop-blur-lg px-8 py-4 rounded-2xl border border-yellow-400/30 hover:scale-110 transition-all duration-300"
                  onMouseEnter={() => setCursorType('learning')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <span className="text-yellow-400 text-2xl mr-3">📊</span>
                  <span className="font-bold">6 Elite Courses</span>
                </div>
                <div 
                  className="bg-gradient-to-r from-blue-400/20 to-cyan-500/20 backdrop-blur-lg px-8 py-4 rounded-2xl border border-blue-400/30 hover:scale-110 transition-all duration-300"
                  onMouseEnter={() => setCursorType('book')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <span className="text-blue-400 text-2xl mr-3">🎓</span>
                  <span className="font-bold">15,000+ Students</span>
                </div>
                <div 
                  className="bg-gradient-to-r from-pink-400/20 to-rose-500/20 backdrop-blur-lg px-8 py-4 rounded-2xl border border-pink-400/30 hover:scale-110 transition-all duration-300"
                  onMouseEnter={() => setCursorType('learning')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <span className="text-pink-400 text-2xl mr-3">⭐</span>
                  <span className="font-bold">4.9/5 Rating</span>
                </div>
                <div 
                  className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 backdrop-blur-lg px-8 py-4 rounded-2xl border border-green-400/30 hover:scale-110 transition-all duration-300"
                  onMouseEnter={() => setCursorType('book')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <span className="text-green-400 text-2xl mr-3">🏆</span>
                  <span className="font-bold">Industry Certified</span>
                </div>
              </div>
              
              <div className="hero-element flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="btn-primary rounded-2xl">
                  🚀 Start Your Journey
                </button>
                <button className="btn-secondary rounded-2xl">
                  📺 Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Course List */}
        <section className="py-32 bg-gradient-to-b from-slate-950 via-gray-900 to-black relative">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6 shimmer-text">
                Choose Your Learning Path
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Progressive curriculum designed to transform you from <span className="text-yellow-400 font-bold">novice</span> to <span className="text-pink-400 font-bold">professional trader</span>
              </p>
            </div>
            
            <div className="space-y-8">
              {courses.map((course, index) => (
                <div 
                  key={course.id}
                  className={`${index === 0 ? 'course-card-first' : 'course-card'} rounded-2xl p-8 md:p-10 group`}
                  onMouseEnter={() => setCursorType('learning')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    {/* Course Icon & Level */}
                    <div className="flex-shrink-0 text-center lg:text-left">
                      <div className={`w-20 h-20 bg-gradient-to-r ${course.color} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto lg:mx-0 shadow-lg`}>
                        {course.icon}
                      </div>
                      <span className={`inline-block px-4 py-2 rounded-xl text-sm font-semibold ${
                        course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                        course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        course.level === 'Advanced' ? 'bg-orange-100 text-orange-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {course.level}
                      </span>
                    </div>
                    
                    {/* Course Content */}
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                        <div className="lg:pr-8">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">{course.title}</h3>
                          <p className="text-lg text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                        </div>
                        <div className="text-center lg:text-right bg-white/5 p-5 rounded-xl border border-white/10">
                          <div className="flex items-center justify-center lg:justify-end space-x-2 mb-2">
                            <span className="text-3xl md:text-4xl font-bold text-white">${course.price}</span>
                            <span className="text-xl text-gray-300 line-through">${course.originalPrice}</span>
                          </div>
                          <div className="text-sm text-gray-300 font-medium">{course.duration} • Premium Course</div>
                          <div className="mt-1 text-xs text-green-400 font-semibold">Save ${course.originalPrice - course.price}!</div>
                        </div>
                      </div>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-base text-gray-300 bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200">
                            <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="btn-primary flex-1 sm:flex-none">
                          Enroll Now
                        </button>
                        <button className="btn-secondary flex-1 sm:flex-none">
                          Preview Course
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Featured Course */}
        <section className="py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="featured-course max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-2xl font-black text-lg mb-8 shadow-2xl">
                    <span className="text-2xl mr-3">🔥</span>
                    MOST POPULAR BUNDLE
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black mb-8 shimmer-text leading-tight">
                    Complete Elliott Wave Mastery Bundle
                  </h2>
                  <p className="text-2xl text-gray-200 mb-10 leading-relaxed">
                    Get all 6 courses plus <span className="text-yellow-400 font-bold">exclusive bonuses</span>, live trading sessions, and <span className="text-pink-400 font-bold">lifetime access</span> to our premium community.
                  </p>
                  
                  <div className="space-y-6 mb-12">
                    {[
                      { icon: '📚', text: 'All 6 premium courses (60+ hours)', color: 'text-blue-400' },
                      { icon: '📈', text: 'Weekly live trading sessions', color: 'text-green-400' },
                      { icon: '👥', text: 'Premium community access', color: 'text-purple-400' },
                      { icon: '🤖', text: 'Custom TradingView indicators', color: 'text-cyan-400' },
                      { icon: '💰', text: '30-day money-back guarantee', color: 'text-yellow-400' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center text-xl bg-white/10 backdrop-blur-lg p-4 rounded-2xl hover:scale-105 transition-all duration-300">
                        <span className="text-3xl mr-4">{item.icon}</span>
                        <span className={`font-medium ${item.color}`}>{item.text}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-10 bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-lg p-6 rounded-2xl">
                    <span className="text-6xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">$697</span>
                    <span className="text-3xl text-gray-400 line-through">$1,497</span>
                    <span className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-2xl text-xl font-bold shadow-lg animate-pulse">53% OFF</span>
                  </div>
                  
                  <button 
                    className="btn-primary rounded-2xl w-full lg:w-auto font-black text-2xl"
                    onMouseEnter={() => setCursorType('book')}
                    onMouseLeave={() => setCursorType('default')}
                  >
                    🚀 Start Learning Today
                  </button>
                </div>
                
                <div className="featured-video">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 text-center border border-white/20 shadow-2xl">
                    <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-3xl font-black mb-4 text-white">Course Preview</h3>
                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">Watch a sample lesson from our Elliott Wave Fundamentals course</p>
                    <button className="btn-primary rounded-2xl">
                      ▶ Play Preview (3:24)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-32 bg-gradient-to-br from-slate-950 via-gray-900 to-black text-white relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8 shimmer-text">
                What Our Students Say
              </h2>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Join <span className="text-yellow-400 font-bold">thousands of successful traders</span> who have transformed their trading with our Elliott Wave courses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="testimonial-card p-6 rounded-xl"
                  onMouseEnter={() => setCursorType('learning')}
                  onMouseLeave={() => setCursorType('default')}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mr-3 flex items-center justify-center text-lg font-semibold text-white">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 text-base leading-relaxed mb-4">
                    "{testimonial.content}"
                  </blockquote>
                   
                  <div className="text-sm text-gray-500 font-medium">
                    Course: {testimonial.course}
                  </div>
                </div>
               ))}
             </div>
             
             <div className="text-center mt-16">
               <button 
                 className="btn-primary rounded-2xl font-black text-2xl hover:scale-105 transition-all duration-300"
                 onMouseEnter={() => setCursorType('book')}
                 onMouseLeave={() => setCursorType('default')}
               >
                 🎯 Join Our Success Stories
               </button>
             </div>
           </div>
         </section>
         
         <Footer />
      </div>
    </>
  );
};

export default CoursePage;
