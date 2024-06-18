<script setup>

</script>

<template>
  <div class="balance flex flex-col radius-16 border-1">
    <div class="balance__body flex flex-col items-start p-20">
      <div class="balance__head flex flex-col items-start">
        <div class="sub-gradient">
          <span class="flex items-center cl-gray-4 font-13 font-rf-dewi font-bold">Баланс</span>
        </div>
        <div class="balance__value font-bold font-rf-dewi"><span class="cl-orange">₽</span>0</div>
      </div>

      <div class="balance__buttons">
        <button class="button button-orange button-trinity mr-10">Пополнить</button>
        <button class="button button-border button-trinity">Вывести</button>
      </div>
    </div>
    <div class="balance__foot border-top-1">
      <p class="font-12 cl-white-1">Всего заработано</p>
      <p class="font-13 font-medium">₽0</p>
    </div>
  </div>
</template>