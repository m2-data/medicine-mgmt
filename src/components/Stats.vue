<template>
  <div class="stats">
    <h1 class="title" >  {{surgName}}  <router-link to="/league-table"><button>Back</button></router-link> </h1> 
    <h4 class="address" > ADDRESS:  {{ addr }}  </h4>
    <h2 class="position"> Current position: {{position}} <span v-if="position > lastposition">  <img src="../assets/red triangle.png"> </span>  <span v-if="position < lastposition">  <img src="../assets/blue triangle.png"> </span>  
      <br> Previous position: {{ lastposition}}      </h2>

    <!-- <button @click="addCode">Add Cat</button> -->
      <!-- <span v-if="position == lastposition">  <p id="dot"> •</p> </span> -->

    <!-- <h4 v-bind:key="index" v-for="(addr, index) in address" > <span v-if="address.SurgeryCode == Scode">{{ addr.Address1 }} </span></h4> -->
    <h2 class="chartTitle">Monthly spend on encouraged and discouraged drugs</h2>

    <div class="charty">
      <line-chart class="chart"></line-chart>
    </div>
    <div class="diseases">
      <!-- <div class="drugList"> -->
        <div class="goodBad">
          <table>
            <thead class="tableHeads">
              <tr>
                <th class="drugs good">Encouraged</th>
              </tr>
              <tr>
                <th class="mainTH">Drug name</th>
                <th class="startData" v-bind:key="index" v-for="(month, index) in monthss"> {{month}} </th>
              </tr>
            </thead>
              <tr class ="row" v-bind:key="index" v-for="(encouragedName, index) in drugShow">
                <td class="companies" > {{encouragedName.drugname}} </td>
                <!-- <td class="startData" v-bind:key="`${i}-${amount}`" v-for="(amount, i) in name.spend_ratio">{{amount}}% </td> -->
              </tr>
            </table>




          <!-- <h3 class="title">Disease Area: {{stat[0].disease_area}}</h3> -->
          <!-- <h4> drug{{ drugShow }} </h4>
          <h4 class="drugs good">Encouraged</h4>
          <ul class="goodUl">
            <li>{{ stat[0].encouraged[0] }}</li>
            <li>{{ stat[0].encouraged[1] }}</li>
            <li>{{ stat[0].encouraged[2] }}</li>
            <li>Drug 4</li>
          </ul>
          <h4 class="drugs bad">Discouraged</h4>
          <ul class="badUl">
            <li>{{ stat[0].discouraged[0] }}</li>
            <li>{{ stat[0].discouraged[1] }}</li>
            <li>{{ stat[0].discouraged[2] }}</li>
          </ul> -->
        <!-- </div> -->
      </div>
      <div>
        <div class="goodBad">
          <!-- <h3 class="title">Disease Area: {{stat[1].disease_area}}</h3> -->
        
          <h4 class="drugs good">Encouraged</h4>
          <ul class="goodUl">
            <li> {{ stat[1].encouraged[0] }} </li>
            <li>{{ stat[1].encouraged[1] }}</li>
            <li>{{ stat[1].encouraged[2] }}</li>
            <li>Drug 4</li>
          </ul>
          <h4 class="drugs bad">Discouraged</h4>
          <ul class="badUl">
            <li>{{ stat[1].discouraged[0] }}</li>
            <li>{{ stat[1].discouraged[1] }}</li>
            <li>{{ stat[1].discouraged[2] }}</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- <button v-on:click="removeAllLinks">Remove all Links</button> -->
    <!-- <p> {{ msg }} </p> -->
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
import {mapGetters, mapMutations, mapActions, mapState} from 'vuex'
import json from '../EncouragedDiscouraged.json'
import addressJson from '../SurgeryAddress.json'
import LineChart from '../chart.js'
import druggies from '../SpendBreakdownLevel1.json'

export default {
  name: 'Stats',
  components: { LineChart },
  data(){
    return {
      msg: '',
      encouraged: [],
      discouraged: '',
      ratio: '',
      stat: json.drugs,
      Scode: '',
      surgName: '',
      address: addressJson.data,
      monthss: druggies.months,
      addr: '',
      druggs: druggies.surgeries,
      drugShow: [],
      drug: []
    }
  },
  created (){
    //localStorage.removeItem('myEnc');
    for (var i = 0; i < this.links.length; i++){
      // this.surgName = this.links[i].practice_name
      if (this.code == this.links[i].practice_name) {
        this.surgName = this.links[i].practice_name
        this.encouraged = this.links[i].encouraged_spend
        this.discouraged = this.links[i].discouraged_spend
        this.ratio = this.links[i].spend_ratio
        this.position = this.links[i].position
        this.lastposition = this.links[i].lastposition
        this.Scode = this.links[i].practice_code
        localStorage.setItem('myCode', this.surgName)
        localStorage.setItem('mySurgCode', this.Scode)
        localStorage.setItem('myPos', this.position)
        localStorage.setItem('myLastPos', this.lastposition)

        // localStorage.setItem('myEnc', this.encouraged)
        // localStorage.setItem('myDisc', this.discouraged)
      // } else if (this.code == ''){
      //   console.log('empty', this.surgName)
      //   this.surgName = localStorage.getItem('myCode')
      } else {
        this.surgName = localStorage.getItem('myCode')
        this.position = localStorage.getItem('myPos')
        this.lastposition = localStorage.getItem('myLastPos')

      }
    }
  // console.log(druggies.surgeries[0])
    for (var i = 0; i < this.address.length; i++){
      if (this.Scode == this.address[i].SurgeryCode) {
        this.addr = this.address[i].Address2 + ', '
        this.addr += this.address[i].Town + ', '
        this.addr += this.address[i].County + ', '
        this.addr += this.address[i].Postcode + ' '
        localStorage.setItem('codeForAddr', this.address[i].SurgeryCode)
        // console.log('this' , this.Scode)
      } else if (this.Scode == ''){
        this.Scode = localStorage.getItem('codeForAddr')
        // console.log(this.Scode)
      }
    }
  for (var i = 0; i < druggies.surgeries.length; i++){
    this.Scode = localStorage.getItem('codeForAddr')
    if (this.Scode == druggies.surgeries[i].practice_code) {
      this.drugShow = druggies.surgeries[i].encouraged
       console.log(druggies.surgeries[i].practice_code, this.drugShow)
      // this.drugShow = druggies.surgeries[i].encouraged

      //console.log(druggies.surgeries[i].practice_code, this.drugShow)
    }
  }

    for(var j = 0; j < this.drugShow; j++){
      this.drug = druggies.surgeries[j]
      console.log(this.drug, 'thiss')
    }
    // for (var i = 0; i < this.druggs.length; i++){
    //   console.log(druggies.surgeries, this.druggs)
      // if (this.Scode == this.druggies.surgeries[i].practice_code) {
      //   this.druggs = this.druggies.surgeries[i].practice_code
      // }
    // }


    
    },
    mounted() {
      

  },
  // watch: {
  //   code(newCode) {
  //     localStorage.code = newCode;
  //   }
  // },
  computed: {
    ...mapGetters([
      'countLinks',
      'returnJson'
      ]),
    ...mapState([
      'title',
      'links',
      'code'
    ]),

  },
  methods: {
    ...mapMutations(['REMOVE_ALL']),
    ...mapActions(['removeAll']),
    removeAllLinks(){
      this.removeAll().then(() => {
        this.msg = 'Links removed'
      })
    },
    codeLinks: function() {
      for (var i = 0; i < this.links.length; i++){
        this.code = this.links[i].practice_code
        this.codeLink(this.links[i].practice_code)
      }
    },
    // addCode() {
    //   // ensure they actually typed something
    //   if (!this.newCode) {
    //     return;
    //   }

    //   this.code.push(this.newCode);
    //   this.newCode = '';
    //   this.saveCodes();
    // },
    // removeCode(x) {
    //   this.code.splice(x, 1);
    //   this.saveCodes();
    // },
    // saveCodes() {
    //   const parsed = JSON.stringify(this.code);
    //   localStorage.setItem('code', parsed);
    // }
    // persist() {
    //   localStorage.code = this.code
    // }

    // findKey: function() {
    //   for (var i = 0; i < this.links.length; i++){
    //     if (this.code == this.links[i].practice_code) {
    //       this.encouraged = this.links[i].encouraged_spend
    //       this.discouraged = this.links[i].discouraged_spend
    //       this.ratio = this.links[i].spend_ratio
    //       console.log(this.encouraged, this.ratio, this.discouraged)
    //     }
    //   }
    //   //return Object.entries(this.links).find(i => i[1] === this.code)

    //   // return 'The count is ' + this.items.length * 10
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .stats{
  animation: anim 0.5s ease;
  
} */

@keyframes anim {
  0% {
    opacity: 0;
    /* transform: scaleY(0); */
  }
  100% {
    /* transform: scaleY(1); */
    opacity: 1;
  }
}

.position{
  font-family: Futura, sans-serif;
  /* padding: 0 100px 20px 50px; */
  padding: 5px 15px;
  font-weight: 400;
  margin: 0 0 40px 50px;
  font-size: 1.2em;
  line-height: 2em;
  color: #444444;
  border: 2px solid #0099A8;
  width: 20%;
  min-width: 200px;
  width: 210px;
}

img{
  width: 25px;
  padding-bottom: 3px;
}

#dot{
  font-size: 2em;
  margin: 0;
  display: inline-block;
  color: gray;
}

.address{
  font-family: Futura, sans-serif;
  font-size: 0.85em;
  padding: 0 100px 20px 50px;
  font-weight: 400;
  margin: 0;
  color: #444444;
}
.diseases{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
}
.drugs{
  font-family: Futura, sans-serif;
  padding: 5px 100px 0 50px;
}

.drugList{
  display: flex;
  flex-wrap: wrap;
}
.title{
  font-family: Futura, sans-serif;
  padding: 0 50px 0 50px;
  font-weight: normal;
  font-size: 1.5em;
  color: #0099A8;
}


.good{
  font-family: Futura, sans-serif;
  font-weight: normal;
  font-size: 1.1em;
  color: #0099A8;
  padding-top: 12px;
  margin: 0;
}

.bad{
  font-family: Futura, sans-serif;
  font-weight: normal;
  font-size: 1.1em;
  color: #ff463d;
  padding-top: 12px;
  margin: 0;
}
.chartTitle{
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  color:#0099A8;
  padding-left: 50px;
  padding-right: 20px;
}
h3 {
  margin: 50px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 20px 50px;
}
.goodUl li:before {
  content: "•"; /* Insert content that looks like bullets */
  padding-right: 8px;
  color: #0099A8; /* Or a color you prefer */
}

.badUl li:before {
  content: "•"; /* Insert content that looks like bullets */
  padding-right: 8px;
  color: #ff463d; /* Or a color you prefer */
}

a {
  color: #0099A8;
}
/* button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
} */


button{
  background:#0099A8;
  color:#fff;
  border:none;
  position:relative;
  top: -2px;
  height: 34px;
  font-size: 0.7em;
  font-weight: 500;
  padding:0 0.7em;
  cursor:pointer;
  transition:800ms ease all;
  outline:none;
  margin-left: 20px;
  margin-right: 20px;
  font-family: Futura, sans-serif;
}
button:hover{
  background:#fff;
  color:#0099A8;
}
button:before,button:after{
  content:'';
  position:absolute;
  top: 34px;
  right:0;
  height:2px;
  width:0;
  background: #0099A8;
  transition:400ms ease all;
}
button:after{
  right:inherit;
  top:inherit;
  left:0;
  bottom:0;
}
button:hover:before,button:hover:after{
  width:100%;
  transition:800ms ease all;
}

.charty{
  /* background: #092E3F; */
  border-radius: 15px;
  /* box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27); */
  margin:  25px auto;
  max-width: 1200px;
}
canvas{
  margin: 25px;
}

@media screen and (max-width: 500px) {
  button{
    margin: 10px 5px;
    float: none;
  }
  button:hover{
     color: inherit;
   }
  .charty{
    margin: 5px;
  }
  .title{
    text-align: center;
    margin: 20px 20px 10px 20px;
    padding: 0;
  }

  .chartTitle{
    font-size: 1.2em;
    margin: 30px 30px 10px 30px;
    text-align: center;
    padding: 0;
  }
   .position{
    font-size: 1em;
    min-width: 175px;
    width: 170px;
    margin: auto;
  }
  .address{
    padding: 0 30px 20px 30px;
    text-align: center;
  }
}
@media (hover: none) {
   button{
     display: none;
   }
   
}

</style>
