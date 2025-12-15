import React from "react";

interface MentorshipRequest {
  id: number;
  name: string;
  image: string;
  description: string;
}

const PendingRequests: React.FC = () => {
  const requests: MentorshipRequest[] = [
    {
      id: 1,
      name: "Sarah Chen",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b96b3e16?w=40&h=40&fit=crop&crop=face",
      description: "Needs help with React & Node.js",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face",
      description: "Career guidance for job search",
    },
  ];

  const handleAccept = (id: number) => {
    console.log(`Accepted request ${id}`);
  };

  const handleDecline = (id: number) => {
    console.log(`Declined request ${id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          New Mentorship Requests
        </h3>
        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
          {requests.length} new
        </span>
      </div>
      <div className="space-y-3">
        {requests.map((request) => (
          <div
            key={request.id}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full"
                src={request.image}
                alt={request.name}
              />
              <div>
                <p className="font-medium text-gray-900">{request.name}</p>
                <p className="text-sm text-gray-500">{request.description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleAccept(request.id)}
                className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-green-600"
              >
                Accept
              </button>
              <button
                onClick={() => handleDecline(request.id)}
                className="bg-gray-500 text-white px-3 py-1 rounded text-sm hover:bg-gray-600"
              >
                Decline
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingRequests;
