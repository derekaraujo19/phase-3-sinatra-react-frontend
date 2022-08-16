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
  const [songs, setSongs] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/songs")
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/albums")
      .then((r) => r.json())
      .then((albums) => setAlbums(albums));
  }, []);

  return (
    <div className="App">
      <Title />
      <NewSong />
      <SearchSong />
      <SongList
        songs={songs}
      />
      <NewAlbum />
      <SearchAlbum />
      <AlbumList
        albums={albums}
      />
    </div>
  );
}

export default App;
