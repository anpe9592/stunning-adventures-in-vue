import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score: 0,
    best: 0,
    winner: 0

  },
  mutations: {
    updateWinner (state, winner) {
      state.winner = winner
    },
    updateScore (state, score) {
      state.score += score
    },
    updateBest (state, best) {
      state.best = best
    },
    resetWinner (state) {
      state.winner = 0
    },
    resetScore (state) {
      state.score = 0
    },
    resetBest (state) {
      state.best = 0
    }
  },
  actions: {
    updateWinner (context, winner) {
      context.commit('updateWinner', winner)
    },
    updateScore (context, score) {
      context.commit('updateScore', score)
    },
    updateBest (context, best) {
      context.commit('updateBest', best)
    },
    resetWinner (context) {
      context.commit('resetWinner')
    },
    resetScore (context) {
      context.commit('resetScore')
    },
    resetBest (context) {
      context.commit('resetBest')
    }
  }
})
