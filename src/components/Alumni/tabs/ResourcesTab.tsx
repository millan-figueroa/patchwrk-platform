import React, { useState } from "react";

interface Resource {
  id: number;
  title: string;
  type: "guide" | "template" | "video" | "tool";
  category: string;
  description: string;
  url?: string;
  downloadUrl?: string;
}

const ResourcesTab: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const resources: Resource[] = [
    {
      id: 1,
      title: "Effective Mentoring Guide",
      type: "guide",
      category: "Mentoring",
      description:
        "Comprehensive guide on how to be an effective mentor for tech professionals.",
      downloadUrl: "/docs/mentoring-guide.pdf",
    },
    {
      id: 2,
      title: "Code Review Checklist",
      type: "template",
      category: "Development",
      description:
        "Template checklist for conducting thorough code reviews with mentees.",
      downloadUrl: "/templates/code-review-checklist.docx",
    },
    {
      id: 3,
      title: "Career Planning Workshop",
      type: "video",
      category: "Career",
      description:
        "Video series on helping mentees plan their career paths in technology.",
      url: "https://example.com/career-planning",
    },
    {
      id: 4,
      title: "Interview Preparation Kit",
      type: "template",
      category: "Career",
      description:
        "Collection of common interview questions and preparation strategies.",
      downloadUrl: "/templates/interview-prep.zip",
    },
    {
      id: 5,
      title: "Mentoring Session Tracker",
      type: "tool",
      category: "Tools",
      description:
        "Spreadsheet template to track mentoring sessions and progress.",
      downloadUrl: "/tools/session-tracker.xlsx",
    },
    {
      id: 6,
      title: "Technical Skills Assessment",
      type: "template",
      category: "Development",
      description:
        "Framework for assessing and tracking technical skill development.",
      downloadUrl: "/templates/skills-assessment.pdf",
    },
  ];

  const categories = ["all", "Mentoring", "Development", "Career", "Tools"];

  const filteredResources =
    activeFilter === "all"
      ? resources
      : resources.filter((resource) => resource.category === activeFilter);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "guide":
        return (
          <svg
            className="w-5 h-5 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        );
      case "template":
        return (
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
            />
          </svg>
        );
      case "video":
        return (
          <svg
            className="w-5 h-5 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293L12 11l.707-.707A1 1 0 0113.414 10H15M8 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        );
      case "tool":
        return (
          <svg
            className="w-5 h-5 text-orange-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const handleResourceAction = (resource: Resource) => {
    if (resource.downloadUrl) {
      console.log(`Downloading: ${resource.downloadUrl}`);
      // In a real app, this would trigger a download
    } else if (resource.url) {
      console.log(`Opening: ${resource.url}`);
      // In a real app, this would open the URL
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Mentoring Resources
        </h2>
        <div className="flex space-x-2">
          <button className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700">
            Upload Resource
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm hover:bg-gray-300">
            Request Resource
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                activeFilter === category
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-start space-x-3 mb-4">
              <div className="shrink-0">{getTypeIcon(resource.type)}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {resource.category}
                </p>
                <p className="text-sm text-gray-600">{resource.description}</p>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                  resource.type === "guide"
                    ? "bg-blue-100 text-purple-800"
                    : resource.type === "template"
                    ? "bg-green-100 text-green-800"
                    : resource.type === "video"
                    ? "bg-purple-100 text-purple-800"
                    : "bg-orange-100 text-orange-800"
                }`}
              >
                {resource.type}
              </span>

              <button
                onClick={() => handleResourceAction(resource)}
                className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center space-x-1"
              >
                <span>{resource.downloadUrl ? "Download" : "View"}</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {resource.downloadUrl ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No resources found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            No resources available for the selected category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ResourcesTab;
