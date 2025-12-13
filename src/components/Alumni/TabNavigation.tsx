import React from 'react';

interface Tab {
  key: string;
  label: string;
  icon: string;
}

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabKey: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs: Tab[] = [
    { key: 'dashboard', label: 'Dashboard', icon: '🏠' },
    { key: 'mentoring', label: 'My Mentees', icon: '👥' },
    { key: 'schedule', label: 'Schedule', icon: '📅' },
    { key: 'resources', label: 'Resources', icon: '📚' },
    { key: 'profile', label: 'Profile', icon: '⚙️' }
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.key
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;