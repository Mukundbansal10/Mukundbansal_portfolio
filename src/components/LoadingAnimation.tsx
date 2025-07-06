
import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-blue-500/30 rounded-full animate-spin border-t-blue-500 mb-8"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-purple-500/30 rounded-full animate-spin border-r-purple-500 animation-delay-75"></div>
        </div>
        <div className="text-2xl font-bold text-white mb-4 animate-pulse">
          Mukund Bansal
        </div>
        <div className="text-sm text-gray-400 animate-fade-in">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
