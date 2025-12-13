import React from "react";

const LandingPage: React.FC = () => {
  return (
    <div>
      <h1>AI Learning Platform</h1>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti ex
        deleniti possimus.
      </p>

      <div>
        <button onClick={() => (window.location.href = "/signup/student")}>
          Register as a Student
        </button>

        <button onClick={() => (window.location.href = "/signup/mentor")}>
          Register as a Tutor
        </button>
      </div>

      <p>
        Already have an account?{" "}
        <span onClick={() => (window.location.href = "/login")}>Log in</span>
      </p>
    </div>
  );
};

export default LandingPage;
