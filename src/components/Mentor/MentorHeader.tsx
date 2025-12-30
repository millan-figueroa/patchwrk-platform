import React from "react";

interface MentorHeaderProps {
  username?: string;
  onNavigateHome?: () => void;
}

const MentorHeader: React.FC<MentorHeaderProps> = ({
  username,
  onNavigateHome,
}) => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <header className="w-full bg-linear-to-r from-purple-600 to-indigo-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* left side */}
          <div className="flex items-center gap-3">
            {/* logo placeholder */}
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white font-bold">
              A
            </div>
            <h1 className="text-lg font-semibold text-white tracking-wide">
              Mentor Mentor Dashboard
            </h1>
          </div>

          {/* right side */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-indigo-100">
              Welcome,{" "}
              <span className="font-medium">{username || "Mentor"}</span>
            </span>

            <div className="flex items-center gap-2 text-sm text-green-200">
              <span className="h-2 w-2 rounded-full bg-green-400"></span>
              Available
            </div>

            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="rounded-lg bg-white/15 px-4 py-2 text-sm font-medium text-white hover:bg-white/25 transition"
              >
                Home
              </button>
            )}

            <button
              onClick={handleLogout}
              className="rounded-lg bg-white text-indigo-700 px-4 py-2 text-sm font-semibold hover:bg-indigo-50 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MentorHeader;
