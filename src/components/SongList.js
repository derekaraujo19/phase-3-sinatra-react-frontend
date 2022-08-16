import Song from "./Song";

function SongList({songs}) {
  return (
    <div className="song-list">
      <h3>Song List</h3>
      <ul>
        {songs.map((song) => (
          <Song
            key={song.id}
            name={song.name}
            artist={song.artist}
            album={song.album.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default SongList;