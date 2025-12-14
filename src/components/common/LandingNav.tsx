import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function LandingNav() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-indigo-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* left: logo + nav links */}
        <div className="flex items-center gap-8">
          {/* logo placeholder */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 font-bold text-gray-900"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-600">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </button>

          {/* primary nav */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigate("/")}
              className="text-sm font-medium text-gray-700 hover:text-indigo-700 transition"
            >
              Home
            </button>

            <button
              onClick={() => navigate("/about")}
              className="text-sm font-medium text-gray-700 hover:text-indigo-700 transition"
            >
              About
            </button>

            <button
              onClick={() => navigate("/resources")}
              className="text-sm font-medium text-gray-700 hover:text-indigo-700 transition"
            >
              Resources
            </button>

            <span className="text-sm font-bold tracking-wide text-indigo-700">
              PROVEN PROGRESS
            </span>
          </nav>
        </div>

        {/* right: login dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen((o) => !o)}
            className="px-5 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition"
          >
            Login
          </button>

          {open && (
            <div className="absolute right-0 mt-3 w-44 rounded-xl bg-white shadow-lg border border-indigo-100 overflow-hidden">
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 transition"
              >
                Learner
              </button>

              <button
                onClick={() => navigate("/alumni/dashboard")}
                className="w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 transition"
              >
                Alumni
              </button>

              <button
                onClick={() => navigate("/admin")}
                className="w-full px-4 py-3 text-left text-sm hover:bg-indigo-50 transition"
              >
                Admin
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
