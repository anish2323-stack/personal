import React from 'react';

const FloatingCubes = () => {
  const cubes = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 40 + 15,
    left: Math.random() * 100,
    animationDelay: Math.random() * 25,
    animationDuration: Math.random() * 25 + 20,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500"
          style={{
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            left: `${cube.left}%`,
            bottom: '-50px',
            animation: `float ${cube.animationDuration}s linear infinite`,
            animationDelay: `${cube.animationDelay}s`,
            transform: 'rotate(45deg)',
            opacity: cube.opacity,
          }}
        />
      ))}
      
      {/* Particles */}
      {Array.from({ length: 80 }, (_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            background: `linear-gradient(45deg, #10b981, #06b6d4, #3b82f6)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
            animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      
      {/* Additional geometric shapes */}
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute bg-gradient-to-r from-purple-500 to-pink-500 opacity-10"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            animation: `float ${Math.random() * 30 + 20}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCubes;