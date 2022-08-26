
function SearchSong({search, onSearchChange}) {
  return (
    <nav>
      <input
        type="text"
        name="search"
        placeholder="search songs"
        autoComplete="off"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
    </nav>
  );
}

export default SearchSong;