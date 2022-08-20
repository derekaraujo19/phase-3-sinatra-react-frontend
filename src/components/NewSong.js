import React, {useState} from "react";

  // create state to house form data for song - name, artist, album, etc..
  // create values that onChange get updated
  // onSubmit, call handleSubmit that packages the data from state into an object that makes a post request
    // send packaged newSong data up via addNewSong to SongList to be added to the DOM

function NewSong({addNewSong}) {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");

  function handleSubmit(e) {
    e.preventDefault()
    let newSongData = {
      "name": name,
      "artist": artist,
      "album.title": album
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
    // .then((console.log(album)));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="song name" autoComplete="off"
              onChange={(e) => setName(e.target.value)}/>
        <input type="text" name="artist" placeholder="artist" autoComplete="off"
              onChange={(e) => setArtist(e.target.value)}/>
        <input type="text" name="album" placeholder="album" autoComplete="off"
              onChange={(e) => setAlbum(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default NewSong;