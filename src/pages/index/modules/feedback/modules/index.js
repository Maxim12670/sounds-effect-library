
import Swiper, { Navigation, Pagination } from 'swiper'

const container = document.querySelector('.feedback__list')
const btnNeaxt = document.querySelectorAll('.feedback__list .swiper-button-next')
const pagination = document.querySelector('.swiper-pagination')
console.log(pagination)

new Swiper(container, {
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev'
  // },
  pagination: {
    el: pagination,
    clickable: true
  },
  loop: true,
  slidesPerView: 3,
  SlidesPerColumn: 1,
  spaceBetween: 15,
  modules: [Navigation, Pagination]
})
