import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import AboutPage from "./about/AboutPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieBookingForm from "./movieBookingForm/MovieForm";
import useFetch from "../../api/useFetch";
import toast, { Toaster } from "react-hot-toast";
import Layout from "../../components/layout/Layout";
const DescriptionPage = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const { apiData, isLoading } = useFetch(`https://api.tvmaze.com/shows/${id}`);
  useEffect(() => {
    setData(apiData);
  }, [apiData]);
  console.log(data);
  return (
    <>
      <Layout>
        <Toaster />
        <AboutPage isLoading={isLoading} data={data} />
        <div className="booking-btn">
          {show == false ? (
            <button onClick={() => setShow(!show)} className="btn-primary">
              Book Now
            </button>
          ) : (
            <button onClick={() => setShow(!show)} className="btn-primary">
              Cancel Booking
            </button>
          )}
        </div>
        <ContentWrapper>
          {show && <MovieBookingForm data={data} />}
        </ContentWrapper>
      </Layout>
    </>
  );
};

export default DescriptionPage;
