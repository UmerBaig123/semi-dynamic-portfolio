import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="topbar">
      <div className="options" id="navbarList">
        <a className="btn" href="https://mominarizwan.com/">
          about me
        </a>
        <a className="btn" href="https://mominarizwan.com/repositories/">
          repositories
        </a>
        <a className="btn" href="https://mominarizwan.com/publications/">
          publications
        </a>
        <a className="btn" href="https://mominarizwan.com/resume/">
          resume
        </a>
        <a className="btn" href="https://mominarizwan.com/teachings/">
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
