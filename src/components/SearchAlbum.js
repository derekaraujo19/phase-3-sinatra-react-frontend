function SearchAlbum({search, onSearchChange}) {
  return (
    <nav>
      <input
        type="text"
        name="search"
        placeholder="Search Albums"
        autoComplete="off"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
    </nav>
  );
}

export default SearchAlbum;