<script setup>
import { ref, computed } from 'vue';
import { MaskInput } from 'vue-3-mask';
import Modal from "@/components/Modal.vue";

const phoneNumber = ref('');
const isError = ref(false);
const isCode = ref(false);

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

  isCode.value=!isCode.value
};
</script>

<template>
  <Modal>
    <div class="flex flex-col items-center">
      <h2 class="title title-gray mb-16">Авторизация</h2>
      <p class="cl-white-1 text-center">Для входа в личный кабинет введите номер телефона</p>
    </div>

    <form v-if="!isCode" class="flex flex-col items-center auth" @submit="handleSubmit">
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
    </form>

    <form class="flex flex-col items-center auth" v-if="isCode">
      <div class="flex auth__codes">
        <input type="text" placeholder="_" class="input auth__input auth__code">
        <input type="text" placeholder="_" class="input auth__input auth__code">
        <input type="text" placeholder="_" class="input auth__input auth__code">
        <input type="text" placeholder="_" class="input auth__input auth__code">
      </div>
      <button class="button button-orange button-primary auth__button" type="submit">
        Войти
      </button>
    </form>
  </Modal>
</template>