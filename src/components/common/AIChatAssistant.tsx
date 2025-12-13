import React, { useState, useRef, useEffect } from 'react';
import aiChatData from '../../data/aiChatData.json';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

interface AIChatAssistantProps {
  className?: string;
}

const AIChatAssistant: React.FC<AIChatAssistantProps> = ({ className = '' }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      const greetingMessage = aiChatData.greetingMessages[
        Math.floor(Math.random() * aiChatData.greetingMessages.length)
      ];
      
      setMessages([{
        id: 'greeting',
        text: greetingMessage,
        sender: 'ai',
        timestamp: new Date()
      }]);
    }
  }, []);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for specific topics
    if (lowerMessage.includes('react') || lowerMessage.includes('usestate') || lowerMessage.includes('hook')) {
      const responses = aiChatData.mockResponses.react;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('javascript') || lowerMessage.includes('js') || lowerMessage.includes('let') || lowerMessage.includes('const')) {
      const responses = aiChatData.mockResponses.javascript;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('programming') || lowerMessage.includes('solid') || lowerMessage.includes('algorithm')) {
      const responses = aiChatData.mockResponses.programming;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    if (lowerMessage.includes('database') || lowerMessage.includes('sql') || lowerMessage.includes('nosql')) {
      const responses = aiChatData.mockResponses.database;
      return responses[Math.floor(Math.random() * responses.length)];
    }
    
    // Default response
    const responses = aiChatData.mockResponses.default;
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse = getAIResponse(inputText);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: 'ai',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handlePredefinedQuestion = (question: string) => {
    setInputText(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  if (!isExpanded) {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-4 ${className}`}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-gray-900">🤖 AI Study Assistant</h3>
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            Open Chat
          </button>
        </div>
        <p className="text-gray-600 text-sm mb-4">
          Get instant help with your questions! Ask about programming, concepts, or any topic you're studying.
        </p>
        <div className="space-y-2">
          <p className="text-sm font-medium text-gray-700">Quick questions:</p>
          {aiChatData.predefinedQuestions.slice(0, 2).map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsExpanded(true);
                setTimeout(() => handlePredefinedQuestion(item.question), 300);
              }}
              className="w-full text-left text-xs bg-gray-50 hover:bg-gray-100 p-2 rounded-lg text-gray-700 transition-colors"
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-xl shadow-lg ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🤖</span>
          <div>
            <h3 className="font-semibold text-gray-900">AI Study Assistant</h3>
            <p className="text-xs text-green-600">Online • Ready to help</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-blue-600 text-white rounded-br-sm'
                  : 'bg-gray-100 text-gray-900 rounded-bl-sm'
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg rounded-bl-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Predefined Questions */}
      <div className="px-4 py-2 border-t bg-gray-50">
        <div className="flex flex-wrap gap-2">
          {aiChatData.predefinedQuestions.slice(0, 3).map((item) => (
            <button
              key={item.id}
              onClick={() => handlePredefinedQuestion(item.question)}
              className="text-xs bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-300 px-2 py-1 rounded-full text-gray-700 transition-colors"
            >
              {item.category}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about programming, concepts..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <span className="text-sm">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatAssistant;