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
    updateScore (state) {
      state.score += 1
    },
    updateBest (state) {
      state.best += 1
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
    updateScore (context) {
      context.commit('updateScore')
    },
    updateBest (context) {
      context.commit('updateBest')
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
