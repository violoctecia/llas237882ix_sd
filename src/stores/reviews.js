import {defineStore} from 'pinia'

export const useReviewsStore = defineStore('reviews', () => {
  const sub = 'О нас говорят'
  const title = 'Нам доверяют'
  const items = [
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-2.jpg', '/src/assets/img/other/img-2.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-3.jpg', '/src/assets/img/other/img-3.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
  ]

  return {sub, title, items}
})
