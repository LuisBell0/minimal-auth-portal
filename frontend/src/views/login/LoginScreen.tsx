import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../stores/userStore";
import { useState } from "react";
import { LoadingComponent } from "../../components/LoadingComponent";

export function LoginScreen() {
  const { signIn, loading } = useAuthStore();
  const navigate = useNavigate();
  const [email, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch {
      setErrorMessage("Invalid email or password. Please try again.");
    }
  }

  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen px-4 text-black">
          <div className="w-full max-w-md">
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <div className="text-center mb-4">
                <h1 className="text-4xl font-bold">Minimal Auth Portal</h1>
              </div>

              <div role="status" aria-live="polite" className="mb-3">
                {errorMessage && (
                  <div className="p-3 bg-red-100 border border-red-200 text-red-800 rounded">
                    {errorMessage}
                  </div>
                )}
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="w-full p-2 border rounded-md border-black"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    name="password"
                    type="password"
                    className="w-full p-2 border rounded-md border-black"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="w-full bg-green-500 text-white py-2 rounded-md cursor-pointer"
                    type="submit"
                    value="Log In"
                  />
                </div>
                <p className="text-center">
                  Forgot Password?{" "}
                  <Link to="/forgot" className="">
                    Click here
                  </Link>
                </p>
                <p className="text-center">
                  Don't have an account? <Link to="/signup">Sign Up Here</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
