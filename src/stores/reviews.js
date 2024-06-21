import {defineStore} from 'pinia'

export const useReviewsStore = defineStore('reviews', () => {
  const sub = 'О нас говорят'
  const title = 'Нам доверяют'
  const items = [
    {
      name: '<span>Андрей Попов</span> <span class="cl-white-1">Абсолютный чемпион кубка России по бодибилдингу, чемпион России по бодибилдингу, чемпион мира по фитнесу, чемпион Европы по фитнесу.</span>',
      image: ['/src/assets/img/other/img-2.jpg', '/src/assets/img/other/img-2.jpg']
    },
    {
      name: '<span>Михаил Сидорычев</span> <span class="cl-white-1">Многократный чемпион и призёр на чемпионатах России, Европы и мира.</span>',
      image: ['/src/assets/img/other/img-3.jpg', '/src/assets/img/other/img-3.jpg']
    },
    {
      name: 'Доганин Алексей',
      image: ['/src/assets/img/other/img-1.jpg', '/src/assets/img/other/img-1@2x.jpg']
    },
  ]

  return {sub, title, items}
})
