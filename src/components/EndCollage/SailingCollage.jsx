function SailingCollage() {
  return (
    <div className="collage-section">
      <div className="collage-container">
        <img src="/cloud.png" alt="Cloud" className="collage-cloud" />

        <div
          className="collage-frame-wrapper"
          onClick={() => {
            // TODO: OPEN LINK: https://x.com/WhiteHouse/status/2007489108059533390
          }}
        >
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
