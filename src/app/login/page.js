"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-2xl mb-4">Login to Spotify Clone</h1>
      <button
        className="bg-green-500 px-4 py-2 rounded"
       // onClick={() => signIn("spotify")}
       onClick={() => signIn("spotify", { callbackUrl: "/", prompt: "consent" })}

      >
        Sign In with Spotify
      </button>
    </div>
  );
}
