<template>
  <div class="blog">
    <h1 class="blogInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ...</h1>
    <hr id="lineAfterTitle">
    <section>
      <div id="firstVid" class="vidi">
        <p class="vidiTitle">Video 01</p>
        <iframe width="450" height="360" src="https://www.youtube.com/embed/T1G9Rl65M-Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        
        <h2>This animation describes the causes, risk factors and common symptoms of chronic obstructive pulmonary disease (COPD), as well as how lungs with COPD function.</h2>
        <hr>
      </div>
      <div id="secondVid" class="vidi">
        <p class="vidiTitle">Video 02</p>
        <iframe width="450" height="360" src="https://www.youtube.com/embed/_KPSDorqbKY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <h2>Expert pulmonologists discuss the possible side-effects of the different medications used to treat COPD.</h2>
        <hr>
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



<style scoped>
.blogInfo{
  font-family: Futura, sans-serif;
  padding: 0 50px 0 50px;
  font-weight: lighter;
  font-size: 2em;
  color: #0099A8;
  margin: 20px 0 20px 1%;
}
.blog{
  /* margin-left: 5%;  */
  /* padding-bottom: 120px; */
}
section{
  display: flex;
  justify-content: center;
  font-family: Futura, sans-serif;
  flex-wrap: wrap;
  padding-bottom: 20px;
  padding-right: 50px;
}
#lineAfterTitle{
  margin: 0 50px 0 50px;
}
.vidi{
  margin: 20px;
}
.vidiTitle{
  font-weight: bold;
  margin-left: 5px;
  font-family: Futura, sans-serif;
}

h2{

  font-family: Futura, sans-serif;
  font-weight: lighter;
  font-size: 1.5em;
  color: #0099A8;
  width: 450px;
  text-align:center;
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

@keyframes vidappear{
    from {
      opacity: 0;
    } 
    to {
      opacity: 1; 
    } 
  }

iframe{
    opacity: 0;
    animation: vidappear 1s forwards 100ms ease-out;
  }

@media screen and (max-width: 1020px) {
  footer {
    position: relative;
  }
}


@media screen and (max-width: 500px) {
  .blogInfo{
    font-size: 1.5em;
    text-align: center;
    padding: 20px;
  }
  iframe{
    width: 310px;
    height: 310px;
  }


  h2{
    width: 310px;
  }
  /* .blog{
    margin-right: 5%;
  } */
  .vidi{
    padding-left: 15px;
  }
  .name {
    padding: 5px 5px 5px 10px;
  }
  section{
    padding-right: 13px;
  }
}

</style>