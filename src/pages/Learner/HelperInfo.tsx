import { useState } from "react";

type HelpRequest = {
  id: string;
  topic: string;
  details: string;
  status: "open" | "matched" | "closed";
};

export default function LearnerDash() {
  const [topic, setTopic] = useState("");
  const [details, setDetails] = useState("");
  const [requests, setRequests] = useState<HelpRequest[]>([]);

  function submitRequest() {
    if (!topic.trim()) return;

    const newRequest: HelpRequest = {
      id: crypto.randomUUID(),
      topic,
      details,
      status: "open",
    };

    setRequests((prev) => [newRequest, ...prev]);
    setTopic("");
    setDetails("");
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Learner Dashboard</h1>
        <p className="text-gray-600">
          Ask for help, track requests, and learn smarter.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Help Request Form */}
        <section className="md:col-span-2 bg-white rounded-xl shadow p-4">
          <h2 className="text-lg font-semibold mb-3">Request Help</h2>

          <input
            className="w-full border rounded-lg p-2 mb-3"
            placeholder="Topic (e.g. React state)"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />

          <textarea
            className="w-full border rounded-lg p-2 mb-3"
            rows={3}
            placeholder="Describe what you're stuck on..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button
            onClick={submitRequest}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Submit Request
          </button>
        </section>
      </div>

      {/* Active Requests */}
      <section className="mt-6 bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-3">My Requests</h2>

        {requests.length === 0 ? (
          <p className="text-gray-500">No requests yet.</p>
        ) : (
          <ul className="space-y-2">
            {requests.map((req) => (
              <li
                key={req.id}
                className="border rounded-lg p-3 flex justify-between"
              >
                <div>
                  <p className="font-medium">{req.topic}</p>
                  <p className="text-sm text-gray-600">{req.details}</p>
                </div>
                <span className="text-sm text-blue-600 capitalize">
                  {req.status}
                </span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
