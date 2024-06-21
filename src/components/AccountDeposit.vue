<script setup>
import IconDate from "@/components/icons/IconDate.vue";
import IconProcent from "@/components/icons/IconProcent.vue";
import IconMoney from "@/components/icons/IconMoney.vue";
import { defineProps, computed, ref, onMounted, onUnmounted } from 'vue';

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
      dailyIncome = (amount * 0.10) / 90;
    } else if (type.id === 2) {
      dailyIncome = (amount * 0.20) / 180;
    } else if (type.id === 3) {
      dailyIncome = (amount * 0.40) / 365;
    }
    return sum + dailyIncome;
  }, 0).toFixed(2);
});

const expectedIncome = computed(() => {
  return props.investments.reduce((sum, investment) => {
    const {amount, type} = investment;
    let income = 0;
    if (type.id === 1) {
      income = amount + (amount * 0.10);
    } else if (type.id === 2) {
      income = amount + (amount * 0.20);
    } else if (type.id === 3) {
      income = amount + (amount * 0.40);
    }
    return sum + income;
  }, 0).toFixed(2);
});

const currentIncome = ref('0.000000');

const calculateCurrentIncome = () => {
  const now = new Date();
  const income = props.investments.reduce((sum, investment) => {
    const {amount, type, createdAt} = investment;
    const startDate = new Date(createdAt);
    const secondsPassed = (now - startDate) / 1000; // Время в секундах
    let yearlyRate = 0;
    if (type.id === 1) {
      yearlyRate = 0.10 / 90 / 24 / 3600; // 10% за 90 дней, переведено в секунды
    } else if (type.id === 2) {
      yearlyRate = 0.20 / 180 / 24 / 3600; // 20% за 180 дней, переведено в секунды
    } else if (type.id === 3) {
      yearlyRate = 0.40 / 365 / 24 / 3600; // 40% за 365 дней, переведено в секунды
    }
    const income = amount * yearlyRate * secondsPassed;
    return sum + income;
  }, 0).toFixed(6);
  currentIncome.value = income;
};

onMounted(() => {
  calculateCurrentIncome(); // Вызываем сразу для первоначального расчета
  const interval = setInterval(calculateCurrentIncome, 1000); // Обновляем каждую секунду
  onUnmounted(() => clearInterval(interval)); // Очищаем таймер при размонтировании компонента
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
        <div class="deposit__income flex radius-10 font-rf-dewi font-bold font-13 items-center">
          ₽{{ Number(currentIncome).toFixed(6) }}
        </div>
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
