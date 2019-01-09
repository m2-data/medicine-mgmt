<template>
  <div class="whitePaper">
    <h1 class="paperInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</h1>
    <hr id="lineAfterTitle">
    <section>
      <div class="box">
        <h2>{{title}}</h2>
        <p>{{desc1}}</p>
        
        <a target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="sample"><button type="button"><img src="../assets/downloadbtn.png"></button></a>
      </div>
      <div class="box">
        <h2>{{title2}}</h2>
        <p>{{desc2}}</p>
        <a target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="sample"><button type="button"><img src="../assets/downloadbtn.png"></button></a>
      </div>
      <div class="box">
        <h2>{{title3}}</h2>
        <p>{{desc3}}</p>
        <a target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="sample"><button type="button"><img src="../assets/downloadbtn.png"></button></a>
      </div>
      <div class="box">
        <h2>{{title4}}</h2>
        <p>{{desc4}}</p>
        <a target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="sample"><button type="button"><img src="../assets/downloadbtn.png"></button></a>
      </div>
      <div class="box">
        <h2>{{title5}}</h2>
        <p>{{desc5}}</p>
        <a target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="sample"><button type="button"><img src="../assets/downloadbtn.png"></button></a>
      </div>
      <div class="box">
        <h2>{{title6}}</h2>
        <p>{{desc6}}</p>
        <a target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="sample"><button type="button"><img src="../assets/downloadbtn.png"></button></a>
      </div>
      <div class="box">
        <h2>{{title7}}</h2>
        <p>{{desc7}}</p>
        <a target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="sample"><button type="button"><img src="../assets/downloadbtn.png"></button></a>
      </div>
      <div class="box">
        <h2>{{title8}}</h2>
        <p> {{desc8}} </p>
        <a target="_blank" href="http://www.africau.edu/images/default/sample.pdf" download="sample"><button type="button"><img src="../assets/downloadbtn.png"></button></a>
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

export default {
  name: 'WhitePaper',
  data() {
    return {

      title: 'White paper 1',
      title2: 'White paper 2',
      title3: 'White paper 3',
      title4: 'White paper 4',
      title5: 'White paper 5',
      title6: 'White paper 6',
      title7: 'White paper 7',
      title8: 'White paper 8', 

      desc1: 'Lorem ipsum dolor sit amet, consectetur ipum dolor sit amet, consectetur sit amet.',
      desc2: 'Lorem ipsum dolor sit amet, consectetur ipum dolor sit amet, consectetur sit amet.',
      desc3: 'Lorem ipsum dolor sit amet, consectetur ipum dolor sit amet, consectetur sit amet.',
      desc4: 'Lorem ipsum dolor sit amet, consectetur ipum dolor sit amet, consectetur sit amet.',
      desc5: 'Lorem ipsum dolor sit amet, consectetur ipum dolor sit amet, consectetur sit amet.',
      desc6: 'Lorem ipsum dolor sit amet, consectetur ipum dolor sit amet, consectetur sit amet.',
      desc7: 'Lorem ipsum dolor sit amet, consectetur ipum dolor sit amet, consectetur sit amet.',
      desc8: 'Lorem ipsum dolor sit amet, consectetur ipum dolor sit amet, consectetur sit amet.'
    }
  }
}

</script>


<style scoped>
/* table{
  border: 1px black solid;
} */


th, td{
  padding: 20px;
  border: 1px black solid;
}

/* td{
  word-spacing: 30px;
} */
.whitePaper{
  /* margin-left: 5%;  */
}
.paperInfo{
  font-family: Futura, sans-serif;
  padding: 0 50px 0 50px;
  font-weight: lighter;
  font-size: 2.5em;
  color: #0099A8;
}
section{
  display: flex;
  justify-content: center;
  font-family: Futura, sans-serif;
  flex-wrap: wrap;
  padding-bottom: 20px;
}
#lineAfterTitle{
  margin: 0 50px 0 50px;
}

h2{
  margin-top: 0;
  margin-bottom: 5px;
}

.box p{
  color: #fff;
  margin-top: 5px;
  font-size: 1.1em;
}
.box{
  height: 230px;
  width: 230px;
  background-color: #0099A8;
  margin: 20px;
  padding: 20px; 
  position: relative;
}
button{
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  position: absolute;
  bottom: 20px;
  right: 20px;
  transition: all 0.4s ease-in;
}


button:before {
  content: '';
  background-color: aliceblue;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: scale(0.001, 0.001);
          transform: scale(0.001, 0.001);
}
button:hover {
  outline: 0;
  color: #fff;
}
button:hover:before {
  -webkit-animation: effect_dylan 0.8s ease-out;
          animation: effect_dylan 0.8s ease-out;
}


button:focus {
  outline: 0;
  color: #fff;
}
button:focus:before {
  -webkit-animation: effect_dylan 0.8s ease-out;
          animation: effect_dylan 0.8s ease-out;
}
@-webkit-keyframes effect_dylan {
  50% {
    -webkit-transform: scale(1.5, 1.5);
            transform: scale(1.5, 1.5);
    opacity: 0;
  }
  99% {
    -webkit-transform: scale(0.001, 0.001);
            transform: scale(0.001, 0.001);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(0.001, 0.001);
            transform: scale(0.001, 0.001);
    opacity: 1;
  }
}
@keyframes effect_dylan {
  50% {
    -webkit-transform: scale(1.5, 1.5);
            transform: scale(1.5, 1.5);
    opacity: 0;
  }
  99% {
    -webkit-transform: scale(0.001, 0.001);
            transform: scale(0.001, 0.001);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(0.001, 0.001);
            transform: scale(0.001, 0.001);
    opacity: 1;
  }
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
}
.addressFoot{
  text-align: right;
}
.rightInfo{
  padding-right: 10px;
}

@media screen and (max-width: 500px) {
  .paperInfo{
    font-size: 2em;
    text-align: center;
    padding: 20px;
    margin-right: 5%;
  }
  .name {
    padding: 5px 5px 5px 10px;
  }
}
</style>