"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="login-container">
      <h1 className="login-heading">Login to Spotify Clone</h1>
      <button
       className="login-button"
       onClick={() => signIn("spotify", { callbackUrl: "/", prompt: "consent" })}

      >
        Sign In with Spotify
      </button>
    </div>
  );
}
