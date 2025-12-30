import React, { useState } from "react";

interface ProfileData {
  name: string;
  email: string;
  phone: string;
  company: string;
  position: string;
  experience: string;
  expertise: string[];
  bio: string;
  availability: string;
  timezone: string;
  linkedIn: string;
  github: string;
}

const ProfileTab: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "John Smith",
    email: "john.smith@email.com",
    phone: "+1 (555) 123-4567",
    company: "TechCorp Inc.",
    position: "Senior Software Engineer",
    experience: "8 years",
    expertise: ["React", "Node.js", "Python", "Cloud Architecture"],
    bio: "Passionate software engineer with 8+ years of experience in full-stack development. I love mentoring junior developers and sharing knowledge about modern web technologies.",
    availability: "Weekdays 6-8 PM, Weekends 10 AM - 2 PM",
    timezone: "Pacific Standard Time (PST)",
    linkedIn: "linkedin.com/in/johnsmith",
    github: "github.com/johnsmith",
  });

  const handleInputChange = (
    field: keyof ProfileData,
    value: string | string[]
  ) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleExpertiseChange = (value: string) => {
    const expertiseArray = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);
    handleInputChange("expertise", expertiseArray);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log("Saved profile data:", profileData);
    // In a real app, this would save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // In a real app, you might want to restore original data
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Mentor Profile</h2>
        <div className="flex space-x-2">
          {isEditing ? (
            <>
              <button
                onClick={handleSave}
                className="bg-linear-to-r from-purple-600 to-indigo-6000 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700"
              >
                Save Changes
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-600"
              >
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
            >
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Picture and Basic Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="text-center">
              <div className="mx-auto h-24 w-24 bg-gray-300 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl font-medium text-gray-600">
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              {isEditing ? (
                <button className="text-purple-600 hover:text-purple-800 text-sm mb-4">
                  Change Photo
                </button>
              ) : (
                <div className="mb-4"></div>
              )}
              <h3 className="text-lg font-medium text-gray-900">
                {profileData.name}
              </h3>
              <p className="text-gray-500">{profileData.position}</p>
              <p className="text-gray-500">{profileData.company}</p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  {profileData.email}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  {profileData.phone}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6z"
                  />
                </svg>
                <span className="text-sm text-gray-600">
                  {profileData.experience} experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="space-y-6">
              {/* Basic Information */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Personal Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-900">
                        {profileData.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-900">
                        {profileData.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-900">
                        {profileData.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Timezone
                    </label>
                    {isEditing ? (
                      <select
                        value={profileData.timezone}
                        onChange={(e) =>
                          handleInputChange("timezone", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      >
                        <option>Pacific Standard Time (PST)</option>
                        <option>Mountain Standard Time (MST)</option>
                        <option>Central Standard Time (CST)</option>
                        <option>Eastern Standard Time (EST)</option>
                      </select>
                    ) : (
                      <p className="text-sm text-gray-900">
                        {profileData.timezone}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Professional Information
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.company}
                        onChange={(e) =>
                          handleInputChange("company", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-900">
                        {profileData.company}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Position
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.position}
                        onChange={(e) =>
                          handleInputChange("position", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-900">
                        {profileData.position}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Experience
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.experience}
                        onChange={(e) =>
                          handleInputChange("experience", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-900">
                        {profileData.experience}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.linkedIn}
                        onChange={(e) =>
                          handleInputChange("linkedIn", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                      />
                    ) : (
                      <p className="text-sm text-gray-900">
                        {profileData.linkedIn}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Expertise */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expertise
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={profileData.expertise.join(", ")}
                    onChange={(e) => handleExpertiseChange(e.target.value)}
                    placeholder="React, Node.js, Python (comma-separated)"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profileData.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Bio */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Bio
                </label>
                {isEditing ? (
                  <textarea
                    value={profileData.bio}
                    onChange={(e) => handleInputChange("bio", e.target.value)}
                    rows={4}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                ) : (
                  <p className="text-sm text-gray-900">{profileData.bio}</p>
                )}
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Availability
                </label>
                {isEditing ? (
                  <textarea
                    value={profileData.availability}
                    onChange={(e) =>
                      handleInputChange("availability", e.target.value)
                    }
                    rows={2}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  />
                ) : (
                  <p className="text-sm text-gray-900">
                    {profileData.availability}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;
