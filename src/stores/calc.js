import {defineStore} from 'pinia'

export const useCalcStore = defineStore('calc', () => {
  const sub = 'Калькулятор дохода'
  const title = 'Рассчитайте доход прямо сейчас!'
  const desc = 'Посчитайте, сколько Вы можете заработать вместе с нами'
  const period = ['3 месяца', '6 месяцев', 'Год']

  return {sub, title, desc, period}
})
