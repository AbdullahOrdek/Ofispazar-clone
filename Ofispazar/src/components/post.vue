<template>
  <div class="hello">
    <div v-for='post in posts' :key='post.id'>
  <h3> </h3>  {{post.urunAdi}}
      <h3></h3>  {{post.urunAciklama}}
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'myStore',
  data () {
    return {
  
    }
  }
  
}
</script>