import { useState } from "react";
import GithubCard from "../cards/github/GithubCard";
import { useEffect } from "react";
import { routeAppend } from "../../RouteAppend";
const Repositories = ({ isMain }) => {
  const [githubUsername, setGithubUsername] = useState("");
  const [githubRepoNames, setGithubRepoNames] = useState([]);
  useEffect(() => {
    fetch(routeAppend + "/data/general.json")
      .then((response) => response.json())
      .then((data) => {
        setGithubUsername(data.github_username);
        console.log(data.github_username);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    let repo_url = "/data/github/repositories/data.json";
    if (isMain) {
      repo_url = "/data/github/repositories/main/data.json";
    }
    fetch(routeAppend + repo_url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setGithubRepoNames(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  if (githubRepoNames.length === 0 || githubUsername.length === 0) {
    return <>loading</>;
  }
  return (
    <div className="item-box" style={!isMain ? { borderTop: "none" } : {}}>
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
        Repositories
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div className="repos">
          {githubRepoNames.map((repoName, index) => {
            return (
              <GithubCard
                key={index}
                repoName={repoName}
                username={githubUsername}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Repositories;
