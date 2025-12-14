
import React, { useState } from "react";
import NavBar from "../../components/common/NavBar";
import navigationConfig from "../../data/navigationConfig.json";

import StudentDash from "../../pages/Learner/LearnersTab/StudentDash";
import Help from "../../pages/Learner/LearnersTab/Help";
import StudentSchedule from "./LearnersTab/StudentSchedule";
import StudentProfile from "./LearnersTab/StudentProfile";
import Resources from "./LearnersTab/Resources";
import LearnerHeader from "./LearnerHeader";
import AIChatAssistant from "../../components/common/AIChatAssistant";
import { LearnerDetails } from "./LearnersTab/LearnerDetails";

import { testStudent1 } from "../../components/types/user-types";


interface LearnerProps {
  username?: string;
}

const Learner: React.FC<LearnerProps> = ({ username }) => {
  const [activeTab, setActiveTab] = useState(
    navigationConfig.learner.defaultTab
  );
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);  

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <StudentDash />;
      case "help":
        return <Help />;
      case "schedule":
        return <StudentSchedule />;
      case "resources":
        return <Resources />;
      case "profile":
        return <StudentProfile />;
      case "details":
        return <LearnerDetails student={testStudent1}/>;
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
       <NavBar
          tabs={navigationConfig.learner.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isCollapsed={isNavCollapsed}
          onToggleCollapse={() => setIsNavCollapsed(!isNavCollapsed)}
      />

        {/* Main Content */}
        <div className="flex-1 w-full p-6">{renderContent()}</div>
        

          <div className="lg:col-span-1">
            <div className="sticky top-6">
              <AIChatAssistant />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Learner;
