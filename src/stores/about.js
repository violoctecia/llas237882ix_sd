import {defineStore} from 'pinia'

export const useAboutStore = defineStore('about', () => {
  const sub = 'Кто мы?'
  const title = 'Мы - команда людей, создающие новые крипто-проекты и продвигающие по новой аудитории.'
  const desc = 'Мы создали инвестиционный клуб, где каждый участник может сотрудничать с нами и зарабатывать.'
  const items = [
    {value: '350М+', label: 'рублей инвестировано'},
    {value: '700М+', label: 'рублей выплачено инвесторам'},
    {value: '100+', label: 'новых инвесторов ежемесячно'},
    {value: '5+', label: 'лет в сфере криптовалюты'},
    {value: '> 2000+', label: 'завершенных сделок'},
    {value: '80+', label: 'знаменитостей с нами'},
  ]

  return {sub, title, desc, items}
})
