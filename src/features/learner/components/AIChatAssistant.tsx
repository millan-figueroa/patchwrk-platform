import React, { useState, useRef, useEffect } from "react";
import aiChatData from "../../../data/aiChatData.json";

interface Message {
  id: string;
  text: string;
  sender: "user" | "ai";
  timestamp: Date;
}

interface AIChatAssistantProps {
  className?: string;
}

const AIChatAssistant: React.FC<AIChatAssistantProps> = ({
  className = "",
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (messages.length === 0) {
      const greetingMessage =
        aiChatData.greetingMessages[
          Math.floor(Math.random() * aiChatData.greetingMessages.length)
        ];

      setMessages([
        {
          id: "greeting",
          text: greetingMessage,
          sender: "ai",
          timestamp: new Date(),
        },
      ]);
    }
  }, []);

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // Check for specific topics
    if (
      lowerMessage.includes("react") ||
      lowerMessage.includes("usestate") ||
      lowerMessage.includes("hook")
    ) {
      const responses = aiChatData.mockResponses.react;
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (
      lowerMessage.includes("javascript") ||
      lowerMessage.includes("js") ||
      lowerMessage.includes("let") ||
      lowerMessage.includes("const")
    ) {
      const responses = aiChatData.mockResponses.javascript;
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (
      lowerMessage.includes("programming") ||
      lowerMessage.includes("solid") ||
      lowerMessage.includes("algorithm")
    ) {
      const responses = aiChatData.mockResponses.programming;
      return responses[Math.floor(Math.random() * responses.length)];
    }

    if (
      lowerMessage.includes("database") ||
      lowerMessage.includes("sql") ||
      lowerMessage.includes("nosql")
    ) {
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
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse = getAIResponse(inputText);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        sender: "ai",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
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
      <div
        className={`bg-white/90 backdrop-blur rounded-2xl shadow-md border border-indigo-100 p-5 ${className}`}
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-slate-800">
            🤖 AI Study Assistant
          </h3>
          <button
            onClick={() => setIsExpanded(true)}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition"
          >
            Open Chat
          </button>
        </div>

        <p className="text-slate-600 text-sm mb-4">
          Get instant help with your questions! Ask about programming, concepts,
          or any topic you're studying.
        </p>

        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-700">
            Quick questions:
          </p>

          {aiChatData.predefinedQuestions.slice(0, 2).map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsExpanded(true);
                setTimeout(() => handlePredefinedQuestion(item.question), 300);
              }}
              className="w-full text-left text-xs bg-white border border-indigo-100 hover:border-indigo-200 hover:bg-purple-50 p-3 rounded-xl text-slate-700 transition"
            >
              {item.question}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`bg-white/90 backdrop-blur rounded-2xl shadow-md border border-indigo-100 overflow-hidden ${className}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-indigo-100 bg-linear-to-r from-purple-50 via-indigo-50 to-blue-50">
        <div className="flex items-center space-x-3">
          <span className="text-2xl">🤖</span>
          <div>
            <h3 className="font-semibold text-slate-800">AI Study Assistant</h3>
            <p className="text-xs text-emerald-600">Online • Ready to help</p>
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(false)}
          className="h-9 w-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-slate-700 hover:bg-white transition"
          aria-label="Close chat"
        >
          ✕
        </button>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-2xl ${
                message.sender === "user"
                  ? "text-white bg-linear-to-r from-purple-600 to-indigo-600 rounded-br-md"
                  : "bg-slate-100 text-slate-900 rounded-bl-md"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p
                className={`text-xs mt-1 ${
                  message.sender === "user"
                    ? "text-indigo-100"
                    : "text-slate-500"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-slate-100 text-slate-900 px-4 py-2 rounded-2xl rounded-bl-md">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Predefined Questions */}
      <div className="px-4 py-3 border-t border-indigo-100 bg-linear-to-r from-blue-50 via-indigo-50 to-purple-50">
        <div className="flex flex-wrap gap-2">
          {aiChatData.predefinedQuestions.slice(0, 3).map((item) => (
            <button
              key={item.id}
              onClick={() => handlePredefinedQuestion(item.question)}
              className="text-xs bg-white hover:bg-purple-50 border border-indigo-100 hover:border-indigo-200 px-3 py-1.5 rounded-full text-slate-700 transition"
            >
              {item.category}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-indigo-100 bg-white">
        <div className="flex space-x-2">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about programming, concepts..."
            className="flex-1 px-3 py-2 border border-indigo-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm bg-white"
          />
          <button
            onClick={handleSendMessage}
            disabled={!inputText.trim() || isTyping}
            className="px-4 py-2 rounded-xl text-sm font-semibold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            <span className="text-sm">Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChatAssistant;
