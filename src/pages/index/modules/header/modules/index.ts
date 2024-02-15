import { PopupBlockController } from './popupBlock/controller'

(() => {
  document.querySelectorAll('.j-popup-block')
    .forEach(block => {
      new PopupBlockController(block as HTMLSelectElement)
    })
})()
