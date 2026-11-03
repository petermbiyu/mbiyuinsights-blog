"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [signIn, setSignIn] = useState(true);
  return (
    <div className="w-130 flex items-center justify-center mx-auto min-h-[calc(100vh-70px)]">
      <div className="w-full bg-zinc-200 p-4">
        <h1 className="text-2xl font-bold text-center">
          {signIn ? "Create Account" : "Sign In"}
        </h1>
        <h2 className="text-[1rem] font-light text-center">
          {signIn ? "Sign up to access services" : "Login to access services"}
        </h2>
        <form>
          <div className="flex items-center justify-center gap-2 mt-3">
            <button className="border flex items-center justify-center bg-zinc-50 border-zinc-400 rounded-sm py-2 w-1/2 cursor-pointer">
              <FaGoogle />
            </button>
            <button className="border flex items-center justify-center bg-gray-700 rounded-sm border-zinc-700 py-2 w-1/2 cursor-pointer">
              <FaGithub className="text-zinc-50" />
            </button>
          </div>
          <h2 className="text-[1rem] font-light text-center mt-3">
            Or continue with
          </h2>
          {signIn && (
            <div className="mt-1">
              <label htmlFor="name" className="font-semibold">
                Full Name:
              </label>
              <br />
              <input
                type="text"
                placeholder="Type here.."
                id="name"
                className="border border-zinc-400 bg-zinc-100 outline-none w-full px-3 py-2 rounded-sm"
              />
            </div>
          )}
          <div className="mt-3">
            <label htmlFor="email" className="font-semibold">
              Email:
            </label>
            <br />
            <input
              type="email"
              placeholder="Type here.."
              id="email"
              className="border border-zinc-400 bg-zinc-100 outline-none w-full px-3 py-2 rounded-sm"
            />
          </div>
          <div className="mt-3">
            <label htmlFor="password" className="font-semibold">
              Password:
            </label>
            <br />
            <input
              type="password"
              placeholder="Type here.."
              id="password"
              className="border border-zinc-400 bg-zinc-100 outline-none w-full px-3 py-2 rounded-sm"
            />
          </div>
          {signIn && (
            <div className="mt-3">
              <label htmlFor="repeat-password" className="font-semibold">
                Repeat Password:
              </label>
              <br />
              <input
                type="password"
                placeholder="Type here.."
                id="repeat-password"
                className="border border-zinc-400 bg-zinc-100 outline-none w-full px-3 py-2 rounded-sm"
              />
            </div>
          )}

          <button className="w-full py-2 border border-zinc-400 mt-5 bg-amber-500 rounded-sm font-semibold text-zinc-50">
            Create Account
          </button>
          <div className="mt-3 text-center">
            <p>
              {signIn ? (
                <span>Already have an account? </span>
              ) : (
                <span>Don't have an account? </span>
              )}

              <span
                className="text-amber-600 cursor-pointer"
                onClick={() => setSignIn((pre) => !pre)}
              >
                {signIn ? "SignUp" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
