<script setup>
import {useReviewsStore} from "@/stores/reviews.js";
import IconUsers from "@/components/icons/IconUsers.vue";
import CircleLeft from "@/components/icons/CircleLeft.vue";
import CircleRight from "@/components/icons/CircleRight.vue";
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const {title, sub,  items} = useReviewsStore()

const options = {
  gap: '20px',
  // type   : 'loop',
  pagination: false,
  speed: 300,
  arrowPath: ''
};

</script>

<template>
  <section class="reviews pt-primary relative">
    <div class="container">
      <div class="flex flex-col flex-center text-center">
        <div class="sub-gradient" v-if="sub">
          <span class="flex items-center cl-white font-13 font-rf-dewi font-bold">
            <IconUsers class="mr-10"/>
            {{ sub }}
          </span>
        </div>

        <h2 v-if="title" v-html="title" class="title title-gray mt-10"/>
      </div>

      <div class="reviews__frame relative">
        <Splide :options="options" aria-label="My Favorite Images">
          <SplideSlide v-for="(item, key) in items" :key="key" class="reviews__slide flex flex-col flex-center">
            <div class="reviews__item flex flex-col radius-15 overflow-hidden">
              <picture class="reviews__image flex">
                <img :src="item.image[0]"
                     :srcset="item.image[0] + ' 1x,' + item.image[1] + ' 2x,'"
                     alt="" loading="lazy" class="object-cover">
              </picture>
              <b v-html="item.name" class="reviews__item-name font-rf-dewi flex flex-col"/>
            </div>
          </SplideSlide>
        </Splide>
      </div>

    </div>

    <CircleLeft class="reviews__circle reviews__circle_left absolute bottom-0"/>
    <img src="@/assets/img/other/phone.png"
         srcset="@/assets/img/other/phone.png 1x, @/assets/img/other/phone@2x.png 2x"
         alt="" loading="lazy" class="reviews__phone absolute bottom-0" width="382" height="509">
    <CircleRight class="reviews__circle reviews__circle_left absolute bottom-0"/>

  </section>
</template>
