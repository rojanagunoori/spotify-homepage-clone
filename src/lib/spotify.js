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