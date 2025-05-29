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
        <iframe
    src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
    width="100%"
    height="152"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
  />
      </div>
    );
  }
  