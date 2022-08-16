
function Song({
  name,
  artist,
  album
}) {
  return (
    <li>
      <span>Song Title: {name}</span>
      <span>Artist: {artist}</span>
      <span>Album: {album}</span>
    </li>
  );
}

export default Song;