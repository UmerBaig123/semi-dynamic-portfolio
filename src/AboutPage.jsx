import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./AboutPage.css";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introduction/Introduction";
import PublicationCard from "./components/cards/publication/PublicationCard";
import Publications from "./components/publications/Publications";

function AboutPage() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Publications isMain={true} />

      <div className="item-box">
        <div className="heading">News</div>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <div id="publications">
            <a
              className="news-card"
              id="2-container"
              href="https://mominarizwan.com/news/2/"
            >
              <div className="news-container">
                <div className="news-left">
                  <div
                    style={{
                      backgroundImage:
                        "url('https://mominarizwan.com/static/news_images/AV1A7901.jpg')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "130px",
                      height: "130px",
                      borderRadius: "5px",
                    }}
                    alt="news image"
                  ></div>
                </div>

                <div className="news-right">
                  <div className="news-text-wrap">
                    <div className="news-text-content">
                      Second Workshop on Quality and Reliability Assessment of
                      Robotic Software Architectures and Components @ ICRA 2023
                    </div>
                    <div className="news-time">
                      June 2, 2023 - 1&nbsp;year, 10&nbsp;months ago
                    </div>
                    <div className="news-desc">
                      Presented my research on ROSSMARie in the QRARSAC workshop
                      at ICRA 2023. The session focused on advancing software
                      reliability in robotics, with discussions on enhancing
                      intelligent robotic systems through innovative software
                      solutions.
                    </div>
                  </div>
                </div>
              </div>
            </a>

            <a
              className="news-card"
              id="1-container"
              href="https://mominarizwan.com/news/1/"
            >
              <div className="news-container">
                <div className="news-left">
                  <div
                    style={{
                      backgroundImage:
                        "url('https://mominarizwan.com/static/news_images/IMG_1325.JPG')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "130px",
                      height: "130px",
                      borderRadius: "5px",
                    }}
                    alt="news image"
                  ></div>
                </div>

                <div className="news-right">
                  <div className="news-text-wrap">
                    <div className="news-text-content">RoSE @ICSE 2023</div>
                    <div className="news-time">
                      May 23, 2023 - 1&nbsp;year, 11&nbsp;months ago
                    </div>
                    <div className="news-desc">
                      Presented my research on EzSkiROS in the RoSE workshop at
                      ICSE 2023, discussing advancements in DSLs for robotics
                      safety. Engaging discussions and exciting collaborations
                      ahead!
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="item-box">
        <a href="https://mominarizwan.com/repositories/">
          {" "}
          <div className="heading">Repositories</div>
        </a>
        <div
          style={{
            width: "100%",
            minHeight: "60vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div id="repos">
            <div
              style={{
                width: "100%",
                minHeight: "60vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
