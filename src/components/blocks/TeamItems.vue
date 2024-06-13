<script setup>
defineProps(['items'])
</script>

<template>
  <div class="team__items grid text-center">
    <div class="team__item radius-15 flex flex-col items-center" v-for="(item, key) in items" :key="key">
      <img :src="item.image[0]" :srcset="item.image[0] + ' 1x,' + item.image[1] + ' 2x,'"
           alt="" loading="lazy" class="radius-full mb-10">
      <b v-html="item.name" class="font-rf-dewi team__item-name"/>
      <p class="cl-gray-4 mb-10">Электронная почта: <a :href="'mailto:'+item.email" class="link-white font-medium nowrap">{{item.email}}</a></p>
      <p class="cl-gray-4">Телефон: <a :href="'tel:'+item.phone" class="link-white font-medium nowrap">{{item.phone}}</a></p>
    </div>
  </div>
</template>