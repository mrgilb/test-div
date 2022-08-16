const initSlider = () => {
  if (document.querySelector('.slider')) {
    const slider = document.querySelector('.slider');

    if (slider.querySelector('.slider__current')
      && slider.querySelector('#slider-prev')
      && slider.querySelector('#slider-next')
      && slider.querySelector('.slider__slide')
      && slider.querySelector('.slider__slides')) {

      const slide = slider.querySelector('.slider__slide');
      const slides = slider.querySelectorAll('.slider__slide');
      const nextBnt = slider.querySelector('#slider-next');
      const prevBtn = slider.querySelector('#slider-prev');
      const counter = slider.querySelector('.slider__current');
      const sliderLine = slider.querySelector('.slider__slider-line');
      prevBtn.setAttribute('disabled', 'disabled');
      let position = 0;
      let currentSlide = 1;

      slider.addEventListener('click', (evt) => {
        const delta = slide.offsetWidth;

        if (evt.target.matches('#slider-next')) {
          position = position - delta;
          sliderLine.style.left = `${position}px`;
          currentSlide += 1;
        } else if (evt.target.matches('#slider-prev')) {
          position = position + delta;
          sliderLine.style.left = `${position}px`;
          currentSlide -= 1;
        }

        if (currentSlide === 1) {
          prevBtn.setAttribute('disabled', 'disabled');
          nextBnt.removeAttribute('disabled');
        } else if (currentSlide > 1 && currentSlide <= slides.length) {
          prevBtn.removeAttribute('disabled');

          if (currentSlide === slides.length) {
            nextBnt.setAttribute('disabled', 'disabled');
          }
        }

        if (currentSlide < slides.length) {
          nextBnt.removeAttribute('disabled');
        }
        counter.textContent = currentSlide;
      });
    }
  }
};


export {initSlider};
