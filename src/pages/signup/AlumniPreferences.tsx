import React, { useMemo, useState } from "react";
import type { AlumniSignupForm } from "./AlumniSignup";

type Preferences = {
  subject: string;
  experience: string;
  timeFrame: string;
  schedule: string;
};

interface Props {
  alumniData: AlumniSignupForm;
  onNext: (preferences: any) => void; // keeping your existing signature for speed/demo
}

const AlumniPreferences: React.FC<Props> = ({ alumniData, onNext }) => {
  const [prefs, setPrefs] = useState<Preferences>({
    subject: "",
    experience: "",
    timeFrame: "",
    schedule: "",
  });

  const canContinue = useMemo(() => {
    return (
      prefs.subject && prefs.experience && prefs.timeFrame && prefs.schedule
    );
  }, [prefs]);

  const onChange =
    (key: keyof Preferences) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      setPrefs((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const handleContinue = () => {
    // save answers in the same object (account + preferences)
    onNext({
      ...alumniData,
      preferences: prefs,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-r from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Alumni Preferences
        </h1>

        <p className="mb-4 text-gray-600 text-center">
          Tell us about yourself so we can match you with potential students.
        </p>

        <div className="space-y-4">
          {/* Expertise */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">
              Subject of Expertise
            </label>
            <select
              value={prefs.subject}
              onChange={onChange("subject")}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="" disabled>
                Select a subject…
              </option>
              <option value="software engineering">Software Engineering</option>
              <option value="data analytics">Data Analytics</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="ui/ux design">UI/UX Design</option>
              <option value="career readiness">Career Readiness</option>
            </select>
          </div>

          {/* experience level */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">Experience</label>
            <select
              value={prefs.experience}
              onChange={onChange("experience")}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="" disabled>
                Where are you in your career?
              </option>
              <option value="beginner">Early Career (1-3 years)</option>
              <option value="intermediate">Mid-Level (3–7 years)</option>
              <option value="advanced">Senior (7+ years)</option>
            </select>
          </div>

          {/* Time frame */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">Time Frame</label>
            <select
              value={prefs.timeFrame}
              onChange={onChange("timeFrame")}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="" disabled>
                What length of time can you commit to a student?
              </option>
              <option value="2 weeks">2 weeks</option>
              <option value="1 month">1 month</option>
              <option value="3 months">3 months</option>
              <option value="6 months">6 months</option>
            </select>
          </div>

          {/* Schedule */}
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700 font-medium">Schedule</label>
            <select
              value={prefs.schedule}
              onChange={onChange("schedule")}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
            >
              <option value="" disabled>
                Select your availability...
              </option>
              <option value="1-2 hrs/week">1–2 hrs/week</option>
              <option value="3-5 hrs/week">3–5 hrs/week</option>
              <option value="6-10 hrs/week">6–10 hrs/week</option>
              <option value="10+ hrs/week">10+ hrs/week</option>
            </select>
          </div>

          {/* Debug / Demo: show combined object */}
          <details className="mt-2">
            <summary className="cursor-pointer text-sm text-gray-600">
              Preview saved object (demo)
            </summary>
            <pre className="bg-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-xs">
              {JSON.stringify({ ...alumniData, preferences: prefs }, null, 2)}
            </pre>
          </details>

          <button
            onClick={handleContinue}
            disabled={!canContinue}
            className="group relative w-full bg-linear-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-md hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <span>Continue to Dashboard</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-200"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumniPreferences;
