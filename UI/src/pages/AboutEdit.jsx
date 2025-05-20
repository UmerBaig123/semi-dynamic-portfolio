import "./AboutPage.css";
import Footer from "../components/footer/Footer";
import EditIntroduction from "../components/introduction/EditIntroduction";
import Navbar from "../components/navbar/Navbar";
function AboutEdit() {
  return (
    <>
      <Navbar isAdmin={true} />
      <EditIntroduction />
      <Footer />
    </>
  );
}

export default AboutEdit;
