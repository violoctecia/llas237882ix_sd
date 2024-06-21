<script setup>
import Modal from "@/components/Modal.vue";
import {ref} from "vue";

const value = ref(0)
</script>

<template>
  <Modal>
    <div class="flex flex-col items-center">
      <h2 class="title title-gray mb-16">Вывод</h2>
    </div>

    <div class="flex flex-col items-center auth">
      <p class="cl-white-1 text-center auth__desc">Для вывода баланса введите желаемую сумму и свяжитесь с оператором.</p>
      <input class="input auth__input" v-model="value" type="number">
      <a class="button button-orange button-primary auth__button flex flex-center"
         :href="'https://wa.me/79998381076?text=Здравствуйте, мне необходимо вывести ' + value + 'Р с личного кабинета.'"
         target="_blank">
        Вывести
      </a>
    </div>
  </Modal>
</template>
