<template>
  <div class="league">
    <!-- <h1>Hello {{ their_name }}, This is an about page</h1> -->
    <h1 class="leagueInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali...</h1>
    <!-- <p v-on:click="triggerMyEvent()" > {{title}} </p> -->
    <!-- <p v-on:click="change($event.target)"> {{names}} </p> -->
    <p> {{names}} </p>
    <div class='tableContain'>
      <table>
        <thead class="tableHeads">
          <tr>
            <th class="mainTH">Resp Encouraged</th>
            <th class="startData">JAN 16</th>
            <th>FEB 16</th>
            <th>MAR 16</th>
            <th>APR 16</th>
            <th>MAY 16</th>
            <th>JUN 16</th>
            <th>JUL16</th>
            <th>AUG 16</th>
            <th>SEPT 16</th>
            <th>OCT 16</th>
            <th>NOV 16</th>
            <th>DEC 16</th>
            <!-- <th>Total</th> -->
          </tr>
        </thead>
          <tr v-bind:key="name.practice_name" v-for="name in links">
            <td class="companies"> <router-link v-on:click="removeLinks($event.target)" class="firstRow" to="/hello">{{name.practice_name}} </router-link></td>
            <td class="startData" v-bind:key="`${i}-${amount}`" v-for="(amount, i) in name.spend_ratio">{{amount}} </td>
          </tr>
          <tr class="totalRow">
            <td class="total">Total</td>
            <!-- <td class="totalRow" v-bind:key="newData.id" v-for="newData in newJson">{{newData.id}}</td> -->
          </tr>
      </table>
    </div>

    <!-- <li v-for="(name, index) in links" v-bind:key="name.practice_name"> {{name}}  -->
          <!-- <button v-on:click="removeLinks(index)" class="rm" >Remove</button> -->
        <!-- </li> -->
    <!-- <Surgery :myProp="clicked">{{clicked.nm}}</Surgery> -->


        <!-- previous working code -->

          <!-- <tr v-bind:key="name.practice_name" v-for="name in data">
            <td v-on:click="saveClicked(data)" class="companies"><router-link to="/hello">{{name.practice_name}} </router-link></td>
            <td class="startData" v-bind:key="`${i}-${amount}`" v-for="(amount, i) in name.spend_ratio">{{amount}} </td> -->



            <!-- <td>{{total}}</td> -->
            <!-- <td v-bind:key="spent.practice_name" v-for="spent in data">{{spent.encouraged_spend}}</td> -->
            <!-- <td v-bind:key="id.id" v-for="(id) in newJson"> {{newJson.id}} </td> -->
            <!-- <td v-on:click="createTotal()" > toti</td> -->
            <!-- <td colspan="10"> {{data.yrs}} </td> -->
            <!-- <td v-bind:key="otherdata.nm" v-for="otherdata in myJson">{{otherdata.nm}}</td> -->

          <!-- </tr> -->
         

<!-- </div> -->
    <footer>
        <div class = "foot">
          <!-- <a id="footLogo" href="#/"><img id="logoImg" src="../assets/M2logo.png" alt="M2 Data"/></a> -->
        </div>
          <div class ="footText">
            <p class="name">M2 Data</p>
            <div class ="rightInfo">
              <p class="infoFoot">enquiries@M2data.co.uk | 
                      07854 254 1245</p>
              <p class="addressFoot">1 Building Name, Road Name, Town, London POS C0D</p>
            </div>
          </div>
      </footer>
  </div>
</template>


<script>
import Surgery from '../components/Surgery.vue'
import json from '../test numbers.json'
import json1 from '../LeagueTable.json'
import { EventBus } from '../main.js'
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  name: 'League',
  components: {
    Surgery
  },
  data() {
    return {
      myJson: json,
      newJson: json,
      realJson: json1,
      clicked: {},
      data: json1.data,
      total: [],
      title: 'title'
    }
  },
  computed: {
    ...mapState([
      'links',
      'names'
    ]),
    ...mapGetters([
      'returnJson',
      ]),
    // names: {
    //   set(name) {
    //     this.$store.commit('CHANGE', {name})
    //   },
    //   get() {
    //      return this.name
    //   }
  //}
  },

  methods: {
    ...mapMutations([
      'CHANGE',
      'ADD_LINK',
      'getNames',
      'updateName'
    ]),
    ...mapActions([
      'removeLink'
    ]),
    saveClicked: function(id){
      //console.log(id);
      //this.clicked.push(id)
      this.clicked = id
      console.log(this.clicked, this.data)

      // for (var i in this.data){
      //   console.log(this.data[i].practice_name)
      // }
      
    },
    removeLinks: function(link) {
      console.log(link)
      this.removeLink(link.innerHTML)
    },
    triggerMyEvent () {
      this.title = 'Vue Wizards'    //comment this out later (not to make change in this component)
      //window.EventBus.$emit('triggerMyEvent', 'Vue Wizards')
      
    },
    change: function(name) {
      this.CHANGE(name)
      console.log(name)
      this.names = name
    },
  },
  created: function() {
    for (var i = 0; i < this.data.length; i++){
      for (var j = 0; j < this.data[i].length; j++){
        // this.total += parseInt(this.data[j].encouraged_spend);
        this.total.push(parseInt(this.data[i][j].encouraged_spend));
        console.log(parseInt(this.data[i][j].encouraged_spend));
    //return this.total;
    //     for (i = 0; j < this.data.length; j++){
    //     console.log(/*this.data[i].encouraged_spend,*/ total + 'i', i);
    //   }
      }
    }
  }
  // computed: {
  //   createTot: function (ids){
  //     return this.myJson.filter(function(ids){
  //       let ident = ids.id;
  //       console.log(ids.id)
  //       console.log('hi')
  //       return ident;
  //     })
  //   },
  //   filteredTot: function () {
  //   var self = this
  //   return self.myJson.filter(function (dat) {
  //     return dat.tot;
  //     console.log(dat.tot);
  //   })
  // }
  //}
}


</script>

<style scoped>
.leagueInfo{
  font-family: Futura, sans-serif;
  padding: 0 100px 0 5%;
  font-weight: normal;
  font-size: 1.5em;
  color: #0099A8;
}
.tableContain{
  overflow-x: auto;
  width: 90%;
  margin: 0 5% 2% 5%;
  padding-bottom: 20px;
}
table {
    border-collapse: collapse;
    margin: 0;
    overflow-x: scroll;
    overflow-x: auto;
    width: 900px;

}

td, th, a{
    /* border: 1px solid #dddddd; */
    text-align: left;
    padding: 10px 12px 8px 12px;
    /* display: inline-block; */
    width: 80px;
    /* vertical-align: middle; */
    white-space: nowrap;
}


tr:nth-child(even) {
    background-color: #dddddd;
}

th{
  font-weight: lighter;
  color: #fff;
  width: 100px;
  /* background-color: #072e40; */
}

.firstRow{
  display: block;
}
.mainTH {
  font-weight: bold;
  color: #fff;
  width: 300px;
}

.companies{
  width: 300px;
  border-right: 2px solid grey;
  /* padding: 16px 20px 20px 8px; */
  color: #0099A8;
  /* cursor: pointer; */
}

a{
  text-decoration: none;
  color: #0099A8;
  width: 100%;
}

.tableHeads{
  height: 60px;
  background-color: #072e40;
}

.startData{
  padding-left: 30px;
}

.total{
  color: #fff;
  width: 300px;
  border-right: 2px solid grey;
}

.totalRow{
  background-color: #0099A8;
}

.totalRow td{
  color: #fff;
  padding: 10px 10px 8px 10px;
  width: 70px;
  text-align: center;
}
.league{
  /* padding-bottom: 30px; */
}


.footText{
  display: flex;
  align-items: center;
  margin: 0;
  width: 100%;
  justify-content: space-between;
}
.name{
  padding: 5px 5px 5px 40px;
  margin: 0;
  font-size: 1.3em;
}
.infoFoot{
  text-align: right;
}
.addressFoot{
  text-align: right;
}
.rightInfo{
  padding-right: 10px;
}
@media screen and (max-width: 1020px) {
  footer {
    position: relative;
  }
}


@media screen and (max-width: 500px) {
  .leagueInfo{
    text-align: center;
    padding: 30px;
  }
  .name {
    padding: 5px 5px 5px 10px;
  }
}
</style>