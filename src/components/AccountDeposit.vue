<script setup>
import IconDate from "@/components/icons/IconDate.vue";
import IconProcent from "@/components/icons/IconProcent.vue";
import IconMoney from "@/components/icons/IconMoney.vue";
import { defineProps, computed } from 'vue';

const props = defineProps({
  investments: {
    type: Array,
    required: true,
  },
});

const totalAmount = computed(() => {
  return props.investments.reduce((sum, investment) => sum + investment.amount, 0);
});

const startDate = computed(() => {
  const dates = props.investments.map(investment => new Date(investment.createdAt));
  return new Date(Math.min(...dates));
});

const dailyIncome = computed(() => {
  return props.investments.reduce((sum, investment) => {
    const { amount, type } = investment;
    let dailyIncome = 0;
    if (type.id === 1) {
      dailyIncome = (amount * 0.10) / 90; // 10% на 90 дней
    } else if (type.id === 2) {
      dailyIncome = (amount * 0.20) / 180; // 20% на 180 дней
    } else if (type.id === 3) {
      dailyIncome = (amount * 0.40) / 365; // 40% на 365 дней
    }
    return sum + dailyIncome;
  }, 0).toFixed(2);
});

const expectedIncome = computed(() => {
  return props.investments.reduce((sum, investment) => {
    const { amount, type } = investment;
    let income = 0;
    if (type.id === 1) {
      income = amount + (amount * 0.10); // 10% на 90 дней
    } else if (type.id === 2) {
      income = amount + (amount * 0.20); // 20% на 180 дней
    } else if (type.id === 3) {
      income = amount + (amount * 0.40); // 40% на 365 дней
    }
    return sum + income;
  }, 0).toFixed(2);
});
</script>

<template>
  <div class="deposit flex flex-col radius-16 border-1 bg-1">
    <div class="deposit__body flex flex-col p-20 grow">
      <div class="flex items-center justify-between">
        <div class="sub-gradient">
          <span class="flex items-center cl-gray-4 font-13 font-rf-dewi font-bold">Активный вклад</span>
        </div>
        <ul class="deposit__date flex font-bold font-rf-dewi">
          <li>{{ startDate.toLocaleDateString() }}</li>
        </ul>
      </div>
      <div class="flex justify-between deposit__values items-end">
        <div class="flex flex-col">
          <p class="font-12 cl-white-1">Общая сумма вклада:</p>
          <p class="deposit__value font-bold font-rf-dewi"><span class="cl-orange">₽</span>{{ totalAmount }}</p>
        </div>
        <div class="deposit__income flex radius-10 font-rf-dewi font-bold font-13 items-center">₽{{ dailyIncome }}</div>
      </div>
    </div>
    <div class="deposit__foot border-top-1">
      <ul class="deposit__info flex font-12 cl-white-1">
        <li class="flex items-center grow">
          <IconDate class="mr-10"/>
          <p class="flex flex-col">
            <span>Дата начала инвестирования</span>
            <b class="font-medium font-13 cl-white">{{ startDate.toLocaleDateString() }}</b>
          </p>
        </li>
        <li class="flex items-center grow">
          <IconProcent class="mr-10"/>
          <p class="flex flex-col">
            <span>Ежедневный доход</span>
            <b class="font-medium font-13 cl-white">≈ {{ dailyIncome }}₽</b>
          </p>
        </li>
        <li class="flex items-center grow">
          <IconMoney class="mr-10"/>
          <p class="flex flex-col">
            <span>Ожидаемый доход</span>
            <b class="font-medium font-13 cl-white">₽{{ expectedIncome }}</b>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
