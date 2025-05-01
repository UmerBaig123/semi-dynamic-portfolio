import { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../ThemeContextProvider";
import { routeAppend } from "../../RouteAppend";
const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  function updateCSSVariables(variables) {
    const root = document.documentElement;

    for (const [key, value] of Object.entries(variables)) {
      // Convert snake_case to CSS variable format (e.g., navbar_bg -> --navbar-bg)
      const cssVarName = "--" + key.replace(/_/g, "-");
      root.style.setProperty(cssVarName, value);
    }
  }

  useEffect(() => {
    let key = isDarkMode ? "dark" : "light";
    fetch(routeAppend + "/data/general.json")
      .then((response) => response.json())
      .then((data) => {
        const theme = data.theme[key];
        updateCSSVariables(theme);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    const checkbox = document.getElementById("checkbox");
  }, [isDarkMode]);
  return (
    <div className="topbar">
      <div className="options" id="navbarList">
        <a className="btn" href={routeAppend + "/#/"}>
          about me
        </a>
        <a className="btn" href={routeAppend + "/#/repositories"}>
          repositories
        </a>
        <a className="btn" href={routeAppend + "/#/publications"}>
          publications
        </a>
        <a className="btn" href={routeAppend + "/#/resume"}>
          resume
        </a>
        <a className="btn" href={routeAppend + "/#/teachings"}>
          teachings
        </a>
      </div>
      <label className="switch">
        <input
          type="checkbox"
          id="checkbox"
          onChange={() => setIsDarkMode((mode) => !mode)}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Navbar;
