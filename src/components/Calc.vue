<script setup>
import {useCalcStore} from '@/stores/calc.js'
import IconCalc from "@/components/icons/IconCalc.vue";
import IconCircleRight from "@/components/icons/IconCircleRight-1.vue";
import Period from "@/components/blocks/Period.vue";

import Slider from '@/components/blocks/Slider.vue';

const {title, sub, desc, period} = useCalcStore()
</script>

<template>
  <section class="calc relative">
    <div class="container">

      <div class="calc__frame radius-15 relative overflow-hidden">
        <div class="flex flex-col flex-center text-center">
          <div class="sub-gradient" v-if="sub">
            <span class="flex items-center cl-white font-13 font-rf-dewi font-bold">
              <IconCalc class="mr-10" />
              {{sub}}
            </span>
          </div>
          <h2 v-if="title" v-html="title" class="calc__title title leading"/>
          <p v-if="desc" v-html="desc" class="cl-white-1" />
          <div class="calc__form">
            <div class="calc__form-body flex flex-col items-center">
              <Period :items="period" />
              <div class="calc__form-value font-bold font-rf-dewi flex flex-center"><b class="cl-orange">₽&nbsp;</b><span class="cl-white">300.000</span></div>

              <Slider v-model="sliderValue" :min="0" :max="50" class="mt-10" />

            </div>
            <div class="calc__form-foot flex flex-col">
              <button class="calc__form-button button button-orange font-rf-dewi font-bold font-13">Инвестировать</button>
              <div class="flex items-center justify-between">
                <span class="cl-white font-13">Общий доход</span>
                <span class="calc__form-income font-medium flex flex-center">+ 375.000₽</span>
              </div>
            </div>
          </div>
        </div>
        <picture class="absolute absolute-full z--1">
          <img src="@/assets/img/other/calc-frame.jpg"
               srcset="@/assets/img/other/calc-frame.jpg 1x, @/assets/img/other/calc-frame@2x.jpg 2x"
               alt="" loading="lazy" class="object-cover">
        </picture>
      </div>

    </div>
    <IconCircleRight class="calc__circle absolute top-0 right-0 z--1" />
  </section>
</template>