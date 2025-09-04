import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../../stores/userStore";
import { LoadingComponent } from "../../components/LoadingComponent";

export function SignUpScreen() {
  const { signUp, loading } = useAuthStore();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    try {
      await signUp(username, email, password, confirmPassword);
      setSuccessMessage(
        "Your account is waiting for activation. Please check your email."
      );
      setEmail("");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setErrorMessage(
        err?.response?.data?.message ??
          "An unexpected error occurred trying to create you account. Try again later."
      );
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
                <h1 className="text-4xl font-bold">Create an Account</h1>
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
                <div className="grid grid-flow-col grid-rows-4 sm:grid-rows-2 gap-4">
                  <div className="">
                    <input
                      name="email"
                      type="email"
                      className="w-full p-2 border rounded-md"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      name="username"
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      name="password"
                      type="password"
                      className="w-full p-2 border rounded-md"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="">
                    <input
                      name="password2"
                      type="password"
                      className="w-full p-2 border rounded-md"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="my-3">
                  <input
                    className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
                <p className="text-center">
                  Already have an account? <Link to="/login">Log In </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
