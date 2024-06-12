import { defineStore } from 'pinia'

export const useHeroStore = defineStore('hero', () => {
  const sub = 'Инвестиционный клуб'
  const title = 'Инвестиции<br> от 100% годовых'
  const desc = 'Получайте до 8.5% каждый месяц от вклада на протяжении 12 месяцев.'
  const button = 'Начать инвестировать'
  const info = [
    {value: 'Минимальный вклад<br> 100 000₽', icon: '/src/assets/img/icons/i1.svg'},
    {value: 'Максимальный вклад<br> 20 000 000₽', icon: '/src/assets/img/icons/i2.svg'},
    {value: 'Договор займа<br> под 100% годовых', icon: '/src/assets/img/icons/i3.svg'},
    {value: 'Личная встреча в офисе Москва- сити при вкладе от 500 000₽', icon: '/src/assets/img/icons/i4.svg'},
  ]

  return { sub, title, desc, button, info }
})
