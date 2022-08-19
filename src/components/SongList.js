import React, { useEffect, useState } from "react";
import Song from "./Song";
import NewSong from "./NewSong";
import SearchSong from "./SearchSong";

function SongList() {
  const [songs, setSongs] = useState([]);
  const [songSearch, setSongSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:9292/songs")
      .then((r) => r.json())
      .then((songs) => setSongs(songs));
  }, []);

  const displayedSongs = songs.filter((song) =>
  song.name.toLowerCase().includes(songSearch.toLowerCase()
  )
);

  return (
    <div className="song-list">
      <NewSong />
      <SearchSong search={songSearch} onSearchChange={setSongSearch}/>
      <ul>
        {displayedSongs.map((song) => (
          <Song
            key={song.id}
            name={song.name}
            artist={song.artist}
            album={song.album.title}
          />
        ))}
      </ul>
    </div>
  );
}

export default SongList;