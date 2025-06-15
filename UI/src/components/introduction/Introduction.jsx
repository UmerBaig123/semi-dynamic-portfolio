import "./Introduction.css";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
import { routeAppend } from "../../context/RouteAppend";
import { getAbout } from "../../api/About";
const Introduction = () => {
  const [userdata, setUserdata] = useState({});
  useEffect(() => {
    getAbout().then((res) => {
      console.log("User data fetched:", res);
      // Ensure the response is an object and has the expected properties
      setUserdata(res);
    });
  }, []);
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(userdata?.summary),
  });
  if (!userdata) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="profile-container">
        <div className="intro">
          <div className="name" style={{ display: "flex", gap: "10px" }}>
            <div className="first_name">{userdata?.first_name}</div>
            <div className="last_name">{userdata?.last_name}</div>
          </div>

          <div className="links">
            <a href={userdata?.linkedIn} target="_blank">
              <img
                className="link-image"
                src="https://img.icons8.com/fluency/48/linkedin.png"
                alt="linkedin"
              />
            </a>
            <a href={userdata?.github} target="_blank">
              <svg
                fill="#666666"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                className="link-image git-svg"
                id="github"
              >
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
              </svg>
            </a>
            <a href={`mailto:${userdata?.email}`} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                className="link-image"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#4caf50"
                  d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                ></path>
                <path
                  fill="#1e88e5"
                  d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                ></path>
                <polygon
                  fill="#e53935"
                  points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                ></polygon>
                <path
                  fill="#c62828"
                  d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                ></path>
              </svg>
            </a>
          </div>
          <div className="qualification">
            {userdata?.qualification}
            <br />
            <a
              href="https://portal.research.lu.se/en/persons/momina-rizwan"
              target="_blank"
              className="uni-btn"
            >
              {userdata?.institute}
            </a>
          </div>
          <div className="summary">
            <p id="summaryInject" dangerouslySetInnerHTML={sanitizedData()}></p>
          </div>
        </div>
      </div>

      <div className="picture-container">
        <div className="pic-container">
          <img className="profile-pic" src={userdata?.profilePic} />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
