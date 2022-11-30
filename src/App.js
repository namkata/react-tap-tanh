import React , {useState} from "react";
import Navbar from "./components/NavBar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Playing from "./components/Playing";

function App() {
  // set initial first state of the song  in list song state then to get parameters in context
  const [song, setSong] = useState(DataSongs[0])

  // handle set song state change
  const handleSetSong = (idSong) => {
    // find the song in list song state
    const song = DataSongs.find(song => song.id === idSong)
    
    // if song not found
    if (!song)
      // return the first song
      setSong(DataSongs[0])
    else
      // set the song state
      setSong(song)
  }
  return (
    <div  className="Ap">
      {/* Add the value of Context to call */}
      <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
      <Navbar/>
      <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
        {/* span 1 */}
        <DetailSong/>
        {/* span 2 */}
        <ListSong/>
      </div>
      <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
