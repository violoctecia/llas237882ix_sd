<script setup>
import {useCalcStore} from '@/stores/calc.js'
import IconCalc from "@/components/icons/IconCalc.vue";
import IconCircleRight from "@/components/icons/IconCircleRight-1.vue";
import Calculator from "@/components/blocks/Calculator.vue";

const {title, sub, desc} = useCalcStore()
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

          <Calculator :main="true" />

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
