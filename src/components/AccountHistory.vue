<script setup>
import { useHistoryStore } from "@/stores/history.js";
import CircleBottom from "@/components/icons/CircleBottom.vue";
import { computed } from 'vue';

const historyStore = useHistoryStore();
const items = computed(() => historyStore.items);
</script>

<template>
  <div class="history relative">
    <h2 class="title-primary font-rf-dewi">История</h2>
    <div class="history__table">
      <div class="history__head grid">
        <div class="history__col">Дата</div>
        <div class="history__col">Сумма</div>
        <div class="history__col">Тип операции</div>
      </div>
      <div class="history__body flex flex-col">
        <div class="history__item grid" v-for="(item, key) in items" :key="key">
          <div class="history__col cl-gray-4">{{ item.date }}</div>
          <div class="history__col" :class="item.output ? 'cl-orange' : ''">{{ item.value }}</div>
          <div class="history__col" :class="item.output ? 'cl-orange' : ''">{{ item.type }}</div>
        </div>
      </div>
    </div>
    <!-- <CircleBottom class="account__circle absolute bottom-0 z--1" /> -->
  </div>
</template>
