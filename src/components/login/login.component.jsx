import React from "react";
import heroImage from "../../assets/images/hero-image.png";
import { Link } from "react-router-dom";

const Login = ({ data, onInput, onSubmit }) => {
  return (
    <div className="flex h-screen justify-center ">
      <div className="sm:hidden lg:block w-1/2 h-screen">
        <img className="w-full h-screen " src={heroImage} alt="image-hero" />
      </div>
      <div className="w-1/2 px-20">
        <div className="mt-10 mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome to
          </h2>
          <h2 className="text-primary text-3xl">Go Backpacking</h2>
        </div>
        <div className="-space-y-px rounded-md">
          <div className="pb-4">
            <label htmlFor="email-address" className="sr-only">
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
              value={data.email}
              onChange={(e) => onInput(e.target.name, e.target.value)}
            />
          </div>
          <div className="pb-4">
            <label htmlFor="email-address" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="relative block w-full outline-none rounded-md text-black py-3 px-3 bg-gray-primary placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
              placeholder="Password"
              value={data.password}
              onChange={(e) => onInput(e.target.name, e.target.value)}
            />
          </div>
        </div>
        <div className="my-10">
          <input className="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
          <label htmlFor="userRemember">Remember me</label>
          <div className="float-right">
            <a href="">Forgot Password?</a>
          </div>
        </div>
        <div className="my-10">
          <button
            type="submit"
            className="group relative flex w-full justify-center rounded-md bg-primary py-4 px-3 text-lg font-medium tracking-wider text-white hover:opacity-90 duration-300"
            onClick={() => onSubmit()}
          >
            Sign up
          </button>
        </div>
        <div className="flex justify-center text-sm">
          <span>
            Don't have an account?
            <Link className="text-primary" to="/register">
              {" "}
              Register
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
