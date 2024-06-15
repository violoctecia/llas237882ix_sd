import {defineStore} from 'pinia'

export const useFaqStore = defineStore('faq', () => {
  const sub = 'Ответы на вопросы'
  const title = 'FAQ'
  const itemsLeft = [
    {
      id: 0,
      title: 'Как начать зарабатывать?',
      content: '<p>Вам следует пройти простую процедуру регистрации на нашем сайте. Далее необходимо внести свой первый депозит,выбрав соответствующий раздел в личном кабинете, после чего вся инвестиционная работа будет проводиться нашейкомпанией, а Вы, в свою очередь, будете получать с этого ежемесячный доход.</p>'
    },
    {
      id: 1,
      title: 'Какая минимальная и максимальная сумма депозита?',
      content: '<p>Вам следует пройти простую процедуру регистрации на нашем сайте. Далее необходимо внести свой первый депозит,выбрав соответствующий раздел в личном кабинете, после чего вся инвестиционная работа будет проводиться нашейкомпанией, а Вы, в свою очередь, будете получать с этого ежемесячный доход.</p>'
    },
    {
      id: 2,
      title: 'Есть ли ограничения на сумму вывода денежных средств',
      content: '<p>Вам следует пройти простую процедуру регистрации на нашем сайте. Далее необходимо внести свой первый депозит,выбрав соответствующий раздел в личном кабинете, после чего вся инвестиционная работа будет проводиться нашейкомпанией, а Вы, в свою очередь, будете получать с этого ежемесячный доход.</p>'
    },
  ]

  const itemsRight = [
    {
      id: 3,
      title: 'Как существуют риски',
      content: '<p>Вам следует пройти простую процедуру регистрации на нашем сайте. Далее необходимо внести свой первый депозит,выбрав соответствующий раздел в личном кабинете, после чего вся инвестиционная работа будет проводиться нашейкомпанией, а Вы, в свою очередь, будете получать с этого ежемесячный доход.</p>'
    },
    {
      id: 4,
      title: 'Какими способами оплаты можно сделать инвестирование',
      content: '<p>Вам следует пройти простую процедуру регистрации на нашем сайте. Далее необходимо внести свой первый депозит,выбрав соответствующий раздел в личном кабинете, после чего вся инвестиционная работа будет проводиться нашейкомпанией, а Вы, в свою очередь, будете получать с этого ежемесячный доход.</p>'
    },
  ]

  return {sub, title, itemsLeft, itemsRight}
})
