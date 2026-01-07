import { useState } from "react";

function TV() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleTVClick = () => {
    window.open(
      "https://www.reuters.com/article/world/hugo-chavez-muere-de-cncer-y-termina-una-era-en-venezuela-idUSSIE92400P/",
      "_blank"
    );
  };

  return (
    <div className="tv-section">
      <div
        className="tv-container"
        onMouseEnter={() => {
          setIsPlaying(true);
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsPlaying(false);
          setIsHovered(false);
        }}
        onClick={handleTVClick}
        style={{ cursor: "pointer" }}
      >
        {isHovered && (
          <img
            src="/scrap-letters/first-day-star.png"
            alt="First day star overlay"
            className="tv-overlay"
          />
        )}

        <img
          src={isPlaying ? "/static.gif" : "/soap-opera.gif"}
          alt="TV screen"
          className="tv-screen"
        />

        <img src="/tv.png" alt="TV" className="tv-frame" />
      </div>
    </div>
  );
}

export default TV;
