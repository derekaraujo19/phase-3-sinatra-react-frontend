import React from "react";
import { Routes, Route } from "react-router-dom";
import '../App.css';
import Title from "./Title";
import SongList from "./SongList";
import AlbumList from "./AlbumList";
import NavBar from "./NavBar";


function App() {
  return (
    <div className="App">
      <Title />
      <NavBar />
      <Routes>
        <Route exact path="/" element={<SongList />} />
        <Route exact path="/albums" element={<AlbumList />} />
      </Routes>
    </div>
  );
}

export default App;
