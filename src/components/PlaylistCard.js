export default function PlaylistCard({ playlist }) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg shadow hover:bg-gray-700 transition">
        {playlist.images?.[0]?.url && (
          <img
            src={playlist.images[0].url}
            alt={playlist.name}
            className="rounded w-full h-48 object-cover mb-2"
          />
        )}
        <h3 className="font-bold">{playlist.name}</h3>
        <p className="text-gray-400 text-sm">By {playlist.owner.display_name}</p>
        <p className="text-sm text-gray-400">{playlist.tracks.total} tracks</p>
        <a href={playlist.external_urls.spotify} target="_blank" rel="noreferrer" className="text-green-400 text-sm">Open Playlist</a>
      </div>
    );
  }
  