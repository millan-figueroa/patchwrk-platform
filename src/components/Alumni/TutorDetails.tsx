import { useState } from "react";

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

// Test data (unchanged)
const alg2testTopicTutor: TutorTopic = {
  topic: "Algebra II",
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
    <div className="bg-white/90 backdrop-blur border border-indigo-100 rounded-2xl p-5 shadow-sm">
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
    <div className="min-h-screen ">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-md border border-indigo-100 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800">
              {tutor.nameFirst} {tutor.nameLast}
            </h1>
            <p className="text-slate-600">Tutor ID: {tutor.tutorId}</p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">
              Subjects
            </h2>
            <div className="space-y-4">
              {tutor.subjects.map((subject, index) => (
                <TutorTopicItem key={index} topic={subject} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">
              Availability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tutor.availability.map((avail, index) => (
                <div
                  key={index}
                  className="bg-white/80 border border-indigo-100 rounded-2xl p-4 shadow-sm"
                >
                  <p className="text-slate-700">
                    <span className="font-semibold text-slate-800">
                      {avail.day}
                    </span>{" "}
                    at {avail.time}:00
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-slate-800">
              Scheduled Lessons
            </h2>

            {tutor.scheduledLessons.length > 0 ? (
              <div className="space-y-4">
                {tutor.scheduledLessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="bg-white/80 border border-indigo-100 rounded-2xl p-5 shadow-sm"
                  >
                    <p>
                      <span className="font-semibold text-slate-800">
                        Lesson ID:
                      </span>{" "}
                      {lesson.id}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-800">
                        Date:
                      </span>{" "}
                      {lesson.day}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-800">
                        Time:
                      </span>{" "}
                      {lesson.time}:00
                    </p>
                    <p>
                      <span className="font-semibold text-slate-800">
                        Student ID:
                      </span>{" "}
                      {lesson.studentId}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-800">
                        Topic ID:
                      </span>{" "}
                      {lesson.topicId}
                    </p>
                    <p>
                      <span className="font-semibold text-slate-800">
                        Status:
                      </span>{" "}
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-100 text-indigo-700 font-semibold">
                        {lesson.status}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-slate-600">No scheduled lessons</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
