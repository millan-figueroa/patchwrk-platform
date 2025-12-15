import React from "react";

type TabLike = {
  id?: string;
  key?: string;
  label: string;
  icon: string;
};

interface NavBarProps {
  tabs: TabLike[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  tabs,
  activeTab,
  onTabChange,
  className = "",
  isCollapsed = false,
  onToggleCollapse,
}) => {
  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } bg-white shadow-lg border-r border-gray-200 min-h-screen transition-all duration-300 ${className}`}
    >
      {/* Collapse Toggle Button */}
      {onToggleCollapse && (
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            title={isCollapsed ? "Expand Navigation" : "Collapse Navigation"}
          >
            <span className="text-lg">{isCollapsed ? "☰" : "✕"}</span>
            {!isCollapsed && (
              <span className="ml-2 text-sm text-gray-600">Collapse</span>
            )}
          </button>
        </div>
      )}

      <nav className="mt-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => tab.key && onTabChange(tab.key)}
            className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
              activeTab === tab.key
                ? "bg-blue-50 border-r-4 border-blue-500 text-blue-700 font-medium"
                : "text-gray-600 hover:text-gray-900"
            }`}
            title={isCollapsed ? tab.label : undefined}
          >
            <span className="text-lg mr-3">{tab.icon}</span>
            {!isCollapsed && <span>{tab.label}</span>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
