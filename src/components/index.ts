import PopupController from './popup/controller'
import { CustomSelectController } from './ui/customSelect/controller';

(() => {
  document.querySelectorAll('.j-popup').forEach(elem => {
    new PopupController(elem as HTMLButtonElement)
  })
  document.querySelectorAll('.j-custom-select').forEach(elem => {
    new CustomSelectController(elem as HTMLButtonElement)
  })
})()
