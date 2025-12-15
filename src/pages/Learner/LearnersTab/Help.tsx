import { useState } from "react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Help() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m your AI study assistant. Ask me a question or describe what you’re stuck on.",
    },
  ]);

  function sendMessage() {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 🤖 Placeholder AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "That’s a great question! Try breaking the problem into smaller steps. What part feels most confusing?",
        },
      ]);
    }, 600);
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 h-[75vh] flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Get Help</h2>
        <p className="text-gray-600 text-sm">
          Ask questions, get hints, and learn step-by-step.
        </p>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto border rounded-lg p-3 space-y-3 mb-4 bg-gray-50 min-h-[50vh] max-h-[55vh]">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`max-w-[75%] p-3 rounded-lg text-sm ${
              msg.role === "user"
                ? "ml-auto bg-purple-600 text-white"
                : "bg-white border text-gray-800"
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded-lg p-2"
          placeholder="Type your question..."
        />
        <button
          onClick={sendMessage}
          className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
