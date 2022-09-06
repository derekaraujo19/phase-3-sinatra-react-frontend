import React, { useState } from "react";
import EditAlbum from "./EditAlbum";

function Album({ album, counter, onAlbumDelete, onUpdateAlbum}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteClick() {
    fetch(`http://localhost:9292/albums/${album.id}`, {
      method: "DELETE",
    });

    onAlbumDelete(album.id);
  }

  // LISTS ALBUM SONGS
    function renderSongs() {
      const songList = album.songs.map((song) =>
        <ul key={song.id}>{song.name.toUpperCase()}</ul>
      )
      return songList;
    }

  // SPOTIFY ALBUM LINKS
  function renderSpotify() {
    return (
      <a className="spotify" href={album.spotify_link} target="_blank" rel="noreferrer noopener">
        <img alt="Spotify" src="../images/SpotifyLogo.png"
        width="25" height="25"/>
      </a>
    )
  }

  // UPDATE FORM CHANGE
  function handleUpdateAlbum(updatedAlbum) {
    setIsEditing(false);
    onUpdateAlbum(updatedAlbum);
  }

  return (
    <div className="Entries">
      <span>{counter} </span>
      <i><strong>{album.title}</strong></i>
      <span> RELEASED: <strong>{album.release_date ? album.release_date : "N/A"}</strong></span>
      <span> BY: <strong>{album.songs.length ? album.songs[0].artist : "N/A"}</strong></span>
      <span> GENRE: <strong>{album.genre ? album.genre : "N/A"}</strong></span>
      {album.songs.length > 0 ? renderSongs(): ""}
      {album.spotify_link ? renderSpotify() : ""}
      {isEditing ? (
        <EditAlbum
          id={album.id}
          album={album}
          onUpdateAlbum={handleUpdateAlbum}
        />
      ) : (
        <button onClick={() => setIsEditing(true)}>
          <div role="img" aria-label="edit">
          ✏️
          </div>
      </button>
      )}
      <button onClick={handleDeleteClick}>
        <div role="img" aria-label="delete"> 🗑 </div>
      </button>
    </div>
  );
}

export default Album;