import React, { useState } from "react";
import MentorHeader from "../../components/Mentor/MentorHeader";
import NavBar from "../../components/common/SideNav";
// import type { Tab } from "../../components/common/types";
import DashboardTab from "../../components/Mentor/tabs/DashboardTab";
import MentoringTab from "../../components/Mentor/tabs/MentoringTab";
import ScheduleTab from "../../components/Mentor/tabs/ScheduleTab";
import ResourcesTab from "../../components/Mentor/tabs/ResourcesTab";
import ProfileTab from "../../components/Mentor/tabs/ProfileTab";
import navigationConfig from "../../data/navigationConfig.json";
import { TutorProfile } from "../../components/Mentor/MentorDetails";

import { testTutor1 } from "../../components/types/user-types";

interface MentorProps {
  username?: string;
}

const Mentor: React.FC<MentorProps> = ({ username }) => {
  const [activeTab, setActiveTab] = useState(
    navigationConfig.mentor.defaultTab
  );
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  // const tabs: Tab[] = navigationConfig.mentor.tabs.map((t: any) => ({
  //   id: t.id ?? t.key, // convert key → id
  //   label: t.label,
  //   icon: t.icon,
  // }));

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardTab />;
      case "mentoring":
        return <MentoringTab />;
      case "schedule":
        return <ScheduleTab />;
      case "resources":
        return <ResourcesTab />;
      case "profile":
        return <ProfileTab />;
      case "details":
        return <TutorProfile tutor={testTutor1} />;
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">
              {navigationConfig.mentor.welcomeMessage.title}
            </h2>
            <p>{navigationConfig.mentor.welcomeMessage.description}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <MentorHeader username={username} />

      {/* Main Layout with NavBar */}
      <div className="flex w-full">
        {/* Collapsible NavBar Component */}
        <NavBar
          tabs={navigationConfig.mentor.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isCollapsed={isNavCollapsed}
          onToggleCollapse={() => setIsNavCollapsed(!isNavCollapsed)}
        />

        {/* Main Content Area */}
        <div className="flex-1 w-full">
          <div className="p-6 w-full">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
