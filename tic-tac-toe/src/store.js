import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    player: 0,
    ay: 0,
    winner: 0

  },
  mutations: {
    updateWinner (state, winner) {
      state.winner = winner
    },
    updatePlayer (state) {
      state.player += 1
    },
    updateAy (state) {
      state.ay += 1
    },
    resetWinner (state) {
      state.winner = 0
    },
    resetPlayer (state) {
      state.player = 0
    },
    resetAy (state) {
      state.ay = 0
    }
  },
  actions: {
    updateWinner (context, winner) {
      context.commit('updateWinner', winner)
    },
    updatePlayer (context) {
      context.commit('updatePlayer')
    },
    updateAy (context) {
      context.commit('updateAy')
    },
    resetWinner (context) {
      context.commit('resetWinner')
    },
    resetPlayer (context) {
      context.commit('resetPlayer')
    },
    resetAy (context) {
      context.commit('resetAy')
    }
  }
})
