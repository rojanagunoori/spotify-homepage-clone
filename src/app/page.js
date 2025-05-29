"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserPlaylists, getUserSavedTracks } from "../lib/spotify";
import PlaylistCard from "../components/PlaylistCard";

export default function HomePage() {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [savedTracks, setSavedTracks] = useState([]);
  const [showPlaylists, setShowPlaylists] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (session?.accessToken) {
        try {
          const playlistsData = await getUserPlaylists(session.accessToken);
          setPlaylists(playlistsData);

          const tracksData = await getUserSavedTracks(session.accessToken);
          setSavedTracks(tracksData);
        } catch (err) {
          console.error("Error loading data:", err);
        }
      }
    };
    fetchData();
  }, [session]);

  if (status === "loading") {
    return <p className="p-6 text-white">Loading...</p>;
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
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
    <div className="p-6 text-white bg-black min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Hello, {session.user.name}</h2>
        <button
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>

      <div className="mb-6">
        <button
          className={`mr-4 px-4 py-2 rounded ${
            showPlaylists ? "bg-green-600" : "bg-gray-700"
          }`}
          onClick={() => setShowPlaylists(true)}
        >
          Playlists
        </button>
        <button
          className={`px-4 py-2 rounded ${
            !showPlaylists ? "bg-green-600" : "bg-gray-700"
          }`}
          onClick={() => setShowPlaylists(false)}
        >
          Saved Tracks
        </button>
      </div>

      {showPlaylists ? (
        playlists.length === 0 ? (
          <p>You have no playlists.</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        )
      ) : savedTracks.length === 0 ? (
        <p>You have no saved tracks.</p>
      ) : (
        <div>
          {savedTracks.map(({ track }) => (
            <div key={track.id} className="flex items-center mb-4 p-2 bg-gray-800 rounded">
              <img
                src={track.album.images?.[0]?.url || "/placeholder.png"}
                alt={track.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div>
                <p className="font-semibold">{track.name}</p>
                <p className="text-sm text-gray-400">
                  {track.artists.map((a) => a.name).join(", ")}
                </p>
                <p className="text-xs text-gray-500">{track.album.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
