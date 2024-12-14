// Элементы управления
const btnPrevStage = document.querySelector(".stages__prev");
const btnNextStage = document.querySelector(".stages__next");
const stageList = document.querySelector(".stages__list");

// Текущее смещение
let currentStageIndex = 0;

// Переход к предыдущему этапу
function moveToPreviousStage() {
  if (currentStageIndex > 0) {
    currentStageIndex--;
    updateStageView();
    updateActiveButton("previous");
  }
}

// Переход к следующему этапу
function moveToNextStage() {
  if (currentStageIndex < 4) {
    currentStageIndex++;
    updateStageView();
    updateActiveButton("next");
  }
}

// Обновление отображения слайдера
function updateStageView() {
  const offset = currentStageIndex * 100;
  stageList.style.transform = `translateX(-${offset}%)`;
}

// Обновление активной кнопки
function updateActiveButton(direction) {
  const activeButton = document.querySelector(".stages__slide--active");
  if (!activeButton) return;

  let targetButton =
    direction === "next"
      ? activeButton.nextElementSibling
      : activeButton.previousElementSibling;

  if (targetButton) {
    activeButton.classList.remove("stages__slide--active");
    targetButton.classList.add("stages__slide--active");
  }
}

// Обработчики событий
btnPrevStage.addEventListener("click", moveToPreviousStage);
btnNextStage.addEventListener("click", moveToNextStage);
