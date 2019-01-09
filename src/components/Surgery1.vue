<template>
  <div class="surgery">
    <h1 class="surgInfo"> {{ title }} </h1>

    <button v-on:click="changeTitle()" >{{title}} </button>

  </div>
</template>


<script>
import Store from '../store.js'
import { EventBus } from '../main.js'
export default {
  name: 'Surgery1',
  // {
  //   parentData: Object,
  //   stringProp: String,
  //   title: String,
  // },
  //mixins: [mixin],
  data() {
    return {
      counter: 10,
      title: 'nyah'

      //myProp: myProp
      // clicked: clicked

    }
 
  },
  computed: {
    count: function (){
  //     return this.myJson.filter(function(ids){
  //       let ident = ids.id;
  //       console.log(ids.id)
  //       console.log('hi')
  //       return ident;
  //     })
  //   },
      return store.state.count
    }
  },
  created(){
    window.EventBus.$on('triggerMyEvent', (data) => {
      this.title = data
      console.log(data)
      this.changeTitle(data)
    })
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle
    }
  }
}

</script>

<style scoped>
.surgInfo{
  padding: 10px 0 10px 50px;
}
</style>