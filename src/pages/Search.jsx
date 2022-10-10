import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { Error, Loader, SongCard } from "../components";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";
const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  console.log(data);
  const songs = data?.tracks?.hits?.map((song) => song.track);
  console.log(songs);
  if (isFetching) return <Loader title="Loadings top charts" />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col ">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Showing resuilts for <span className="font-black">{searchTerm}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPLaying={isPlaying}
            activeSong={activeSong}
            data={song}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Search;
