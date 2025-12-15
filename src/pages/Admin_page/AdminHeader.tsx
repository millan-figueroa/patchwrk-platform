import React from "react";

interface AdminHeaderProps {
  username?: string;
  onNavigateHome?: () => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  username,
  onNavigateHome,
}) => {
  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <header className="w-full bg-white/90 backdrop-blur border-b border-indigo-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* left side */}
          <div className="flex items-center gap-3">
            {/* logo placeholder */}
            <div className="h-8 w-8 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <h1 className="text-lg font-semibold text-slate-800 tracking-wide">
              Admin Dashboard
            </h1>
          </div>

          {/* right side */}
          <div className="flex items-center gap-6">
            <span className="text-sm text-slate-600">
              Welcome,{" "}
              <span className="font-medium">{username || "Admin"}</span>
            </span>

            <div className="flex items-center gap-2 text-sm text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Online
            </div>

            {onNavigateHome && (
              <button
                onClick={onNavigateHome}
                className="rounded-xl bg-white border border-indigo-200 px-4 py-2 text-sm font-semibold text-indigo-700 hover:bg-indigo-50 transition"
              >
                Home
              </button>
            )}

            <button
              onClick={handleLogout}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
