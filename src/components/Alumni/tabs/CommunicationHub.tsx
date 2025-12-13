import React, { useState } from 'react';
import type { Mentee } from '../types';

interface Message {
  id: number;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'file' | 'meeting';
}

interface CommunicationHubProps {
  mentee: Mentee;
  isOpen: boolean;
  onClose: () => void;
}

const CommunicationHub: React.FC<CommunicationHubProps> = ({ mentee, isOpen, onClose }) => {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      senderId: 'mentee',
      senderName: mentee.name,
      content: 'Hi! I have a question about React hooks. Could you help me understand useEffect?',
      timestamp: new Date(Date.now() - 3600000),
      type: 'text'
    },
    {
      id: 2,
      senderId: 'mentor',
      senderName: 'You',
      content: 'Absolutely! useEffect is used for side effects. Let me schedule a quick call to walk through it.',
      timestamp: new Date(Date.now() - 3000000),
      type: 'text'
    },
    {
      id: 3,
      senderId: 'mentor',
      senderName: 'You',
      content: 'Meeting scheduled for today at 3 PM',
      timestamp: new Date(Date.now() - 1800000),
      type: 'meeting'
    }
  ]);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        senderId: 'mentor',
        senderName: 'You',
        content: newMessage,
        timestamp: new Date(),
        type: 'text'
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl h-4/5 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-blue-600 text-white rounded-t-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
              {mentee.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="font-semibold">{mentee.name}</h3>
              <p className="text-blue-100 text-sm">{mentee.program}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-blue-700 rounded text-white">
              📹
            </button>
            <button className="p-2 hover:bg-blue-700 rounded text-white">
              📞
            </button>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-blue-700 rounded text-white"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.senderId === 'mentor' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                message.senderId === 'mentor'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}>
                {message.type === 'meeting' && (
                  <div className="flex items-center space-x-2 mb-1">
                    <span>📅</span>
                    <span className="text-sm font-medium">Meeting Scheduled</span>
                  </div>
                )}
                <p className="text-sm">{message.content}</p>
                <p className={`text-xs mt-1 ${
                  message.senderId === 'mentor' ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
            />
            <button className="p-2 text-gray-500 hover:text-gray-700">
              📎
            </button>
            <button 
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Send
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex space-x-2 mt-2">
            <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
              📅 Schedule Meeting
            </button>
            <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
              📚 Share Resource
            </button>
            <button className="text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full">
              💡 Send Tip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunicationHub;