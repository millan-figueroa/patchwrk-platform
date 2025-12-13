import "./index.css";
import Alumni from "./pages/Alumni/alumni";
import LandingPage from "./pages/LandingPage";
import StudentSignup from "./pages/signup/StudentSignup";
import StudentPreferences from "./pages/signup/StudentPreferences";
import { useState } from "react";

function App() {
  const currentPath = window.location.pathname;

  // Check if current route is alumni page
  const isAlumniRoute = currentPath.startsWith("/alumni-");
  const isLandingPreview = currentPath === "/landing-preview";

  // Extract username from alumni route
  const getAlumniUsername = (): string | undefined => {
    if (isAlumniRoute) {
      return currentPath.replace("/alumni-", "").replace(/-/g, " ");
    }
    return undefined;
  };

  // mult-step signup state
  // signup form collects account info - app moves to preferences step
  const [step, setStep] = useState<
    "landing" | "signup" | "preferences" | "dashboard"
  >(isLandingPreview ? "landing" : isAlumniRoute ? "dashboard" : "landing");
  const [studentData, setStudentData] = useState<any>(null);

  const goToPreferences = (accountInfo: any) => {
    setStudentData(accountInfo);
    setStep("preferences");
  };

  const goToDashboard = (preferences: any) => {
    setStudentData({ ...studentData, ...preferences });
    setStep("dashboard");
  };

  console.log("current path", currentPath);
  return (
    <div className="min-h-screen bg-gray-50">
      {step === "landing" ? (
        <LandingPage />
      ) : step === "signup" ? (
        <StudentSignup onNext={goToPreferences} />
      ) : step === "preferences" ? (
        <StudentPreferences initialData={studentData} onNext={goToDashboard} />
      ) : step === "dashboard" ? (
        <div>
          <h1>Student Dashboard (Demo)</h1>
          <pre>{JSON.stringify(studentData, null, 2)}</pre>
        </div>
      ) : isAlumniRoute ? (
        <Alumni username={getAlumniUsername()} />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1>AI Learning Platform</h1>
            <p>Try: /alumni-jeevi</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
