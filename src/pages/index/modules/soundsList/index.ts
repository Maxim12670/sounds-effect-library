import ModalWindowControllert from '../../../../components/modalWindow/modalWindowController'

(() => {
  const openBtn = '.j-filters-open'
  const closeBtn = '.j-filters-close'
  const filtersWindow = '.j-filters'
  const classStyle = 'sounds__popup_open'
  new ModalWindowControllert(openBtn, closeBtn, filtersWindow, classStyle)
})()
