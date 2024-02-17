
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
  slidesPerView: 3,
  SlidesPerColumn: 1,
  spaceBetween: 15,
  modules: [Navigation, Pagination],
  breakpoints: {
    1244: {
      slidesPreView: 3
    },
    768: {
      slidesPerView: 2
    }
  }
})
