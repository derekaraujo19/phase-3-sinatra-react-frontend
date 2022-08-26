function SearchAlbum({search, onSearchChange}) {
  return (
    <nav>
      <input
        type="text"
        name="search"
        placeholder="search albums"
        autoComplete="off"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
      />
    </nav>
  );
}

export default SearchAlbum;