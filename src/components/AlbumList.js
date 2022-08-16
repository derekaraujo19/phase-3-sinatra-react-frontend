import Album from "./Album";

function AlbumList({albums}) {
  return (
    <div className="album-list">
      <h3>Album List</h3>
      <ul>
        {albums.map((album) => (
          <Album
            key={album.id}
            title={album.title}
            release_date={album.release_date}
            artist={album.songs[0].artist}
            songs={album.songs.map(song => song.name)}
          />
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;