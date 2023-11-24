import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Error</h1>
        <p className="text-gray-600 mb-6">Oops! Something went wrong.</p>
        <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Go to Home Page
        </button>
      </Link>
      </div>
    </div>
  );
}

export default ErrorPage;