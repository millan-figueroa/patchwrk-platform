import { useState } from "react";

type Session = {
  id: string;
  title: string;
  tutorName: string;
  date: string;
  time: string;
  status: "scheduled" | "completed" | "cancelled";
};

export default function StudentSchedule() {
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: "1",
      title: "React State Help",
      tutorName: "Alex M.",
      date: "2025-03-20",
      time: "6:00 PM",
      status: "scheduled",
    },
  ]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  function addSession() {
    if (!title || !date || !time) return;

    const newSession: Session = {
      id: Date.now().toString(),
      title,
      tutorName: "TBD",
      date,
      time,
      status: "scheduled",
    };

    setSessions((prev) => [...prev, newSession]);
    setTitle("");
    setDate("");
    setTime("");
  }

  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">My Schedule</h2>
        <p className="text-gray-600 text-sm">
          View and manage your tutoring sessions.
        </p>
      </div>

      {/* Add Session */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        <input
          className="border rounded-lg p-2"
          placeholder="Session topic"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="date"
          className="border rounded-lg p-2"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="border rounded-lg p-2"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button
          onClick={addSession}
          className="md:col-span-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Add Session
        </button>
      </div>

      {/* Sessions List */}
      {sessions.length === 0 ? (
        <p className="text-gray-500">No sessions scheduled.</p>
      ) : (
        <ul className="space-y-3">
          {sessions.map((session) => (
            <li
              key={session.id}
              className="border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between"
            >
              <div>
                <p className="font-medium">{session.title}</p>
                <p className="text-sm text-gray-600">
                  Tutor: {session.tutorName}
                </p>
                <p className="text-sm text-gray-600">
                  {session.date} at {session.time}
                </p>
              </div>

              <span
                className={`mt-2 md:mt-0 text-sm font-medium px-3 py-1 rounded-full ${
                  session.status === "scheduled"
                    ? "bg-blue-100 text-blue-700"
                    : session.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {session.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
