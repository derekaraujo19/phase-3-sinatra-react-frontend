import React, { useState } from "react";

function EditSong({id, song, album_title, onUpdateSong}) {
  const [songName, setSongName] = useState(song.name);
  const [songArtist, setSongArtist] = useState(song.artist);
  const [songAlbum, setSongAlbum] = useState(song.album ? album_title : "");
  const [songSpotify, setSongSpotify] = useState(song.spotify_link);

  function handleSubmit(e) {
    let updatedSongData = {
      "name": songName,
      "artist": songArtist,
      "album_title": songAlbum,
      "spotify_link": songSpotify
    };
    fetch(`http://localhost:9292/songs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSongData)
    })
      .then((r) => r.json())
      .then((updatedSong) => onUpdateSong(updatedSong));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="song name" autoComplete="off"
      value={songName} onChange={(e) => setSongName(e.target.value)}
      />
      <input type="text" name="artist" placeholder="artist" autoComplete="off"
      value={songArtist} onChange={(e) => setSongArtist(e.target.value)}
      />
      <input type="text" name="album_title" placeholder="album" autoComplete="off"
      value={songAlbum} onChange={(e) => setSongAlbum(e.target.value)}
      />
      <input type="text" name="spotify_link" placeholder="spotify link" autoComplete="off"
      value={songSpotify} onChange={(e) => setSongSpotify(e.target.value)}
      />
      <button type="save">save</button>
    </form>
  );
}

export default EditSong;