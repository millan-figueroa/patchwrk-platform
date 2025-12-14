import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  // this hook lets us move to a different page without reloading the browser
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI Learning Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with mentors, accelerate your learning journey, and unlock
            your potential with AI-powered education.
          </p>
        </div>

        {/* Registration Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          <button
            // this sends the user to the learner signup page
            onClick={() => navigate("/signup/account")}
            className="group relative bg-linear-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center space-x-2">
              <span>📚</span>
              <span>Register as a Learner</span>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-200"></div>
          </button>

          <button
            // this sends the user to the alumni signup page
            onClick={() => navigate("/alumni/account")}
            className="group relative bg-linear-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <div className="flex items-center space-x-2">
              <span>🎓</span>
              <span>Register as a Alumni</span>
            </div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-200"></div>
          </button>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <span
              // this would go to a login page if you add that route later
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:text-blue-800 font-semibold cursor-pointer hover:underline transition-colors duration-200"
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
