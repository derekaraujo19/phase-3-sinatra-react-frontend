
function Album({
  title,
  release_date,
  artist,
  songs,
}) {
  return (
    <li>
      <span>Title: {title}</span>
      <span>Release Date: {release_date}</span>
      <span>Artist: {artist}</span>
      <span>Songs: {songs}</span>
    </li>
  );
}

export default Album;