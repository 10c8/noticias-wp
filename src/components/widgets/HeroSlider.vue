<template>
  <div class="hero-slider">
    <div class="container lg:mx-auto">
      <template v-if="recentPostsLoaded">
        <VueAgile :options="carouselOptions">
          <div v-for="post in recentPosts(limit)" :key="post.id" class="hero-slider__item">
            <div
              class="item__wrapper"
              :style="`background-image: url(${
                post.featured_image && post.featured_image.url
              })`"
            >
              <router-link :to="post.slug" class="item__text">
                <h2 class="item__text-title">{{ post.title.rendered }}</h2>
                <span
                  class="item__text-excerpt"
                  v-html="post.excerpt.rendered"
                />
              </router-link>
            </div>
          </div>
          <template slot="prevButton">
            <button class="hero-slider__btn hero-slider__btn--prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </template>
          <template slot="nextButton">
            <button class="hero-slider__btn hero-slider__btn--next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </template>
        </VueAgile>
      </template>
      <div v-else>Loading...</div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { VueAgile } from 'vue-agile';

  export default {
    data() {
      return {
        carouselOptions: {
          autoplay: true,
          autoplaySpeed: 5000,
          dots: false,
          pauseOnHover: true,
          responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3
              }
            }
          ]
        }
      };
    },

    props: [ 'limit' ],

    computed: {
      ...mapGetters({
        recentPosts: 'recentPosts',
        recentPostsLoaded: 'recentPostsLoaded',
      })
    },

    mounted() {
      this.$store.dispatch('getPosts', { limit: this.limit });
    },

    components: {
      VueAgile
    }
  };
</script>

<style type="postcss" scoped>
  .hero-slider {
    &__item {
      @apply pl-1 pr-1;
      height: 430px;
    }

    & .item {
      &__wrapper {
        height: 100%;
        background-size: cover;
        background-position: center;
      }

      &__text {
        @apply p-5 flex flex-col justify-end text-white;
        font-family: 'Barlow', sans-serif;
        width: 100%;
        height: 100%;
        background: -moz-linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 70%);
        background: -webkit-linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 70%);
        background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(255,255,255,0) 70%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#ffffff",GradientType=1);

        &-title,
        &-excerpt {
          font-weight: 700;
          letter-spacing: normal;
        }

        &-title {
          font-size: 23px;
          line-height: 1.2;
        }

        &-excerpt {
          font-size: 12px;
          text-transform: uppercase;
        }
      }
    }

    &__btn {
      @apply flex justify-center items-center text-primary-500;
      visibility: hidden;
      position: absolute;
      top: calc(50% - 48px / 2);
      border: none;
      border-radius: 100%;
      width: 48px;
      height: 48px;
      background-color: rgba(255, 255, 255, 0.7);

      &:hover {
        background-color: rgba(255, 255, 255, 1);
      }

      &:active {
        background-color: rgba(255, 255, 255, 0.5);
      }

      &--prev {
        left: 15px;
      }

      &--next {
        right: 15px;
      }
    }

    &:hover &__btn {
      visibility: visible;
    }
  }
</style>
