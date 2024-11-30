import { useState } from "react";
import './Slider.css'
import FullMainList from "../Pages/Pages";
import FullEpizodList from "../../Epizodes/Pages/Pages_Epizod";
import PagesLocation from "../../Location/Pages/Pages";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [<FullMainList></FullMainList>,<FullEpizodList></FullEpizodList>,<PagesLocation></PagesLocation>];

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setSlideIndex(slideIndex + 1)
    } else {
      setSlideIndex(0)
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setSlideIndex(slideIndex - 1)
    } else {
      setSlideIndex(slides.length - 1)
    }
  };

  return (
    <div className="slider__contain">
      <div className="slider__div" >
        {slides[slideIndex]}
      </div>
      
   
      <div className="prev" onClick={prevSlide}>
        <img src="/path/to/left-arrow.png" className="arrow" />
      </div>

      <div className="next" onClick={nextSlide}>
        <img src="/path/to/right-arrow.png" className="arrow" />
      </div>
    </div>
  );
};

export default Slider;