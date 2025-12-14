import "./index.css";
import Alumni from "./pages/Alumni/alumni";
import LandingPage from "./pages/LandingPage";
import Learner from "./pages/Learner/learner";
import LearnerSignup from "./pages/signup/LearnerSignup";
import type { LearnerSignupForm } from "./pages/signup/LearnerSignup";
// import LearnerPreferences from "./pages/signup/LearnerPreferences";
import { useState } from "react";

function App() {
  const [learnerData, setLearnerData] = useState<LearnerSignupForm | null>(
    null
  );
  const currentPath = window.location.pathname;

  // Check if current route is alumni page
  const isAlumniRoute = currentPath.startsWith("/alumni-");
  const isLandingPreview = currentPath === "/landing-page";
  const isSignupLearner = currentPath === "/signup/learner-signup";

  // Check if current route is learner page
  const isLearnerRoute = currentPath.startsWith("/learner-");

  // Extract username from alumni route
  const getAlumniUsername = (): string | undefined => {
    if (isAlumniRoute) {
      return currentPath.replace("/alumni-", "").replace(/-/g, " ");
    }
    return undefined;
  };

  // Extract username from learner route
  const getLearnerUsername = (): string | undefined => {
    if (isLearnerRoute) {
      return currentPath.replace("/learner-", "").replace(/-/g, " ");
    }
    return undefined;
  };

  const saveLearnerData = (data: LearnerSignupForm) => {
    setLearnerData(data);
    // optionally move to preferences
    console.log("Learner data saved:", data);
  };

  console.log("current path", currentPath);

  return (
    <div className="min-h-screen bg-gray-50">
      {isLandingPreview ? (
        <LandingPage />
      ) : isSignupLearner ? (
        <LearnerSignup onNext={(data) => saveLearnerData(data)} />
      ) : isAlumniRoute ? (
        <Alumni username={getAlumniUsername()} />
      ) : isLearnerRoute ? (
        <Learner username={getLearnerUsername()} />
      ) : (
        <LandingPage />
      )}
    </div>
  );
}

export default App;
