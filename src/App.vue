<template>
  <div id="app">
    <!-- <div class="wrapper"> -->
      <div class="mainHeader">
        <a class="logo" href="#/"><img id="mainLogo" src="./assets/M2logo.png" alt="M2 Data"/></a>
        <div class="headerSection">
          <div class="infoData">
            <div id="address">
              <p>enquiries@M2data.co.uk<br>
                  07854 254 1245<br>
                  1 Building Name, Road Name, Town, London POS C0D</p>
            </div>
            <!-- <div class="search">
              <form>
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div> -->
        </div>
        </div>
      </div>
      <!-- <hr :class="[ grow ? 'growHr' : 'trans--grow' ]"> -->
      <div class="beforeLine">
        <hr class="line2">
      </div>
      <nav class="navbar-nav">
       
          <router-link class="active" to="/" >Home</router-link>
          <router-link class="active" to="/league-table">League Table</router-link>
          <router-link class="active" to="/blog">Blog</router-link>
          <router-link class="active" to="/white-papers">White Papers</router-link>
       
      </nav>
      <div class="beforeLine2">
        <hr class="line">
      </div>
      <transition name="page" mode="out-in">
        <router-view /> 
      </transition>
      
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  data(){
    return {
      grow: false
    }
  },
  mounted (){
    // this.lines()
  },
  // methods: {
  //   lines: function() {
  //     setTimeout(() => {
  //     this.grow = true
  //     console.log(this.grow)
  //   //this.$el.getElementsByClassName('trans--grow')[0].className('grow');
  //     }, 1000)
  //   }
  // }
}


</script>


<!-- <script> -->
<!--// import Home from './components/Home.vue'

// export default {
//   name: 'app',
//   components: {

//   },
//   computed : {
//     itemsSearched : function(){
//       var self = this;
//       if( this.searchText == ''){
//         return this.items;
//       }
//       return this.items.filter(function(item){
//         return item.indexOf(self.searchText) >= 0;
//       });
//     }
// }
// }
// </script>  -->

<style src="./main.css"></style>
<style scoped>
/* @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700'); */

.router-link-exact-active{
  color: #e9434f;
}

.router-link-active:not(.active){
  color: #e9434f;
}

.trans--grow {
  -webkit-transition: width 2s ease-out; /* For Safari 3.1 to 6.0 */
  transition: width 2s  ease-out;
  width : 0%;
  margin-left: 50px;
}

.growHr{
    width:90%;
}

.line{
  margin: 0 50px;
}

/* .line2{
  margin: 0 50px 0 50px;
} */
.beforeLine {
  margin: 30px 0;
}

.beforeLine2 {
  margin: 0;
}

@keyframes line_animation {

  from {
      width: 0%;
  }
  to{
    width: calc(100% - 100px);
    /* left: 50px; */
  }
  }
  .line {
    /* border-bottom: solid 1px; */
    /* border-width: 1px; */
    left: 0;
    
    /* animation-name: line_animation;
    animation-duration: 1s; */
    animation: line_animation2 0.75s 1 forwards;
    animation-timing-function: ease-in-out; 
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: Futura, sans-serif;
    font-weight: lighter;
    border-style: inset;
  }

  @keyframes line_animation2 {
    0% {
      width: 0%;
    }
    100% {
      width: calc(100% - 100px);
      right: 50px;
    }
  }
  .line2{
  /* border-width: 1px; */
  position: absolute;
  right: 0;
  animation: line_animation2 0.75s 1 forwards;
  animation-timing-function: ease-in-out; 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Futura, sans-serif;
  font-weight: lighter;
  border-style: inset;
  }
  

/* .page-enter-active, .page-leave-active {
  transition-property: opacity;
  transition-duration: .05s;
}

.page-enter-active {
  transition-delay: .05s;
}

.page-enter, .page-leave-active {
  opacity: 0
} */



</style>
