<template>
  <div class="widget recent-posts">
    <h3>
      <slot></slot>
    </h3>
    <div v-if="recentPostsLoaded">
      <div v-for="post in recentPosts(limit)" :key="post.id">
        <router-link :to="post.slug" class="w-full max-w-sm lg:max-w-full lg:flex">
          <div
            class="flex-none h-48 overflow-hidden text-center bg-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l"
            style="background-image: url('https://res.cloudinary.com/evanagee/image/upload/c_scale,h_400/v1580267636/VueWP/Youtube-bg_00240.jpg')"
            title="Woman holding a mug"
          ></div>
          <div
            class="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:rounded-b-none lg:rounded-r"
          >
            <div class="mb-8">
              <div class="mb-2 text-xl font-bold text-gray-900">{{ post.title.rendered }}</div>
              <p class="text-base text-gray-700" v-html="post.excerpt.rendered"></p>
            </div>
            <div class="flex items-center">
              <img
                class="w-10 h-10 mr-4 rounded-full"
                src="https://res.cloudinary.com/evanagee/image/upload/c_fit,w_50/v1551277265/evanagee.com/evan-2018.jpg"
                alt="Avatar of Jonathan Reinink"
              />
              <div class="text-sm">
                <p class="text-gray-600">{{ getAuthor(post) }}</p>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: ['limit'],
  computed: {
    ...mapGetters({
      recentPosts: 'recentPosts',
      recentPostsLoaded: 'recentPostsLoaded',
    }),
  },

  methods: {
    getAuthor(post) {
      console.log(post);
    },
  },

  mounted() {
    this.$store.dispatch('getPosts', { limit: this.limit });
  },
};
</script>
