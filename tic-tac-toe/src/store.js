import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    best: 0,
    player: 0,
    winner: 0

  },
  mutations: {
    updateWinner (state, winner) {
      state.winner = winner
    },
    updatePlayer (state) {
      state.player += 1
    },
    updateBest (state) {
      state.best += 1
    },
    resetWinner (state) {
      state.winner = 0
    },
    resetPlayer (state) {
      state.player = 0
    },
    resetBest (state) {
      state.best = 0
    }
  },
  actions: {
    updateWinner (context, winner) {
      context.commit('updateWinner', winner)
    },
    updatePlayer (context) {
      context.commit('updatePlayer')
    },
    updateBest (context) {
      context.commit('updateBest')
    },
    resetWinner (context) {
      context.commit('resetWinner')
    },
    resetPlayer (context) {
      context.commit('resetPlayer')
    },
    resetBest (context) {
      context.commit('resetBest')
    }
  }
})
