import "./AboutPage.css";
import Introduction from "../components/introduction/Introduction";
import Publications from "../components/publications/Publications";
import News from "../components/news/News";
import Repositories from "../components/repositories/Respositories";
import Skills from "../components/skills/Skills";
import Footer from "../components/footer/Footer";
function AboutPage() {
  return (
    <>
      <Introduction />
      <Publications isMain={true} />
      <News isMain={true} />
      <Repositories isMain={true} />
      <Skills
        skills={[
          { skill_name: "ReactJS", skill_progress: 90 },
          { skill_name: "Django", skill_progress: 60 },
          { skill_name: "Flask", skill_progress: 70 },
          { skill_name: "SocketIO", skill_progress: 30 },
          { skill_name: "ThreeJS", skill_progress: 90 },
        ]}
      />
      <Footer />
    </>
  );
}

export default AboutPage;
