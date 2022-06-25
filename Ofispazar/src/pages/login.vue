<template>
  <div class="renk">
    <arama></arama>
    <navbar/>
    <uyegirisi/>
    
  </div>
</template>

<script>



import arama from '../components/arama.vue';
import navbar from '../components/Navbar.vue';
import uyegirisi from '../components/uyeGirisi.vue';

export default {
  components: {
    navbar,
   uyegirisi,
    arama
  }
};
</script>

<style scoped>
.home{
  text-align: left;
  padding: 20px 50px;
}
.renk{
  background-color: #dddddd;
  padding: 0px!important;
}
</style>
