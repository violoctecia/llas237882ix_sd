<script setup>
import {useContactStore} from "@/stores/contact.js";
import IconPhoneWhite from "@/components/icons/IconPhoneWhite.vue";
import IconLocationRed from "@/components/icons/IconLocationRed.vue";
import { MaskInput } from 'vue-3-mask';

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
            <p class="flex items-center cl-orange font-semibold"><IconLocationRed class="mr-10" />Московская область</p>
            <p class="font-medium font-13">д. Путилково, БЦ «Гринвуд»</p>
          </div>

          <iframe class="absolute absolute-full" src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc6b8038ecd8f1560728fba1976911da3bbba0159ea70bebd63eb5bcde534fe3&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
        </div>

        <div class="flex flex-col">
          <form action="#" class="contact__form radius-15 overflow-hidden">
            <div class="contact__form-field flex flex-col mb-10">
              <label class="cl-white-1 mb-5" for="name">Ваше имя</label>
              <input type="text" value="" id="name" class="input input-black">
            </div>
            <div class="contact__form-field flex flex-col mb-10">
              <label class="cl-white-1 mb-5" for="phone">Телефон</label>
              <MaskInput class="input input-black" id="phone" mask="+7 (###) ###-##-##" />
            </div>
            <button class="button button-orange button-secondary">Отправить</button>
          </form>

          <div class="contact__info radius-10 overflow-hidden mt-10">
            <h3 class="contact__info-title font-medium">Связаться с нами</h3>
            <p class="contact__info-item flex items-center"><span>Telegram канал:</span> <a href="https://t.me/Verh500" target="_blank" class="link-white font-medium">@Verh500</a></p>
            <p class="contact__info-item flex items-center"><span>Телефон:</span> <a href="tel:89998381076" class="link-white font-medium">8 (999) 838-10-76</a></p>
            <p class="contact__info-item flex items-center"><span>Telegram:</span> <a href="https://t.me/Cepen1000" target="_blank" class="link-white font-medium">@Cepen1000</a></p>
            <p class="contact__info-item flex items-center"><span>WhatsApp</span> <a href="https://wa.me/79998381076" target="_blank" class="link-white font-medium">8 (999) 838-10-76</a></p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
