<script setup>
import {useContactStore} from "@/stores/contact.js";
import IconPhoneWhite from "@/components/icons/IconPhoneWhite.vue";
import IconLocationRed from "@/components/icons/IconLocationRed.vue";

const {title, sub} = useContactStore()
</script>

<template>
  <section class="contact bg-white">
    <div class="container">
      <div class="flex flex-col flex-center text-center">
        <div class="sub-gradient" v-if="sub">
          <span class="flex items-center cl-white font-13 font-rf-dewi font-bold">
            <IconPhoneWhite class="mr-10" />
            {{sub}}
          </span>
        </div>

        <h2 v-if="title" v-html="title" class="about__title title title-black" />
      </div>

      <div class="contact__row grid">
        <div class="contact__map flex flex-col overflow-hidden radius-10 relative">
          <div class="contact__location flex flex-col relative">
            <p class="flex items-center cl-orange font-semibold"><IconLocationRed class="mr-10" />г. Москва</p>
            <p class="font-medium font-13">Московская, д.6</p>
          </div>
          <iframe class="absolute absolute-full" src="https://yandex.ru/map-widget/v1/?um=constructor%3A1438393557aeecbbb4d5eea38acc6fdd9a759dbad88a379a4893fe4846e73a80&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
        </div>

        <div class="flex flex-col">
          <form action="#" class="contact__form radius-15 overflow-hidden">
            <div class="contact__form-field flex flex-col mb-10">
              <label class="cl-white-1 mb-5" for="name">Ваше имя</label>
              <input type="text" value="" id="name" class="input input-black">
            </div>
            <div class="contact__form-field flex flex-col mb-10">
              <label class="cl-white-1 mb-5" for="phone">Телефон</label>
              <input type="text" value="" id="phone" class="input input-black">
            </div>
            <button class="button button-orange button-secondary">Отправить</button>
          </form>

          <div class="contact__info radius-10 overflow-hidden mt-10">
            <h3 class="contact__info-title font-medium">Связаться с нами</h3>
            <p class="contact__info-item flex items-center"><span>Электронная почта:</span> <a href="#" class="link-white font-medium">trudsystem@ya.ru</a></p>
            <p class="contact__info-item flex items-center"><span>Телефон:</span> <a href="#" class="link-white font-medium">+7 (850) 000-00-00</a></p>
            <p class="contact__info-item flex items-center"><span>Telegram:</span> <a href="#" class="link-white font-medium">@trudsystem</a></p>
            <p class="contact__info-item flex items-center"><span>WhatsApp</span> <a href="#" class="link-white font-medium">+7 (850) 000-00-00</a></p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>