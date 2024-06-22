<script setup>
import Slider from "@/components/blocks/Slider.vue";
import ModalAuth from "@/components/ModalAuth.vue";
import { computed, ref, watch, nextTick, onMounted } from "vue";
import axios from "axios";
import Cookies from "js-cookie";

const props = defineProps(['title', 'main']);

const items = ['3 месяца', '6 месяцев', 'Год'];
const periods = [3, 6, 12];
const percentages = [25, 50, 100];

const active = ref(0);
const sliderValue = ref(300000);
const investmentError = ref('');
const showModal = ref(false);
const inputRef = ref(null);

const minAmount = 100000;
const maxAmount = 20000000;

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

const calculatedProfit = computed(() => {
  const income = sliderValue.value / 12;
  const roundedIncome = Math.round(income);
  return roundedIncome.toLocaleString('de-DE') + '₽';
});

const invest = async () => {
  const sessionUuid = Cookies.get('sessionUuid');
  if (!sessionUuid) {
    investmentError.value = 'Необходимо авторизоваться.';
    showModal.value = true;
    return;
  }

  const currentInputValue = parseInt(inputRef.value?.value.replace(/\D/g, ''));
  console.log(`Current input value: ${currentInputValue}`);

  if (isNaN(currentInputValue) || currentInputValue < minAmount || currentInputValue > maxAmount) {
    investmentError.value = `Вклад должен быть в пределах от ${minAmount.toLocaleString('de-DE')}₽ до ${maxAmount.toLocaleString('de-DE')}₽`;
    return;
  }

  sliderValue.value = currentInputValue;


  try {
    const requestData = {
      amount: sliderValue.value,
      type: active.value + 1,
      sessionUuid: sessionUuid,
    };

    const response = await axios.post('/invest', requestData);

    if (response.data.success) {
      investmentError.value = '';
    } else {
      investmentError.value = 'Недостаточный баланс';
    }
  } catch (error) {
    investmentError.value = 'Произошла ошибка при инвестировании.';
  }
};

const handleInvestClick = () => {
  const currentInputValue = parseInt(inputRef.value?.value.replace(/\D/g, ''));
  console.log(`Current input value: ${currentInputValue}`);

  if (isNaN(currentInputValue) || currentInputValue < minAmount || currentInputValue > maxAmount) {
    investmentError.value = `Вклад должен быть в пределах от ${minAmount.toLocaleString('de-DE')}₽ до ${maxAmount.toLocaleString('de-DE')}₽`;
    return;
  }

  sliderValue.value = currentInputValue;


  if (props.main) {
    showModal.value = true;
  } else {
    invest();
  }
};

const handleInputChange = (event) => {
  const value = parseInt(event.target.value.replace(/\D/g, ''));
  if (!isNaN(value)) {
    if (value < minAmount) {
      investmentError.value = `Минимальный вклад ${minAmount.toLocaleString('de-DE')}₽`;
    } else if (value > maxAmount) {
      investmentError.value = `Максимальный вклад ${maxAmount.toLocaleString('de-DE')}₽`;
    } else {
      investmentError.value = '';
      sliderValue.value = value;
    }
  }
};

watch(sliderValue, (newValue) => {
  nextTick(() => {
    const inputElement = inputRef.value;
    if (inputElement) {
      inputElement.value = newValue.toLocaleString('de-DE');
      adjustInputWidth(inputElement);
    }
  });
});

const adjustInputWidth = (inputElement) => {
  const tempSpan = document.createElement('span');
  tempSpan.style.visibility = 'hidden';
  tempSpan.style.position = 'absolute';
  tempSpan.style.whiteSpace = 'nowrap';
  tempSpan.style.fontFamily = getComputedStyle(inputElement).fontFamily;
  tempSpan.style.fontSize = getComputedStyle(inputElement).fontSize;
  tempSpan.textContent = inputElement.value;
  document.body.appendChild(tempSpan);
  inputElement.style.width = `${tempSpan.offsetWidth}px`;
  document.body.removeChild(tempSpan);
};

onMounted(() => {
  nextTick(() => {
    const inputElement = inputRef.value;
    if (inputElement) {
      adjustInputWidth(inputElement);
    }
  });
});
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

      <div class="form-input calc__form-value font-bold font-rf-dewi flex flex-center">
        <div class="position flex flex-center">
          <b class="cl-orange">₽&nbsp;</b>
          <input
              ref="inputRef"
              id="sliderInput"
              type="text"
              :value="formattedSliderValue"
              @input="handleInputChange"
              style="background: transparent; border: none; text-align: center; font-family: var(--font-rf-dewi); font-weight: 700; color: var(--color-white);"
              onkeypress="return event.charCode >= 48 && event.charCode <= 57"
          />
        </div>

      </div>

      <Slider v-model="sliderValue" :min="minAmount" :max="maxAmount" class="mt-10"/>

    </div>

    <div class="calc__form-foot flex flex-col">
      <button class="calc__form-button button button-orange font-rf-dewi font-bold font-13" @click="handleInvestClick">
        Инвестировать
      </button>

      <div class="flex items-center justify-between">
        <span class="calc__form-label cl-white font-13">Общий доход</span>
        <span class="calc__form-income font-medium flex flex-center">+ {{ calculatedIncome }}</span>
      </div>

      <div class="flex items-center justify-between" v-if="props.main">
        <span class="calc__form-label cl-white font-13">Прибыль</span>
        <span class="calc__form-income font-medium flex flex-center">{{ calculatedProfit }}/мес</span>
      </div>

    </div>

    <div class="calc__form-foot flex flex-col" v-if="investmentError">
      <div class="flex items-center justify-between">
        <div class="cl-orange mt-2">{{ investmentError }}</div>
      </div>
    </div>

    <ModalAuth v-if="showModal" @close="showModal = false"/>
  </div>
</template>

<style scoped>
.form-input {
  display: flex;
  justify-content: center;

  input {
    display: flex;
    min-width: 54px;
    font-family: var(--font-rf-dewi);
    font-weight: 700;
    color: var(--color-white);
    width: 100%;
  }

  input:focus {
    border: none;
  }

  input:focus-visible {
    outline: none;
  }
}

.position {
  position: relative;

  b {
    color: var(--color-orange);
    position: absolute;
    left: -15px;
  }
}
</style>
