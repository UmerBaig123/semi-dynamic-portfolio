import "./AboutPage.css";
import Footer from "../components/footer/Footer";
import EditIntroduction from "../components/introduction/EditIntroduction";
import Navbar from "../components/navbar/Navbar";
import EditSkills from "../components/skills/EditSkils";
function AboutEdit() {
  return (
    <>
      <Navbar isAdmin={true} />
      <EditIntroduction />
      <EditSkills />
      <Footer />
    </>
  );
}

export default AboutEdit;
