import { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../ThemeContextProvider";
import { routeAppend } from "../../RouteAppend";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import MenuIntroduction from "./NavbarDD";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  function updateCSSVariables(variables) {
    const root = document.documentElement;

    for (const [key, value] of Object.entries(variables)) {
      // Convert snake_case to CSS variable format (e.g., navbar_bg -> --navbar-bg)
      const cssVarName = "--" + key.replace(/_/g, "-");
      root.style.setProperty(cssVarName, value);
    }
  }
  const links = [
    { name: "about me", link: routeAppend + "/#/" },
    { name: "repositories", link: routeAppend + "/#/repositories" },
    { name: "publications", link: routeAppend + "/#/publications" },
    { name: "resume", link: routeAppend + "/#/resume" },
    { name: "teachings", link: routeAppend + "/#/teachings" },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
      {isMobile ? (
        <>
          <MenuIntroduction links={links} />
        </>
      ) : (
        <div className="options" id="navbarList">
          {links.map((link) => (
            <a className="btn" href={link.link} key={link.name}>
              {link.name}
            </a>
          ))}
        </div>
      )}
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
