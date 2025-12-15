import { useState } from "react";

type StudentProfileData = {
  name: string;
  email: string;
  cohort: string;
  bio: string;
};

export default function StudentProfile() {
  const [profile, setProfile] = useState<StudentProfileData>({
    name: "Jane Doe",
    email: "jane.doe@email.com",
    cohort: "Per Scholas 2025",
    bio: "Aspiring software engineer learning full-stack development.",
  });

  const [isEditing, setIsEditing] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  }

  function saveProfile() {
    setIsEditing(false);
    // 🔗 Later: POST / PUT to backend
  }

  function cancelEdit() {
    setIsEditing(false);
  }

  return (
    <div className="bg-white rounded-xl shadow p-6 max-w-2xl">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">My Profile</h2>
        <p className="text-gray-600 text-sm">
          View and update your personal information.
        </p>
      </div>

      <div className="space-y-4">
        {/* Name */}
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            name="name"
            value={profile.name}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-1 w-full rounded-lg border p-2 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            name="email"
            value={profile.email}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-1 w-full rounded-lg border p-2 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Cohort */}
        <div>
          <label className="text-sm font-medium">Cohort</label>
          <input
            name="cohort"
            value={profile.cohort}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-1 w-full rounded-lg border p-2 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>

        {/* Bio */}
        <div>
          <label className="text-sm font-medium">Bio</label>
          <textarea
            name="bio"
            rows={3}
            value={profile.bio}
            onChange={handleChange}
            disabled={!isEditing}
            className={`mt-1 w-full rounded-lg border p-2 ${
              isEditing ? "bg-white" : "bg-gray-100"
            }`}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-6 flex gap-3">
        {isEditing ? (
          <>
            <button
              onClick={saveProfile}
              className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Save
            </button>
            <button
              onClick={cancelEdit}
              className="border px-4 py-2 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-linear-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
}
