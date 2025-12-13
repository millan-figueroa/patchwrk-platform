import React from "react";

interface LearnerHeaderProps {
  username?: string;
  onNavigateHome?: () => void;
}

const LearnerHeader: React.FC<LearnerHeaderProps> = ({
  username,
  onNavigateHome,
}) => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full bg-blue-600 shadow-md">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Left side */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-white">
              Learner Portal
            </h1>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <span className="text-sm text-blue-100">
              Welcome back, {username || "Learner"}
            </span>

            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm text-green-300">
                Active
              </span>
            </div>

            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="bg-white/20 text-white px-4 py-2 rounded-md text-sm hover:bg-white/30 mr-2"
              >
                Home
              </button>
            )}

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerHeader;
