import "./styles.css";
import Hero from "./components/Hero";
import IntroductionCollage from "./components/IntroductionCollage";
import EndCollage from "./components/EndCollage";

function App() {
  console.log(
    "Are you one of the tech fellows? This project's repository is public for all to see! ----> https://github.com/danicolms/maduropreso✨",
  );
  return (
    <div className="main-container">
      <div className="left-section">
        <Hero />
        <IntroductionCollage />
      </div>
      <div className="right-section">
        <EndCollage />
      </div>
    </div>
  );
}

export default App;
