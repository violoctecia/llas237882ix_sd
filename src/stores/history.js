import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHistoryStore = defineStore('history', () => {
  const items = ref([]);

  const setItems = (newItems) => {
    items.value = newItems;
  };

  return { items, setItems };
});
