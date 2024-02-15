(() => {
  const openBtn: HTMLElement | null = document.querySelector('.j-filters-open')
  const closeBtn: HTMLElement | null = document.querySelector('.j-filters-close')
  const filtersWindow: HTMLElement | null = document.querySelector('.j-filters')

  const closeWindow = () => {
    console.log(1111)
    setTimeout(() => {
      filtersWindow?.classList.remove('sounds__popup_open')
    })
  }

  const openWindow = () => {
    console.log(222)
    filtersWindow?.classList.add('sounds__popup_open')
  }

  openBtn?.addEventListener('click', openWindow)
  closeBtn?.addEventListener('click', closeWindow)

  window.addEventListener('click', (e) => {
    const target = (e.target as HTMLElement)
    if ((!target?.closest('.j-filters')) && (target !== openBtn)) {
      closeWindow()
    }
  })
})()
