import { useState } from "react";

// **check where subject info is coming from to update to tech relate subjects
// **decide between tutor/ mentor/ alumni and standardize language
// **should reward/ badges/ streaks go here?

// Type definitions
interface TutorTopic {
  topic: string;
  topicId: string;
  category: string;
  rating: number;
  students?: string[];
}

interface ScheduleAvailability {
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  time: number;
}

interface ScheduleBlock {
  id: string;
  day: string;
  time: number;
  studentId: string;
  tutorId: string;
  topicId: string;
  status: "scheduled" | "completed" | "cancelled" | "no-show";
}

interface TutorProps {
  nameFirst: string;
  nameLast: string;
  tutorId: string;
  subjects: TutorTopic[];
  availability: ScheduleAvailability[];
  scheduledLessons: ScheduleBlock[];
}

// Test data
const alg2testTopicTutor: TutorTopic = {
  topic: "ddd",
  topicId: "I00001",
  category: "Mathematics",
  rating: 5,
};

const calc1testTopicTutor: TutorTopic = {
  topic: "Calculus I",
  topicId: "I00002",
  category: "Mathematics",
  rating: 3.0,
};

const testAvail1: ScheduleAvailability = {
  day: "Monday",
  time: 13,
};

const testAvail4: ScheduleAvailability = {
  day: "Tuesday",
  time: 13,
};

const testAvail5: ScheduleAvailability = {
  day: "Saturday",
  time: 10,
};

const testLesson1: ScheduleBlock = {
  id: "L00001",
  day: "2025-12-15",
  time: 13,
  studentId: "S00001",
  tutorId: "T00001",
  status: "scheduled",
  topicId: "I00001",
};

const testTutor1: TutorProps = {
  nameFirst: "Albert",
  nameLast: "Einstein",
  tutorId: "T00001",
  subjects: [alg2testTopicTutor, calc1testTopicTutor],
  availability: [testAvail1, testAvail4, testAvail5],
  scheduledLessons: [testLesson1],
};

// Topic component with expand/collapse
const TutorTopicItem = ({ topic }: { topic: TutorTopic }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white border border-gray-300 rounded-lg p-4 mb-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            {topic.topic}
          </h3>
          <p className="text-sm text-slate-500">{topic.category}</p>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="px-4 py-2 rounded-lg text-sm font-semibold text-indigo-700 bg-purple-100 hover:bg-purple-200 transition"
        >
          {expanded ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {expanded && (
        <div className="mt-4 space-y-2 text-sm text-slate-700">
          <p>
            <span className="font-semibold text-slate-800">Topic ID:</span>{" "}
            {topic.topicId}
          </p>
          <p>
            <span className="font-semibold text-slate-800">Rating:</span>{" "}
            {topic.rating}/5 ⭐
          </p>

          {topic.students && topic.students.length > 0 ? (
            <div>
              <p className="font-semibold text-slate-800">Students:</p>
              <ul className="list-disc list-inside ml-2">
                {topic.students.map((studentId, index) => (
                  <li key={index}>{studentId}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p>
              <span className="font-semibold text-slate-800">Students:</span>{" "}
              None assigned
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Main Tutor Profile Component
export const TutorProfile = ({ tutor }: { tutor: TutorProps }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {tutor.nameFirst} {tutor.nameLast}
        </h1>
        <p className="text-gray-600">Tutor ID: {tutor.tutorId}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Subjects</h2>
        {tutor.subjects.map((subject, index) => (
          <TutorTopicItem key={index} topic={subject} />
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Availability
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tutor.availability.map((avail, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded p-3"
            >
              <p>
                <span className="font-medium">{avail.day}</span> at {avail.time}
                :00
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Scheduled Lessons
        </h2>
        {tutor.scheduledLessons.length > 0 ? (
          tutor.scheduledLessons.map((lesson, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded p-4 mb-3"
            >
              <p>
                <span className="font-medium">Lesson ID:</span> {lesson.id}
              </p>
              <p>
                <span className="font-medium">Date:</span> {lesson.day}
              </p>
              <p>
                <span className="font-medium">Time:</span> {lesson.time}:00
              </p>
              <p>
                <span className="font-medium">Student ID:</span>{" "}
                {lesson.studentId}
              </p>
              <p>
                <span className="font-medium">Topic ID:</span> {lesson.topicId}
              </p>
              <p>
                <span className="font-medium">Status:</span> {lesson.status}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No scheduled lessons</p>
        )}
      </div>
    </div>
  );
};

// Export component with test data
// export default function App() {
//   return <TutorProfile tutor={testTutor1} />;
// }
