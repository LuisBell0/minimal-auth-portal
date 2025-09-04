import { Link, useParams } from "react-router-dom";
import { LoadingComponent } from "../../components/LoadingComponent";
import { useAuthStore } from "../../stores/userStore";
import { useState } from "react";

export function ForgotPasswordUpdateScreen() {
  const { uid, token } = useParams<{ uid?: string; token?: string }>();
  const { loading, resetPassword } = useAuthStore();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    try {
      if (typeof uid === "undefined" || typeof token === "undefined") {
        throw new Error("Invalid password reset link.");
      }
      await resetPassword(uid, token, password, confirmPassword);
      setSuccessMessage(
        "Your password has been reset successfully. You can now log in with your new password."
      );
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setErrorMessage(
        err?.response?.data?.message ??
          "An unexpected error occurred trying to reset your password. Try again later."
      );
      return;
    }
  };

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <div className="text-center mb-4">
                <h1 className="text-3xl font-bold">Reset Password</h1>
                <p className="text-gray-600 text-sm mt-2">
                  Enter your new password below
                </p>
              </div>

              <div role="status" aria-live="polite" className="mb-3">
                {successMessage && (
                  <div className="p-3 bg-green-100 border border-green-200 text-green-800 rounded">
                    {successMessage}
                  </div>
                )}
                {errorMessage && (
                  <div className="p-3 bg-red-100 border border-red-200 text-red-800 rounded">
                    {errorMessage}
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded-md border-black"
                    placeholder="Enter your new password"
                    disabled={loading}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border rounded-md border-black"
                    placeholder="Re enter your new password"
                    disabled={loading}
                    required
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer"
                    disabled={loading}
                  >
                    {loading ? <LoadingComponent /> : "Set New Password"}
                  </button>
                </div>

                <p className="text-center">
                  Remembered your password?
                  <Link to="/login" className="ml-1 text-blue-600">
                    Back to Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
