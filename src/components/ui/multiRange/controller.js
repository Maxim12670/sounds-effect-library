const inputLeft = document.querySelector(".j-input-left")
const inputRight = document.querySelector(".j-input-right")

const thumbLeft = document.querySelector(".j-leftThumb")
const thumbRight = document.querySelector(".j-rightThumb")
const range = document.querySelector(".j-range")

function setLeftValue () {
  const _this = inputLeft, min = parseInt(_this.min), max = parseInt(_this.max)

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1)

  const percent = ((_this.value - min) / (max - min)) * 100

  const tooltipLeft = document.querySelector(".j-tooltipLeft")
  tooltipLeft.textContent = convertPercentToTime(percent)

  thumbLeft.style.left = percent + "%"
  range.style.left = percent + "%"
}
setLeftValue()

function setRightValue () {
  const _this = inputRight, min = parseInt(_this.min), max = parseInt(_this.max)

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1)

  const percent = ((_this.value - min) / (max - min)) * 100

  const tooltipRight = document.querySelector('.j-tooltipRigth')
  tooltipRight.textContent = convertPercentToTime(percent)

  thumbRight.style.right = (100 - percent) + "%"
  range.style.right = (100 - percent) + "%"
}
setRightValue()

function convertPercentToTime (percent) {
  // Переводим проценты в минуты
  const totalMinutes = percent * 10 // Предполагаем, что 100% соответствует 10 минутам

  // Рассчитываем часы и минуты
  const hours = Math.floor(totalMinutes / 60)
  const minutes = Math.floor(totalMinutes % 60)

  // Форматируем время
  const formattedHours = String(hours).padStart(2, '0') // Добавляем ведущий ноль, если нужно
  const formattedMinutes = String(minutes).padStart(2, '0') // Добавляем ведущий ноль, если нужно

  return `${formattedHours}:${formattedMinutes}`
}

inputLeft.addEventListener("input", setLeftValue)
inputRight.addEventListener("input", setRightValue)

inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
})
inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
})
inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
})
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
})

inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
})
inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
})
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
})
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
})
