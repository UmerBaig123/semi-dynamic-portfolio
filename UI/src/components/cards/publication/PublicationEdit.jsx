import "./PublicationCard.css";
import { routeAppend } from "../../../context/RouteAppend";
import { useContext, useState } from "react";
import { Box } from "@mui/material";
import { ThemeContext } from "@emotion/react";
const PublicationEdit = ({ addPublication }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [publication, setPublication] = useState({
    title: "",
    authors: "",
    description: "",
    pdfUrl: "",
  });

  return (
    <div className="pCard paralell publ">
      <div className="pCardLayout">
        <div style={{ margin: "2px" }}></div>

        <div className="pInfo">
          <input
            className="pTitle p-input"
            placeholder="title"
            value={publication.title}
            onChange={(e) =>
              setPublication({ ...publication, title: e.target.value })
            }
          />
          <input
            className="pAuthors p-input"
            placeholder="authors (comma separated)"
            value={publication.authors}
            onChange={(e) =>
              setPublication({ ...publication, authors: e.target.value })
            }
          />
          <input
            className="publicationDesc p-input"
            placeholder="description"
            value={publication.description}
            onChange={(e) =>
              setPublication({ ...publication, description: e.target.value })
            }
          />
          <div className="links">
            <input
              type="text"
              className="p-input"
              placeholder="PDF URL"
              value={publication.pdfUrl}
              onChange={(e) =>
                setPublication({ ...publication, pdfUrl: e.target.value })
              }
            />
          </div>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <button
              style={{
                padding: "8px 24px",
                borderRadius: "6px",
                border: "none",
                background: isDarkMode ? "#a62dc2" : "#4caf50",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1rem",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                transition: "background 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginLeft: "auto",
              }}
              onClick={() => {
                addPublication(publication);
                setPublication({
                  title: "",
                  authors: "",
                  description: "",
                  pdfUrl: "",
                });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              Add Skill
            </button>
          </Box>
        </div>
      </div>
    </div>
  );
};
export default PublicationEdit;
