'use client'
import signIn from "@/firebase/auth/signIn";

import Image from 'next/image';

import Link from 'next/link';
import { useState} from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {

  const [ email, setEmail ] = useState( '' );
  const [ password, setPassword ] = useState( '' );
  const router = useRouter();

  // Handle form submission
  const handleForm = async (event) => {
    event.preventDefault();

    // Attempt to sign in with provided email and password
    const { result, error } = await signIn( email, password );

    if ( error ) {
      // Display and log any sign-in errors
      console.log( error );
      return;
    }

    // Sign in successful
    console.log( result );

    // Redirect to the admin page
    // Typically you would want to redirect them to a protected page an add a check to see if they are admin or 
    // create a new page for admin
    router.push( "/admin" );
  }
  return (
    <main className="relative min-h-screen bg-white dark:bg-gray-900">
      {/* Custom Background Image placeholder commented out for now */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rendesvous.jpg"
          alt="UCLA Rendezvous Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      {/* Opaque Module for Login and Register with margin-left */}
      <div className="flex min-h-screen items-center justify-end pr-20 bg-gray-900 bg-opacity-20 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-lg bg-gray-800 bg-opacity-50 p-8 shadow-xl">
          {/* Login Section */}
          <div className="relative h-[100px] w-[100px] items-center justify-center ">
  <Image
    src="/images/bruindashlogo.png"
    alt="Bruin Dash Logo"
    layout="fill"
    objectFit="contain"
    quality={100}
    priority
  />
</div>
          <h2 className="text-3xl font-bold text-white">Welcome back to BruinDash</h2>
          

                  
          <p className="mt-2 text-sm text-gray-300"></p>
          <form onSubmit={handleForm} className="mt-6 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
              onChange={( e ) => setEmail( e.target.value )}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <input
              onChange={( e ) => setPassword( e.target.value )}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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