import { Link } from "react-router-dom";

export function NotFoundScreen() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-white text-gray-800"
      role="main"
      aria-labelledby="notfound-title"
    >
      <div className="max-w-lg text-center px-6 py-12">
        <div className="mx-auto w-40 h-40 flex items-center justify-center rounded-full bg-gray-100">
          {/* simple SVG illustration */}
          <svg
            width="70"
            height="70"
            viewBox="0 0 24 24"
            aria-hidden
            focusable={false}
            className="text-gray-400"
          >
            <path fill="currentColor" d="M11 9h2v6h-2zM11 17h2v2h-2z" />
            <path
              fill="currentColor"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
            />
          </svg>
        </div>

        <h1 id="notfound-title" className="mt-8 text-3xl font-semibold">
          Page not found
        </h1>
        <p className="mt-3 text-sm text-gray-600">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <Link
            to="/login"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 bg-white text-sm shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-500 text-white text-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Go back
          </button>
        </div>

        <p className="mt-6 text-xs text-gray-400">
          If you think this is an error, contact support.
        </p>
      </div>
    </main>
  );
}
