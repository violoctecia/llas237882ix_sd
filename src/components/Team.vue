<script setup>
import {useTeamStore} from "@/stores/team.js";
import TeamItems from "@/components/blocks/TeamItems.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconLocation from "@/components/icons/IconLocation.vue";

const {title, sub, items} = useTeamStore()
</script>

<template>
  <section class="team bg-white py-primary">
    <div class="container">

      <div class="flex flex-col flex-center text-center">
        <div class="sub-gradient" v-if="sub">
          <span class="flex items-center cl-white font-13 font-rf-dewi font-bold">
            <IconLocation class="mr-10" />
            {{sub}}
          </span>
        </div>
        <h2 v-if="title" v-html="title" class="team__title title title-black leading mt-10"/>
      </div>

      <TeamItems :items="items" />

      <div class="team__foot flex justify-between mt-10">
        <a href="tel:+78500000000" class="link-black font-13 font-medium flex items-center">
          <IconPhone class="mr-10"/>
          +7 (850) 000-00-00
        </a>
        <a href="#" class="link-black link-black-border">Заказать звонок</a>
      </div>

    </div>
  </section>
</template>