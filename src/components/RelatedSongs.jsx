import SongBar from "./SongBar.jsx";
const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col ">
    <h1 className="font-bold text-3xl text-white">Related song</h1>dwadawadawdwa
    <div className="mt-6 w-full flex flex-col ">
      {data?.map((song, i) => {
        console.log("check id", data);
        return (
          <SongBar
            key={i}
            song={song}
            i={i}
            isPlaying={isPlaying}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            activeSong={activeSong}
          />
        );
      })}
    </div>
  </div>
);

export default RelatedSongs;
