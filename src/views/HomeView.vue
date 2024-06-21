<script setup>
import Hero from "@/components/Hero.vue";
import About from "@/components/About.vue";
import Calc from "@/components/Calc.vue";
import Progress from "@/components/Progress.vue";
import Team from "@/components/Team.vue";
import Reviews from "@/components/Reviews.vue";
import Faq from "@/components/Faq.vue";
import Contact from "@/components/Contact.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";
</script>

<template>
  <main>
    <AppHeader />
    <Hero />
    <About />
    <Calc />
    <Progress />
    <!--    <Team />-->
    <Reviews />
    <Faq />
    <Contact />
    <AppFooter />
  </main>
</template>
