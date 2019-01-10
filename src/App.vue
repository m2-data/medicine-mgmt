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
      <hr class="divide">
      <nav class="navbar-nav">
       
          <router-link class="active" to="/" >Home</router-link>
          <router-link class="active" to="/league-table">League Table</router-link>
          <router-link class="active" to="/blog">Blog</router-link>
          <router-link class="active" to="/white-papers">White Papers</router-link>
       
      </nav>
      <hr class="divide2">
      <transition name="page" mode="out-in">
        <router-view /> 
      </transition>
      
    <!-- </div> -->
  </div>
</template>



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
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

.router-link-exact-active{
  color: #e9434f;
}

.router-link-active:not(.active){
  color: #e9434f;
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
