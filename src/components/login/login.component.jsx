import React from "react";
import heroImage from "../../assets/images/hero-image.png"

const Login = () => {
  return (
    <div className="flex h-screen justify-center ">
      <div className=" w-1/2 h-screen">
        <img className="w-full h-screen "
          src={heroImage}
          alt="image-hero"
        />
      </div>
      <div className="w-1/2 px-20">
        <div className="mt-10 mb-14">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome to
          </h2>
          <h2 className="text-[#6C63FF] text-3xl">
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
            <div className="pb-4">
              <label
                for="email-address"
                className="sr-only"
              >
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autocomplete="email"
                required
                className="relative block w-full outline-none rounded-md text-black py-3 px-3 bg-[#F2F2F2] placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                placeholder="Email address"
              />
            </div>
            <div className="pb-4">
              <label
                for="email-address"
                className="sr-only"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full outline-none rounded-md text-black py-3 px-3 bg-[#F2F2F2] placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                placeholder="Password"
              />
            </div>

          </div>
          <div className="my-10">
            <input class="h-4 w-4 mr-2" type="checkbox" id="userRemember" />
            <label for="userRemember">Remember me</label>
            <div className="float-right">
              <a href="">
                Forgot Password?
              </a>
            </div>
          </div>
          <div className="my-10">
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-[#6C63FF] py-4 px-3 text-lg font-medium tracking-wider text-white hover:opacity-90 duration-300"
            >
              Sign up
            </button>
          </div>
          <div className="flex justify-center text-sm">
            <span>
              Don't have an account?
              <a className="text-[#6C63FF]" href="register.component.jsx">
                {""}
                Register
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login