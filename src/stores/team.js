import {defineStore} from 'pinia'

export const useTeamStore = defineStore('team', () => {
  const sub = 'Офис - Московская область, д. Путилково, БЦ «Гринвуд»'
  const title = 'Мы не прячем свои лица'
  const items = [
    {
      name: 'Доганин Алексей',
      email: 'trudsystem@ya.ru',
      phone: '+7 (850) 000-00-00',
      image: ['/src/assets/img/other/person-1.jpg', '/src/assets/img/other/person-1@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      email: 'trudsystem@ya.ru',
      phone: '+7 (850) 000-00-00',
      image: ['/src/assets/img/other/person-2.jpg', '/src/assets/img/other/person-2@2x.jpg']
    },
    {
      name: 'Доганин Алексей',
      email: 'trudsystem@ya.ru',
      phone: '+7 (850) 000-00-00',
      image: ['/src/assets/img/other/person-3.jpg', '/src/assets/img/other/person-3@2x.jpg']
    }
  ]

  return {sub, title, items}
})
