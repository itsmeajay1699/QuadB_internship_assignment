import { NavLink } from "react-router-dom";
import "./movieCard.css";
import PosterImg from "../../assets/no-poster.png";
import CircleProgressBar from "../circleProgressBar/CircleProgressbar";
import React, { useState } from "react";
const MovieCard = ({ movieData }) => {
  return (
    <div className="image-with-hover-container">
      <img
        src={movieData?.show?.image?.medium || PosterImg}
        alt={movieData?.show?.name}
        className="image-with-hover-img"
      />
      {movieData?.show?.rating?.average && (
        <CircleProgressBar rating={movieData?.show?.rating?.average} />
      )}

      <div className="image-with-hover-overlay">
        <div className="image-with-hover-name">
          {movieData?.show?.name || "No Name"}
        </div>
        <button className="image-with-hover-button">
          {" "}
          <NavLink
            className="image-with-hover-button btn"
            to={`/about/${movieData?.show?.id}`}
          >
            View Details
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;

//  {movieData?.show?.rating?.average && (
// <CircleProgressBar rating={movieData?.show?.rating?.average} />
// )}
{
  /* <NavLink
  className="image-with-hover-button btn"
  to={`/about/${movieData?.show?.id}`}
>
  View Details
</NavLink>; */
}
