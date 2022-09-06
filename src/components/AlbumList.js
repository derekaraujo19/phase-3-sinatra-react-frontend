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
// AddNew
  function addNewAlbum(newAlbum) {
    setAlbums([...albums, newAlbum]);
  };
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
  // ALBUM COUNTER
  let count = 1;

  // UPDATE
  function handleUpdateAlbum(updatedAlbum) {
    const updatedAlbums = albums.map((album) => {
      if (album.id === updatedAlbum.id) {
        return updatedAlbum;
      } else {
        return album;
      }
    });
    setAlbums(updatedAlbums);
  }

  return (
    <div className="List">
      <NewAlbum addNewAlbum={addNewAlbum}/>
      <SearchAlbum search={albumSearch} onSearchChange={setAlbumSearch}/>
      <ul>
        {displayedAlbums.map((album) => (
          <Album
            key={album.id}
            album={album}
            counter={count++}
            onAlbumDelete={handleDeleteAlbum}
            onUpdateAlbum={handleUpdateAlbum}
          />
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;