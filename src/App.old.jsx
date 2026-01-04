import { useEffect, useRef } from 'react'
import { animate } from 'animejs'
import './styles.css'

function App() {
  const titleRef = useRef(null)
  const tweetBoxRef = useRef(null)
  const productBoxRef = useRef(null)
  const shopButtonRef = useRef(null)

  useEffect(() => {
    // Title spring jump animation
    const title = titleRef.current

    const handleTitleEnter = () => {
      animate({
        targets: title,
        translateY: -10,
        duration: 400,
        easing: 'spring(1, 100, 10, 0)',
      })
    }

    const handleTitleLeave = () => {
      animate({
        targets: title,
        translateY: 0,
        duration: 400,
        easing: 'spring(1, 100, 10, 0)',
      })
    }

    title.addEventListener('mouseenter', handleTitleEnter)
    title.addEventListener('mouseleave', handleTitleLeave)

    // Box hover animations
    const animateBoxHover = (box, rotation) => {
      const handleEnter = () => {
        animate({
          targets: box,
          scale: 1.08,
          rotate: rotation,
          duration: 400,
          easing: 'spring(1, 100, 8, 0)',
        })
      }

      const handleLeave = () => {
        animate({
          targets: box,
          scale: 1,
          rotate: 0,
          duration: 350,
          easing: 'spring(1, 100, 8, 0)',
        })
      }

      box.addEventListener('mouseenter', handleEnter)
      box.addEventListener('mouseleave', handleLeave)

      return () => {
        box.removeEventListener('mouseenter', handleEnter)
        box.removeEventListener('mouseleave', handleLeave)
      }
    }

    const tweetCleanup = animateBoxHover(tweetBoxRef.current, -3)
    const productCleanup = animateBoxHover(productBoxRef.current, 3)

    // Sparkle animations
    const animateSparkles = (container) => {
      const sparkles = container.querySelectorAll('.sparkle')

      const handleEnter = () => {
        sparkles.forEach((sparkle, index) => {
          const randomX = Math.random() * 100
          sparkle.style.left = randomX + '%'
          sparkle.style.top = '0%'

          animate({
            targets: sparkle,
            translateY: [0, 400],
            translateX: [0, (Math.random() - 0.5) * 100],
            opacity: [
              { value: 1, duration: 200 },
              { value: 1, duration: 1600 },
              { value: 0, duration: 200 },
            ],
            rotate: [0, Math.random() * 720 - 360],
            scale: [
              { value: 0, duration: 0 },
              { value: 1.2, duration: 200 },
              { value: 1, duration: 1600 },
              { value: 0, duration: 200 },
            ],
            delay: index * 100,
            duration: 2000,
            easing: 'easeOutCubic',
            loop: true,
          })
        })
      }

      const handleLeave = () => {
        // Animation cleanup handled by loop stop
        sparkles.forEach((sparkle) => {
          sparkle.style.opacity = 0
        })
      }

      container.addEventListener('mouseenter', handleEnter)
      container.addEventListener('mouseleave', handleLeave)

      return () => {
        container.removeEventListener('mouseenter', handleEnter)
        container.removeEventListener('mouseleave', handleLeave)
      }
    }

    const tweetSparkleCleanup = animateSparkles(tweetBoxRef.current)
    const productSparkleCleanup = animateSparkles(productBoxRef.current)

    // Shop button animation
    const shopButton = shopButtonRef.current

    const handleButtonEnter = () => {
      animate({
        targets: shopButton,
        scale: 1.08,
        translateY: -2,
        duration: 300,
        easing: 'spring(1, 100, 10, 0)',
      })
    }

    const handleButtonLeave = () => {
      animate({
        targets: shopButton,
        scale: 1,
        translateY: 0,
        duration: 250,
        easing: 'spring(1, 100, 10, 0)',
      })
    }

    shopButton.addEventListener('mouseenter', handleButtonEnter)
    shopButton.addEventListener('mouseleave', handleButtonLeave)

    return () => {
      title.removeEventListener('mouseenter', handleTitleEnter)
      title.removeEventListener('mouseleave', handleTitleLeave)
      tweetCleanup()
      productCleanup()
      tweetSparkleCleanup()
      productSparkleCleanup()
      shopButton.removeEventListener('mouseenter', handleButtonEnter)
      shopButton.removeEventListener('mouseleave', handleButtonLeave)
    }
  }, [])

  return (
    <>
      <img src="/logo.png" alt="Maduro está preso" className="title-logo" ref={titleRef} />
      <div className="container">
        <div className="content-box">
          <a
            href="https://x.com/WhiteHouse/status/2007489108059533390"
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-box"
            ref={tweetBoxRef}
          >
            <div className="sparkles">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="sparkle">
                  {i % 2 === 0 ? '✨' : '⭐️'}
                </span>
              ))}
            </div>
            <div className="tweet-header">
              <div className="tweet-avatar"></div>
              <div>
                <div className="tweet-author">Donald J. Trump</div>
                <div className="tweet-handle">@realDonaldTrump</div>
              </div>
            </div>
            <div className="tweet-text">
              Nicolas Maduro on board the USS Iwo Jima.
            </div>
            <img
              src="/maduro-tweet.jpg"
              alt="Nicolas Maduro on board the USS Iwo Jima"
              className="tweet-image"
            />
          </a>
        </div>

        <div className="content-box product-column">
          <a
            href="https://shop.maduropreso.com/product/26005789/unisex-heavy-blend-hooded-sweatshirt"
            target="_blank"
            rel="noopener noreferrer"
            className="product-box"
            ref={productBoxRef}
          >
            <div className="product-box-inner">
              <img
                src="/hoodie.jpg"
                alt="Maduro Preso Hoodie"
                className="product-image"
              />
            </div>
            <div className="sparkles">
              {[...Array(20)].map((_, i) => (
                <span key={i} className="sparkle">
                  {i % 2 === 0 ? '✨' : '⭐️'}
                </span>
              ))}
            </div>

            <img src="/tag.gif" alt="Tag" className="product-tag" />
          </a>
          <div className="shop-button-wrapper">
            <a
              href="https://shop.maduropreso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="shop-button"
              ref={shopButtonRef}
            >
              ver todos los productos
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
