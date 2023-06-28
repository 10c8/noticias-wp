<template>
  <div class="post">
    <template v-if="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-dompurify-html="post.content.rendered"></div>
      <!-- <div v-html="post.content.rendered" /> -->
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
  import axios from "axios";
  import { mapGetters } from "vuex";

  import SETTINGS from "../../settings";
  import Loader from "../partials/Loader.vue";

  export default {
    data() {
      return {
        post: false
      };
    },

    computed: {},

    beforeMount() {
      this.getPost();
    },

    methods: {
      getPost: function() {
        axios
          .get(SETTINGS.API_BASE_PATH
               + "posts?slug="
               + this.$route.params.postSlug)
          .then(response => {
            this.post = response.data[0];
          })
          .catch(e => {
            console.log(e);
          });
      }
    },

    components: {
      Loader
    }
  };
</script>

<style type="postcss" scoped>
</style>
