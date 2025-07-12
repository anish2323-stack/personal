import React from 'react';

const FloatingCubes = () => {
  const cubes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 50 + 20,
    left: Math.random() * 100,
    animationDelay: Math.random() * 20,
    animationDuration: Math.random() * 20 + 15,
    opacity: Math.random() * 0.4 + 0.1,
    rotationSpeed: Math.random() * 2 + 1,
  }));

  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.8 + 0.2,
    animationDelay: Math.random() * 8,
    animationDuration: Math.random() * 6 + 4,
  }));

  const geometricShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 15,
    left: Math.random() * 100,
    top: Math.random() * 100,
    opacity: Math.random() * 0.3 + 0.1,
    animationDelay: Math.random() * 12,
    animationDuration: Math.random() * 25 + 20,
    shape: Math.random() > 0.5 ? 'circle' : 'square',
    gradient: [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-emerald-500',
      'from-yellow-500 to-orange-500',
      'from-indigo-500 to-purple-500'
    ][Math.floor(Math.random() * 5)]
  }));

  const matrixRain = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    animationDelay: Math.random() * 5,
    animationDuration: Math.random() * 3 + 2,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Enhanced Floating Cubes */}
      {cubes.map((cube) => (
        <div
          key={cube.id}
          className="absolute bg-gradient-to-br from-emerald-500 via-cyan-500 to-blue-500 shadow-lg"
          style={{
            width: `${cube.size}px`,
            height: `${cube.size}px`,
            left: `${cube.left}%`,
            bottom: '-60px',
            animation: `float ${cube.animationDuration}s linear infinite`,
            animationDelay: `${cube.animationDelay}s`,
            transform: 'rotate(45deg)',
            opacity: cube.opacity,
            borderRadius: '8px',
            boxShadow: `0 0 ${cube.size/3}px rgba(16, 185, 129, 0.2)`,
          }}
        />
      ))}
      
      {/* Enhanced Particles */}
      {particles.map((particle) => (
        <div
          key={`particle-${particle.id}`}
          className="absolute rounded-full animate-twinkle"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `linear-gradient(45deg, #10b981, #06b6d4, #3b82f6, #8b5cf6)`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: particle.opacity,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
            boxShadow: `0 0 ${particle.size}px rgba(16, 185, 129, 0.3)`,
          }}
        />
      ))}
      
      {/* Geometric Shapes */}
      {geometricShapes.map((shape) => (
        <div
          key={`shape-${shape.id}`}
          className={`absolute bg-gradient-to-r ${shape.gradient} animate-rotate-3d`}
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${shape.left}%`,
            top: `${shape.top}%`,
            borderRadius: shape.shape === 'circle' ? '50%' : '20%',
            opacity: shape.opacity,
            animationDelay: `${shape.animationDelay}s`,
            animationDuration: `${shape.animationDuration}s`,
            boxShadow: `0 0 ${shape.size/2}px rgba(16, 185, 129, 0.1)`,
          }}
        />
      ))}

      {/* Matrix Rain Effect */}
      {matrixRain.map((rain) => (
        <div
          key={`matrix-${rain.id}`}
          className="absolute w-1 h-20 bg-gradient-to-b from-emerald-400 to-transparent animate-matrix-rain"
          style={{
            left: `${rain.left}%`,
            animationDelay: `${rain.animationDelay}s`,
            animationDuration: `${rain.animationDuration}s`,
            opacity: rain.opacity,
          }}
        />
      ))}

      {/* Ambient Light Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full opacity-3 blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full opacity-3 blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full opacity-3 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-transparent to-gray-900/50 pointer-events-none"></div>
      
      {/* Noise Texture */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
  );
};

export default FloatingCubes;