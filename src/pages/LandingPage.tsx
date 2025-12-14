import React from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/hero1.jpg";
import { GraduationCap, Users, LayoutList } from "lucide-react";
import LandingNav from "../components/common/LandingNav";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100 via-indigo-50 to-purple-200">
      <LandingNav />

      {/* full-width white hero section */}
      <section className="bg-white">
        {/* full-width hero image */}
        <img
          src={heroImage}
          alt="Students learning together"
          className="w-full h-80 sm:h-105 md:h-130 object-cover"
        />

        {/* centered hero content */}
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Learn Faster. Teach Smarter.
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            A community-driven learning platform connecting learners with
            alumnimentors through AI-powered assistance, intelligent matching,
            and structured, real-world guidance.
          </p>

          {/* primary ctas */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/signup/account")}
              className="px-8 py-4 rounded-xl text-lg font-semibold text-white bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition"
            >
              Register as a Learner
            </button>

            <button
              onClick={() => navigate("/alumni/account")}
              className="px-8 py-4 rounded-xl text-lg font-semibold text-indigo-700 bg-white border border-indigo-200 hover:bg-indigo-50 transition"
            >
              Register as an Alumni
            </button>
          </div>
        </div>
      </section>

      {/* gap beneath the hero */}
      <div className="h-10 sm:h-14" />

      {/* info cards */}
      <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* learner card */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-indigo-600 my-4">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 my-3">
            For Learners
          </h3>

          <p className="text-gray-600">
            Get matched with alumni mentors, set learning goals, and move at a
            pace that works for your schedule.
          </p>
        </div>

        {/* alumni card */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-indigo-600 my-4">
            <Users className="h-7 w-7 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 my-3">
            For Alumni
          </h3>

          <p className="text-gray-600">
            Give back by mentoring learners, sharing industry experience, and
            helping the next generation grow.
          </p>
        </div>

        {/* learning card */}
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-md p-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-purple-600 to-indigo-600 my-4">
            <LayoutList className="h-7 w-7 text-white" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 my-3">
            Structured Learning
          </h3>

          <p className="text-gray-600">
            Clear onboarding, preferences-based matching, and dashboards built
            for focus and accountability.
          </p>
        </div>
      </div>
    </div>
  );
}
