import React, { useState } from "react";
import EditSong from "./EditSong";



function Song({ song, counter, onSongDelete, onUpdateSong }) {
  const [isEditing, setIsEditing] = useState(false);


  function handleDeleteClick() {
    fetch(`http://localhost:9292/songs/${song.id}`, {
      method: "DELETE",
    });
    onSongDelete(song.id);
  }

  // Gives us as the title of the album
  let album_title = "N/A";
  if (song.album) {
    album_title = song.album.title
  }

    // SPOTIFY ALBUM LINKS
    function renderSpotify() {
      return (
        <a href={song.spotify_link} target="_blank" rel="noreferrer noopener">
            <img alt="Spotify" src="../images/SpotifyLogo.png"
            width="25" height="25"/>
        </a>
      )
    }

    // UPDATE FORM CHANGE
    function handleUpdateSong(updatedSong) {
      setIsEditing(false);
      onUpdateSong(updatedSong);
    }

  // .catch error:  message = error message is top level state - catch will set this state value, placed into value of new div in form

  return (
    <div className="Entries">
      <div>
        <span>{counter} </span>
        <span><strong>"{song.name}"</strong></span>
        <span> ARTIST: {song.artist ? (<strong>{song.artist}</strong>) : <strong>N/A</strong>}</span>
        <span> ALBUM: <strong>{album_title}</strong></span>
        {song.spotify_link ? renderSpotify() : ""}
        {isEditing ? (
          <EditSong
            id={song.id}
            song={song}
            album_title={album_title}
            onUpdateSong={handleUpdateSong}
          />
        ) : (
          <button onClick={() => setIsEditing(true)}>
            <div role="img" aria-label="edit">
            ✏️
            </div>
          </button>
        )}
        <button onClick={handleDeleteClick}>
          <span role="img" aria-label="delete">
            🗑
          </span>
        </button>
      </div>
      <div>
      {/* changes to form to re-submit */}
      </div>

    </div>
  );
}

export default Song;