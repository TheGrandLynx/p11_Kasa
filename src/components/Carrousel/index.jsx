import { useState } from 'react'
import arrowLeft from '../../assets/arrowLeft.svg'
import arrowRight from '../../assets/arrowRight.svg'

export default function Carrousel({ slides }) {
  //soutenance 7 carrousel
  const [currentSlide, setcurrentSlide] = useState(0) //we define the index of the first slide at 0
  const lengthSlide = slides.length //

  const nextSlide = () => {
    setcurrentSlide(currentSlide === lengthSlide - 1 ? 0 : currentSlide + 1) // we go back to the start slide if it is the last
  }
  const prevSlide = () => {
    setcurrentSlide(currentSlide === 0 ? lengthSlide - 1 : currentSlide - 1) //when hitting previous, we go to last slide if the current slide is the first
  }

  return (
    <section id="carrouselContainer">
      {lengthSlide > 1 && (
        //we show the arrows only if there's more than one slide
        <img
          src={arrowLeft}
          alt="flèche gauche"
          onClick={prevSlide}
          className="leftArrow"
        />
      )}
      {lengthSlide > 1 && (
        <img
          src={arrowRight}
          alt="flèche droite"
          onClick={nextSlide}
          className="rightArrow"
        />
      )}
      {slides.map((slide, index) => (
        //we set the slider,
        //whenever the slide is the current index,
        //we set his opacity to 1
        //next we add the img
        //and finaly the count of images
        <div
          key={index}
          className={currentSlide === index ? 'slider activeSlide' : 'slider'}
        >
          {index === currentSlide && (
            <img src={slide} alt="appartement à louer" />
          )}
          {lengthSlide > 1 && index === currentSlide && (
            <span className="slider__number">
              {currentSlide + 1}/{lengthSlide}
            </span>
          )}
        </div>
      ))}
    </section>
  )
}
