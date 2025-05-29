"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { getUserPlaylists, getUserSavedTracks ,
  createPlaylist,
  updatePlaylist,
  removeTracksFromPlaylist,saveTrackToLibrary,
  removeTrackFromLibrary,
  checkIfTrackIsSaved,
} from "../lib/spotify";
import PlaylistCard from "../components/PlaylistCard";
import "../app/globals.css"

export default function HomePage() {
  const { data: session, status } = useSession();
  const [playlists, setPlaylists] = useState([]);
  const [savedTracks, setSavedTracks] = useState([]);
  const [showPlaylists, setShowPlaylists] = useState(true);

  const accessToken = session?.accessToken;
  const userId = session?.user?.id; 

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


   // Example: create a new playlist
   const handleCreatePlaylist = async () => {
    try {
      const newPlaylist = await createPlaylist(accessToken, userId, "New Playlist", "Created via app");
      setPlaylists((prev) => [newPlaylist, ...prev]);
    } catch (e) {
      alert(e.message);
    }
  };

  // Example: save a track to library
  const handleSaveTrack = async (trackId) => {
    try {
      await saveTrackToLibrary(accessToken, trackId);
      alert("Track saved!");
    } catch (e) {
      alert(e.message);
    }
  };

  // Example: remove a track from library
  const handleRemoveTrack = async (trackId) => {
    try {
      await removeTrackFromLibrary(accessToken, trackId);
      setTracks(tracks.filter((t) => t.track.id !== trackId));
      alert("Track removed!");
    } catch (e) {
      alert(e.message);
    }
  };


  if (status === "loading") {
    return <p className="loading">Loading...</p>;
  }

  if (!session) {
    return (
      <div className="login-container">
        

        <h1 className="login-heading">Welcome to Spotify Clone</h1>
        <button
         className="login-button"
          //onClick={() => signIn("spotify")}
          onClick={() => signIn("spotify", { callbackUrl: "/", prompt: "consent" })}
        >
          Login with Spotify
        </button>
      


      </div>
    );
  }

  return (
    <div className="home-container">
      <div className="header">
        <h2 className="username">Hello, {session.user.name}</h2>
        <button
          className="logout-button"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>

      <div className="toggle-buttons">

        <button
          className={`toggle-button ${showPlaylists ? "active" : ""}`}
          onClick={() => setShowPlaylists(true)}
        >
          Playlists
        </button>
        <button
         className={`toggle-button ${!showPlaylists ? "active" : ""}`}
          onClick={() => setShowPlaylists(false)}
        >
          Saved Tracks
        </button>
      </div>

      {showPlaylists ? (
        playlists.length === 0 ? (
          <p>You have no playlists.</p>
        ) : (
          <>  <h1 className="section-heading">📁 Your Playlists</h1>
          <div className="playlist-grid">
            {playlists.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
          </>
        )
      ) : savedTracks.length === 0 ? (
        <p>You have no saved tracks.</p>
      ) : (
        <div>
          <h1 className="section-heading">🎵 Saved Tracks</h1>
          {savedTracks.map(({ track }) => (
            <div key={track.id} className="track-card">
              <img
                src={track.album.images?.[0]?.url || "/placeholder.png"}
                alt={track.name}
                   className="track-image"
              />
              <div>
                <p className="track-name">{track.name}</p>
                <p className="track-artist">
                  {track.artists.map((a) => a.name).join(", ")}
                </p>
                <p className="track-album">{track.album.name}</p>
                <a href={track.external_urls.spotify} target="_blank" rel="noreferrer" className="spotify-link">Open in Spotify</a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
