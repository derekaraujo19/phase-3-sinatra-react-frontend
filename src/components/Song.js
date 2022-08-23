

function Song({ song, onSongDelete }) {


  function handleDeleteClick() {
    fetch(`http://localhost:9292/songs/${song.id}`, {
      method: "DELETE",
    });
    onSongDelete(song.id);
  }

  // Gives us as the title of the album
  let album_title;
  if (song.album) {
    album_title = song.album.title
  } else {
    album_title = "N/A"
  }

  // button will change state status of isEditing from false to true,will toggle which form you see
  // form will need submit button - handle a patch request
  // .catch error:  message = error message is top level state - catch will set this state value, placed into value of new div in form

  return (
    <div className="Entries">
      <div>
        <span>"{song.name}"</span>
        <span> Artist: {song.artist}</span>
        <span> Album: {album_title}</span>
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