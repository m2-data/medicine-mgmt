<template>
  <div class="stats">
    <h1 class="title" >  {{returnJson[0]}}</h1>
    <h4 class="address" >Address:
      test street test number London
    </h4>
    <h2 class="chartTitle">Monthly spend on encouraged and discouraged data</h2>
    <!-- <line-chart :chartdata="chartData" :options="chartOptions"/> -->
    <div class="charty">
      <line-chart class="chart"></line-chart>
    </div>
    <div class="diseases">
      <!-- <div class="drugList"> -->
        <div class="goodBad">
          <h3 class="title">Disease Area: {{stat[0].disease_area}}</h3>
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
          </ul>
        <!-- </div> -->
      </div>
      <div>
        <div class="goodBad">
          <h3 class="title">Disease Area: {{stat[1].disease_area}}</h3>
        
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
import LineChart from '../chart.js'

export default {
  name: 'Stats',
  components: { LineChart },
  data(){
    return {
      msg: '',
      encouraged: [],
      discouraged: '',
      name: '',
      ratio: '',
      stat: json.drugs,
      Scode: ''
    }
  },
  created (){
    console.log('created')
    for (var i = 0; i < this.links.length; i++){
        if (this.code == this.links[i].practice_name) {
          this.encouraged = this.links[i].encouraged_spend
          this.discouraged = this.links[i].discouraged_spend
          this.ratio = this.links[i].spend_ratio
          this.Scode = this.links[i].practice_code
          console.log(this.encouraged, this.discouraged)
        }
      }
    },
    mounted() {
    //console.log(this.$el.getElementsByClassName('diseases')[0].innerText) // I'm text inside the component.
    // console.log(this.$el.getElementById('dis'))
    // console.log(this.$refs.dis)
    //this.renderChart(this.chartdata, this.options)
  },
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

.address{
  font-family: Futura, sans-serif;
  padding: 0 100px 20px 50px;
  font-weight: 400;
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
  color: #42b983;
}
button {
    padding: 10px;
    margin-top: 30px;
    width: 100%;
    background: none;
    border: 1px solid lightgray;
    outline: 0;
    cursor: pointer;
}

.charty{
  /* background: #092E3F; */
  border-radius: 15px;
  /* box-shadow: 0px 2px 15px rgba(25, 25, 25, 0.27); */
  margin:  25px 25px;
}
canvas{
  margin: 25px;
}

</style>
