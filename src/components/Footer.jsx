function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.instagram.com/soymaduropreso/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img src="/instagram.png" alt="Instagram" className="footer-logo" />
      </a>
      <a
        href="https://x.com/maduropreso/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img src="/x.png" alt="X" className="footer-logo" />
      </a>
      <a
        href="https://github.com/danicolms/maduropreso"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-link"
      >
        <img src="/github.png" alt="GitHub" className="footer-logo" />
      </a>
    </footer>
  );
}

export default Footer;
