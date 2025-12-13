import "./index.css";
import Alumni from './pages/Alumni/alumni';
import Learner from './pages/Learner/learner';

function App() {
  const currentPath = window.location.pathname;
  
  // Check if current route is alumni page
  const isAlumniRoute = currentPath.startsWith('/alumni-');
  
  // Check if current route is learner page
  const isLearnerRoute = currentPath.startsWith('/learner-');
  
  // Extract username from alumni route
  const getAlumniUsername = (): string | undefined => {
    if (isAlumniRoute) {
      return currentPath.replace('/alumni-', '').replace(/-/g, ' ');
    }
    return undefined;
  };

  // Extract username from learner route
  const getLearnerUsername = (): string | undefined => {
    if (isLearnerRoute) {
      return currentPath.replace('/learner-', '').replace(/-/g, ' ');
    }
    return undefined;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isAlumniRoute ? (
        <Alumni username={getAlumniUsername()} />
      ) : isLearnerRoute ? (
        <Learner username={getLearnerUsername()} />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">AI Learning Platform</h1>
            <p className="text-sm text-gray-500 mt-2">Try: /alumni-jeevi or /learner-sarah</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
