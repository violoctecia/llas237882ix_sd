<script setup>
import {useFaqStore} from "@/stores/faq.js";
import IconFaq from "@/components/icons/IconFaq.vue";
import FaqItem from "@/components/blocks/FaqItem.vue";

const {title, sub, itemsLeft, itemsRight} = useFaqStore()
</script>

<template>
  <section class="faq py-primary">
    <div class="container">
      <div class="flex flex-col flex-center text-center">
        <div class="sub-gradient" v-if="sub">
          <span class="flex items-center cl-white font-13 font-rf-dewi font-bold">
            <IconFaq class="mr-10" />
            {{sub}}
          </span>
        </div>

        <h2 v-if="title" v-html="title" class="title title-gray mt-10" />
      </div>

      <div class="faq__items grid grid-2">
        <div class="faq__col flex flex-col">
          <FaqItem v-for="(item, key) in itemsLeft" :key="key" :item="item" :index="key"/>
        </div>
        <div class="faq__col flex flex-col">
          <FaqItem v-for="(item, key) in itemsRight" :key="key" :item="item" :index="key"/>
        </div>
      </div>

    </div>
  </section>
</template>