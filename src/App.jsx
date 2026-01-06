import "./styles.css";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Collage from "./components/Collage";

function App() {
  console.log(
    "Are you one of the tech fellows? This project's repository is public for all to see! ----> https://github.com/danicolms/maduropreso✨",
  );
  return (
    <div className="main-container">
      <Hero />
      <div className="right-section">
        <Header />
        <Collage />
      </div>
    </div>
  );
}

export default App;
