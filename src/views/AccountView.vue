<script setup>
import AccountHistory from "@/components/AccountHistory.vue";
import AccountBalance from "@/components/AccountBalance.vue";
import AccountDeposit from "@/components/AccountDeposit.vue";
import Calculator from "@/components/blocks/Calculator.vue";
import CircleTopLeft from "@/components/icons/CircleTopLeft.vue";
import CircleTopCenter from "@/components/icons/CircleTopCenter.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <main>
    <AppHeader :exit="true" />
    <section class="account">
      <div class="account__container container flex flex-col">
        <div class="account__row grid">
          <AccountBalance class="account__block-1" />
          <AccountDeposit class="account__block-2" />
          <Calculator :title="'Увеличить вклад'" class="calc-primary account__block-3" />
        </div>
        <AccountHistory />
      </div>
    </section>
    <CircleTopCenter class="account__circle absolute left-0 top-0 z--1" />
    <CircleTopLeft class="absolute left-0 top-0 z--1" />
  </main>
</template>
