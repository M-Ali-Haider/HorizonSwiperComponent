import HomePage from "./components/HomePage";
import HowCanWe from "./components/HowCanWe";
import TeamSlider from "./components/TeamSlider";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import Header from "./components/Header";

import './App.css';
function App(){
  return(
    <>
      <Header />
      <HomePage />
      <HowCanWe />
      <TeamSlider/>
      <ProjectSection />
      <Footer />
    </>
  );
}
export default App;