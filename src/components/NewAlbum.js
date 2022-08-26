import React, {useState} from "react";

function NewAlbum({addNewAlbum}) {
  const [title, setTitle] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [genre, setGenre] = useState("");
  const [spotify_link, setSpotify_link] = useState("");

  function handleSubmit(e) {
    let newAlbumData = {
      "title": title,
      "release_date": release_date,
      "genre": genre,
      "spotify_link": spotify_link
    };
    fetch('http://localhost:9292/albums', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlbumData)
    })
    .then((r) => r.json())
    .then((newAlbum) => addNewAlbum(newAlbum));
    e.target.reset();
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="title" autoComplete="off"
        value={title} onChange={(e) => setTitle(e.target.value)}
        />
        <input type="text" name="release_date" placeholder="release date" autoComplete="off"
        value={release_date} onChange={(e) => setRelease_date(e.target.value)}
        />
        <input type="text" name="genre" placeholder="genre" autoComplete="off"
        value={genre} onChange={(e) => setGenre(e.target.value)}
        />
        <input type="text" name="spotify_link" placeholder="spotify link" autoComplete="off"
        value={spotify_link} onChange={(e) => setSpotify_link(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default NewAlbum;

