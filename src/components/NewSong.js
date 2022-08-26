import React, {useState} from "react";

function NewSong({addNewSong}) {
const [name, setName] = useState("");
const [artist, setArtist] = useState("");
const [album_title, setAlbum_title] = useState("");
const [spotify_link, setSpotify_link] = useState("");

  function handleSubmit(e) {
    let newSongData = {
      "name": name,
      "artist": artist,
      "album_title": album_title,
      "spotify_link": spotify_link
    };
    fetch('http://localhost:9292/songs', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSongData)
    })
    .then((r) => r.json())
    .then((newSong) => addNewSong(newSong));
    e.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="song name" autoComplete="off"
        value={name} onChange={(e) => setName(e.target.value)}
        />
        <input type="text" name="artist" placeholder="artist" autoComplete="off"
        value={artist} onChange={(e) => setArtist(e.target.value)}
        />
        <input type="text" name="album_title" placeholder="album" autoComplete="off"
        value={album_title} onChange={(e) => setAlbum_title(e.target.value)}
        />
        <input type="text" name="spotify_link" placeholder="spotify link" autoComplete="off"
        value={spotify_link} onChange={(e) => setSpotify_link(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default NewSong;