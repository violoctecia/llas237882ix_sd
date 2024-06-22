<script setup>
import { ref, computed, onMounted, nextTick } from 'vue';
import { MaskInput } from 'vue-3-mask';
import Modal from "@/components/Modal.vue";
import { useRouter } from 'vue-router';
import axios from 'axios';
import Cookies from 'js-cookie';
import { fetchUserData } from "@/utils/checkInfoUser.js";

const phoneNumber = ref('');
const isError = ref(false);
const isCode = ref(false);
const codeError = ref('');
const smsCode = ref(['', '', '', '', '', '']);
const router = useRouter();
const inputRefs = ref([]);

const isPhoneNumberValid = computed(() => {
  const sanitizedPhoneNumber = phoneNumber.value.replace(/\D/g, '');
  return sanitizedPhoneNumber.length === 11;
});

const handleSubmit = async (event) => {
  event.preventDefault();

  if (!isPhoneNumberValid.value) {
    isError.value = true;
    console.log('Invalid phone number');
    return;
  }

  isError.value = false;

  const sanitizedPhoneNumber = phoneNumber.value.replace(/\D/g, '');
  console.log('Sending POST:', sanitizedPhoneNumber);

  await getCode(sanitizedPhoneNumber);
};

const getCode = async (sanitizedPhoneNumber) => {
  try {
    const sessionUuid = Cookies.get('sessionUuid');
    if (sessionUuid) {
      await fetchUserData(router);
      return;
    }

    const response = await axios.post('/getSms', {
      phone_number: sanitizedPhoneNumber,
    });
    if (response.data.success) {
      isCode.value = true;
      nextTick(() => {
        inputRefs.value[0]?.focus();
      });
    } else {
      codeError.value = response.data.error || 'Ошибка';
      console.log('Error:', response.data.error);
    }
  } catch (error) {
    codeError.value = 'Failed to send SMS code';
    console.log('Error:', error);
  }
};

const handleCheckCode = async () => {
  const sanitizedPhoneNumber = phoneNumber.value.replace(/\D/g, '');
  const code = smsCode.value.join('');

  try {
    const response = await axios.post('/checkSms', {
      phone_number: sanitizedPhoneNumber,
      code: code,
    });

    console.log(response);

    if (response.data.success) {
      console.log('Login successful');
      Cookies.set('sessionUuid', response.data.sessionUuid, { expires: 0.0208 });
      await fetchUserData(router);
    } else {
      codeError.value = 'Код неверный';
      console.log('Error:', 'Invalid code or code expired');
    }
  } catch (error) {
    codeError.value = 'Failed to check SMS code';
    console.log('Error:', error);
  }
};

const handleInput = async (event, index) => {
  const value = event.target.value;
  if (/^\d$/.test(value)) {
    smsCode.value[index] = value;
    if (index < 5) {
      inputRefs.value[index + 1]?.focus();
    } else {
      await handleCheckCode();
    }
  } else if (value === '') {
    smsCode.value[index] = '';
  } else {
    event.target.value = '';
  }
};

const handlePaste = async (event) => {
  const paste = (event.clipboardData || window.clipboardData).getData('text');
  if (/^\d{6}$/.test(paste)) {
    smsCode.value = paste.split('');
    await handleCheckCode();
  }
};

const handleKeyDown = (event, index) => {
  if (event.key === 'Backspace' && smsCode.value[index] === '') {
    if (index > 0) {
      inputRefs.value[index - 1]?.focus();
      smsCode.value[index - 1] = '';
    }
  }
};

onMounted(async () => {
  await fetchUserData(router);
});

const setInputRef = (el, index) => {
  inputRefs.value[index] = el;
};
</script>

<template>
  <Modal>
    <div class="flex flex-col items-center">
      <h2 class="title title-gray mb-16">Авторизация</h2>
    </div>

    <form v-if="!isCode" class="flex flex-col items-center auth" @submit="handleSubmit">
      <p class="cl-white-1 text-center auth__desc">Для входа в личный кабинет введите номер телефона</p>
      <MaskInput
          v-model="phoneNumber"
          class="input auth__input"
          :class="{ error: isError }"
          mask="+7 (###) ###-##-##"
      />
      <button class="button button-orange button-primary auth__button" type="submit">
        Получить код
      </button>
      <p v-if="isError" class="cl-orange">Введите номер телефона</p>
      <p v-if="codeError" class="cl-orange">{{ codeError }}</p>
    </form>

    <form class="flex flex-col items-center auth" v-if="isCode" @submit="handleCheckCode">
      <p class="cl-white-1 text-center auth__desc">На Ваш номер телефона было отправлено письмо с кодом. Введите его
        ниже</p>
      <div class="flex auth__codes">
        <input
            v-for="(digit, index) in smsCode"
            :key="index"
            :id="'sms-code-' + index"
            v-model="smsCode[index]"
            type="text"
            inputmode="numeric" pattern="[0-9]*"
            name="smsCode"
            autocomplete="one-time-code"
            maxlength="1"
            class="input auth__input auth__code"
            @input="handleInput($event, index)"
            @keydown="handleKeyDown($event, index)"
            @paste="handlePaste"
            :ref="el => setInputRef(el, index)"
        />
      </div>
      <button class="button button-orange button-primary auth__button" type="submit">
        Войти
      </button>
      <p v-if="codeError" class="cl-orange">{{ codeError }}</p>
    </form>
  </Modal>
</template>
