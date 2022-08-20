
function Album({
  id,
  title,
  release_date,
  artist,
  songs,
  onAlbumDelete
}) {

  function handleDeleteClick() {
    fetch(`http://localhost:9292/albums/${id}`, {
      method: "DELETE",
    });

    onAlbumDelete(id);
  }

  return (
    <li>
      <span>Title: {title}</span>
      <span>Release Date: {release_date}</span>
      <span>Artist: {artist}</span>
      <span>Songs: {songs}</span>
      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </li>
  );
}

export default Album;