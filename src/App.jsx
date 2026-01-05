import "./styles.css";
import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  console.log(
    "Are you one of the tech fellows? This project's repository is public for all to see! ----> https://github.com/danicolms/maduropreso✨",
  );
  return (
    <div className="main-container">
      <Hero />
      <Header />
    </div>
  );
}

export default App;
