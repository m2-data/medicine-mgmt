<template>
  <div class="surgery">
    <h1 class="surgInfo"> {{ myProp }} </h1>
    <p> {{myProp}} </p>

  </div>
</template>


<script>
export default {
  name: 'Surgery',
  props: [ 'myProp' ],
  // {
  //   parentData: Object,
  //   stringProp: String,
  //   title: String,
  // },
  //mixins: [mixin],
  data() {
    return {

      //myProp: myProp
      // clicked: clicked

    }
 
  }
}

</script>

<style scoped>
.surgInfo{
  padding: 10px 0 10px 50px;
}
</style>