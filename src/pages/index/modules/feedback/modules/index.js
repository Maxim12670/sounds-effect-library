
import Swiper, { Navigation, Pagination } from 'swiper'

const container = document.querySelector('.feedback__list')
const pagination = document.querySelector('.swiper-pagination')
console.log(pagination)

new Swiper(container, {
  pagination: {
    el: pagination,
    clickable: true
  },
  loop: true,
  slidesPreView: 1,
  SlidesPerColumn: 1,
  spaceBetween: 15,
  modules: [Navigation, Pagination],
  breakpoints: {
    768: {
      slidesPerView: 2
    },
    1244: {
      slidesPerView: 3
    }
  }
})
