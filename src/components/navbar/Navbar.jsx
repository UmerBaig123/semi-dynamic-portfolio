import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="topbar">
      <div className="options" id="navbarList">
        <a className="btn" href="/">
          about me
        </a>
        <a className="btn" href="/repositories">
          repositories
        </a>
        <a className="btn" href="/publications">
          publications
        </a>
        <a className="btn" href="/resume">
          resume
        </a>
        <a className="btn" href="/teachings">
          teachings
        </a>
      </div>
      <label className="switch">
        <input type="checkbox" id="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Navbar;
