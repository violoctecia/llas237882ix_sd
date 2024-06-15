<script setup>
import IconArw from "@/components/icons/IconArw.vue";
import {ref} from "vue";

defineProps(['item', 'index'])

const isOpen = ref(false)

const toggle = () => isOpen.value = !isOpen.value
</script>

<template>
  <div class="faq__item flex flex-col" :class="isOpen ? 'open' : ''">
    <div @click="toggle()" class="faq__item-title flex items-center justify-between cl-white font-rf-dewi">
      <div class="flex flex-col relative">
        <span class="faq__item-value font-13">0{{item.id+1}}//</span>
        <b v-html="item.title" />
      </div>
      <IconArw class="faq__item-arw ml-10" />
    </div>
    <div class="faq__item-content flex flex-col" v-if="isOpen" v-html="item.content" />
  </div>
</template>