import { useEffect, useState } from "react";
import NewsCard from "../cards/news/NewsCard";
import "./News.css";
import { routeAppend } from "../../context/RouteAppend";
const News = ({ isMain }) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    let url = "/data/news/data.json";
    if (isMain) {
      url = "/data/news/main/data.json";
    }
    fetch(routeAppend + url)
      .then((response) => response.json())
      .then((data) => {
        setNews(data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);
  if (news.length === 0) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <>
      <div className="item-box">
        <div className="heading">News</div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div id="publications">
            {news.map((newsItem, index) => (
              <NewsCard key={index} news={newsItem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
