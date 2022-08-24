import React, {useState} from "react";

function NewSong({addNewSong}) {
const [name, setName] = useState("");
const [artist, setArtist] = useState("");
const [album_title, setAlbum_title] = useState("");

  function handleSubmit(e) {
    let newSongData = {
      "name": name,
      "artist": artist,
      "album_title": album_title
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
    console.log(e.target.album_title)
    console.log(e.target.album_title.value)
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
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default NewSong;