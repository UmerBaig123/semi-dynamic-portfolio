import { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { routeAppend } from "../../context/RouteAppend";
import MenuIntroduction from "./NavbarDD";
import { useAuth } from "../../context/AuthContext";

const Navbar = ({ isAdmin }) => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const [isMobile, setIsMobile] = useState(false);
  const { logout } = useAuth();
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
    { name: "contact", link: routeAppend + "/#/contact" },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();

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
      <div className="switch-container">
        {isAdmin ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-power"
            viewBox="0 0 16 16"
            onClick={logout}
          >
            <path d="M7.5 1v7h1V1z" />
            <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812" />
          </svg>
        ) : null}
        <label className="switch">
          <input
            type="checkbox"
            id="checkbox"
            onChange={() => setIsDarkMode((mode) => !mode)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
