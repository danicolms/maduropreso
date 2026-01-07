function Hero() {
  return (
    <section className="hero-section">
      <img
        src="/hero-paper.png"
        alt="Paper background"
        className="hero-paper"
      />
      <div className="hero-content">
        <img src="/logo.png" alt="maduropreso" className="hero-logo" />
        <p className="hero-text">
          primer blog dedicado al auge y la caida de este sapo bigotetón
        </p>
      </div>
    </section>
  );
}

export default Hero;
