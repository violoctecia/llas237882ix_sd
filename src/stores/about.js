import {defineStore} from 'pinia'

export const useAboutStore = defineStore('about', () => {
  const sub = 'Кто мы?'
  const title = 'Мы - команда людей, создающие<br> новые крипто-проекты.'
  const desc = 'Мы создали инвестиционный клуб, где каждый участник может сотрудничать с нами и зарабатывать.'
  const items = [
    {value: '350М+', label: 'рублей инвестировано'},
    {value: '700М+', label: 'рублей выплачено инвесторам'},
    {value: '100+', label: 'инвесторов в клубе'},
    {value: '5+', label: 'лет в сфере криптовалют'},
    {value: '> 2000+', label: 'завершенных сделок'},
    {value: '80+', label: 'знаменитостей с нами'},
  ]

  return {sub, title, desc, items}
})
