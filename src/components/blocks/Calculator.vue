<script setup>
import Slider from "@/components/blocks/Slider.vue";
import { computed, ref } from "vue";
import axios from "axios";
import Cookies from "js-cookie";

defineProps(['title'])

const items = ['3 месяца', '6 месяцев', 'Год'];
const periods = [3, 6, 12]; // в месяцах
const percentages = [10, 20, 40]; // процент доходности

const active = ref(0);
const sliderValue = ref(300000);
const investmentError = ref('');

const toggle = (key) => {
  active.value = key;
  console.log(`Active period set to: ${items[key]}, active value: ${active.value}`);
};

const formattedSliderValue = computed(() => {
  return sliderValue.value.toLocaleString('de-DE');
});

const calculatedIncome = computed(() => {
  const selectedPercentage = percentages[active.value];
  const income = sliderValue.value + (sliderValue.value / 100) * selectedPercentage;
  const roundedIncome = Math.round(income);
  return roundedIncome.toLocaleString('de-DE') + '₽';
});

const invest = async () => {
  const sessionUuid = Cookies.get('sessionUuid');
  if (!sessionUuid) {
    investmentError.value = 'Необходимо авторизоваться.';
    return;
  }

  try {
    const requestData = {
      amount: sliderValue.value,
      type: active.value + 1,
      sessionUuid: sessionUuid,
    };
    console.log('Request data:', requestData);

    const response = await axios.post('/invest', requestData);

    if (response.data.success) {
      investmentError.value = '';
      console.log('Инвестиция успешно создана.');
    } else {
      investmentError.value = response.data.error || 'Произошла ошибка при инвестировании.';
      console.log('Ошибка:', response.data.error);
    }
  } catch (error) {
    investmentError.value = 'Произошла ошибка при инвестировании.';
    console.log('Ошибка:', error);
  }
};
</script>

<template>
  <div class="calc__form">
    <div class="calc__form-body flex flex-col items-center">
      <div class="sub-gradient" v-if="title">
        <span class="flex items-center cl-gray-4 font-13 font-rf-dewi font-bold">{{ title }}</span>
      </div>

      <ul class="calc__form-period flex justify-center">
        <li
            class="flex flex-center font-rf-dewi font-bold font-12 transition"
            :class="active === key ? 'active' : ''"
            @click="toggle(key)"
            v-for="(item, key) in items"
            :key="key"
        >
          {{ item }}
        </li>
      </ul>

      <div class="calc__form-value font-bold font-rf-dewi flex flex-center">
        <b class="cl-orange">₽&nbsp;</b>
        <span class="cl-white">{{ formattedSliderValue }}</span>
      </div>

      <Slider v-model="sliderValue" :min="100" :max="20000000" class="mt-10"/>
    </div>

    <div class="calc__form-foot flex flex-col">
      <button class="calc__form-button button button-orange font-rf-dewi font-bold font-13" @click="invest">
        Инвестировать
      </button>
      <div class="flex items-center justify-between">
        <span class="calc__form-label cl-white font-13">Общий доход</span>
        <span class="calc__form-income font-medium flex flex-center">+ {{ calculatedIncome }}</span>
      </div>
      <div v-if="investmentError" class="cl-orange mt-2">{{ investmentError }}</div>
    </div>
  </div>
</template>
