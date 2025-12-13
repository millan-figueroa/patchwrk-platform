import React from 'react';
import StatsGrid from './StatsGrid';
import PendingRequests from './PendingRequests';
import TodaySessions from './TodaySessions';

const DashboardTab: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">Welcome to Your Alumni Portal</h2>
      <StatsGrid />
      <PendingRequests />
      <TodaySessions />
    </div>
  );
};

export default DashboardTab;