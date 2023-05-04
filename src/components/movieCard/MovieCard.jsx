import React from "react";
import Img from "../lazyLoadImage/img";
import { NavLink } from "react-router-dom";
import "./movieCard.css";
import PosterImg from "../../assets/no-poster.png";
const MovieCard = ({ movieData }) => {
  return (
    <div className="movie-card">
      <div className="movie-img-container">
        <img
          className="movie-img"
          src={movieData?.show?.image?.medium || PosterImg}
        />
      </div>
      <div className="movie-info">
        <div className="movie-name">{movieData?.show?.name}</div>
        <div className="movie-genre">{movieData?.show?.genres?.join(", ")}</div>
      </div>
      <div className="btn">
        <NavLink className="btn-link" to={`/about/${movieData?.show?.id}`}>
          View Details
        </NavLink>
      </div>
    </div>
  );
};

export default MovieCard;
