import React from 'react';
import MenteeCard from './MenteeCard';
import type { Mentee } from '../types';

const MentoringTab: React.FC = () => {
  const mentees: Mentee[] = [
    { id: 1, name: "Sarah Chen", program: "Full-Stack Web Dev", progress: 75, nextSession: "Dec 15, 2:00 PM", status: "Active" },
    { id: 2, name: "Marcus Johnson", program: "Data Analytics", progress: 60, nextSession: "Dec 16, 10:00 AM", status: "Active" },
    { id: 3, name: "Elena Rodriguez", program: "Cybersecurity", progress: 90, nextSession: "Dec 17, 3:00 PM", status: "Graduating" },
    { id: 4, name: "David Kim", program: "Software Engineering", progress: 45, nextSession: "Dec 18, 1:00 PM", status: "Active" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Mentees</h2>
        <div className="flex space-x-2">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Schedule Session
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700">
            Add Mentee
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentees.map((mentee) => (
          <MenteeCard key={mentee.id} mentee={mentee} />
        ))}
      </div>
    </div>
  );
};

export default MentoringTab;