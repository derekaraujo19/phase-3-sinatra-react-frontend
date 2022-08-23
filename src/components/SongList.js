import React, { useEffect, useState } from "react";
import Song from "./Song";
import NewSong from "./NewSong";
import SearchSong from "./SearchSong";

function SongList() {
  const [songs, setSongs] = useState([]);
  const [songSearch, setSongSearch] = useState("");
// GET
  useEffect(() => {
    fetch("http://localhost:9292/songs")
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);
// NEW SONG
  function addNewSong(newSong) {
    setSongs([...songs, newSong]);
  };
// SEARCH
  const displayedSongs = songs.filter((song) =>
  song.name.toLowerCase().includes(songSearch.toLowerCase()
  )
);
// DELETE
  function handleDeleteSong(id) {
    const updatedSongs = songs.filter((song) => song.id !== id);
    setSongs(updatedSongs);
  }


  return (
    <div className="List">
      <NewSong addNewSong={addNewSong}/>
      <SearchSong search={songSearch} onSearchChange={setSongSearch}/>
      <ul>
        {displayedSongs.map((song) => (
          <Song
            key={song.id}
            song={song}
            onSongDelete={handleDeleteSong}
          />
        ))}
      </ul>
    </div>
  );
}

export default SongList;