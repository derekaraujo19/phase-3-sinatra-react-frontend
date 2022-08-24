
function Album({
  album,
  onAlbumDelete
}) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/albums/${album.id}`, {
      method: "DELETE",
    });

    onAlbumDelete(album.id);
  }

  function renderSongs() {
    let songs = album.songs.map((song) => (song.name))
    return (
      <span>{songs.map((song) => (<ul>{song}</ul>))}</span>
    )
  }

  return (
    <div className="Entries">
      <i>{album.title}</i>
      <span> Released: {album.release_date ? album.release_date : "N/A"}</span>
      <span>Artist: {album.songs.length ? album.songs[0].artist : "N/A"}</span>
      <span>Genre: {album.genre ? album.genre : "N/A"}</span>
      {album.songs.length > 0 ? renderSongs(): ""}
      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </div>
  );
}

export default Album;