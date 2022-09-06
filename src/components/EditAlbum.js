import React, { useState } from "react";

function EditAlbum({id, album, onUpdateAlbum}) {
  const [albumTitle, setAlbumTitle] = useState(album.title);
  const [albumDate, setAlbumDate] = useState(album.release_date);
  const [albumGenre, setAlbumGenre] = useState(album.genre);
  const [albumSpotify, setAlbumSpotify] = useState(album.spotify_link);

  function handleSubmit(e) {
    let updatedAlbumData = {
      "title": albumTitle,
      "release_date": albumDate,
      "genre": albumGenre,
      "spotify_link": albumSpotify
    };
    fetch(`http://localhost:9292/albums/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedAlbumData)
    })
      .then((r) => r.json())
      .then((updatedAlbum) => onUpdateAlbum(updatedAlbum));
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="title" autoComplete="off"
      value={albumTitle} onChange={(e) => setAlbumTitle(e.target.value)}
      />
      <input type="text" name="release_date" placeholder="release date" autoComplete="off"
      value={albumDate} onChange={(e) => setAlbumDate(e.target.value)}
      />
      <input type="text" name="genre" placeholder="genre" autoComplete="off"
      value={albumGenre} onChange={(e) => setAlbumGenre(e.target.value)}
      />
      <input type="text" name="spotify_link" placeholder="spotify link" autoComplete="off"
      value={albumSpotify} onChange={(e) => setAlbumSpotify(e.target.value)}
      />
      <button type="save">save</button>
    </form>
  );
}

export default EditAlbum;