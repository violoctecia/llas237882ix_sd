<script setup>
import { defineEmits } from 'vue';
import IconClose from "@/components/icons/IconClose.vue";

const emit = defineEmits(['close']);

function handleClose() {
  emit('close');
}
</script>

<template>
  <div class="modal__overlay" @click.self="handleClose">
    <div class="modal relative">
      <button class="modal__close absolute" @click="handleClose"><IconClose/></button>
      <slot></slot>
    </div>
  </div>
</template>
