import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong,audioRef,isPlaying,setSongs,libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'active-library' : ''}`}>
      <div className="library-songs">
        <h2>Library</h2>
        {songs.map((song) => (
          <LibrarySong
            setCurrentSong={setCurrentSong}
            songs={songs}
            song={song}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
