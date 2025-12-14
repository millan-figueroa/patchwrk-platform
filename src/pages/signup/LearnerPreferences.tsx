import React from "react";

interface Props {
  initialData: any;
  onNext: (preferences: any) => void;
  learnerData: string;
}

const LearnerPreferences: React.FC<Props> = ({ learnerData, onNext }) => {
  return (
    <div>
      <h1>Learner Preferences (Placeholder)</h1>
      <p>Account info so far:</p>
      <pre>{JSON.stringify(learnerData, null, 2)}</pre>
      <button onClick={() => onNext({ subjects: ["Placeholder"] })}>
        Continue to Dashboard
      </button>
    </div>
  );
};

export default LearnerPreferences;
