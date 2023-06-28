<template>
  <div id="my-app" class="flex flex-col md:min-h-screen">
    <AppHeader />

    <transition name="loader-animation" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <ProgressBar :show-loader="showLoader" :loader-style="loaderStyle" />
    </transition>

    <transition name="page-transition" mode="out-in" appear>
      <div class="container content">
        <router-view />
      </div>
    </transition>

    <AppFooter />
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex';

  import Header from './components/partials/Header.vue';
  import Footer from './components/partials/Footer.vue';
  import ProgressBar from './components/partials/ProgressBar.vue';

  export default {
    data() {
      return {
        showLoader: true,
      };
    },

    computed: {
      ...mapGetters({
        isLoading: 'isLoading',
        loadingProgress: 'loadingProgress',
      }),

      loaderStyle() {
        return `width: ${this.loadingProgress}%;`;
      },
    },

    components: {
      AppHeader: Header,
      AppFooter: Footer,
      ProgressBar,
    },

    watch: {
      // watch the value of isLoading and once it's false hide the loader
      isLoading(val) {
        if (val == false) {
          let self = this;
          setTimeout(function() {
            self.showLoader = false;
          }, 1000);
        }
      },
    },
  };
</script>

<style type="postcss" scoped>
  .content {
    @apply pt-8 pb-8;
  }
</style>
