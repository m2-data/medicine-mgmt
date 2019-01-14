import Vue from 'vue'
import Vuex from 'vuex'
import json from './LeagueTable_August2018.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    title: 'New title',
    links: json.data,
    names: [],
    code: '',
    position: '',
    lastpos: ''

  },
  getters: {
    // countLinks: state => {
    // return state.links.length
    // },
    codeLinks: state => {
      return state.code
    },
    
    returnJson: state => {
      return state.names
      }
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
    ADD_CODE: (state) => {
      state.code = ''
      state.code = state.names[0]
      //console.log('statecode', state.code)
      // console.log('addcode' + state.code)
    },
    CLICKED: (state, link) => {
      //state.links.splice(link, 1)
      state.names = []
      state.names.push(link)
      // console.log(state.names)

    },
    // REMOVE_ALL: (state) => {
    //   state.links = []
    // },
    // updateName: (state, name) => {
    //   state.names.push(name)
    // },
    // getNames: (state, names) => {
    //   for (var i = 0; i < names.length; i++){
    //       state.names.push(names[i])
    //   }
    // },
    // CHANGE: (state, name) => {
    //   state.names = name
    //   console.log(state.names)
    // },
  },
  actions: {
    clickedLink: (context, link) => {
      context.commit('CLICKED', link)
    },
    codeLink: (context, code) => {
      context.commit('ADD_CODE', code)
    },
    // removeAll({commit}) {
    //   return new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       commit('REMOVE_ALL')
    //       resolve()
    //     }, 500)
    //   })
    // }
  }
})
