import { useParams } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";

const ViewNews = () => {
  const { news_id } = useParams();
  useEffect(() => {
    console.log("news_id", news_id);
  }, [news_id]);

  return (
    <>
      <Navbar />
      <div className="container">News id {news_id}</div>
    </>
  );
};
export default ViewNews;
