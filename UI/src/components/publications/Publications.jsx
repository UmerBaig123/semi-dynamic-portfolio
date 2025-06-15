import { useEffect, useState } from "react";
import PublicationCard from "../cards/publication/PublicationCard";
import { routeAppend } from "../../context/RouteAppend";
import { getPublications } from "../../api/Publications";
const Publications = ({ isMain }) => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    const fetchPublications = async () => {
      const data = await getPublications();
      setPublications(data);
    };
    fetchPublications();
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
            <PublicationCard key={index} publication={publication} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Publications;
