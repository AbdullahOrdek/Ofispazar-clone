<template>
  <div class="rennk">
    
    <arama></arama>
    <navbar></navbar>
    <sidebar></sidebar>
    <p id="basliik">Tüketici Elektroniği</p>
    <filtre></filtre>
    <urunler></urunler>
    
    <foter></foter>
      
  </div>
</template>

<script>

import post from '../components/post.vue'
import arama from '../components/arama.vue'
import navbar from '../components/Navbar.vue'
import filtre from '../components/filtre.vue'
import foter from '../components/foter.vue'

import sidebar from '../components/sidebar.vue'
import urunler from '../components/urunler.vue'








export default {
 
  components:{
    
    filtre,
    foter,
    sidebar,
    arama,
    navbar,
    urunler,
    post
  },
   
  
}


</script>

<style>
.rennk{
  background-color: #dddddd;
  padding: 0px!important;
  text-decoration: none;
}
#basliik{
background-color: white;
border: 1px solid #D3D3D3;
width: 42%;
display: inline-block;
text-align: center;
font-size: 25px;
margin:17px 0px 16px 30px;
padding: 20px 0px;
}


</style>
