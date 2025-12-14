import React, { useState } from 'react';
import AlumniHeader from '../../components/Alumni/AlumniHeader';
import NavBar from '../../components/common/NavBar';
import type { Tab } from '../../components/common/types';
import DashboardTab from '../../components/Alumni/tabs/DashboardTab';
import MentoringTab from '../../components/Alumni/tabs/MentoringTab';
import ScheduleTab from '../../components/Alumni/tabs/ScheduleTab';
import ResourcesTab from '../../components/Alumni/tabs/ResourcesTab';
import ProfileTab from '../../components/Alumni/tabs/ProfileTab';
import navigationConfig from '../../data/navigationConfig.json';
import { TutorProfile } from '../../components/Alumni/TutorDetails';

import { testTutor1 } from '../../components/types/user-types';

interface AlumniProps {
  username?: string;
}

const Alumni: React.FC<AlumniProps> = ({ username }) => {
  const [activeTab, setActiveTab] = useState(navigationConfig.alumni.defaultTab);
  const [isNavCollapsed, setIsNavCollapsed] = useState(false);

  const tabs: Tab[] = navigationConfig.alumni.tabs.map((t: any) => ({
    id: t.id ?? t.key,   // convert key → id
    label: t.label,
    icon: t.icon,
  }));


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
      case "details":
        return <TutorProfile tutor={testTutor1}/>;
      default:
        return (
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">{navigationConfig.alumni.welcomeMessage.title}</h2>
            <p>{navigationConfig.alumni.welcomeMessage.description}</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Header */}
      <AlumniHeader username={username} />

      {/* Main Layout with NavBar */}
      <div className="flex w-full">
        {/* Collapsible NavBar Component */}
        <NavBar 
          tabs={navigationConfig.alumni.tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isCollapsed={isNavCollapsed}
          onToggleCollapse={() => setIsNavCollapsed(!isNavCollapsed)}
        />

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