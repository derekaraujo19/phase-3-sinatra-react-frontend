function Album({
  album,
  counter,
  onAlbumDelete
}) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/albums/${album.id}`, {
      method: "DELETE",
    });

    onAlbumDelete(album.id);
  }
  // LISTS ALBUM SONGS
  function renderSongs() {
    let songs = album.songs.map((song) => (song.name))
    return (
      <span>{songs.map((song) => (<ul>"{song.toUpperCase()}"</ul>))}</span>
    )
  }

  // SPOTIFY ALBUM LINKS
  function renderSpotify() {
    return (
      <a href={album.spotify_link} target="_blank" rel="noreferrer noopener"> listen here </a>
    )
  }



  return (
    <div className="Entries">
      <span>{counter} </span>
      <i><strong>{album.title.toUpperCase()}</strong></i>
      <span> released <strong>{album.release_date ? album.release_date : "N/A"}</strong></span>
      <span> by <strong>{album.songs.length ? album.songs[0].artist.toUpperCase() : "N/A"}</strong></span>
      <span> genre <strong>{album.genre ? album.genre.toUpperCase() : "N/A"}</strong></span>
      {album.songs.length > 0 ? renderSongs(): ""}
      {album.spotify_link ? renderSpotify() : ""}
      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete"> 🗑 </span>
      </button>
    </div>
  );
}

export default Album;