// Элементы управления
const btnPrevMember = document.querySelector(".members__prev");
const btnNextMember = document.querySelector(".members__next");
const displayCurrentCount = document.querySelector(".members__current");
const displayMaxCount = document.querySelector(".members__total");
const sliderWrapper = document.querySelector(".member__content");

// Текущее смещение
let currentSlideIndex = 0;

// Установка начальных значений и сброс при изменении размера окна
function updateSliderSettings() {
  const isSmallScreen = window.innerWidth < 1366;

  if (isSmallScreen) {
    displayMaxCount.textContent = "6";
  } else {
    sliderWrapper.style.transform = `translateX(0)`;
    currentSlideIndex = 0;
    displayMaxCount.textContent = "2";
  }
}

window.addEventListener("resize", updateSliderSettings);
updateSliderSettings();

// Функция перехода на предыдущий слайд
function slideToPrevious(maxSlides) {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
    updateSliderPosition();
  }
}

// Функция перехода на следующий слайд
function slideToNext(maxSlides) {
  if (currentSlideIndex < maxSlides) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0; // Перемотка на начало
  }
  updateSliderPosition();
}

// Обновление позиции слайдера и текущего счётчика
function updateSliderPosition() {
  sliderWrapper.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  displayCurrentCount.textContent = currentSlideIndex + 1;
}

// Обработчики для кнопок
function handlePrevButtonClick() {
  const maxSlides = window.innerWidth < 1366 ? 6 : 2;
  slideToPrevious(maxSlides);
}

function handleNextButtonClick() {
  const maxSlides = window.innerWidth < 1366 ? 5 : 1;
  slideToNext(maxSlides);
}

btnPrevMember.addEventListener("click", handlePrevButtonClick);
btnNextMember.addEventListener("click", handleNextButtonClick);

// Автоматическая прокрутка
function startAutoSlide() {
  setInterval(() => {
    const maxSlides = window.innerWidth < 1366 ? 5 : 1;
    slideToNext(maxSlides);
  }, 4000);
}

startAutoSlide();
