import React, { useState } from "react";
import SideNav from "../../../shared/components/SideNav";
import navigationConfig from "../../../data/navigationConfig.json";
import LearnerHome from "../components/tabs/LearnerHomeTab";
import Help from "../components/tabs/HelpTab";
import LearnerSchedule from "../components/tabs/ScheduleTab";
import LearnerProfile from "../components/tabs/ProfileTab";
import Resources from "../components/tabs/ResourcesTab";
import LearnerHeader from "../components/LearnerHeader";
import AIChatAssistant from "../components/AIChatAssistant";
import { LearnerDetails } from "../components/tabs/DetailsTab";

import { testStudent1 } from "../../../shared/types/user-types";

interface LearnerProps {
  username?: string;
}

const LearnerDashboard: React.FC<LearnerProps> = ({ username }) => {
  const [activeTab, setActiveTab] = useState(
    navigationConfig.learner.defaultTab
  );
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <LearnerHome />;
      case "help":
        return <Help />;
      case "schedule":
        return <LearnerSchedule />;
      case "resources":
        return <Resources />;
      case "profile":
        return <LearnerProfile />;
      case "details":
        return <LearnerDetails student={testStudent1} />;
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
              {navigationConfig.learner.welcomeMessage.title}
            </h2>
            <p>{navigationConfig.learner.welcomeMessage.description}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <LearnerHeader username={username} />

      {/* Layout */}
      <div className="flex w-full">
        <SideNav
          tabs={navigationConfig.learner.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isCollapsed={isNavCollapsed}
          onToggleCollapse={() => setIsNavCollapsed(!isNavCollapsed)}
        />

        {/* Main Content */}
        <div className="flex flex-row">
          <div className="flex-1 w-full p-6">{renderContent()}</div>

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <AIChatAssistant />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnerDashboard;
