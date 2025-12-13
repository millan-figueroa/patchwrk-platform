import React from 'react';
import type { Mentee } from '../types';

interface MenteeCardProps {
  mentee: Mentee;
  onMessage?: (mentee: Mentee) => void;
}

const MenteeCard: React.FC<MenteeCardProps> = ({ mentee, onMessage }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Graduating': return 'bg-purple-100 text-purple-800';
      case 'Inactive': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    return 'bg-yellow-500';
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  };

  const handleViewProfile = () => {
    console.log(`Viewing profile for ${mentee.name}`);
  };

  const handleMessage = () => {
    if (onMessage) {
      onMessage(mentee);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
          <span className="text-gray-600 font-medium">{getInitials(mentee.name)}</span>
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{mentee.name}</h3>
          <p className="text-sm text-gray-500">{mentee.program}</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium">{mentee.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full ${getProgressColor(mentee.progress)}`} 
              style={{width: `${mentee.progress}%`}}
            ></div>
          </div>
        </div>
        
        <div className="text-sm">
          <p className="text-gray-600">Next Session:</p>
          <p className="font-medium">{mentee.nextSession}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(mentee.status)}`}>
            {mentee.status}
          </span>
          <div className="flex space-x-2">
            <button 
              onClick={handleMessage}
              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm font-medium"
            >
              💬 Message
            </button>
            <button 
              onClick={handleViewProfile}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenteeCard;