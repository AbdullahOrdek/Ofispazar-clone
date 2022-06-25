<template>
    <div class="arkaplan" v-if="products && products.length">
        <router-link tag="div" :to="{ name: 'urun', params: { id: product.id } }"
        v-for="product in products"
        :key="product.id" class="urunkart"> <img style="height:170px;" :src="product.image">
        <p id="detay"> {{product.urunAdi}}</p>
        

        <p id="fiyat" > {{ Number.parseFloat(product.fiyat).toFixed(2) }} TL</p></router-link>
        
    </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { mapActions } from "vuex";
export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts().then((data) => {
      this.products = data;
    });
  },
  methods: {
    ...mapActions(["fetchProducts"]),
  },
};
</script>

<style scoped>
.urunkart:hover{
    opacity: 0.3;
    cursor: pointer;
}
.arkaplan{
    border: 1px solid #D3D3D3;
    display: inline-block;
    width: 42%;
    margin-left: 30px;
    margin-top: 0px;
}
.urunkart{
    height: 370px;
    width: 24.87%;
    float: left;
    border-right: 0.5px solid #D3D3D3;
    border-bottom: 0.5px solid #D3D3D3;
    background-color: white                                                             ;
}
img{
    width: 180px;
   float: left;
    margin: 10px;
    margin-bottom: 60px;
    
}
#detay{
    text-align: center;
    font-size: 12px;
    margin-bottom: 40px;
    text-decoration: none;
}
#fiyat{
   color:#c50000;
   text-align: center;
   font-size: 20px;
   margin-bottom: 40px;
   text-decoration: none !important;
   

}

</style>