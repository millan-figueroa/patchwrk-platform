import "./index.css";
import Alumni from './pages/Alumni/alumni';

function App() {
  const currentPath = window.location.pathname;
  
  // Check if current route is alumni page
  const isAlumniRoute = currentPath.startsWith('/alumni-');
  
  // Extract username from alumni route
  const getAlumniUsername = (): string | undefined => {
    if (isAlumniRoute) {
      return currentPath.replace('/alumni-', '').replace(/-/g, ' ');
    }
    return undefined;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {isAlumniRoute ? (
        <Alumni username={getAlumniUsername()} />
      ) : (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">AI Learning Platform</h1>
            <p className="text-sm text-gray-500 mt-2">Try: /alumni-jeevi</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
