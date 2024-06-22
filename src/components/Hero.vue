<script setup>
import { useHeroStore } from '@/stores/hero.js'
import IconCircleRight from "@/components/icons/IconCircleRight.vue";
import IconCircleLeft from "@/components/icons/IconCircleLeft.vue";
import IconArwDown from "@/components/icons/IconArwDown.vue";
import IconCircle from "@/components/icons/IconCircle.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Cookies from "js-cookie";
import ModalAuth from "@/components/ModalAuth.vue";

const { sub, title, desc, button, info } = useHeroStore();
const showModal = ref(false);
const router = useRouter();

const checkAuthAndNavigate = () => {
  const sessionUuid = Cookies.get('sessionUuid');
  if (!sessionUuid) {
    showModal.value = true;
  } else {
    router.push('/account');
  }
};
</script>

<template>
  <section class="hero relative flex">
    <div class="container flex flex-col flex-center">
      <div class="hero__frame flex flex-col flex-center text-center">
        <div class="sub-gradient" v-if="sub">
          <span class="flex items-center cl-gray-2 font-13 font-rf-dewi font-bold" v-html="sub" />
        </div>
        <h1 v-if="title" v-html="title" class="hero__title title leading" />
        <p v-if="desc" v-html="desc" class="cl-white-1" />
        <button class="hero__button button button-primary button-orange" @click="checkAuthAndNavigate">{{ button }}</button>
        <IconArwDown class="hero__down" />
      </div>
      <IconCircle class="hero__circle" />
      <div class="hero__info w-full relative overflow-hidden flex items-center">
        <ul class="hero__items grid text-center leading-2">
          <li class="hero__item flex flex-col flex-center relative" v-for="(item, key) in info" :key="key">
            <img :src="item.icon" alt="" loading="lazy">
            <b v-if="item.value" v-html="item.value" class="cl-white font-rf-dewi" />
          </li>
        </ul>
        <picture class="absolute absolute-full z--1">
          <img src="@/assets/img/other/hero-info.jpg"
               srcset="@/assets/img/other/hero-info.jpg 1x, @/assets/img/other/hero-info@2x.jpg 2x" alt="" loading="lazy" class="object-cover">
        </picture>
      </div>
    </div>
    <IconCircleLeft class="hero__left absolute left-0 bottom-0 z--1" />
    <IconCircleRight class="hero__right absolute top-0 right-0 z--1" />
    <ModalAuth v-if="showModal" @close="showModal = false" />
  </section>
</template>

