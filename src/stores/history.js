import {defineStore} from 'pinia'

export const useHistoryStore = defineStore('history', () => {
  const items = [
    {date: '27.11.2023', value: '+40 000₽', type: 'Пополнение'},
    {date: '27.11.2023', value: '+40 000₽', type: 'Пополнение'},
    {date: '27.11.2023', value: '-40 000₽', type: 'Вывод', output: true},
    {date: '27.11.2023', value: '+40 000₽', type: 'Пополнение'},
    {date: '27.11.2023', value: '-400 000₽ ', type: 'Вывод', output: true},
    {date: '27.11.2023', value: '+40 000₽', type: 'Пополнение'},
    {date: '27.11.2023', value: '+40 000₽', type: 'Пополнение'},
  ]

  return {items}
})
