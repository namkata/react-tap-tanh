import { useContext, useState, useEffect } from "react";
import { Songs } from "../Context";

export default function ListSong() {
  // Get context from App.js use defined Contenxt object
  const { DataSongs, handleSetSong, song } = useContext(Songs);

//   Initialize the values first
  const [idSong, setidSong] = useState(0);

// Get the current song from the data sources 
  useEffect(() => {
    setidSong(song.id);
  }, [song]);

// Handle set song change events
  const handlePlaySong = (idSong) => {
    setidSong(idSong);
    handleSetSong(song.id);
  };

  return (
    <div className="col-span-2  overflow-y-scroll">
      <table className="table-auto w-full">
        <thead className="text-white h-12">
          <tr>
            <th className="w-[10%]">#</th>
            <th className="text-left">Title</th>
            <th className="w-[10%]">Author</th>
            <th className="w-[10%]">
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              key={index}
            //   Handle className by index to show colors by current index to run through
              className={`bg-slate-800 h-12 text-gray-500 hover:bg-slate-600 ${
                idSong === song.id && "bg-slate-600 text-teal-400"
              }`}
              onClick={() => handlePlaySong(song)}
            >
              <td className="text-center">{index + 1}</td>
              <td>{song.name}</td>
              <td className="text-center">{song.author}</td>
              <td className="text-center">
                <a className="" href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
