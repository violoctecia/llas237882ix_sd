import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useHistoryStore = defineStore('history', () => {
  const items = ref([]);

  const setItems = (newItems) => {
    console.log('Setting new history items:', newItems); // Логирование новых элементов истории
    items.value = newItems;
  };

  return { items, setItems };
});
