<template>
<div>
    <arama></arama> 
    <navbar/>
    <sepet></sepet>
</div>
</template>

<script>

import arama from "../components/arama.vue"

import sepet from "../components/sepet.vue"
import navbar from "../components/Navbar.vue"

export default {
  components : {
    arama,
    sepet,
    navbar
    
    }
}
</script>
<style scoped>

</style>