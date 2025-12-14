import React from "react";
import type { LearnerSignupForm } from "./LearnerSignup";

interface Props {
  learnerData: LearnerSignupForm;
  onNext: (preferences: any) => void;
}

const LearnerPreferences: React.FC<Props> = ({ learnerData, onNext }) => {
  return (
    <div className="min-h-screen bg-linear-to-r from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Learner Preferences
        </h1>

        <p className="mb-4 text-gray-700">Account info so far:</p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto">
          {JSON.stringify(learnerData, null, 2)}
        </pre>

        <button
          onClick={() => onNext({ subjects: ["Placeholder"] })}
          className="group relative w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200"
        >
          <span>Continue to Dashboard</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-200"></div>
        </button>
      </div>
    </div>
  );
};

export default LearnerPreferences;
