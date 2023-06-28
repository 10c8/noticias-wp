import Vue from 'vue';
import VueDOMPurifyHTML from 'vue-dompurify-html';

require('./bootstrap');
import './assets/css/styles.css';
import router from './router';
import App from './App.vue';
import store from './store';
import * as types from './store/mutation-types';

Vue.use(VueDOMPurifyHTML);

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  created() {
    this.$store.commit(types.RESET_LOADING_PROGRESS);
    this.$store.dispatch('getAllCategories');
    this.$store.dispatch('getAllPages');
  },
});
