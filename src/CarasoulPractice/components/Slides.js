import React, { useState } from "react";

function Slides({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const resetSlide = () => {
    setCurrent(0);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const disableLast = () => {
    return current === length - 1;
  };

  const disableFirst = () => {
    return current === 0;
  };

  console.log(current);

  return (
    <div>
      <div id="navigation" className="text-center">
        <button
          data-testid="button-restart"
          className="small outlined"
          onClick={resetSlide}
          disabled={disableFirst()}
        >
          Restart
        </button>
        <button
          data-testid="button-prev"
          className="small"
          onClick={previousSlide}
          disabled={disableFirst()}
        >
          Prev
        </button>
        <button
          data-testid="button-next"
          className="small"
          onClick={nextSlide}
          disabled={disableLast()}
        >
          Next
        </button>
      </div>
      {slides.map((slide, index) => {
        return (
          <div className="test" key={index}>
            {index === current && (
              <div id="slide" className="card text-center" key={index}>
                <h1 data-testid="title">{slide.title}</h1>
                <p data-testid="text">{slide.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Slides;
