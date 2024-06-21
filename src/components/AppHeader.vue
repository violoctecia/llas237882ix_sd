<script setup>
import IconUser from "@/components/icons/IconUser.vue";
import IconWhatsapp from "@/components/icons/IconWhatsapp.vue";
import IconTelegram from "@/components/icons/IconTelegram.vue";
import IconLocation from "@/components/icons/IconLocation.vue";
import IconEmail from "@/components/icons/IconEmail.vue";
import IconPhone from "@/components/icons/IconPhone.vue";
import IconExit from "@/components/icons/IconExit.vue";

import { ref } from "vue";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from 'vue-router';

defineProps(['exit']);

import ModalAuth from "@/components/ModalAuth.vue";

const showModal = ref(false);
const router = useRouter();

const handleLogout = async () => {
  try {
    const sessionUuid = Cookies.get('sessionUuid');
    if (!sessionUuid) {
      console.log('Session UUID not found');
      return;
    }

    const response = await axios.post('/logout', {
      sessionUuid: sessionUuid,
    });

    if (response.data.success) {
      Cookies.remove('sessionUuid');
      console.log('Logout successful');
      router.push({ name: 'home' });
    } else {
      console.log('Error:', 'Failed to logout');
    }
  } catch (error) {
    console.log('Error:', error);
  }
};
</script>

<template>
  <header class="header absolute z-2">
    <div class="header__container container flex items-center justify-between">
      <router-link to="/" class="header__logo flex items-center">
        <img src="@/assets/img/logo.svg" width="40" height="40" alt="" loading="lazy">
        <b class="cl-white font-rf-dewi ml-10 font-bold">Verh Club</b>
      </router-link>

      <ul class="header__icons flex">
        <li><a class="header__icon flex flex-center" href="#"><IconWhatsapp class="transition" /></a></li>
        <li><a class="header__icon flex flex-center" href="#"><IconTelegram class="transition" /></a></li>
        <li class="header__location">
          <span class="flex items-center header__icon">
            <IconLocation />
            <b class="font-medium font-13 ml-10">Москва, Московская д.6</b>
          </span>
        </li>
      </ul>

      <div class="flex items-center">
        <div class="header__contacts flex">
          <div class="header__contact flex flex-col items-end">
            <a class="flex items-center font-medium link-white font-13" href="mailto:trudsystem@ya.ru">
              <IconEmail class="mr-10" />
              trudsystem@ya.ru
            </a>
            <a href="#" class="link-white-1 leading font-12">@trudsystem</a>
          </div>
          <div class="header__contact flex flex-col items-end">
            <a class="flex items-center font-medium link-white font-13" href="mailto:trudsystem@ya.ru">
              <IconPhone class="mr-10" />
              +7 (850) 000-00-00
            </a>
            <a href="#" class="link-white-1 leading font-12">Заказать звонок</a>
          </div>
        </div>
        <button
            class="header__login button button-black flex-center"
            :class="exit ? 'active' : ''"
            @click="showModal = true"
        >
          <IconUser />
        </button>

        <button v-if="exit" class="header__exit button" @click="handleLogout">
          <IconExit />
        </button>
      </div>

      <ModalAuth v-if="showModal" @close="showModal = false" />
    </div>
  </header>
</template>
