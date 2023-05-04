import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import useFetch from "../../api/useFetch";
import { useState } from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import Utils from "../../utils/Contant";
import "./homePage.css";
import Layout from "../../components/layout/Layout";
const HomePage = () => {
  const [movieData, setMovieData] = useState([]);
  const { apiData, isLoading } = useFetch(Utils.baseUrl);
  React.useEffect(() => {
    setMovieData(apiData);
  }, [apiData]);
  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <Layout>
      <ContentWrapper>
        <div className="movie-card-wrapper">
          <div className="movie-card-container">
            {movieData?.map((movie) => (
              <MovieCard key={movie.show.id} movieData={movie} />
            ))}
          </div>
        </div>
      </ContentWrapper>
    </Layout>
  );
};

export default HomePage;
