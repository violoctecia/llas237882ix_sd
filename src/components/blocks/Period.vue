<script setup>
import {ref} from "vue";

defineProps(['items'])

const active = ref(0)

const toggle = (key) => active.value = key

</script>

<template>
  <ul class="calc__form-period flex justify-center">
    <li class="flex flex-center font-rf-dewi font-bold font-12 transition"
        :class="active===key ? 'active' : ''"
        @click="toggle(key)"
        v-for="(item, key) in items" :key="key">{{item}}</li>
  </ul>
</template>