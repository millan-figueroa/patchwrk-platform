import { useMemo, useState } from "react";

type StudentSignupForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  cohort?: string;
};

type FieldErrors = Partial<Record<keyof StudentSignupForm, string>>;

export default function SignupStudent() {
  const [form, setForm] = useState<StudentSignupForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    cohort: "",
  });

  const [errors, setErrors] = useState<FieldErrors>({});
  const [showPw, setShowPw] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const validate = (data: StudentSignupForm): FieldErrors => {
    const next: FieldErrors = {};

    if (!data.fullName.trim()) next.fullName = "Full name is required.";
    if (!data.email.trim()) next.email = "Email is required.";
    else if (!isValidEmail(data.email)) next.email = "Enter a valid email.";

    if (!data.password) next.password = "Password is required.";
    else if (data.password.length < 8)
      next.password = "Password must be at least 8 characters.";

    if (!data.confirmPassword) next.confirmPassword = "Please confirm password.";
    else if (data.password !== data.confirmPassword)
      next.confirmPassword = "Passwords do not match.";

    return next;
  };

  const canSubmit = useMemo(() => {
    const e = validate(form);
    return Object.keys(e).length === 0 && !isSubmitting;
  }, [form, isSubmitting]);

  const onChange =
    (key: keyof StudentSignupForm) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setForm((prev) => ({ ...prev, [key]: value }));
      // clear error as user edits that field
      setErrors((prev) => ({ ...prev, [key]: undefined }));
      setServerMessage(null);
    };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerMessage(null);

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    try {
      // ✅ Replace this with your real endpoint later
      // Example:
      // const res = await fetch("/api/auth/signup-student", { ... })

      await new Promise((r) => setTimeout(r, 600)); // fake delay

      setServerMessage("Account created! You can log in now.");
      setForm({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        cohort: "",
      });
    } catch (err) {
      setServerMessage("Signup failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold">Student Sign Up</h1>
        <p className="text-gray-600 mt-1">
          Create your PeerTrack+ learner account.
        </p>

        {serverMessage && (
          <div className="mt-4 rounded-lg border bg-gray-50 p-3 text-sm text-gray-700">
            {serverMessage}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-5 space-y-4">
          {/* Full Name */}
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              value={form.fullName}
              onChange={onChange("fullName")}
              className="mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring"
              placeholder="Jane Doe"
              autoComplete="name"
            />
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              value={form.email}
              onChange={onChange("email")}
              className="mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring"
              placeholder="jane@email.com"
              autoComplete="email"
              inputMode="email"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Cohort (Optional) */}
          <div>
            <label className="text-sm font-medium">Cohort (optional)</label>
            <input
              value={form.cohort ?? ""}
              onChange={onChange("cohort")}
              className="mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring"
              placeholder="Per Scholas - 2025"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium">Password</label>
            <div className="mt-1 flex gap-2">
              <input
                value={form.password}
                onChange={onChange("password")}
                className="w-full rounded-lg border p-2 focus:outline-none focus:ring"
                placeholder="********"
                type={showPw ? "text" : "password"}
                autoComplete="new-password"
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="rounded-lg border px-3 text-sm hover:bg-gray-50"
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium">Confirm Password</label>
            <input
              value={form.confirmPassword}
              onChange={onChange("confirmPassword")}
              className="mt-1 w-full rounded-lg border p-2 focus:outline-none focus:ring"
              placeholder="********"
              type={showPw ? "text" : "password"}
              autoComplete="new-password"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-lg bg-blue-600 text-white py-2 font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
          </button>

          <p className="text-sm text-gray-600 text-center">
            Already have an account?{" "}
            <a className="text-blue-600 hover:underline" href="/login">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
