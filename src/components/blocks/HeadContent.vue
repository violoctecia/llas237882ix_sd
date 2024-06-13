<script setup>
import IconLocation from "@/components/icons/IconLocation.vue";
</script>

<template>
  <div class="flex flex-col flex-center text-center">
    <div class="sub-gradient" v-if="sub">
          <span class="flex items-center cl-white font-13 font-rf-dewi font-bold">
            <IconLocation class="mr-10" />
            {{sub}}
          </span>
    </div>
    <h2 v-if="title" v-html="title" class="team__title title title-black leading"/>
  </div>
</template>
