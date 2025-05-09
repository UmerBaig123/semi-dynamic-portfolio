import "./NewsCard.css";
import { routeAppend } from "../../../RouteAppend";
const NewsCard = ({ news }) => {
  return (
    <a
      className="news-card"
      id="1-container"
      href={routeAppend + `/#/viewNews/${news.id}`}
    >
      <div className="news-container">
        <div className="news-left">
          <img
            src={routeAppend + news.image}
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center",
              width: "130px",
              height: "130px",
              borderRadius: "5px",
            }}
            alt="news image"
          ></img>
        </div>

        <div className="news-right">
          <div className="news-text-wrap">
            <div className="news-text-content">{news.title}</div>
            <div className="news-time">{news.date}</div>
            <div className="news-desc">{news.description}</div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
