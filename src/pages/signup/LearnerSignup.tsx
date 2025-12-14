import React, { useMemo, useState } from "react";

// this type describes the shape of the learner signup form data
export type LearnerSignupForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  cohort?: string;
};

// props the component expects
// onnext is a function passed down from app.tsx
// it tells the app when this step is finished
interface Props {
  onNext: (data: LearnerSignupForm) => void;
}

// defines an object type where each field from LearnerSignupForm can optionally have a string error message associated with it.
type FieldErrors = Partial<Record<keyof LearnerSignupForm, string>>;

export default function LearnerSignup({ onNext }: Props) {
  // local state to store what the user types into the form
  const [form, setForm] = useState<LearnerSignupForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    cohort: "",
  });

  // local state to store simple error messages
  const [errors, setErrors] = useState<FieldErrors>({});
  const [showPw, setShowPw] = useState(false);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  // this function checks the form and returns any errors
  const validate = (data: LearnerSignupForm): FieldErrors => {
    const next: FieldErrors = {};

    if (!data.fullName.trim()) next.fullName = "Full name is required.";
    if (!data.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(data.email)) next.email = "Enter a valid email.";

    if (!data.password) next.password = "Password is required.";
    else if (data.password.length < 3)
      next.password = "Password must be at least 3 characters.";

    if (!data.confirmPassword)
      next.confirmPassword = "Please confirm password.";
    else if (data.password !== data.confirmPassword)
      next.confirmPassword = "Passwords do not match.";

    return next;
  };

  // sshow a subtle hint
  const hasErrors = useMemo(
    () => Object.keys(validate(form)).length > 0,
    [form]
  );

  // updates form state whenever the user types
  const onChange =
    (key: keyof LearnerSignupForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  // runs when the user clicks the next button
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // check for errors
    const validationErrors = validate(form);
    setErrors(validationErrors);
    // if there are errors, stop here
    if (Object.keys(validationErrors).length > 0) return;
    // if everything is valid, send the data to the parent
    // app.tsx will handle navigation to alumni preferences
    onNext(form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 text-center">
          Learner Sign Up
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Create your account to continue
        </p>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Full Name</label>
            <input
              value={form.fullName}
              onChange={onChange("fullName")}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.fullName && (
              <p className="text-red-500 mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Email</label>
            <input
              value={form.email}
              onChange={onChange("email")}
              type="email"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Cohort (Optional)</label>
            <input
              value={form.cohort}
              onChange={onChange("cohort")}
              placeholder="Per Scholas - 2025"
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Password</label>
            <div className="relative">
              <input
                value={form.password}
                onChange={onChange("password")}
                type={showPw ? "text" : "password"}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-gray-700">Confirm Password</label>
            <input
              value={form.confirmPassword}
              onChange={onChange("confirmPassword")}
              type={showPw ? "text" : "password"}
              className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Button always clickable for demo; validation happens on submit */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md"
          >
            Next
          </button>

          {hasErrors && (
            <p className="text-xs text-gray-500 text-center">
              Tip: shortened to 3+ chars for demo.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
