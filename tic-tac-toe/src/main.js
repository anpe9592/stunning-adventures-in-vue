import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Hammer from 'hammerjs/hammer'
require('typeface-montserrat')

Vue.config.productionTip = false

Vue.directive('tap', {
  bind: function (el, binding) {
    if (typeof binding.value === 'function') {
      const mc = new Hammer(el)
      // mc.get('tap').set({ direction: Hammer.DIRECTION_ALL })
      mc.on('tap', binding.value)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
