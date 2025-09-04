import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuthStore } from "../../stores/userStore";
import { LoadingComponent } from "../../components/LoadingComponent";
import { useState } from "react";

export function ActivateAccountScreen() {
  const { uid, token } = useParams<{ uid?: string; token?: string }>();
  const navigate = useNavigate();
  const { activateAccount, loading } = useAuthStore();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const activate = async () => {
    setError(null);
    setMessage(null);
    try {
      if (!uid || !token) {
        setError("Invalid activation link.");
        return;
      }
      await activateAccount(uid, token);
      setSuccess(true);
      setMessage(
        "Your account has been activated successfully. You will be redirected to the login page."
      );
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } catch (err: any) {
      setError(
        err?.response?.data?.message ??
          "An unexpected error occurred trying to activate your account. Try again later or request a new activation link."
      );
      setSuccess(false);
      return;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 shadow-lg rounded-lg text-center">
          {loading ? (
            <div className="py-8">
              <LoadingComponent />
              <p className="mt-3 text-gray-600">Activate your account</p>
            </div>
          ) : success ? (
            <>
              <h1 className="text-3xl font-bold mb-4">Account Activated 🎉</h1>
              <p className="text-gray-600 mb-6">
                {message ?? "Your email has been verified. You can now log in."}
              </p>

              <Link
                to="/login"
                className="block w-full bg-green-500 !no-underline !text-white py-2 rounded-md cursor-pointer"
              >
                Go to Login
              </Link>

              <p className="text-sm text-gray-500 mt-3">
                You will be redirected automatically in a few seconds.
              </p>
            </>
          ) : (
            <>
              <h1 className="text-2xl font-semibold mb-2">Activate account</h1>
              <p className="text-gray-600 mb-4">
                {error
                  ? "We couldn't activate your account."
                  : "Click the button below to activate your account."}
              </p>

              <div role="status" aria-live="polite" className="mb-4">
                {error && (
                  <div className="p-3 bg-red-100 border border-red-200 text-red-800 rounded">
                    {error}
                  </div>
                )}
                {message && (
                  <div className="p-3 bg-green-100 border border-green-200 text-green-800 rounded">
                    {message}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => activate()}
                  disabled={loading}
                  className="w-full bg-green-500 text-white py-2 rounded-md"
                >
                  Activate
                </button>

                <Link
                  to="/login"
                  className="text-sm text-gray-600 underline mt-2"
                >
                  Back to login
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
