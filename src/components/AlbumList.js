import React, { useEffect, useState } from "react";
import SearchAlbum from "./SearchAlbum";
import NewAlbum from "./NewAlbum";
import Album from "./Album";

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [albumSearch, setAlbumSearch] = useState("");

// GET
  useEffect(() => {
    fetch("http://localhost:9292/albums")
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);

// SEARCH
  const displayedAlbums = albums.filter((album) =>
  album.title.toLowerCase().includes(albumSearch.toLowerCase()
  )
  );
// DELETE
  function handleDeleteAlbum(id) {
    const updatedAlbums = albums.filter((album) => album.id !== id);
    setAlbums(updatedAlbums);
  }

  return (
    <div className="List">
      <NewAlbum />
      <SearchAlbum search={albumSearch} onSearchChange={setAlbumSearch}/>
      <ul>
        {displayedAlbums.map((album) => (
          <Album
            key={album.id}
            id={album.id}
            title={album.title}
            release_date={album.release_date}
            artist={album.songs[0].artist}
            songs={album.songs.map(song => song.name)}
            onAlbumDelete={handleDeleteAlbum}
          />
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;