import { useState } from "react";
import AIChatAssistant from "../../../components/common/AIChatAssistant";

type Resource = {
  id: string;
  title: string;
  description: string;
  link: string;
  category: "Frontend" | "Backend" | "Career" | "General";
};

const INITIAL_RESOURCES: Resource[] = [
  {
    id: "1",
    title: "React Official Docs",
    description: "Learn React fundamentals, hooks, and best practices.",
    link: "https://react.dev",
    category: "Frontend",
  },
  {
    id: "2",
    title: "TypeScript Handbook",
    description: "Understand TypeScript basics and advanced typing.",
    link: "https://www.typescriptlang.org/docs/",
    category: "Frontend",
  },
  {
    id: "3",
    title: "Node.js Documentation",
    description: "Backend JavaScript with Node.js.",
    link: "https://nodejs.org/en/docs",
    category: "Backend",
  },
  {
    id: "4",
    title: "Git & GitHub Crash Course",
    description: "Learn Git workflows for team projects.",
    link: "https://www.atlassian.com/git/tutorials",
    category: "Career",
  },
  {
    id: "5",
    title: "Per Scholas Career Prep",
    description: "Interview prep, resumes, and career resources.",
    link: "https://perscholas.org",
    category: "General",
  },
];

export default function Resources() {
  const [categoryFilter, setCategoryFilter] =
    useState<Resource["category"] | "All">("All");

  const filteredResources =
    categoryFilter === "All"
      ? INITIAL_RESOURCES
      : INITIAL_RESOURCES.filter(
          (res) => res.category === categoryFilter
        );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold">Learning Resources</h1>
        <p className="text-gray-600">
          Curated materials to help you learn and grow.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Resources Section */}
        <section className="md:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Resources</h2>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["All", "Frontend", "Backend", "Career", "General"].map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setCategoryFilter(cat as Resource["category"] | "All")
                }
                className={`px-3 py-1 rounded-full text-sm border ${
                  categoryFilter === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resource List */}
          {filteredResources.length === 0 ? (
            <p className="text-gray-500">No resources found.</p>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredResources.map((res) => (
                <li
                  key={res.id}
                  className="border rounded-lg p-4 hover:shadow transition"
                >
                  <h3 className="font-medium text-lg">{res.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {res.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {res.category}
                    </span>
                    <a
                      href={res.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      View →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* AI Study Assistant */}
        <AIChatAssistant />
      </div>
    </div>
  );
}
