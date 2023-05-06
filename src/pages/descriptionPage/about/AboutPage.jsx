import React from "react";

import "./aboutPage.scss";
import PosterImage from "../../../assets/no-poster.png";
const AboutPage = ({ isLoading, data }) => {
  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }
  return (
    <div className="detail-banner">
      <img src={data?.image?.original || PosterImage} className="bg-img" />
      <div className="opac"></div>
      <div className="detail-banner-items">
        <div className="movie-img-container">
          <img src={data?.image?.original || PosterImage} alt="" />
          <div className="opac1"></div>
        </div>
        <div className="movie-detail-container">
          <h1 className="title">
            {data?.name}{" "}
            {data?.premiered && <span>({data?.premiered?.split("-")[0]})</span>}
          </h1>
          <h2>Summary</h2>
          <p className="des">{data?.summary?.replace(/<[^>]*>?/gm, "")}</p>
          <h3>Genres</h3>
          <ul className="genres">
            {data?.genres?.map((genre, index) => (
              <li className="genre-btn" key={index}>
                {genre}
              </li>
            ))}
          </ul>
          <h3>Rating</h3>
          <div className="rating">
            <span className="rating-value">{data?.rating?.average}</span>
            <span className="rating-total">/10</span>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default AboutPage;
