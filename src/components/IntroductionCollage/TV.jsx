import { useState } from "react";

function TV() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="tv-section">
      <div
        className="tv-container"
        onMouseEnter={() => setIsPlaying(true)}
        onMouseLeave={() => setIsPlaying(false)}
      >
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
