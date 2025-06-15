import { useEffect, useState } from "react";
import PublicationCard from "../cards/publication/PublicationCard";
import { routeAppend } from "../../context/RouteAppend";
import "./EditPubs.css";
const EditPublications = ({ isMain }) => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    let url = "/data/publications/data.json";
    if (isMain) {
      url = "/data/publications/main/data.json";
    }
    fetch(routeAppend + url)
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
      <a href={isMain ? "/#/publications/" : "#"}>
        <div
          className="heading"
          style={
            !isMain
              ? {
                  paddingBottom: "50px",
                  width: "95%",
                  borderBottom: "1px solid var(--line-color)",
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
            <div className="publicationDelete">
              <PublicationCard key={index} publication={publication} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EditPublications;
