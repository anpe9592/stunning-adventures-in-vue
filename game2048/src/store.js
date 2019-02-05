import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    best: 0
  },
  mutations: {
    updateScore (state, score) {
      state.score += score
    },
    updateBest (state, best) {
      state.best += best
    },
    resetScore (state) {
      state.score = 0
    },
    resetBest (state) {
      state.best = 0
    }
  },
  actions: {
    updateScore (context, score) {
      context.commit('updateScore', score)
    },
    updateBest (context, best) {
      context.commit('updateBest', best)
    },
    resetScore (context) {
      context.commit('resetScore')
    },
    resetBest (context) {
      context.commit('resetBest')
    }
  }
})
