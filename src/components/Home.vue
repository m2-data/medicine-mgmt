<template>
  <div class="home">
     <div class="jumbotron">
      <p>Ipswich and East Suffolk Clinical Commisioning Group drug league table</p>
      <hr id="lineAfterTitle">
    </div>

    <section class="main">
      <div class="boxes" id="first">
        <h3> Encouraged Spend</h3>
        <h6>£{{parseInt(data[0].spend)}}</h6>
        <img src="../assets/blue triangle.png">
        <p>{{data[0].change}}% up</p>
        <p>on last month</p>
      </div>
      <div class="boxes" id="second">
        <h3>Discouraged Spend</h3>
        <h6>£{{parseInt(data[1].spend)}}</h6>
        <img src="../assets/red triangle.png">
         <p>{{data[1].change}}% down</p>
        <p>on last month</p>
      </div>
      <div class="boxes" id="third">
        <h3>Saving this month</h3>
        <h6>£{{parseInt(data[2].spend)}}</h6>
        <h5>saving</h5>
        <p id="change" >{{data[2].change}}% change</p>
      </div>
    </section>
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
import json from '../candc_homepage_data.json'
export default {
  name: 'Home',
  data() {
    return {
      data: json.tiledata
    }
  },
  // methods: {
  //   addDat: function name(params) {
  //     console.log(json);
        
  //   }

  // }

   
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
@import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 


.app{
  display: flex;
  flex-direction: column;
}
.home{
  flex: 1 0 auto;
  /* position: relative; */
}

.main{
  flex: 1 0 auto;
  padding-bottom: 40px;
}
footer{
  position: absolute; 
  left: 0;
  bottom: 0;
  /* 
  width: 100%;
  margin-bottom: 0;
  margin-top: -100px; */
  background-color: #092E3F;
  display: flex;
  display: -webkit-flex;
  height: 80px;
  width: 100%;
  flex-shrink: 0;
  /* margin-top: auto; */
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
  text-align: center
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

#logoImg{
  padding: 0 10px 3px 10px;
  -webkit-box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.4);  /* for Chrome */
  -moz-box-shadow: 10px 2px 10px rgba(0, 0, 0, 0.4);
}
#change{
  margin: 10px 5px;
  flex-shrink: 1;
}

@media screen and (max-width: 1020px) , screen and (max-height: 850px){
  footer {
    position: relative;
  }
}
@media screen and (max-width: 500px) {
  .name {
    padding: 5px 5px 5px 10px;
  }
}
</style>
