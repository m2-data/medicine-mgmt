<template>
  <div class="league">
    <h1 class="leagueInfo">The table below uses NHS Digital Practice level prescribing data made available in accordance with the <a id="licence" target=”_blank” href="http://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" > Open Government Licence</a>.</h1>
    <h2 class="leagueInfo">The position in the league table is based on the ratio of the monthly spend on encouraged COPD drugs over the total monthly spend on COPD drugs for each surgery, the change column indicates the positional change of the surgery compared to the previous months data.</h2>
    <h2 class="leagueInfo">Click on the surgery name to see more detailed information on the month on month spend on encouraged and discouraged COPD drugs.</h2>
    <!-- <p><pre>this             spaced</pre></p> -->
    <!-- <p> {{names[0]}} </p> -->
    <div class='tableContain'>
      <table>
        <thead class="tableHeads">
          <tr>
            <th class="mainTH">Surgery</th>
            <th class="startData">SEP 17</th>
            <th class="feb">OCT 17</th>
            <th>NOV 17</th>
            <th>DEC 17</th>
            <th>JAN 18</th>
            <th>FEB 18</th>
            <th>MAR 18</th>
            <th>APR 18</th>
            <th>MAY 18</th>
            <th>JUN 18</th>
            <th>JUL 18</th>
            <th>AUG 18</th>
            <!-- <th>Total</th> -->
          </tr>
        </thead>
          <tr class ="row" v-bind:key="name.practice_name" v-for="(name, index) in links">
            <td v-on:click="clickedLinks($event.target)" class="companies"> <span>  {{index}} </span><router-link class="firstRow active" to="/stats">  {{name.practice_name}} </router-link></td>
            <td class="startData" v-bind:key="`${i}-${amount}`" v-for="(amount, i) in name.spend_ratio">{{amount}} </td>
          <!-- </tr>
          <tr class="totalRow">
            <td class="total">Total</td>
            <!-- <td class="totalRow" v-bind:key="newData.id" v-for="newData in newJson">{{newData.id}}</td> -->
          </tr>
      </table>
    </div>

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





<!--<template>
  <div class="hello">
    <div class="left">
      <h1 v-on:click="change($event.target)"> My {{ names }} </h1>

      <form @submit.prevent="addLink">
        <input class="link-input" type="text" name="" placeholder="Add a link" v-model="newLink">
      </form>
      <ul>
        <li v-on:click="removeLinks($event.target)" v-for="(link, index) in links" v-bind:key="index"> {{link.practice_name}} 
           <button v-on:click="removeLinks($event.target)" class="rm" >Remove</button> 
          
        </li>
      </ul>
      <button><router-link to="/stats"> to stats </router-link></button>
    </div>
    <div class="right">
      <stats />
    </div>
  </div>
</template>-->

<script>
import {mapState, mapMutations, mapActions} from 'vuex'


export default {
  name: 'League',
  data() {
    return {
      newLink : '',
      name: '',
    }
  },
  computed: {
    ...mapState([
      'title',
      'links',
      'names',
      'code'
    ]),
  },
  methods: {
    ...mapMutations([
      'ADD_CODE',
      'getNames',
      'CHANGE',
      'updateName'
    ]),
    ...mapActions([
      'clickedLink',
      'codeLink'
    ]),
    addLink: function() {
      this.ADD_LINK(this.newLink)
      this.newLink = ''
    },
    // changeN: function() {
    //   this.updateName(this.names)
    //   this.names = name
    // },
    // getName: function(name) {
    //   this.getNames(name)
    //   console.log(name)
    //   this.name = name
    // },
    clickedLinks: function(link) {
      this.clickedLink(link.innerText)
      console.log(link.innerText)
      this.codeLink(link)
    },
    // change: function(name) {
    //   this.CHANGE(name)
    //   console.log(name.innerHTML)
    //   this.names = name
    // },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, #app, .home {
    height: 100%;
  }
  body {
    background-color: #F4F4F4;
    margin: 0;
    height: 100%;
  }
#licence{
  text-decoration: underline;
  color: #0099A8;
}
.router-link-exact-active{
  color: #e9434f;
}

.router-link-active:not(.active){
  color: #e9434f;
}

.hello {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: 100%;
  grid-template-areas:
    "left right";
  height: 100%;
}

.left, .right {
  padding: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}
ul li {
  padding: 20px;
  background: white;
  margin-bottom: 8px;
}

.right {
  grid-area: right;
  background-color: #E9E9E9;
}

input {
  border: none;
  padding: 20px;
  width: calc(100% - 40px);
  box-shadow: 0 5px 5px lightgrey;
  margin-bottom: 50px;
  outline: none;
}

.rm {
  float: right;
  text-transform: uppercase;
  font-size: .8em;
  background: #f9d0e3;
  border: none;
  padding: 5px;
  color: #ff0076;
  cursor:pointer;
}
/* .feb{
  padding-left: 6px;
} */



.leagueInfo{
font-family: Futura, sans-serif;
padding: 0 100px 0 5%;
font-weight: normal;
font-size: 1.2em;
color: #0099A8;
}

.tableContain{
  overflow-x: auto;
  width: 90%;
  margin: 0 5% 2% 5%;
  padding-bottom: 20px;
  padding-top: 20px;
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
    /* text-align: left; */
    /* padding: 10px 12px 8px 40px; */
    /* display: inline-block; */
    width: 80px;
    /* vertical-align: middle; */
    white-space: nowrap;
}
/* .jan {
  padding: 20px 20px 20px 370px;
  position:relative;
} */

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
  font-weight: bolder;
  flex-shrink: 1;
  display: block;
  padding-left: 15px;
  /* text-align: center; */
}
.mainTH {
  font-weight: bold;
  color: #fff;
  width: 326px;
  /* display: block;
  text-align: center;
  height: 43px;
  position: absolute;
  background-color: #052e41;
  padding-top: 17px;
  z-index: 2; */
}

.companies{
  width: 300px;
  text-align: center;
  /* position: absolute; */
  /* border-right: 2px solid grey; */
  -webkit-box-shadow: 4px 0px 4px -0.5px rgba(0,0,0,0.4);
  -moz-box-shadow: 4px 0px 4px -0.5px rgba(0,0,0,0.4);
  box-shadow: 4px 0px 4px -0.5px rgba(0,0,0,0.4);
  padding: 16px 20px 20px 8px;
  color: #0099A8;
  position: relative;
  /* position: absolute;
  height: 22px;
  background-color: #dddddd;
  z-index: 2;
  font-size: 0.85em; */
  /* cursor: pointer; */
}

span {
  float: left;
}
/* .row:nth-child(1){
  background: white;
} */

/* .row:nth-child(even){
  background: lightgrey;
} */
/* .companies:nth-of-type(2n){
  background-color: white;
} */
a{
  text-decoration: none;
  width: 100%;
}

.tableHeads{
  height: 60px;
  background-color: #072e40;
}

.startData{
  /* padding-left: 30px;
  padding-right: 20px; */
  padding: 20px 20px 20px 40px;
  /* position:relative; */
}

.startData:nth-child(n) {
  /* left: -15px; */
}

.startData:nth-child(3) {
  /* left: -15px; */
}

.startData:nth-child(2){
  /* padding-left: 261px;
  left: 121px; */
}

.startData:last-child{
  /* padding-right: 41px;
  left:0; */
}

/* .companies::after {
  left: 200px;
} */

.total{
  color: #fff;
  width: 300px;
  -webkit-box-shadow: 4px 0px 4px -0.5px rgba(0,0,0,0.4);
  -moz-box-shadow: 4px 0px 4px -0.5px rgba(0,0,0,0.4);
  box-shadow: 4px 0px 4px -0.5px rgba(0,0,0,0.4);
  /* border-right: 2px solid grey; */
}

.totalRow{
  background-color: #0099A8;
}

.totalRow td{
  color: #fff;
  padding: 10px 10px 8px 10px;
  width: 309px;
  text-align: center;
  /* display: block;
  position: absolute; */
  background-color: #0099a9;
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
  text-shadow: 2px 3px 10px rgba(0, 0, 0, 0.7);
}
.infoFoot{
  text-align: right;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.7);
}
.addressFoot{
  text-align: right;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.7);
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
    /* padding: 30px; */
    padding-left: 50px;
    padding-right: 50px;
  }
  .name {
    padding: 5px 5px 5px 10px;
  }
}
</style>
