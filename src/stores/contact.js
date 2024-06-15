import {defineStore} from 'pinia'

export const useContactStore = defineStore('contact', () => {
  const sub = 'Контакты'
  const title = 'Связь с нами'

  return {sub, title}
})
