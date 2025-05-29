export const getUserPlaylists = async (accessToken) => {
    const res = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!res.ok) throw new Error("Failed to fetch playlists");
  
    const data = await res.json();
    console.log("Playlists: ",data)
    return data.items;
  };


  export const  getUserSavedTracks = async (accessToken) => {
    const res = await fetch("https://api.spotify.com/v1/me/tracks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!res.ok) throw new Error("Failed to fetch playlists");
  
    const data = await res.json();
    console.log("Tracks: ", data);
    return data.items;
  };




  export const createPlaylist = async (accessToken, userId, name, description) => {
    const res = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
        public: false,
      }),
    });
  
    if (!res.ok) throw new Error("Failed to create playlist");
  
    return res.json();
  };
  
  export const updatePlaylist = async (accessToken, playlistId, name, description) => {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
  
    if (!res.ok) throw new Error("Failed to update playlist");
  };

  
  export const removeTracksFromPlaylist = async (accessToken, playlistId, trackUris) => {
    const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tracks: trackUris.map((uri) => ({ uri })),
      }),
    });
  
    if (!res.ok) throw new Error("Failed to remove tracks from playlist");
  };


  export const saveTrackToLibrary = async (accessToken, trackId) => {
    const res = await fetch(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!res.ok) throw new Error("Failed to save track to library");
  };
  

  export const removeTrackFromLibrary = async (accessToken, trackId) => {
    const res = await fetch(`https://api.spotify.com/v1/me/tracks?ids=${trackId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!res.ok) throw new Error("Failed to remove track from library");
  };

  
  export const checkIfTrackIsSaved = async (accessToken, trackId) => {
    const res = await fetch(`https://api.spotify.com/v1/me/tracks/contains?ids=${trackId}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!res.ok) throw new Error("Failed to check track");
  
    const data = await res.json();
    return data[0]; // true or false
  };
  
  