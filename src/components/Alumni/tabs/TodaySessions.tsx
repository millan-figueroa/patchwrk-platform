import React from 'react';

interface Session {
  id: number;
  time: string;
  mentee: string;
  topic: string;
  duration: string;
  image: string;
}

const TodaySessions: React.FC = () => {
  const sessions: Session[] = [
    {
      id: 1,
      time: '2:00 PM',
      mentee: 'David Kim',
      topic: 'React Best Practices',
      duration: '45 minutes',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face'
    }
  ];

  const handleJoinCall = (sessionId: number) => {
    console.log(`Joining call for session ${sessionId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Sessions</h3>
      <div className="space-y-3">
        {sessions.map((session) => (
          <div key={session.id} className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
            <div className="text-blue-600 font-medium">{session.time}</div>
            <img className="w-8 h-8 rounded-full" src={session.image} alt={session.mentee} />
            <div className="flex-1">
              <p className="font-medium text-gray-900">{session.mentee} - {session.topic}</p>
              <p className="text-sm text-gray-500">{session.duration}</p>
            </div>
            <button 
              onClick={() => handleJoinCall(session.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700"
            >
              Join Call
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySessions;