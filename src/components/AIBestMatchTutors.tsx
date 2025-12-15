import { Star, Clock, MessageCircle } from "lucide-react";

type TutorMatch = {
  id: string;
  name: string;
  expertise: string[];
  rating: number;
  totalSessions: number;
  profileImage: string;
  matchScore: number;
  availableIn: string;
  hourlyRate: number;
  bio: string;
  responseTime: string;
};

const aiMatchedTutors: TutorMatch[] = [
  {
    id: "1",
    name: "Sarah Chen",
    expertise: ["React", "TypeScript", "JavaScript", "Frontend Development"],
    rating: 4.9,
    totalSessions: 324,
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b5a9?w=150&h=150&fit=crop&crop=face",
    matchScore: 98,
    availableIn: "2 hours",
    hourlyRate: 45,
    bio: "Frontend specialist with 6+ years experience at tech companies",
    responseTime: "Usually responds in 15 minutes"
  },
  {
    id: "2", 
    name: "Marcus Johnson",
    expertise: ["Python", "Data Science", "Machine Learning", "SQL"],
    rating: 4.8,
    totalSessions: 256,
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    matchScore: 95,
    availableIn: "4 hours",
    hourlyRate: 55,
    bio: "Data scientist helping students master Python and ML concepts",
    responseTime: "Usually responds in 30 minutes"
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    expertise: ["Node.js", "Express", "MongoDB", "Backend Development"],
    rating: 4.9,
    totalSessions: 189,
    profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    matchScore: 92,
    availableIn: "1 hour",
    hourlyRate: 50,
    bio: "Backend engineer passionate about teaching server-side development",
    responseTime: "Usually responds in 10 minutes"
  }
];

export default function AIBestMatchTutors() {
  return (
    <section className="mt-6 bg-white rounded-xl shadow p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">🤖 AI Best Match Tutors</h2>
        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
          Powered by AI
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-6">
        Based on your learning history and current needs, these tutors are perfect matches for you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {aiMatchedTutors.map((tutor) => (
          <div
            key={tutor.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
          >
            {/* Header with photo and basic info */}
            <div className="flex items-start space-x-3 mb-3">
              <img
                src={tutor.profileImage}
                alt={`${tutor.name} profile`}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-gray-900 truncate">{tutor.name}</h3>
                <div className="flex items-center space-x-1 mt-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600">{tutor.rating}</span>
                  <span className="text-xs text-gray-400">({tutor.totalSessions} sessions)</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                  {tutor.matchScore}% match
                </div>
              </div>
            </div>

            {/* Bio */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{tutor.bio}</p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {tutor.expertise.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
              {tutor.expertise.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{tutor.expertise.length - 3} more
                </span>
              )}
            </div>

            {/* Availability and rate */}
            <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>Available in {tutor.availableIn}</span>
              </div>
              <div className="font-medium text-gray-900">
                ${tutor.hourlyRate}/hr
              </div>
            </div>

            {/* Response time */}
            <div className="flex items-center space-x-1 text-xs text-gray-500 mb-4">
              <MessageCircle className="w-3 h-3" />
              <span>{tutor.responseTime}</span>
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              <button className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">
                Connect Now
              </button>
              <button className="px-3 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View all tutors link */}
      <div className="mt-6 text-center">
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View All Matched Tutors →
        </button>
      </div>
    </section>
  );
}