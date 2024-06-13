<script setup>
import {useProgressStore} from "@/stores/progress.js";
import IconWork from "@/components/icons/IconWork.vue";
import ProgressItem from "@/components/blocks/ProgressItem.vue";
import IconCirclePrograss from "@/components/icons/IconCirclePrograss.vue";

const {sub, title, items} = useProgressStore()
</script>

<template>
  <section class="progress relative">
    <div class="container">

      <div class="flex flex-col flex-center text-center">
        <div class="sub-gradient" v-if="sub">
          <span class="flex items-center cl-white font-13 font-rf-dewi font-bold">
            <IconWork class="mr-10"/>
            {{ sub }}
          </span>
        </div>
        <h2 v-if="title" v-html="title" class="title title-gray leading mt-10"/>
      </div>

      <div class="progress__items flex flex-col">
        <ProgressItem v-for="(item, key) in items" :key="key" :item="item" :index="key"/>
      </div>

    </div>
    <IconCirclePrograss class="absolute right-0 bottom-0 z--1"/>
    <picture class="progress__laptop absolute right-0 bottom-0 z--1 flex">
      <img src="@/assets/img/other/laptop.png"
           srcset="@/assets/img/other/laptop.png 1x, @/assets/img/other/laptop@2x.png 2x" alt="" loading="lazy">
    </picture>
  </section>
</template>