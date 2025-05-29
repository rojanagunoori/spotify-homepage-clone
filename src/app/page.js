"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserPlaylists } from "../lib/spotify";
import PlaylistCard from "../components/PlaylistCard";

export default function HomePage() {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      if (session?.accessToken) {
        try {
          const data = await getUserPlaylists(session.accessToken);
          setPlaylists(data);
        } catch (err) {
          console.error("Error loading playlists:", err);
        }
      }
    };

    fetchPlaylists();
  }, [session]);

  if (status === "loading") {
    return <p className="p-6 text-white">Loading...</p>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-2xl mb-4">Welcome to Spotify Clone</h1>
        <button
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
          onClick={() => signIn("spotify")}
        >
          Login with Spotify
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 text-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Hello, {session.user.name}</h2>
        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
}
