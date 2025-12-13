import "./index.css";
import Alumni from "./pages/Alumni/alumni";
import LandingPage from "./pages/LandingPage";
import Learner from "./pages/Learner/learner";
import StudentSignup from "./pages/signup/StudentSignup";
import StudentPreferences from "./pages/signup/StudentPreferences";
import { useState } from "react";

function App() {
  const currentPath = window.location.pathname;

  // Check if current route is alumni page
  const isAlumniRoute = currentPath.startsWith("/alumni-");
  const isLandingPreview = currentPath === "/landing-preview";

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

  console.log("current path", currentPath);

  return (
    <div className="min-h-screen bg-gray-50">
      {isLandingPreview ? (
        <LandingPage />
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
