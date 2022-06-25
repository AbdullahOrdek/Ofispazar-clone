<template>
<div>
  <div class="renk">
    <div class="container">
        <div style="background-image: linear-gradient(to right, white, #d3d3d3);">
            <h1 id="yazi">Fotokopi Yazıcı Ürünleri » Kiralama</h1>
        </div>
        <div>
<img style="margin-bottom:308px; height:500px; width:500px;" :src="product.image" alt=""/>
          <div id="bilgiler">
             <p id="baslik">{{ product.urunAdi }}</p>
             <p id="utax">Utax</p>
            <div class="fiyat">
               <p style="margin:0;">Ürün Piyasa Fiyat:</p>
               <p style="text-decoration:line-through; font-size:27px; margin:0;">{{ Number.parseFloat(product.fiyat+product.fiyat/50)}}TL</p>
            </div>
            <div class="fiyat" style="margin-left:1px!important;">
               <p style="margin:0;">Ürün Fiyat:</p>
               <p style="font-size:27px; margin:0; color:#c50000;">{{ Number.parseFloat(product.fiyat) }}TL</p>
            </div>
            <div class="fiyat" style="margin-left:1px!important;">
               <p style="margin:0;">Havale ile Fiyatı :</p>
               <p style="font-size:27px; margin:0; color:#558c00;">{{ Number.parseFloat(product.fiyat-product.fiyat/50)}}TL</p>
            </div>
              <p style=" font-size:12px;text-align: center;">150 TL Üstü Yaptığınız Alışverişlerde <b>KARGO BEDAVA!</b></p>
              <div class="siparis">
                   <div id="foto">
                    <img src="src/assets/tel.png" alt="">
                    </div>
                    <div id="sipyaz">
                    <p style="padding:0px; margin:0;">TELEFONDA SİPARİŞ VER</p>
                    <p style="font-size:34px; margin:0px!important; padding:0px">0212 216 64 65</p>
                    <p style="margin:0px!important;padding:0px; font-size: 15px;">Tıklayın, telefonunuzu bırakın. Sizi arayalım.</p>
                    </div>
              </div>
              <div class="siparis" style="margin-bottom:0px!important;" >
                   <div id="foto">
                    <img src="src/assets/wp.png" alt="">
                    </div>
                    <div id="sipyaz">
                    <p style="padding:0px; margin:0;">TIKLA WHATSAPP İLE SİPARİŞ VER</p>
                    <p style="font-size:34px; margin:0px!important; padding:0px">0545 5398325</p>
                    <p style="margin:0px!important;padding:0px;font-size: 15px;">7x24 Whatsapp Üzerinden de Sipariş Verebilirsiniz.</p>
                    </div>
              </div>
              <p style="padding-left:10px; margin-top:5px;display: inline-block;">Durum : <b>STOK : Var</b></p>
              <div>
              <div>
                  <button class="sepet" @click="addAllToCart()"  target="_blank">Sepete Ekle</button>
              </div>
               <div class="aciklama">
                  <div class="border" style="background-color:red;"><p class="ic">İndirimde</p></div>
                  <div class="border" style="background-color:green;"><p class="ic">Yeni Ürün</p></div>
                  <div class="border" style="background-color:blue;"><p class="ic">Ücretsiz Kargo</p></div>

               </div>
          </div>
          <div class="iade">
                            <img src="src/assets/iade.png" alt=""></div>
          </div>
        </div>

    </div>
    </div>
    <foter/>
    </div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import { mapActions, mapGetters } from "vuex";
import { auth } from "../../firebase/config"
import foter from "../components/foter.vue"
export default {
  components: {
    FontAwesomeIcon,foter
  },
  name: "urunDetay",
  data() {
    return {
      product: null,
      cart: [
        {
          
          count: 1,
          pid: 0,
        },
        {
          
          count: 0,
          pid: 0,
        },
      ],
    };
  },
  created() {
    this.fetchProducts().then((data) => {
      this.product = data.find(
        (item) => item.id === Number(this.$route.params.id)
      );
      this.cart = this.cart.map((item, index) => {
        item.pid = this.product.id;
        return item;
      });
    });
    this.fetchCart();
  },
  computed: { ...mapGetters(["getProductWithID"]) },
  methods: {
    ...mapActions(["fetchProducts", "addToCart", "fetchCart"]),
    addAllToCart() {
       auth.onAuthStateChanged((user) => {
        if (user) {
          this.cart.forEach((element) => {
            this.addToCart(element);
          });
        } else {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style scoped>
.container{
    margin:0px 25px 0 20% ;
    width: 60%;
    background-color: white;
    border: 1px solid #e6e6e6;
     }
#yazi{
    font-weight:normal;
    border-bottom: 1px solid #e6e6e6;
    padding:5px 0px 5px 10px;
    margin:0%
    }
#bilgiler{
    float: right;
    background-color:#f7f7f7;
    width: 52% ;
    padding:5px 0px 0px 10px;
    

}
#baslik{
    padding-right:10px ;
    padding-left: 10px;
    font-size:27px;     
    font-family:"Poppins";
}
#utax{
    padding-left: 10px;
    padding-top: 0px;
    color: #23b123;
    
}
.fiyat{
    margin-left: 13px ;
    display: inline-block;
    border: 1px solid #e6e6e6;
    padding: 3px 50px 5px 10px;
    border-radius:  5px/10px;
    background-color: #ffffff;
}
.siparis{
    border: 1px solid #e6e6e6;
    border-radius:  5px/10px;
    background-color: #ffffff;
    margin-left: 13px;
    margin-right: 15px;
    margin-bottom: 10px;
    
}
#foto{
    margin:10px;
    float: left;  
}
#sipyaz{
    display: inline-block;
    margin-top: 15px;
    font-weight:100;
    font-size: 13px;
    margin-bottom: 10px;
    
}
.sepet{
  border: 1px solid #e6e6e6;
  border-radius:  5px/10px;
  background-color:#4caf50;
  float: left;
  margin:0px 0px 0px 8px;
  padding:5px 40px 5px 40px;
  cursor: pointer;
  height: 90px;
  width: 200px;
  color: white;
  font-size: 20px;
}


.aciklama{
    float: right;
    
    
}
.border{
    border: 1px solid #e6e6e6;
 margin-bottom:1px ;
  padding: 0px 0px 0px 0px;
  margin-right: 20px;
  
  
}
.ic{
    margin: 0px;
   padding: 5px 5px 5px 5px;
   color: white;
  text-align: right;
  font-size: 13px;
  
}
.iade{
    float: left;
    margin-left: 15px;
    margin-top: 35px;
}
.renk{
  background-color: #dddddd;
  padding-top: 10px;
}
</style>