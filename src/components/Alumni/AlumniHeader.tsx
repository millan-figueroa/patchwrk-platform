import React from 'react';

interface AlumniHeaderProps {
  username?: string;
  onNavigateHome?: () => void;
}

const AlumniHeader: React.FC<AlumniHeaderProps> = ({ username, onNavigateHome }) => {
  return (
    <div className="w-full bg-blue-600 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">Alumni Mentor Portal</h1>
            
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-blue-100">Welcome back, {username || 'Alumni'}</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-green-300">Available</span>
            </div>
            {onNavigateHome && (
              <button 
                onClick={onNavigateHome}
                className="bg-white/20 text-white px-4 py-2 rounded-md text-sm hover:bg-white/30 mr-2"
              >
                Home
              </button>
            )}
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniHeader;