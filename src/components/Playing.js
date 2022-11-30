import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./playing.css";
import { useContext } from "react";
import { Songs } from "../Context";
export default function Playing() {
  // Get context value
  const { song, handleSetSong } = useContext(Songs);

  // handle click on the song button
  const handleClickNext = () => {
    // handle click on the next song
    handleSetSong(song.id + 1);
  };
  const handleClickPre = () => {
    // handle click on the previous song
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        autoPlay={true}
        onPlay={e => console.log(e)}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false} 
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
      />
    </div>
  );
}
