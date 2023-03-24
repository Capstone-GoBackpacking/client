import React from "react"
import heroImage from "../../assets/images/hero-image.png"
import { Link } from "react-router-dom"

const Register = () => {
  return (
    <div className="flex h-screen justify-center">
      <img
        src={heroImage}
        className="w-2/4 h-screen hidden lg:block"
        alt="image-hero"
      />
      <div className="w-screen lg:w-2/4 lg:px-20 px-8">
        <div className="mt-10 mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome to
          </h2>
          <h2 className="text-primary text-3xl">
            Go Backpacking
          </h2>
        </div>
        <form action="#" method="POST">
          <input
            type="hidden"
            name="remember"
            value="true"
          />

          <div className="-space-y-px rounded-md">
            <div className="lg:flex">
              <div className="lg:w-1/2 lg:pr-4 pb-4">
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="relative block w-full outline-none rounded-md text-black py-3 px-3 bg-gray-primary placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                  placeholder="First Name"
                />
              </div>
              <div className="lg:w-1/2">
                <label htmlFor="lastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="relative block w-full outline-none rounded-md text-black py-3 px-3 bg-gray-primary placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="pb-4">
              <label
                htmlFor="email-address"
                className="sr-only"
              >
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full outline-none rounded-md text-black py-3 px-3 bg-gray-primary placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
            </div>
            <div className="pb-4">
              <label
                htmlFor="email-address"
                className="sr-only"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full outline-none rounded-md text-black py-3 px-3 bg-gray-primary placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                placeholder="Password"
              />
            </div>
            <div className="pb-4">
              <label htmlFor="password" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                required
                className="relative block w-full outline-none rounded-md text-black py-3 px-3 bg-gray-primary placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div className="my-10">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-primary py-4 px-3 text-lg font-medium tracking-wider text-white hover:opacity-90 duration-300"
            >
              Sign up
            </button>
          </div>
          <div className="flex justify-center text-sm">
            <span>
              Already have an account?{' '}
              <Link to='/login' className="text-primary">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
