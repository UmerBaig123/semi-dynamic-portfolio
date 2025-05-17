import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import { useEffect, useState } from "react";
import "./ViewNews.css";
import { routeAppend } from "../context/RouteAppend";
const ViewNews = () => {
  const { news_id } = useParams();
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(routeAppend + "/data/news/data.json")
      .then((response) => response.json())
      .then((data) => {
        const news = data.find((item) => item.id === parseInt(news_id));
        setNews(news);
        if (news) {
          console.log(news);
        } else {
          console.error("News not found");
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [news_id]);
  if (!news) {
    return <div>News not found</div>;
  }
  return (
    <>
      <div style={{ maxWidth: "90vw" }}>
        <div className="container">
          <div className="title">{news.title}</div>
        </div>
        <div className="date">{news.date}</div>
        <div className="header" style={{ marginTop: "20px" }}>
          <img
            style={{
              maxWidth: "90%",
              boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.507)",
            }}
            src={routeAppend + news.image}
            alt="news image"
          />
        </div>
        <div className="desc" id="description">
          {news.description}
        </div>

        <div
          className="title"
          style={{ margin: "20px 0", fontSize: "30px", paddingTop: "20px" }}
        >
          File
        </div>
        <div className="header news-pdf-iframe-container">
          <iframe
            className="news-pdf-iframe"
            src={routeAppend + news.pdf}
            width="100%"
            height="665px"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
};
export default ViewNews;
