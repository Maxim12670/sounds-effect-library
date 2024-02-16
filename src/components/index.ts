import PopupController from './popup/controller'
import './ui/multiRange/controller';
(() => {
  document.querySelectorAll('.j-popup').forEach(elem => {
    new PopupController(elem as HTMLButtonElement)
  })
})()
