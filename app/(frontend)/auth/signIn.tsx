"use client";
import { authClient } from "@/lib/auth-client";
// import { social } from "@/server-actions/auth";
// import { isRedirectError } from "next/dist/client/components/redirect-error";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignIn = () => {
  const [signIn, setSignIn] = useState(false);
  const [isSigning, setIsSigning] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // social handler
  // const handleSocialAuth = async (provider: "github" | "google") => {
  //   try {
  //     await social(provider);
  //   } catch (error: unknown) {
  //     if (isRedirectError(error)) {
  //       throw error;
  //     }
  //     console.error("Error Signing using social: ", error);
  //     const errMessage =
  //       error instanceof Error
  //         ? error.message
  //         : "Error signing in with socials";
  //     toast.error(errMessage);
  //   }
  // };

  // email & pass handler
  const handleEmailAuth = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSigning(true);
      if (signIn) {
        const { error } = await authClient.signUp.email({
          email,
          password,
          name,
          callbackURL: "/dashboard",
        });
        if (error) toast.error(error?.message || "Error Signing Up");
      } else {
        const { error } = await authClient.signIn.email({
          email,
          password,
          callbackURL: "/dashboard",
        });
        if (error) toast.error(error?.message || "Error loging In");
      }
    } catch (error: unknown) {
      console.error("Error signing in using handle_email_auth: ", error);
      const errMessage =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error(errMessage);
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <div className="w-full max-w-130 flex items-center justify-center mx-auto min-h-[calc(100vh-148px)]">
      <div className="w-full bg-zinc-200 p-2 md:p-4">
        <h1 className="text-2xl font-bold text-center">
          {signIn ? "Create Account" : "Sign In"}
        </h1>
        <h2 className="text-[1rem] font-light text-center">
          {signIn ? "Sign up to access services" : "Login to access services"}
        </h2>
        {/* social auth */}
        {/* <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-3">
          <button
            onClick={() => handleSocialAuth("google")}
            className="border flex items-center justify-center bg-zinc-50 border-zinc-400 rounded-sm py-2 w-full md:w-1/2 cursor-pointer"
          >
            <FaGoogle />
          </button>
          <button
            onClick={() => handleSocialAuth("github")}
            className="border flex items-center justify-center bg-gray-700 rounded-sm border-zinc-700 py-2 w-full md:w-1/2 cursor-pointer"
          >
            <FaGithub className="text-zinc-50" />
          </button>
        </div> */}
        {/* email & pass auth */}
        <form onSubmit={handleEmailAuth}>
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              className="border border-zinc-400 bg-zinc-100 outline-none w-full px-3 py-2 rounded-sm"
            />
          </div>

          <button
            disabled={isSigning}
            className="w-full py-2 border border-zinc-400 mt-5 bg-amber-500 rounded-sm font-semibold text-zinc-50"
          >
            {signIn ? (
              isSigning ? (
                "Creating Account"
              ) : (
                "Create Account"
              )
            ) : isSigning ? (
              <span className="flex items-center justify-center">
                <span className="mr-3 size-5 animate-spin inline-block w-5 h-5 border-5 border-white/50 border-t-white/90 rounded-full"></span>
                <span>Logging</span>
              </span>
            ) : (
              "Login"
            )}
          </button>
          <div className="mt-3 text-center">
            <p>
              {signIn ? (
                <span>Already have an account? </span>
              ) : (
                <span>Don&apos;t have an account? </span>
              )}

              <span
                className="text-amber-600 cursor-pointer"
                // onClick={() => setIsSignIn((pre) => !pre)}
              >
                {signIn ? "Login" : "SignUp"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
