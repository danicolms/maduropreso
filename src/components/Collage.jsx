function Collage() {
  return (
    <div className="collage-section">
      <div className="collage-container">
        {/* Big cloud */}
        <img src="/cloud.png" alt="Cloud" className="collage-cloud" />

        {/* Polaroid frame - main focus */}
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

        {/* Boat */}
        <img src="/boat.png" alt="Boat" className="collage-boat" />

        {/* Small wave at bottom */}
        <img src="/ocean.png" alt="Ocean wave" className="collage-ocean" />
      </div>
    </div>
  );
}

export default Collage;
