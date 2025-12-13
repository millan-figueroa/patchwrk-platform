import React, { useState } from 'react';
import AlumniHeader from '../../components/Alumni/AlumniHeader';
import TabNavigation from '../../components/Alumni/TabNavigation';
import DashboardTab from '../../components/Alumni/tabs/DashboardTab';
import MentoringTab from '../../components/Alumni/tabs/MentoringTab';
import ScheduleTab from '../../components/Alumni/tabs/ScheduleTab';
import ResourcesTab from '../../components/Alumni/tabs/ResourcesTab';
import ProfileTab from '../../components/Alumni/tabs/ProfileTab';

interface AlumniProps {
  username?: string;
}

const Alumni: React.FC<AlumniProps> = ({ username }) => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const tabs = [
    { key: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { key: 'mentoring', label: 'My Mentees', icon: '👥' },
    { key: 'schedule', label: 'Schedule', icon: '📅' },
    { key: 'resources', label: 'Resources', icon: '📚' },
    { key: 'profile', label: 'Profile', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'mentoring':
        return <MentoringTab />;
      case 'schedule':
        return <ScheduleTab />;
      case 'resources':
        return <ResourcesTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">Welcome</h2>
            <p>Select a tab to get started.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <AlumniHeader username={username} />

      {/* Main Layout with Sidebar */}
      <div className="flex w-full">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg border-r border-gray-200 min-h-screen">
          <nav className="mt-4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                  activeTab === tab.key
                    ? 'bg-blue-50 border-r-4 border-blue-500 text-blue-700 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="text-lg mr-3">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 w-full">
          <div className="p-6 w-full">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alumni;