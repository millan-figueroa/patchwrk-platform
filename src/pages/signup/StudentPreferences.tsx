import React from "react";

interface Props {
  initialData: any;
  onNext: (preferences: any) => void;
}

const StudentPreferences: React.FC<Props> = ({ initialData, onNext }) => {
  return (
    <div>
      <h1>Student Preferences (Placeholder)</h1>
      <p>Account info so far:</p>
      <pre>{JSON.stringify(initialData, null, 2)}</pre>
      <button onClick={() => onNext({ subjects: ["Placeholder"] })}>
        Continue to Dashboard
      </button>
    </div>
  );
};

export default StudentPreferences;
