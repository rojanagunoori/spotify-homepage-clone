export default function PlaylistCard({ playlist }) {
    return (
      <div className="playlist-card">
        {playlist.images?.[0]?.url && (
          <img
            src={playlist.images[0].url}
            alt={playlist.name}
            className="playlist-image"
          />
        )}
        <h3 className="playlist-name">{playlist.name}</h3>
        <p className="playlist-owner">By {playlist.owner.display_name}</p>
        <p className="playlist-tracks">{playlist.tracks.total} tracks</p>
        <a href={playlist.external_urls.spotify} target="_blank" rel="noreferrer"  className="playlist-link">Open Playlist</a>
      </div>
    );
  }
  