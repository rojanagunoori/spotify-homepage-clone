export const getUserPlaylists = async (accessToken) => {
    const res = await fetch("https://api.spotify.com/v1/me/playlists", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!res.ok) throw new Error("Failed to fetch playlists");
  
    const data = await res.json();
    return data.items;
  };
  