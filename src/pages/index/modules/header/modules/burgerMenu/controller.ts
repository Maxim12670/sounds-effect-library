(() => {
  const burgerBtn = document.querySelectorAll('.j-burger-btn')
  const burgerMenu = document.querySelectorAll('.j-burger-menu')
  console.log()
  burgerBtn.forEach(btn => {
    btn.addEventListener('click', () => {
      console.log(1111)
      burgerMenu.forEach(item => {
        item.classList.toggle('active')
      })
    })
  })
})()
