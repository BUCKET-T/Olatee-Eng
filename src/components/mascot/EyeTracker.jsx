import React, { useEffect, useState, useRef } from 'react';

export default function EyeTracker() {
  const leftEyeRef = useRef(null);
  const rightEyeRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    // Listen to mouse movement globally
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate the pupil's offset based on mouse position
  const calculateTransform = (eyeRef) => {
    if (!eyeRef.current) return 'translate(0px, 0px)';
    
    const rect = eyeRef.current.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    // Find angle between eye center and mouse pointer
    const angle = Math.atan2(mousePos.y - eyeCenterY, mousePos.x - eyeCenterX);
    
    // Max distance the pupil can move from the center
    const distance = 12; 

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    return `translate(${x}px, ${y}px)`;
  };

  return (
    <div className="flex gap-8 justify-center mt-16 relative z-10">
      
      {/* Left Eye */}
      <div 
        ref={leftEyeRef}
        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner relative overflow-hidden"
      >
        <div 
          className="w-10 h-10 bg-slate-900 rounded-full transition-transform duration-75 ease-out relative"
          style={{ transform: calculateTransform(leftEyeRef) }}
        >
          {/* Pupil Glint (Light Reflection) */}
          <div className="w-3 h-3 bg-white rounded-full absolute top-1.5 left-1.5"></div>
        </div>
      </div>

      {/* Right Eye */}
      <div 
        ref={rightEyeRef}
        className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-inner relative overflow-hidden"
      >
        <div 
          className="w-10 h-10 bg-slate-900 rounded-full transition-transform duration-75 ease-out relative"
          style={{ transform: calculateTransform(rightEyeRef) }}
        >
          {/* Pupil Glint (Light Reflection) */}
          <div className="w-3 h-3 bg-white rounded-full absolute top-1.5 left-1.5"></div>
        </div>
      </div>
      
    </div>
  );
}