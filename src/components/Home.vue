<template>
  <div class="page page--home">
    <div class="mb-8 banners">
      <div class="container flex items-start justify-between lg:mx-auto">
        <a href="#" class="banner">
          <img
            src="https://site/teste/arquivos/anuncie/f9590603b3f91f46c2eb32bb64981ab90.gif"
            alt=""
          />
        </a>
        <a href="#" class="banner banner--small">
          <img
            src="https://site/teste/arquivos/anuncie/1ed5aeadbaaa89687c80bb558bfd3eb00.gif"
            alt=""
          />
        </a>
      </div>
    </div>
    <HeroSlider limit="9" />
  </div>
</template>

<script>
  import HeroSlider from './widgets/HeroSlider.vue';

  export default {
    components: {
      HeroSlider
    }
  };
</script>

<style type="postcss">
  .banner {
    &--small {
      & img {
        width: auto;
        height: 92px;
      }
    }
  }
</style>
