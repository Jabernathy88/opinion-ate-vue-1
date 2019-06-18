import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ...mapResourceModules({
      httpClient,
      names: ['restaurants', 'dishes'],
    })
  },
 });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
