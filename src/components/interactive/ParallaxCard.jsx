import React, { useState, useRef } from 'react';

export default function ParallaxCard({
  children,
  className = '',
  maxTilt = 10, // Maximum rotation angle in degrees
  scale = 1.03, // Hover scaling factor
  glare = true,
}) {
  const cardRef = useRef(null);
  const [cardState, setCardState] = useState({
    rotateX: 0,
    rotateY: 0,
    currentScale: 1,
    glarePos: { x: 50, y: 50, opacity: 0 },
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    // Calculate mouse position relative to card center (-1 to +1)
    const relativeX = (e.clientX - rect.left) / rect.width;
    const relativeY = (e.clientY - rect.top) / rect.height;

    const rotateY = (relativeX - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - relativeY) * (maxTilt * 2);

    setCardState({
      rotateX,
      rotateY,
      currentScale: scale,
      glarePos: {
        x: relativeX * 100,
        y: relativeY * 100,
        opacity: 0.25,
      },
    });
  };

  const handleMouseLeave = () => {
    setCardState({
      rotateX: 0,
      rotateY: 0,
      currentScale: 1,
      glarePos: { x: 50, y: 50, opacity: 0 },
    });
  };

  return (
    <div className="[perspective:1000px] w-full">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative transition-transform duration-200 ease-out will-change-transform ${className}`}
        style={{
          transform: `perspective(1000px) rotateX(${cardState.rotateX}deg) rotateY(${cardState.rotateY}deg) scale3d(${cardState.currentScale}, ${cardState.currentScale}, ${cardState.currentScale})`,
          transformStyle: 'preserve-3d',
        }}
      >
        {children}

        {/* Dynamic Glare Effect Overlay */}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
            style={{
              opacity: cardState.glarePos.opacity,
              background: `radial-gradient(circle at ${cardState.glarePos.x}% ${cardState.glarePos.y}%, rgba(255, 255, 255, 0.35) 0%, transparent 65%)`,
            }}
          />
        )}
      </div>
    </div>
  );
}