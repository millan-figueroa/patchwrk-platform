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

const SideNav: React.FC<NavBarProps> = ({
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
        <div className="p-4 border-b border-indigo-200/60">
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center p-2 rounded-lg bg-white/70 hover:bg-white transition"
            title={isCollapsed ? "Expand Navigation" : "Collapse Navigation"}
          >
            <span className="text-lg text-slate-700">
              {isCollapsed ? "☰" : "✕"}
            </span>
            {!isCollapsed && (
              <span className="ml-2 text-sm text-slate-600">Collapse</span>
            )}
          </button>
        </div>
      )}

      <nav className="mt-4 space-y-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;

          return (
            <button
              key={tab.id}
              onClick={() => tab.key && onTabChange(tab.key)}
              className={`w-full flex items-center px-6 py-3 text-left rounded-r-xl transition ${
                isActive
                  ? "bg-purple-200/70 text-purple-900 font-semibold"
                  : "text-slate-700 hover:bg-purple-100/60 hover:text-purple-900"
              }`}
              title={isCollapsed ? tab.label : undefined}
            >
              <span className="text-lg mr-3">{tab.icon}</span>
              {!isCollapsed && <span>{tab.label}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SideNav;
