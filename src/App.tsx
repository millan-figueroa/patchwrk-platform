import "./index.css";
import { useEffect, useMemo, useState } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Learner from "./pages/Learner/learner";
import LearnerSignup, {
  type LearnerSignupForm,
} from "./pages/signup/LearnerSignup";
import LearnerPreferences from "./pages/signup/LearnerPreferences";
import Mentor from "./features/mentor/pages";
import MentorSignup, {
  type MentorSignupForm,
} from "./pages/signup/MentorSignup";
import MentorPreferences from "./pages/signup/MentorPreferences";

import AdminDashboard from "./pages/Admin_page/admin";
import type { MentorRegistration } from "./shared/types/registration";

const STORAGE_KEY = "learner-registration";

type Registration = {
  account?: LearnerSignupForm;
  // not saving preferences for demo, but we can still store them
  preferences?: any;
};

// this is separate storage for alumni signup flow
const MENTOR_STORAGE_KEY = "alumni-registration";

const loadRegistration = (): Registration => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Registration) : {};
  } catch {
    return {};
  }
};

const persistRegistration = (data: Registration) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// this loads saved mentor signup data (optional, for demo consistency)
const loadMentorRegistration = (): MentorRegistration => {
  try {
    const stored = localStorage.getItem(MENTOR_STORAGE_KEY);
    return stored ? (JSON.parse(stored) as MentorRegistration) : {};
  } catch {
    return {};
  }
};

// this saves mentor signup data (optional, for demo consistency)
const persistMentorRegistration = (data: MentorRegistration) => {
  localStorage.setItem(MENTOR_STORAGE_KEY, JSON.stringify(data));
};

export default function App() {
  const navigate = useNavigate();

  // this state stores learner signup progress
  const [registration, setRegistration] = useState<Registration>(() =>
    loadRegistration()
  );

  // this state stores mentor signup progress
  const [mentorRegistration, setMentorRegistration] =
    useState<MentorRegistration>(() => loadMentorRegistration());

  // this keeps learner data in localstorage so refresh does not wipe it
  useEffect(() => {
    persistRegistration(registration);
  }, [registration]);

  // this keeps mentor data in localstorage so refresh does not wipe it
  useEffect(() => {
    persistMentorRegistration(mentorRegistration);
  }, [mentorRegistration]);

  // this is used to show a name on the dashboard (optional)
  const displayName = useMemo(() => {
    const name = registration.account?.fullName?.trim();
    return name ? name : undefined;
  }, [registration.account?.fullName]);

  // this runs after learner signup step 1 and routes to learner preferences
  const handleAccountSubmit = (data: LearnerSignupForm) => {
    setRegistration((prev) => ({ ...prev, account: data }));
    navigate("/signup/preferences");
  };

  // this runs after mentor signup step 1 and routes to mentor preferences
  const handleMentorAccountSubmit = (data: MentorSignupForm) => {
    setMentorRegistration((prev) => ({ ...prev, account: data }));
    navigate("/mentor/preferences");
  };

  // matches LearnerPreferences: onNext(preferences: any)
  // this runs after learner preferences and routes to dashboard
  const handlePreferencesSubmit = (preferences: any) => {
    // keep for demo debug
    setRegistration((prev) => ({ ...prev, preferences }));
    navigate("/learner/dashboard");
  };

  // this runs after mentor preferences and routes to dashboard
  // for demo, we store preferences but you can remove it later
  const handleMentorPreferencesSubmit = (preferences: any) => {
    setMentorRegistration((prev) => ({ ...prev, preferences }));
    navigate("/mentor/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* optional shortcut */}
        <Route
          path="/signup"
          element={<Navigate to="/signup/account" replace />}
        />
        {/* links to learner signup page */}
        <Route
          path="/signup/account"
          element={<LearnerSignup onNext={handleAccountSubmit} />}
        />
        {/* links to learner preferences page */}
        <Route
          path="/signup/preferences"
          element={
            registration.account ? (
              <LearnerPreferences
                learnerData={registration.account}
                onNext={handlePreferencesSubmit}
              />
            ) : (
              <Navigate to="/signup/account" replace />
            )
          }
        />

        {/* mentor signup step 1 */}
        <Route
          path="/mentor/account"
          element={<MentorSignup onNext={handleMentorAccountSubmit} />}
        />

        {/* mentor preferences step (guarded so users cannot skip step 1) */}
        <Route
          path="/mentor/preferences"
          element={
            mentorRegistration.account ? (
              // reusing the learner preferences page for demo
              // it collects dropdowns and returns a preferences object on next
              <MentorPreferences
                mentorData={mentorRegistration.account}
                onNext={handleMentorPreferencesSubmit}
              />
            ) : (
              <Navigate to="/mentor/account" replace />
            )
          }
        />

        {/* learner dashboard */}
        <Route
          path="/learner/dashboard"
          element={<Learner username={displayName} />}
        />

        {/* mentor dashboard */}
        <Route path="/mentor/dashboard" element={<Mentor />} />

        {/* admin dashboard */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
