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



  export async function getUserSavedTracks(accessToken) {
    console.log(accessToken)
    const response = await fetch("https://api.spotify.com/v1/me/tracks", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response)
    if (!response.ok) {
     
      throw new Error("Failed to fetch saved tracks",response);
    }
    const data = await response.json();
    console.log("Tracks: ",Tracks)
    return data.items; // Each item contains { track: {...} }
  }
  
  