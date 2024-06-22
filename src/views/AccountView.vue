<script setup>
import AccountHistory from "@/components/AccountHistory.vue";
import AccountBalance from "@/components/AccountBalance.vue";
import AccountDeposit from "@/components/AccountDeposit.vue";
import Calculator from "@/components/blocks/Calculator.vue";
import CircleTopLeft from "@/components/icons/CircleTopLeft.vue";
import CircleTopCenter from "@/components/icons/CircleTopCenter.vue";
import AppHeader from "@/components/AppHeader.vue";
import {ref, onMounted} from "vue";
import {fetchUserData, userData} from "@/utils/checkInfoUser.js";
import {useRouter} from "vue-router";
import {useHistoryStore} from "@/stores/history.js";

const router = useRouter();
const balance = ref(0);
const totalEarned = ref(0);
const investments = ref([]);
const historyStore = useHistoryStore();

onMounted(async () => {
  await fetchUserData(router);
  if (userData.value) {
    console.log('User data:', userData.value);
    balance.value = userData.value.balance || 0;
    investments.value = userData.value.investments || [];
    totalEarned.value = userData.value.totalEarned || 0;
    historyStore.setItems(userData.value.history?.map(item => ({
      date: new Date(item.createdAt).toLocaleDateString(),
      value: item.amount > 0 ? `+${item.amount}₽` : `${item.amount}₽`,
      type: item.action,
      output: item.amount < 0
    })) || []);
  }
});
</script>

<template>
  <main>
    <AppHeader :exit="true"/>
    <section class="account">
      <div class="account__container container flex flex-col">
        <div class="account__row grid">
          <AccountBalance :balance="balance" :investments="investments" :total-earned="totalEarned" class="account__block-1"/>
          <AccountDeposit :investments="investments" class="account__block-2"/>
          <Calculator :title="'Увеличить вклад'" class="calc-primary account__block-3"/>
        </div>
        <AccountHistory/>
      </div>
    </section>
    <CircleTopCenter class="account__circle absolute left-0 top-0 z--1"/>
    <CircleTopLeft class="absolute left-0 top-0 z--1"/>
  </main>
</template>
