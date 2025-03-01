import { Link } from "@remix-run/react";
import { FiArrowRight } from "react-icons/fi";

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-gray-800 bg-gray-900 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <h1 className="text-2xl font-bold text-blue-500">AI Learning Platform</h1>
          <nav>
            <Link 
              to="/login"
              className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            >
              Sign In
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto flex-1 px-4 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Master AI Development
          </h2>
          <p className="mb-8 text-xl text-gray-400">
            Learn AI development through interactive courses with hands-on coding exercises
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
          >
            Browse Courses
            <FiArrowRight />
          </Link>
        </div>

        <div className="mt-24 grid gap-12 md:grid-cols-3">
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Interactive Learning</h3>
            <p className="text-gray-400">
              Learn by doing with our interactive code editor and real-time feedback
            </p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Structured Curriculum</h3>
            <p className="text-gray-400">
              Follow a carefully designed learning path from basics to advanced topics
            </p>
          </div>
          <div className="rounded-lg border border-gray-800 bg-gray-900 p-6">
            <h3 className="mb-3 text-xl font-semibold">Track Progress</h3>
            <p className="text-gray-400">
              Monitor your learning progress and earn certificates as you advance
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
