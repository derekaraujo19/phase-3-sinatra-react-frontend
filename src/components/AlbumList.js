import React, { useEffect, useState } from "react";
import SearchAlbum from "./SearchAlbum";
import NewAlbum from "./NewAlbum";
import Album from "./Album";

function AlbumList() {

  const [albums, setAlbums] = useState([]);
  const [albumSearch, setAlbumSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/albums")
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);

  const displayedAlbums = albums.filter((album) =>
  album.title.toLowerCase().includes(albumSearch.toLowerCase()
  )
  );

  return (
    <div className="album-list">
      <NewAlbum />
      <SearchAlbum search={albumSearch} onSearchChange={setAlbumSearch}/>
      <ul>
        {displayedAlbums.map((album) => (
          <Album
            key={album.id}
            title={album.title}
            release_date={album.release_date}
            artist={album.songs[0].artist}
            songs={album.songs.map(song => song.name)}
          />
        ))}
      </ul>
    </div>
  );
}

export default AlbumList;