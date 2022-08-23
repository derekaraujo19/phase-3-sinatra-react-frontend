function NewSong({addNewSong}) {


  function handleSubmit(e) {
    // e.preventDefault()
    // !!! - FIGURE OUT WHY THE PAGE NEEDS A REFRESH IN ORDER TO UPDATE THE DOM

    let newSongData = {
      "name": e.target.name.value,
      "artist": e.target.artist.value,
      "album_title": e.target.album_title.value
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
        <input type="text" name="name" placeholder="song name" autoComplete="off" />
        <input type="text" name="artist" placeholder="artist" autoComplete="off" />
        <input type="text" name="album_title" placeholder="album" autoComplete="off" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default NewSong;