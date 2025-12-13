import "./index.css";
import Alumni from "./pages/Alumni/alumni";
import LandingPage from "./pages/LandingPage";

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

  console.log("current path", currentPath);
  return (
    <div className="min-h-screen bg-gray-50">
      {isLandingPreview ? (
        <LandingPage />
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
