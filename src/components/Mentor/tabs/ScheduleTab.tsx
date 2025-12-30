import React from "react";

interface ScheduleEvent {
  id: number;
  time: string;
  title: string;
  mentee: string;
  type: "session" | "meeting" | "break";
  status: "confirmed" | "pending";
}

const ScheduleTab: React.FC = () => {
  const todayEvents: ScheduleEvent[] = [
    {
      id: 1,
      time: "9:00 AM",
      title: "Coffee Chat",
      mentee: "Sarah Chen",
      type: "session",
      status: "confirmed",
    },
    {
      id: 2,
      time: "2:00 PM",
      title: "Code Review",
      mentee: "David Kim",
      type: "session",
      status: "confirmed",
    },
    {
      id: 3,
      time: "4:30 PM",
      title: "Weekly Mentor Meeting",
      mentee: "",
      type: "meeting",
      status: "pending",
    },
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "session":
        return "border-l-4 border-blue-500 bg-blue-50";
      case "meeting":
        return "border-l-4 border-purple-500 bg-purple-50";
      case "break":
        return "border-l-4 border-green-500 bg-green-50";
      default:
        return "border-l-4 border-gray-500 bg-gray-50";
    }
  };

  const handleJoinEvent = (eventId: number) => {
    console.log(`Joining event ${eventId}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Your Schedule</h2>
        <div className="flex space-x-2">
          <button className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Add Event
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300">
            Calendar View
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">
            Today - December 14, 2024
          </h3>
        </div>

        <div className="p-6 space-y-4">
          {todayEvents.map((event) => (
            <div
              key={event.id}
              className={`p-4 rounded-lg ${getEventTypeColor(event.type)}`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-medium text-gray-900">
                      {event.time}
                    </span>
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${
                        event.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-1">
                    {event.title}
                  </h4>
                  {event.mentee && (
                    <p className="text-sm text-gray-600">with {event.mentee}</p>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleJoinEvent(event.id)}
                    className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                  >
                    Join
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="space-y-3">
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-between">
              <span>Schedule New Session</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-between">
              <span>Set Availability</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="w-full text-left p-3 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-between">
              <span>Block Time Off</span>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            This Week Summary
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Sessions Scheduled</span>
              <span className="font-medium">8</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Sessions Completed</span>
              <span className="font-medium">5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Hours Mentoring</span>
              <span className="font-medium">12.5</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">New Requests</span>
              <span className="font-medium">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleTab;
