<script setup>
import Slider from "@/components/blocks/Slider.vue";
import { computed, ref } from "vue";

defineProps(['title'])

const items = ['3 месяца', '6 месяцев', 'Год'];

const active = ref(0);

const toggle = (key) => active.value = key;

const sliderValue = ref(300000);

const formattedSliderValue = computed(() => {
  return sliderValue.value.toLocaleString('de-DE');
});

const calculatedIncome = computed(() => {
  const periods = [3, 6, 12]; // в месяцах
  const selectedPeriod = periods[active.value];
  const income = sliderValue.value + (sliderValue.value / 12) * selectedPeriod;
  const roundedIncome = Math.round(income);
  return roundedIncome.toLocaleString('de-DE') + '₽';
});
</script>

<template>
  <div class="calc__form">
    <div class="calc__form-body flex flex-col items-center">
      <div class="sub-gradient" v-if="title">
        <span class="flex items-center cl-gray-4 font-13 font-rf-dewi font-bold">{{title}}</span>
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

      <Slider v-model="sliderValue" :min="100000" :max="20000000" class="mt-10" />
    </div>

    <div class="calc__form-foot flex flex-col">
      <button class="calc__form-button button button-orange font-rf-dewi font-bold font-13">
        Инвестировать
      </button>
      <div class="flex items-center justify-between">
        <span class="calc__form-label cl-white font-13">Общий доход</span>
        <span class="calc__form-income font-medium flex flex-center">+ {{ calculatedIncome }}</span>
      </div>
    </div>
  </div>
</template>