<template>
<div>
    <arama></arama> 
    <navbar/>
    <unuttum/>
</div>
</template>

<script>

import arama from "../components/arama.vue"

import unuttum from "../components/unuttum.vue"
import navbar from "../components/Navbar.vue"

export default {
  components : {
    arama,
    unuttum,
    navbar
    
    }
}
</script>
<style scoped>

</style>