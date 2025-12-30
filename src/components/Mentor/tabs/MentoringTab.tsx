import React, { useState } from "react";
import LearnerCard from "./LearnerCard";
import type { Learner } from "../types";

interface Message {
  id: number;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  type: "text" | "file" | "meeting";
}

const MentoringTab: React.FC = () => {
  const [selectedLearner, setSelectedLearner] = useState<Learner | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const learners: Learner[] = [
    {
      id: 1,
      name: "Sarah Chen",
      program: "Full-Stack Web Dev",
      progress: 75,
      nextSession: "Dec 15, 2:00 PM",
      status: "Active",
    },
    {
      id: 2,
      name: "Marcus Johnson",
      program: "Data Analytics",
      progress: 60,
      nextSession: "Dec 16, 10:00 AM",
      status: "Active",
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      program: "Cybersecurity",
      progress: 90,
      nextSession: "Dec 17, 3:00 PM",
      status: "Graduating",
    },
    {
      id: 4,
      name: "David Kim",
      program: "Software Engineering",
      progress: 45,
      nextSession: "Dec 18, 1:00 PM",
      status: "Active",
    },
  ];

  const handleLearnerMessage = (learner: Learner) => {
    setSelectedLearner(learner);
    // Load mock messages for this learner
    setMessages([
      {
        id: 1,
        senderId: "learner",
        senderName: learner.name,
        content:
          "Hi! I have a question about React hooks. Could you help me understand useEffect?",
        timestamp: new Date(Date.now() - 3600000),
        type: "text",
      },
      {
        id: 2,
        senderId: "mentor",
        senderName: "You",
        content:
          "Absolutely! useEffect is used for side effects. Let me schedule a quick call to walk through it.",
        timestamp: new Date(Date.now() - 3000000),
        type: "text",
      },
    ]);
  };

  const sendMessage = () => {
    if (newMessage.trim() && selectedLearner) {
      const message: Message = {
        id: messages.length + 1,
        senderId: "mentor",
        senderName: "You",
        content: newMessage,
        timestamp: new Date(),
        type: "text",
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="space-y-6 relative">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">My Learners</h2>
        <div className="flex space-x-2">
          <button className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-purple-700">
            Schedule Session
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300">
            Add Learner
          </button>
        </div>
      </div>

      {/* Learner List - Always Visible */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learners.map((learner) => (
          <LearnerCard
            key={learner.id}
            learner={learner}
            onMessage={handleLearnerMessage}
          />
        ))}
      </div>

      {/* Floating Chat Window - Bottom Right Corner */}
      {selectedLearner && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col z-50">
          {/* Chat Header */}
          <div className="p-3 border-b border-gray-200 bg-blue-50 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">
                {selectedLearner.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-900">
                  {selectedLearner.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {selectedLearner.program}
                </p>
              </div>
            </div>
            <button
              onClick={() => setSelectedLearner(null)}
              className="text-gray-500 hover:text-gray-700 p-1"
              title="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.senderId === "mentor"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    message.senderId === "mentor"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <p>{message.content}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.senderId === "mentor"
                        ? "text-blue-100"
                        : "text-gray-500"
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={sendMessage}
                className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MentoringTab;
