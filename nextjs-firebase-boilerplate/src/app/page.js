import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Custom Background Image placeholder commented out for now */}

      {/* Opaque Module for Login and Register with margin-left */}
      <div className="flex min-h-screen items-center justify-start pl-20 bg-gray-900 bg-opacity-20 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-lg bg-gray-800 bg-opacity-50 p-8 shadow-xl">
          {/* Login Section */}
          <h2 className="text-3xl font-bold text-white">Welcome back</h2>
          <p className="mt-2 text-sm text-gray-300">Please Enter your Account details</p>
          <form className="mt-6 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 w-full rounded-md bg-gray-700 bg-opacity-50 border-transparent focus:border-indigo-500 focus:bg-gray-600 focus:ring-0"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                className="mt-1 w-full rounded-md bg-gray-700 bg-opacity-50 border-transparent focus:border-indigo-500 focus:bg-gray-600 focus:ring-0"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="h-4 w-4 rounded text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-300">
                  Keep me logged in
                </label>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" legacyBehavior>
                  <a className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot Password?
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          {/* Register Section */}
          <div className="mt-6">
            <Link href="/signup" legacyBehavior>
              <a className="block w-full rounded-md py-2 px-4 text-center text-sm font-medium text-indigo-600 bg-white shadow-sm hover:bg-gray-100">
                Register
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}