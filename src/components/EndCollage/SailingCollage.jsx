import { useState } from "react";

function SailingCollage() {
  const [isFrameHovered, setIsFrameHovered] = useState(false);

  const handleFrameClick = () => {
    window.open(
      "https://x.com/WhiteHouse/status/2007489108059533390",
      "_blank"
    );
  };

  return (
    <div className="collage-section">
      <div className="collage-container">
        <img src="/cloud.png" alt="Cloud" className="collage-cloud" />

        <div
          className="collage-frame-wrapper"
          onMouseEnter={() => setIsFrameHovered(true)}
          onMouseLeave={() => setIsFrameHovered(false)}
          onClick={handleFrameClick}
          style={{ cursor: "pointer" }}
        >
          {isFrameHovered && (
            <img
              src="/scrap-letters/happy-last-day.png"
              alt="Happy last day overlay"
              className="frame-overlay"
            />
          )}

          <img
            src="/frame.png"
            alt="Polaroid frame"
            className="collage-frame"
          />
        </div>

        <img src="/boat.png" alt="Boat" className="collage-boat" />

        <img src="/ocean.png" alt="Ocean wave" className="collage-ocean" />
      </div>
    </div>
  );
}

export default SailingCollage;
