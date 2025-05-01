import { useContext } from "react";
import { ThemeContext } from "../../../ThemeContextProvider";

const GithubCard = ({ username, repoName }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  return (
    <a
      target="_blank"
      href={`https://github.com/${username}/${repoName}`}
      className="ppAnchor"
    >
      <img
        src={`https://github-readme-stats.vercel.app/api/pin?username=${username}&repo=${repoName}&theme=${
          isDarkMode ? "dark" : "light"
        }&show_owner=true`}
        alt="repo logo"
        className="repo-logo"
        style={{
          height: "fit-content",
          cursor: "pointer",
          boxShadow: !isDarkMode ? "0px 0px 6px rgba(0, 0, 0, 0.36)" : "none",
          margin: "0 auto",
          display: "block",
        }}
      />
    </a>
  );
};

export default GithubCard;
