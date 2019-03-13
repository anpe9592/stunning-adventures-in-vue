// import _ from 'lodash'

export default {
  methods: {
    onTap (event) {
      if (event.isFinal) {
        console.log(event)
      }
    }
  }
}
