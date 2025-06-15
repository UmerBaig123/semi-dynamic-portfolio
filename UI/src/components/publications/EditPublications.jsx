import { useEffect, useState } from "react";
import PublicationCard from "../cards/publication/PublicationCard";
import { routeAppend } from "../../context/RouteAppend";
import "./EditPubs.css";
import PublicationEdit from "../cards/publication/PublicationEdit";
import {
  createPublication,
  getPublications,
  deletePublication,
} from "../../api/Publications";
const EditPublications = ({ isMain }) => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    const fetchPublications = async () => {
      const data = await getPublications();
      setPublications(data);
    };
    fetchPublications();
  }, []);
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
            <div
              className="publicationDelete"
              onClick={() => {
                deletePublication(publication._id)
                  .then(() => {
                    setPublications((prev) =>
                      prev.filter((pub) => pub._id !== publication._id)
                    );
                  })
                  .catch((error) => {
                    console.error("Error deleting publication:", error);
                  });
              }}
            >
              <PublicationCard key={index} publication={publication} />
            </div>
          ))}
          <PublicationEdit
            addPublication={(publication) => {
              createPublication(publication)
                .then((res) => {
                  setPublications((prev) => [...prev, res]);
                })
                .catch((error) => {
                  console.error("Error creating publication:", error);
                });
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default EditPublications;
