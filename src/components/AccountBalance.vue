<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  balance: {
    type: Number,
    required: true,
  },
  totalEarned: {
    type: Number,
    required: true,
  },
});
import ModalReplenish from "@/components/ModalReplenish.vue";
import ModalWithdrawal from "@/components/ModalWithdrawal.vue";
import {ref} from "vue";

const showReplenish = ref(false)
const showWithdrawal = ref(false)
</script>

<template>
  <div class="balance flex flex-col radius-16 border-1">
    <div class="balance__body flex flex-col items-start p-20">
      <div class="balance__head flex flex-col items-start">
        <div class="sub-gradient">
          <span class="flex items-center cl-gray-4 font-13 font-rf-dewi font-bold">Баланс</span>
        </div>
        <div class="balance__value font-bold font-rf-dewi">
          <span class="cl-orange">₽</span>{{ props.balance }}
        </div>
      </div>

      <div class="balance__buttons flex justify-start">
        <button class="button button-orange button-trinity mr-10" @click="showReplenish = true">Пополнить</button>
        <button class="button button-border button-trinity relative" @click="showWithdrawal = true">Вывести</button>
      </div>
    </div>
    <div class="balance__foot border-top-1">
      <p class="font-12 cl-white-1">Всего заработано</p>
      <p class="font-13 font-medium">₽{{props.totalEarned || 0}} </p>
    </div>

    <ModalReplenish v-if="showReplenish" @close="showReplenish = false" />
    <ModalWithdrawal v-if="showWithdrawal" @close="showWithdrawal = false" />
  </div>
</template>
