<script setup>

import IconDate from "@/components/icons/IconDate.vue";
import IconProcent from "@/components/icons/IconProcent.vue";
import IconMoney from "@/components/icons/IconMoney.vue";
</script>

<template>
  <div class="deposit flex flex-col radius-16 border-1 bg-1">
    <div class="deposit__body flex flex-col p-20 grow">
      <div class="flex items-center justify-between">
        <div class="sub-gradient">
          <span class="flex items-center cl-gray-4 font-13 font-rf-dewi font-bold">Активный вклад</span>
        </div>
        <ul class="deposit__date flex font-bold font-rf-dewi">
          <li>2 месяца</li>
          <li>3 дня</li>
          <li>23:59:59</li>
        </ul>
      </div>
      <div class="flex justify-between deposit__values items-end">
        <div class="flex flex-col">
          <p class="font-12 cl-white-1">Общая сумма вклада:</p>
          <p class="deposit__value font-bold font-rf-dewi"><span class="cl-orange">₽</span>300.000</p>
        </div>
        <div class="deposit__income flex radius-10 font-rf-dewi font-bold font-13 items-center">₽000044,02</div>
      </div>
    </div>
    <div class="deposit__foot border-top-1">
      <ul class="deposit__info flex font-12 cl-white-1">
        <li class="flex items-center grow">
          <IconDate class="mr-10" />
          <p class="flex flex-col">
            <span>Дата начала инвестирования</span>
            <b class="font-medium font-13 cl-white">12.05.2024</b>
          </p>
        </li>
        <li class="flex items-center grow">
          <IconProcent class="mr-10" />
          <p class="flex flex-col">
            <span>Ежедневный доход</span>
            <b class="font-medium font-13 cl-white">≈ 830₽</b>
          </p>
        </li>
        <li class="flex items-center grow">
          <IconMoney class="mr-10" />
          <p class="flex flex-col">
            <span>Ожидаемый доход</span>
            <b class="font-medium font-13 cl-white">₽600.000</b>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>