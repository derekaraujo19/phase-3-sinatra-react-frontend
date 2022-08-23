
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


//To get the artist for the DOM -> could also leave off - WILL THROW ISSUES IF THERE ARE NO SONGS
  let album_artist;
  if (album.songs[0].artist) {
    album_artist = album.songs[0].artist
  } else {
    album_artist = "N/A"
  }

  //To get the list of song names for the album -> could also leave off - WILL THROW ISSUES IF THERE ARE NO SONGS
  const album_songs = album.songs.map((song) => song.name)


  return (
    <div className="Entries">
      <i>{album.title}</i>

      {/* <span> Released: {album.release_date}</span> */}
      <span>Artist: {album_artist}</span>
      <span>{album_songs.map((song) =>
        <ul>{song}</ul>
      )}</span>
      {/* {renderSongs} */}
      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </div>
  );
}

export default Album;