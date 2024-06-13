<script setup>
import IconArw from "@/components/icons/IconArw.vue";
import {ref} from "vue";

defineProps(['item', 'index'])

const isOpen = ref(false)

const toggle = () => isOpen.value = !isOpen.value
</script>

<template>
  <div class="progress__item flex flex-col" :class="isOpen ? 'open' : ''">
    <div @click="toggle()" class="progress__item-title flex items-center justify-between cl-white font-rf-dewi">
      <div class="flex flex-col relative">
        <span class="progress__item-value font-13">0{{index+1}}//</span>
        <b v-html="item.title" />
      </div>
      <IconArw class="progress__item-arw" />
    </div>
    <div class="progress__item-content flex flex-col" v-if="isOpen" v-html="item.content" />
  </div>
</template>