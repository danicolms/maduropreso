import "./styles.css";
import Hero from "./components/Hero";
import IntroductionCollage from "./components/IntroductionCollage";
import EndCollage from "./components/EndCollage";
import StraightArrow from "./components/StraightArrow";
import CurvedArrow from "./components/CurvedArrow";
import ShopButton from "./components/ShopButton";

function App() {
  console.log(
    "Are you one of the tech fellows? This project's repository is public for all to see! ----> https://github.com/danicolms/maduropreso✨",
  );
  return (
    <>
      <ShopButton />
      <main className="main-container">
        <section className="left-section">
          <Hero />
          <IntroductionCollage />
        </section>
        <StraightArrow />
        <CurvedArrow />
        <section className="right-section">
          <EndCollage />
        </section>
      </main>
    </>
  );
}

export default App;
