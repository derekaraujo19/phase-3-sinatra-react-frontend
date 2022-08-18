
function SearchSong({search, onSearchChange}) {
  return (
    <nav>
      <input
        type="text"
        name="search"
        placeholder="Search Songs"
        autoComplete="off"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
    </nav>
  );
}

export default SearchSong;