// import _ from 'lodash'

export default {
  methods: {
    tap (a) {
      console.log(a)
      this.seedTwo()
    },

    seedTwo () {
      if (this.allTilesFull) { return }

      let getRandomItem = () => {
        let randomIndex = Math.floor(Math.random() * this.board.length)

        return this.board[randomIndex]
      }

      let randomItem = getRandomItem()

      while (randomItem.value !== 0) {
        randomItem = getRandomItem()
      }

      randomItem.value = 2
    },

    onTap (event) {
      if (event.isFinal) {
        this.tap(event)
      }
    }
  }
}
