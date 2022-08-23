// import React, {useState} from "react";


function NewAlbum({addNewAlbum}) {

  function handleSubmit(e) {
    let newAlbumData = {
      "title": e.target.title.value,
      "release_date": e.target.release_date.value,
      "genre": e.target.genre.value,
      "spotify_link": e.target.spotify_link.value
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
        <input type="text" name="title" placeholder="title" autoComplete="off" />
        <input type="text" name="release_date" placeholder="release date(Mo D, Y)" autoComplete="off" />
        <input type="text" name="genre" placeholder="genre" autoComplete="off" />
        <input type="text" name="spotify_link" placeholder="spotify link" autoComplete="off" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default NewAlbum;

