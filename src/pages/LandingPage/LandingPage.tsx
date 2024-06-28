import InnerNavBar from "../../components/ui/InnerNavBar";
import { MainContent } from "../../components/ui/MainContent";
import Navbar from "../../components/ui/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <InnerNavBar />
      <MainContent />
    </>
  );
};

export default LandingPage;
