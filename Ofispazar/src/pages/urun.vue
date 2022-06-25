<template>
<div>
  <arama></arama>
    <navbar></navbar> 
    <urun-detay/>
</div>
</template>

<script>

import UrunDetay from '../components/urunDetay.vue'
import navbar from "../components/Navbar.vue"
import arama from "../components/arama.vue"


export default {
  components : {
    
    UrunDetay,
   navbar,
   arama
    
    }
}
</script>
<style scoped>

</style>