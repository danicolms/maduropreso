function ScrapLetterTitle() {
  const words = [
    {
      word: "como",
      letters: [
        { src: "/scrap-letters/c.png", alt: "c" },
        { src: "/scrap-letters/o-up.png", alt: "o" },
        { src: "/scrap-letters/m.png", alt: "m" },
        { src: "/scrap-letters/o.png", alt: "o" },
      ],
    },
    {
      word: "termine",
      letters: [
        { src: "/scrap-letters/t.png", alt: "t" },
        { src: "/scrap-letters/e.png", alt: "e" },
        { src: "/scrap-letters/r.png", alt: "r" },
        { src: "/scrap-letters/m-up.png", alt: "m" },
        { src: "/scrap-letters/i.png", alt: "i" },
        { src: "/scrap-letters/n.png", alt: "n" },
        { src: "/scrap-letters/e-up.png", alt: "e" },
      ],
    },
    {
      word: "aqui",
      letters: [
        { src: "/scrap-letters/a.png", alt: "a" },
        { src: "/scrap-letters/q.png", alt: "q" },
        { src: "/scrap-letters/u.png", alt: "u" },
        { src: "/scrap-letters/i.png", alt: "i" },
      ],
    },
  ];

  return (
    <div className="header-section">
      <div className="scrap-letters">
        {words.map((wordObj, wordIndex) => (
          <div key={wordIndex} className="scrap-word">
            {wordObj.letters.map((letter, letterIndex) => (
              <img
                key={letterIndex}
                src={letter.src}
                alt={letter.alt}
                className="scrap-letter"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScrapLetterTitle;
