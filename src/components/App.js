import React, { useEffect, useState } from "react";
import '../App.css';
import Title from "./Title";
import SearchSong from "./SearchSong";
import NewSong from "./NewSong";
import SongList from "./SongList";
import NewAlbum from "./NewAlbum";
import SearchAlbum from "./SearchAlbum";
import AlbumList from "./AlbumList";


function App() {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songSearch, setSongSearch] = useState("");
  const [albumSearch, setAlbumSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/songs")
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);
  const displayedSongs = songs.filter((song) =>
  song.name.toLowerCase().includes(songSearch.toLowerCase()
  )
);

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
    <div className="App">
      <Title />
      <NewSong />
      <SearchSong search={songSearch} onSearchChange={setSongSearch}/>
      <SongList
        songs={displayedSongs}
      />
      <NewAlbum />
      <SearchAlbum search={albumSearch} onSearchChange={setAlbumSearch}/>
      <AlbumList
        albums={displayedAlbums}
      />
    </div>
  );
}

export default App;
