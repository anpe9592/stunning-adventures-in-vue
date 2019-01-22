import _ from 'lodash'

export default {
  data () {
    return {
      mergeAnimationsList: [],
      slideAnimationsList: [],
      mergeGameStateList: [],
      slideGameStateList: []
    }
  },

  methods: {
    animate () {
      let boardDidChange = this.mergeAnimationsList.length > 0 || this.slideAnimationsList.length > 0

      if (boardDidChange) {
        while (this.mergeAnimationsList.length > 0) {
          let animation = this.mergeAnimationsList.splice(0, 1)[0]
          this.animateTiles(animation)
        }
        while (this.slideAnimationsList.length > 0) {
          let animation = this.slideAnimationsList.splice(0, 1)[0]
          this.animateTiles(animation)
        }
        setTimeout(() => {
          this.seedTwo()
        }, 100)
      }
    },

    animateTiles (animation) {
      let { from, to } = animation

      let a = this.board[from]
      let b = this.board[to]
      a.value = a.value + b.value
      b.value = 0

      this.board.splice(from, 1)
      this.board.splice(from, 0, b)

      this.board.splice(to, 1)
      this.board.splice(to, 0, a)
    },

    getChangeLists () {
      let changeLists = {}

      changeLists.merge = this.mergeAnimationsList
      changeLists.slide = this.slideAnimationsList

      return changeLists
    },

    moveRight () {
      let changeLists = this.getChangeLists()

      let board = _.cloneDeep(_.chunk(this.board, 4))
      for (let a = 0; a < board.length; a++) {
        this.mergeRight(board, a, changeLists)
        this.slideRight(board, a, changeLists)
      }
    },

    mergeRight (board, a, changeLists) {
      let i = board.length - 2
      let j = board.length - 1

      while (i >= 0) {
        if (board[a][i].value === 0 && board[a][j].value === 0) {
          j--
          i--
        } else if (board[a][i].value === board[a][j].value) {
          changeLists.merge.push({ from: (a * 4 + i), to: (a * 4 + j) })

          board[a][j].value = board[a][i].value + board[a][j].value
          board[a][i].value = 0
          j--
          i--
        } else if (board[a][j].value === 0) {
          j--
          i--
        } else if (board[a][i].value !== 0 && board[a][j].value !== 0 && (i + 1 === j)) {
          j--
          i--
        } else if (board[a][i].value !== 0 && board[a][j].value !== 0) {
          j--
        } else if (board[a][i].value === 0) {
          i--
        }
      }
    },

    slideRight (board, a, changeLists) {
      let k = board.length - 2
      let l = board.length - 1
      while (k >= 0) {
        if (board[a][l].value !== 0) {
          l--
          k--
        } else if (board[a][l].value !== 0 && board[a][k].value !== 0) {
          l--
          k--
        } else if (board[a][l].value === 0 && board[a][k].value === 0) {
          k--
        } else if (board[a][l].value === 0 && board[a][k].value !== 0) {
          changeLists.slide.push({ from: (a * 4 + k), to: (a * 4 + l) })

          board[a][l].value = board[a][k].value + board[a][l].value
          board[a][k].value = 0
          l--
          k--
        }
      }
    },

    moveLeft () {
      let changeLists = this.getChangeLists()

      let board = _.cloneDeep(_.chunk(this.board, 4))
      for (let a = 0; a < board.length; a++) {
        this.mergeLeft(board, a, changeLists)
        this.slideLeft(board, a, changeLists)
      }
    },

    mergeLeft (board, a, changeLists) {
      let i = 1
      let j = 0

      while (i < board.length) {
        if (board[a][i].value === 0 && board[a][j].value === 0) {
          j++
          i++
        } else if (board[a][i].value === board[a][j].value) {
          changeLists.merge.push({ from: (a * 4 + i), to: (a * 4 + j) })

          board[a][j].value = board[a][i].value + board[a][j].value
          board[a][i].value = 0
          j++
          i++
        } else if (board[a][j].value === 0) {
          j++
          i++
        } else if (board[a][i].value !== 0 && board[a][j].value !== 0 && (i - 1 === j)) {
          j++
          i++
        } else if (board[a][i].value !== 0 && board[a][j].value !== 0) {
          j++
        } else if (board[a][i].value === 0) {
          i++
        }
      }
    },

    slideLeft (board, a, changeLists) {
      let k = 1
      let l = 0
      while (k < board.length) {
        if (board[a][l].value !== 0) {
          l++
          k++
        } else if (board[a][l].value !== 0 && board[a][k].value !== 0) {
          l++
          k++
        } else if (board[a][l].value === 0 && board[a][k].value === 0) {
          k++
        } else if (board[a][l].value === 0 && board[a][k].value !== 0) {
          changeLists.slide.push({ from: (a * 4 + k), to: (a * 4 + l) })

          board[a][l].value = board[a][k].value + board[a][l].value
          board[a][k].value = 0
          l++
          k++
        }
      }
    },

    moveUp () {
      let changeLists = this.getChangeLists()

      let board = _.cloneDeep(_.chunk(this.board, 4))
      for (let a = 0; a < board.length; a++) {
        this.mergeUp(board, a, changeLists)
        this.slideUp(board, a, changeLists)
      }
    },

    mergeUp (board, a, changeLists) {
      let i = 1
      let j = 0

      while (i < board.length) {
        if (board[i][a].value === 0 && board[j][a].value === 0) {
          j++
          i++
        } else if (board[i][a].value === board[j][a].value) {
          changeLists.merge.push({ from: (i * 4 + a), to: (j * 4 + a) })
          
          board[j][a].value = board[i][a].value + board[j][a].value
          board[i][a].value = 0
          j++
          i++
        } else if (board[j][a].value === 0) {
          j++
          i++
        } else if (board[i][a].value !== 0 && board[j][a].value !== 0 && (i - 1 === j)) {
          j++
          i++
        } else if (board[i][a].value !== 0 && board[j][a].value !== 0) {
          j++
        } else if (board[i][a].value === 0) {
          i++
        }
      }
    },

    slideUp (board, a, changeLists) {
      let k = 1
      let l = 0
      while (k < board.length) {
        if (board[l][a].value !== 0) {
          l++
          k++
        } else if (board[l][a].value !== 0 && board[k][a].value !== 0) {
          l++
          k++
        } else if (board[l][a].value === 0 && board[k][a].value === 0) {
          k++
        } else if (board[l][a].value === 0 && board[k][a].value !== 0) {
          changeLists.slide.push({ from: (k * 4 + a), to: (l * 4 + a) })
          
          board[l][a].value = board[k][a].value + board[l][a].value
          board[k][a].value = 0
          l++
          k++
        }
      }
    },

    moveDown () {
      let changeLists = this.getChangeLists()

      let board = _.cloneDeep(_.chunk(this.board, 4))
      for (let a = 0; a < board.length; a++) {
        this.mergeDown(board, a, changeLists)
        this.slideDown(board, a, changeLists)
      }
    },

    mergeDown (board, a, changeLists) {
      let i = board.length - 2
      let j = board.length - 1

      while (i >= 0) {
        if (board[i][a].value === 0 && board[j][a].value === 0) {
          j--
          i--
        } else if (board[i][a].value === board[j][a].value) {
          changeLists.merge.push({ from: (i * 4 + a), to: (j * 4 + a) })
          
          board[j][a].value = board[i][a].value + board[j][a].value
          board[i][a].value = 0
          j--
          i--
        } else if (board[j][a].value === 0) {
          j--
          i--
        } else if (board[i][a].value !== 0 && board[j][a].value !== 0 && (i - 1 === j)) {
          j--
          i--
        } else if (board[i][a].value !== 0 && board[j][a].value !== 0) {
          j--
        } else if (board[i][a].value === 0) {
          i--
        }
      }
    },

    slideDown (board, a, changeLists) {
      let k = board.length - 2
      let l = board.length - 1
      while (k >= 0) {
        if (board[l][a].value !== 0) {
          l--
          k--
        } else if (board[l][a].value !== 0 && board[k][a].value !== 0) {
          l--
          k--
        } else if (board[l][a].value === 0 && board[k][a].value === 0) {
          k--
        } else if (board[l][a].value === 0 && board[k][a].value !== 0) {
          changeLists.slide.push({ from: (k * 4 + a), to: (l * 4 + a) })
          
          board[l][a].value = board[k][a].value + board[l][a].value
          board[k][a].value = 0
          l--
          k--
        }
      }
    },

    registerControl () {
      const validKeyCodes = [39, 37, 38, 40]
      document.addEventListener('keydown', (event) => {
        let key = event.which
        if (_.includes(validKeyCodes, key)) {
          if (key === 39) {
            // right
            this.moveRight()
          } else if (key === 37) {
            // left
            this.moveLeft()
          } else if (key === 38) {
            // up
            this.moveUp()
          } else if (key === 40) {
            // down
            this.moveDown()
          }
          this.animate()
        } else { return }
      })
    }
  }
}
