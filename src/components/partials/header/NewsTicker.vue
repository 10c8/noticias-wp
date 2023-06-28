<template>
  <div
    class="news-ticker"
    @mouseover="active=false"
    @mouseleave="active=true"
  >
    <span class="news-ticker__title">Últimas Notícias</span>
    <div class="news-ticker__content">
      <transition name="fade" tag="div" mode="out-in">
        <a
          :key="items[tickerIndex].slug"
          :href="items[tickerIndex].slug"
        >
          {{ items[tickerIndex].title }}
        </a>
      </transition>
    </div>
    <div class="news-ticker__controls">
      <button
        class="news-ticker__controls-btn"
        id="nt-prev"
        title="Notícia Anterior"
        @click="previousItem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      <button
        class="news-ticker__controls-btn"
        id="nt-next"
        title="Próxima Notícia"
        @click="nextItem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        interval: null,
        active: true,
        tickerIndex: 0,
        items: [
          // TODO: Fetch news data from WordPress
          {
            title: 'Vinte e quatro estados se preparam para retornar aulas em agosto',
            slug: 'primeiro-post'
          },
          {
            title: 'Unemat divulga seletivo com 2.570 vagas para 62 cursos, confira',
            slug: 'segundo-post'
          }
        ]
      };
    },

    beforeDestroy() {
      clearInterval(this.interval);
    },

    created() {
      this.interval = setInterval(this.updateTicker, 5500);
    },

    methods: {
      updateTicker() {
        if (!this.active)
          return;

        if (this.tickerIndex == this.items.length - 1) {
          this.tickerIndex = 0;
        } else {
          this.tickerIndex++;
        }

        this.currentItem = this.items[this.tickerIndex];
      },

      nextItem() {
        if (this.tickerIndex == this.items.length - 1) {
          this.tickerIndex = 0;
        } else {
          this.tickerIndex++;
        }
      },

      previousItem() {
        if (this.tickerIndex === 0) {
          this.tickerIndex = this.items.length - 1;
        } else {
          this.tickerIndex--;
        }
      }
    },
  };
</script>

<style type="postcss" scoped>
  .news-ticker {
    @apply flex items-center bg-white;
    font-family: 'Barlow', sans-serif;
    width: 100%;
    height: 100%;

    &__title {
      @apply px-4 mr-4 text-center bg-primary-500 text-white select-none;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      cursor: default;
    }

    &__content {
      @apply text-primary-500;
      font-size: 15px;

      &:hover {
        text-decoration: underline;
      }
    }

    &__controls {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: auto;
      width: calc(38px * 2);
      height: 100%;

      &-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        width: 38px;
        height: 38px;
        outline: none !important;

        & svg {
          @apply text-primary-500;
        }

        &:hover {
          @apply text-primary-700 bg-gray-200;
        }

        &:active {
          @apply text-primary-400 bg-gray-400;
        }
      }
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
