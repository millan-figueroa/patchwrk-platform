import React, { useState } from "react";

// Type definitions
interface StudentTopic {
  topic: string;
  topicId: string;
  category: string;
  grade: number;
  tutorId: string;
}

interface StudentAward {
  topic: string;
  type: string;
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

interface StudentProps {
  nameFirst: string;
  nameLast: string;
  studentId: string;
  subjects: StudentTopic[];
  availability: ScheduleAvailability[];
  scheduledLessons: ScheduleBlock[];
  awards: StudentAward[];
}

// Test data
const alg2testTopic: StudentTopic = {
  topic: "Algebra II",
  topicId: "I00001",
  category: "Mathematics",
  grade: 72.5,
  tutorId: "T00001",
};

const calc1testTopic: StudentTopic = {
  topic: "Calculus I",
  topicId: "I00002",
  category: "Mathematics",
  grade: 63.0,
  tutorId: "T00001",
};

const stat3testTopic: StudentTopic = {
  topic: "Statistics III",
  topicId: "I00003",
  category: "Mathematics",
  grade: 87.5,
  tutorId: "T00002",
};

const testAvail1: ScheduleAvailability = {
  day: "Monday",
  time: 13,
};

const testAvail2: ScheduleAvailability = {
  day: "Monday",
  time: 14,
};

const testAvail3: ScheduleAvailability = {
  day: "Monday",
  time: 15,
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

const testStudentAward: StudentAward = {
  topic: "I00003",
  type: "Most improved",
};

const testStudent1: StudentProps = {
  nameFirst: "Paul",
  nameLast: "Dirac",
  studentId: "S00001",
  subjects: [alg2testTopic, calc1testTopic, stat3testTopic],
  availability: [testAvail1, testAvail2, testAvail3],
  scheduledLessons: [testLesson1],
  awards: [testStudentAward],
};

// Topic component with expand/collapse
const TopicItem = ({ topic }: { topic: StudentTopic }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-3">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{topic.topic}</h3>
        <button
          onClick={() => setExpanded(!expanded)}
          className="px-3 py-1 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded hover:bg-blue-600 transition"
        >
          {expanded ? "Hide Details" : "Show Details"}
        </button>
      </div>

      {expanded && (
        <div className="mt-3 space-y-2 text-sm">
          <p>
            <span className="font-medium">Topic ID:</span> {topic.topicId}
          </p>
          <p>
            <span className="font-medium">Category:</span> {topic.category}
          </p>
          <p>
            <span className="font-medium">Grade:</span> {topic.grade}%
          </p>
          <p>
            <span className="font-medium">Tutor ID:</span> {topic.tutorId}
          </p>
        </div>
      )}
    </div>
  );
};

// Main Student Profile Component
export const LearnerDetails = ({ student }: { student: StudentProps }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {student.nameFirst} {student.nameLast}
        </h1>
        <p className="text-gray-600">Student ID: {student.studentId}</p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Subjects</h2>
        {student.subjects.map((subject, index) => (
          <TopicItem key={index} topic={subject} />
        ))}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">
          Availability
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {student.availability.map((avail, index) => (
            <div key={index} className="border border-gray-300 rounded p-3">
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
        {student.scheduledLessons.length > 0 ? (
          student.scheduledLessons.map((lesson, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded p-4 mb-3"
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

      <div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Awards</h2>
        {student.awards.length > 0 ? (
          student.awards.map((award, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded p-4 mb-3 bg-yellow-50"
            >
              <p>
                <span className="font-medium">Award:</span> {award.type}
              </p>
              <p>
                <span className="font-medium">Topic:</span> {award.topic}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No awards yet</p>
        )}
      </div>
    </div>
  );
};

// Export component with test data
// export default function App() {
//   return <LearnerDetails student={testStudent1} />;
// }
