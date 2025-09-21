'use client';
import React, { useEffect, useRef, useState } from 'react';

const CrystalBubbleBackground = () => {
  const containerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubbles = () => {
      const bubbleArray = [];
      const bubbleCount = 25;

      for (let i = 0; i < bubbleCount; i++) {
        const bubble = {
          id: i,
          size: Math.random() * 50 + 15, // 15-65px (was 20-100px)
          left: Math.random() * 100,
          animationDuration: Math.random() * 20 + 15, // 15-35s
          animationDelay: Math.random() * 10,
          opacity: Math.random() * 0.6 + 0.2, // 0.2-0.8
          blur: Math.random() * 2 + 0.5, // 0.5-2.5px
          rotationSpeed: Math.random() * 30 + 10, // 10-40s
          horizontalDrift: Math.random() * 60 - 30, // -30 to 30
          glowIntensity: Math.random() * 0.3 + 0.1, // 0.1-0.4
        };
        bubbleArray.push(bubble);
      }

      setBubbles(bubbleArray);
    };

    createBubbles();

    // Regenerate some bubbles periodically for variety
    const interval = setInterval(() => {
      setBubbles(prev => 
        prev.map(bubble => 
          Math.random() < 0.1 ? {
            ...bubble,
            left: Math.random() * 100,
            animationDuration: Math.random() * 20 + 15,
            size: Math.random() * 80 + 20,
          } : bubble
        )
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div 
        ref={containerRef}
        className="fixed inset-0 w-full h-full pointer-events-none overflow-hidden"
        style={{ 
          background: 'transparent',
          zIndex: 1
        }}
      >
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full bubble-float"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: '-100px',
              background: `
                radial-gradient(circle at 30% 30%, 
                  rgba(255, 255, 255, ${bubble.opacity * 0.9}) 0%,
                  rgba(255, 255, 255, ${bubble.opacity * 0.5}) 20%,
                  rgba(22, 30, 44, ${bubble.opacity * 0.4}) 50%,
                  rgba(22, 30, 44, ${bubble.opacity * 0.2}) 80%,
                  rgba(22, 30, 44, ${bubble.opacity * 0.08}) 100%
                )
              `,
              backdropFilter: `blur(${bubble.blur}px)`,
              border: `1px solid rgba(255, 255, 255, ${bubble.opacity * 0.4})`,
              boxShadow: `
                inset 0 0 20px rgba(255, 255, 255, ${bubble.glowIntensity * 0.8}),
                inset 0 0 40px rgba(22, 30, 44, ${bubble.glowIntensity * 0.3}),
                0 0 25px rgba(22, 30, 44, ${bubble.glowIntensity * 0.4}),
                0 8px 32px rgba(22, 30, 44, ${bubble.glowIntensity * 0.2}),
                0 4px 20px rgba(0, 0, 0, 0.1)
              `,
              animation: `
                floatUp ${bubble.animationDuration}s linear infinite ${bubble.animationDelay}s,
                drift ${bubble.animationDuration * 0.8}s ease-in-out infinite ${bubble.animationDelay}s,
                rotate ${bubble.rotationSpeed}s linear infinite,
                shimmer ${bubble.animationDuration * 0.3}s ease-in-out infinite ${bubble.animationDelay}s
              `,
              transform: `translateX(${bubble.horizontalDrift}px)`,
            }}
          >
            {/* Inner highlight for glass effect */}
            <div
              className="absolute rounded-full"
              style={{
                width: '60%',
                height: '60%',
                top: '15%',
                left: '20%',
                background: `radial-gradient(circle at 40% 40%, 
                  rgba(255, 255, 255, ${bubble.opacity * 0.8}) 0%,
                  rgba(22, 30, 44, ${bubble.opacity * 0.2}) 40%,
                  transparent 80%
                )`,
              }}
            />
            
            {/* Main reflection highlight */}
            <div
              className="absolute rounded-full"
              style={{
                width: '25%',
                height: '25%',
                top: '20%',
                left: '25%',
                background: `radial-gradient(circle, 
                  rgba(255, 255, 255, ${bubble.opacity * 0.95}) 0%,
                  rgba(22, 30, 44, ${bubble.opacity * 0.3}) 30%,
                  transparent 70%
                )`,
                filter: 'blur(0.8px)',
              }}
            />

            {/* Secondary smaller reflection */}
            <div
              className="absolute rounded-full"
              style={{
                width: '15%',
                height: '15%',
                bottom: '25%',
                right: '30%',
                background: `radial-gradient(circle, 
                  rgba(255, 255, 255, ${bubble.opacity * 0.7}) 0%,
                  rgba(22, 30, 44, ${bubble.opacity * 0.4}) 20%,
                  transparent 60%
                )`,
                filter: 'blur(0.3px)',
              }}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes floatUp {
          0% {
            bottom: -100px;
            opacity: 0;
            transform: scale(0.8) translateX(0);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            bottom: calc(100vh + 100px);
            opacity: 0;
            transform: scale(1.2) translateX(0);
          }
        }

        @keyframes drift {
          0%, 100% {
            transform: translateX(0px) translateY(0px);
          }
          25% {
            transform: translateX(20px) translateY(-10px);
          }
          50% {
            transform: translateX(-15px) translateY(5px);
          }
          75% {
            transform: translateX(10px) translateY(-5px);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            filter: brightness(1) saturate(1);
          }
          50% {
            filter: brightness(1.3) saturate(1.4);
          }
        }

        .bubble-float {
          will-change: transform, opacity;
          transform-style: preserve-3d;
        }

        /* Enhanced glass effect with better browser support */
        @supports (backdrop-filter: blur(1px)) {
          .bubble-float {
            backdrop-filter: blur(var(--blur, 1px));
          }
        }

        /* Fallback for browsers without backdrop-filter */
        @supports not (backdrop-filter: blur(1px)) {
          .bubble-float {
            background: rgba(22, 30, 44, 0.1) !important;
          }
        }
      `}</style>
    </>
  );
};

export default CrystalBubbleBackground;