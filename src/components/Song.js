function Song({ song, counter, onSongDelete }) {


  function handleDeleteClick() {
    fetch(`http://localhost:9292/songs/${song.id}`, {
      method: "DELETE",
    });
    onSongDelete(song.id);
  }

  // Gives us as the title of the album
  let album_title = "N/A";
  if (song.album) {
    album_title = song.album.title
  }

    // SPOTIFY ALBUM LINKS
    function renderSpotify() {
      return (
        <a href={song.spotify_link} target="_blank" rel="noreferrer noopener"> listen here </a>
      )
    }

  // button will change state status of isEditing from false to true,will toggle which form you see
  // form will need submit button - handle a patch request
  // .catch error:  message = error message is top level state - catch will set this state value, placed into value of new div in form

  return (
    <div className="Entries">
      <div>
        <span>{counter} </span>
        <span><strong>"{song.name.toUpperCase()}"</strong></span>
        <span> artist <strong>{song.artist.toUpperCase()}</strong></span>
        <span> album <strong>{album_title.toUpperCase()}</strong></span>
        {song.spotify_link ? renderSpotify() : ""}
        <button onClick={handleDeleteClick}>
          <span role="img" aria-label="delete">
            🗑
          </span>
        </button>

      </div>
      <div>
      {/* changes to form to re-submit */}
      </div>

    </div>
  );
}

export default Song;