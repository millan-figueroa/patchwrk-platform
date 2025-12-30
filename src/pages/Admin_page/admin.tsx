import React, { useState } from "react";
import { Users, BookOpen, Calendar, Inbox } from "lucide-react";
import AdminHeader from "./AdminHeader";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  trendUp?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  trendUp,
}) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        {trend && (
          <p
            className={`text-sm mt-2 ${
              trendUp ? "text-green-600" : "text-red-600"
            }`}
          >
            {trendUp ? "↑" : "↓"} {trend}
          </p>
        )}
      </div>
      <div className="text-blue-600">{icon}</div>
    </div>
  </div>
);

interface Session {
  id: string;
  student: string;
  tutor: string;
  subject: string;
  date: string;
  time: string;
  status: "scheduled" | "completed" | "cancelled";
}

interface User {
  id: string;
  name: string;
  email: string;
  type: "student" | "tutor";
  status: "active" | "pending" | "suspended";
  joinDate: string;
}

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"overview" | "sessions" | "users">(
    "overview"
  );

  const recentSessions: Session[] = [
    {
      id: "1",
      student: "Alice Johnson",
      tutor: "Dr. Smith",
      subject: "Mathematics",
      date: "2024-12-13",
      time: "10:00 AM",
      status: "scheduled",
    },
    {
      id: "2",
      student: "Bob Williams",
      tutor: "Prof. Lee",
      subject: "Physics",
      date: "2024-12-13",
      time: "2:00 PM",
      status: "completed",
    },
    {
      id: "3",
      student: "Carol Davis",
      tutor: "Ms. Garcia",
      subject: "English",
      date: "2024-12-14",
      time: "11:00 AM",
      status: "scheduled",
    },
    {
      id: "4",
      student: "David Martinez",
      tutor: "Dr. Smith",
      subject: "Chemistry",
      date: "2024-12-12",
      time: "3:00 PM",
      status: "cancelled",
    },
    {
      id: "5",
      student: "Emma Wilson",
      tutor: "Prof. Chen",
      subject: "Biology",
      date: "2024-12-13",
      time: "1:00 PM",
      status: "completed",
    },
  ];

  const recentUsers: User[] = [
    {
      id: "1",
      name: "Sarah Thompson",
      email: "sarah.t@email.com",
      type: "tutor",
      status: "pending",
      joinDate: "2024-12-12",
    },
    {
      id: "2",
      name: "Michael Brown",
      email: "michael.b@email.com",
      type: "student",
      status: "active",
      joinDate: "2024-12-11",
    },
    {
      id: "3",
      name: "Jennifer Lee",
      email: "jennifer.l@email.com",
      type: "tutor",
      status: "active",
      joinDate: "2024-12-10",
    },
    {
      id: "4",
      name: "Robert Garcia",
      email: "robert.g@email.com",
      type: "student",
      status: "active",
      joinDate: "2024-12-13",
    },
    {
      id: "5",
      name: "Lisa Anderson",
      email: "lisa.a@email.com",
      type: "tutor",
      status: "pending",
      joinDate: "2024-12-13",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
      case "active":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-blue-100 text-blue-800";
      case "cancelled":
      case "suspended":
        return "bg-red-100 text-red-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <AdminHeader />
      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Users"
            value="1,284"
            icon={<Users size={32} />}
            trend="12% from last month"
            trendUp={true}
          />
          <StatCard
            title="Active Sessions"
            value="47"
            icon={<BookOpen size={32} />}
            trend="8% from last week"
            trendUp={true}
          />
          <StatCard
            title="Manage Calendar"
            value="23"
            icon={<Calendar size={32} />}
            trend="Events this week"
            trendUp={true}
          />
          <StatCard
            title="View Inbox"
            value="15"
            icon={<Inbox size={32} />}
            trend="5 unread messages"
            trendUp={false}
          />
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-md mb-8">
          <div className="border-b border-indigo-100">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab("overview")}
                className={`py-4 px-6 text-sm font-semibold transition ${
                  activeTab === "overview"
                    ? "border-b-2 border-indigo-600 text-indigo-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Overview
              </button>

              <button
                onClick={() => setActiveTab("sessions")}
                className={`py-4 px-6 text-sm font-semibold transition ${
                  activeTab === "sessions"
                    ? "border-b-2 border-indigo-600 text-indigo-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Recent Sessions
              </button>

              <button
                onClick={() => setActiveTab("users")}
                className={`py-4 px-6 text-sm font-semibold transition ${
                  activeTab === "users"
                    ? "border-b-2 border-indigo-600 text-indigo-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                User Management
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      Quick Stats
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-600">Students</span>
                        <span className="font-semibold text-slate-800">
                          842
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-600">Tutors</span>
                        <span className="font-semibold text-slate-800">
                          442
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-600">
                          Avg Session Rating
                        </span>
                        <span className="font-semibold text-slate-800">
                          4.8 / 5.0
                        </span>
                      </div>

                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                        <span className="text-sm text-slate-600">
                          Session Completion Rate
                        </span>
                        <span className="font-semibold text-slate-800">
                          94%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Popular Subjects
                    </h3>
                    <div className="space-y-3">
                      {[
                        { name: "JavaScript Fundamentals", sessions: 342 },
                        { name: "React & Components", sessions: 287 },
                        { name: "Node.js & Express", sessions: 198 },
                        { name: "SQL & Databases", sessions: 156 },
                        { name: "Data Structures & Algorithms", sessions: 143 },
                      ].map((subject, idx) => (
                        <div
                          key={idx}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm text-gray-600">
                            {subject.name}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-linear-to-r from-purple-600 to-indigo-600 h-2 rounded-full"
                                style={{
                                  width: `${(subject.sessions / 342) * 100}%`,
                                }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900 w-12 text-right">
                              {subject.sessions}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "sessions" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent Sessions
                  </h3>
                  <button className="px-4 py-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm hover:bg-blue-700">
                    Export Report
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Student
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Tutor
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Subject
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Date & Time
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentSessions.map((session) => (
                        <tr
                          key={session.id}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-3 px-4 text-sm text-gray-900">
                            {session.student}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-900">
                            {session.tutor}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {session.subject}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {session.date} at {session.time}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                session.status
                              )}`}
                            >
                              {session.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-purple-600 hover:text-purple-800 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "users" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Recent User Registrations
                  </h3>
                  <button className="px-4 py-2 bg-linear-to-r from-purple-600 to-indigo-600 text-white rounded-lg text-sm hover:bg-purple-700">
                    View All Users
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Name
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Email
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Type
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Join Date
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Status
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr
                          key={user.id}
                          className="border-b border-gray-100 hover:bg-gray-50"
                        >
                          <td className="py-3 px-4 text-sm text-gray-900">
                            {user.name}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {user.email}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600 capitalize">
                            {user.type}
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-600">
                            {user.joinDate}
                          </td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                user.status
                              )}`}
                            >
                              {user.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-purple-600 hover:text-blue-800 text-sm font-medium mr-3">
                              {user.status === "pending" ? "Review" : "Edit"}
                            </button>
                            {user.status === "pending" && (
                              <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                                Approve
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
