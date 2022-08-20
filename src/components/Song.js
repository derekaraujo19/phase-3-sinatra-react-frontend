
function Song({ id, name, artist, album, onSongDelete }) {


  function handleDeleteClick() {
    fetch(`http://localhost:9292/songs/${id}`, {
      method: "DELETE",
    });

    onSongDelete(id);
  }

  return (
    <li>
      <span>Song Title: {name}</span>
      <span>Artist: {artist}</span>
      <span>Album: {album}</span>
      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </li>
  );
}

export default Song;