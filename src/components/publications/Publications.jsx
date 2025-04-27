import { useEffect, useState } from "react";
import PublicationCard from "../cards/publication/PublicationCard";

const Publications = ({ isMain }) => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    let url = "/data/publications/data.json";
    if (isMain) {
      url = "/data/publications/main/data.json";
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPublications(data);
      })
      .catch((error) => {
        console.error("Error fetching publications:", error);
      });
  }, []);
  if (publications.length === 0) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <div className="item-box" style={!isMain ? { borderTop: "none" } : {}}>
      <a href={isMain ? "/publications/" : "#"}>
        <div
          className="heading"
          style={
            !isMain
              ? {
                  paddingBottom: "50px",
                  width: "95%",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.26)",
                  marginBottom: "10px",
                }
              : {}
          }
        >
          publications
        </div>
      </a>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div id="publications">
          {publications.map((publication, index) => (
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Publications;
