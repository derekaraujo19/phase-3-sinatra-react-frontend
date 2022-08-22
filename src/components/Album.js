
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
    <ul className="Entries">
      <i>{title}</i>
      <span>Released: {release_date}</span>
      <span>Artist: {artist}</span>
      <span>{songs.map((song) =>
        <ul>"{song}"</ul>
      )}</span>
      <button onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </ul>
  );
}

export default Album;