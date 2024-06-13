<script setup>
import {useAboutStore} from '@/stores/about.js'
import IconUsers from "@/components/icons/IconUsers.vue";
import IconRocket from "@/components/icons/IconRocket.vue";

const {sub, title, desc, items} = useAboutStore()
</script>

<template>
  <section class="about bg-white">
    <div class="container">

      <div class="flex flex-col flex-center text-center">
        <div class="sub-gradient" v-if="sub">
          <span class="flex items-center cl-white font-13 font-rf-dewi font-bold">
            <IconUsers class="mr-10" />
            {{sub}}
          </span>
        </div>

        <h2 v-if="title" v-html="title" class="about__title title title-black" />
      </div>

      <div class="about__row flex items-center">
        <div class="about__card relative overflow-hidden flex flex-col">
          <IconRocket/>
          <b v-if="desc" v-html="desc" class="cl-white font-rf-dewi"/>
          <picture class="absolute absolute-full z--1">
            <img src="@/assets/img/other/card.jpg"
                 srcset="@/assets/img/other/card.jpg 1x, @/assets/img/other/card@2x.jpg 2x" alt="" loading="lazy" class="object-cover">
          </picture>
        </div>
        <ul class="about__items grow flex flex-wrap justify-between">
          <li class="about__item flex flex-col" v-for="(item, key) in items" :key="key">
            <b class="font-rf-dewi leading-2" v-if="item.value" v-html="item.value" />
            <span class="cl-black-3" v-if="item.label" v-html="item.label" />
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>