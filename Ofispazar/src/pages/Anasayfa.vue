<template><div>
  <div class="renk">
   
    <arama></arama>
    <navbar></navbar>
    
    <carousel class="carousel">
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
        
    <sizinicin/>
    <sizinicin/>
    <sizinicin/>
   
  </div>
<foter/>
  </div>
</template>

<script>
import arama from '../components/arama.vue'
import navbar from '../components/Navbar.vue'
import filtre from '../components/filtre.vue'
import foter from '../components/foter.vue'

import sidebar from '../components/sidebar.vue'
import slider from '../components/mainslider.vue'
import sizinicin from '../components/SizinIcin.vue'
import db from '../../db/db.json'
import carousel from '../components/Carousel.vue'
import carouselSlide from '../components/CarouselSlide.vue'
import post from '../components/post.vue'

import urunler from '../components/urunler.vue'






export default {
   data(){
        return {
            slides: db.slides,
            custom : "post",
            urunlerim: []
        }
    },
  
  components:{
   
    filtre,
    foter,
    sidebar,
    navbar,
    arama,
    slider,
    sizinicin,
    carousel,
    carouselSlide,
    post,
    urunler
    },
     created() {
            this.$store.dispatch("getSliders").then((response) =>{
               this.slides = this.$store.state.product.data;
               console.log(this.$store.state.data);
            } );
            this.$store.dispatch("getUrunler").then((response) =>{
               this.urunlerim = this.$store.state.product.urunler;
               console.log(this.$store.state.urunler);
            } );
    
  
}
}
</script>

<style scoped>
.carousel{
width: 60%;
height:400px;
margin-top: 10px;
}
.renk{
  background-color: #dddddd;
}
</style>
