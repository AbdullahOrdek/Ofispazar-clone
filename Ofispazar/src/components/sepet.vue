<template>
<div class="container clearfix ">
    <div class="sepetim" >
        <div class="star">
            <img src="src/assets/yıldız.png" alt="">
        </div>
        <div>
            <h1 id="yazi">Sepetim</h1>
        </div>
   
    </div>
    <div id="gerisayim">
            <img src="src/assets/sepet geri sayım.png" alt="">
        </div>
    <div id="buttom">
    
    <div v-for="item in cartGridModel"
        :key="item.cart.id">
        <router-link :to="{ params: { id: item.product.id } }">
    <div class="tableDiv">
        
        <table>
            <tr>
                <th>ÜRÜN</th>
                <th>FİYAT</th>
                <th>ADET</th>
                <th>TOPLAM</th>
            </tr>
            <tr>
                <td style="color:gray"><router-link
        :to="{ name: 'urun', params: { id: item.product.id } }">
        <div class="urunResimDiv">
          <img class="sepfoto" :src="item.product.image" alt="" />
        </div>
      </router-link>{{ item.product.urunAdi }}</td>
                <td>{{
              Number.parseFloat(item.product.fiyat/118*100).toFixed(2)
            }} TL + KDV</td>
                <td><div class="urunAdet" > 
            <select
              class="urunAdetSelect"
              v-model="item.cart.count"
              @change="
                changeCountCart({ id: item.cart.id, count: item.cart.count })
              "
            >
              <option value="1" selected="selected">1 Ad.</option>
              <option value="2">2 Ad.</option>
              <option value="3">3 Ad.</option>
              <option value="4">4 Ad.</option>
              <option value="5">5 Ad.</option>
              <option value="6">6 Ad.</option>
              <option value="7">7 Ad.</option>
              <option value="8">8 Ad.</option>
              <option value="9">9 Ad.</option>
              <option value="10">10 Ad.</option>
              
              
            </select>
          </div></td>
                <td><div class="urunFiyat">
            <span>{{
              Number.parseFloat(item.cart.count * item.product.fiyat).toFixed(2)
            }}</span>
            TL
            <div class="silmeButonDiv">
          <button @click="remove(item.cart.id)">X</button>
        </div>
          </div></td>
            </tr>
    </table>

    </div>
    </router-link>
    </div>
 
  </div>
  <div class="fiyatbolum">
            <span class="float">KDV</span>
            <span class="float"> <b>{{ Number.parseFloat(total/100*18).toFixed(2) }} TL</b> </span>
            <span class="float">Sepet Toplamı (KDV Hariç)</span>
            <span class="float"><b>{{ Number.parseFloat(total/118*100).toFixed(2) }} TL</b></span>
            <span class="float">Sepet Toplamı (KDV Dahil)</span>
            <span class=""><b>{{ Number.parseFloat(total).toFixed(2) }} TL</b></span>
            <div id="turuncu">
                <span ><b>Kargo</b></span>
                <span><b>Ücretsiz Kargo</b></span>
            </div>
            <div id="fiy">
                <span><b>Toplam ( TL)</b></span>
                <span><b>{{ Number.parseFloat(total).toFixed(2) }} TL</b></span>
                <span><b>HAVALE İNDİRİMİ (%1)</b></span>
                <span class="float3" style="color:red;"><b>{{ Number.parseFloat(total/100*99).toFixed(2) }} TL</b></span>
            </div>
    
    </div>
    <ul>
 <li><router-link to="/sayfa2" class="al" tag="button">Alışverişe Devam Et</router-link></li>
 <li><button class="bos" >Sepeti Boşalt</button></li>
 <li class="onayy"><button class="onay">Sepeti Onayla ve Satın Al</button></li>

    </ul>
</div>

</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { mapActions } from "vuex";
library.add(fas);
export default {
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      cartGridModel: [],
    };
  },
  computed: {
    total() {
      var total = 0;
      this.cartGridModel.forEach((element) => {
        total += element.cart.count * element.product.fiyat;
      });
      return total;
    },
  },
  created() {
    this.fetchCartGridModel().then((value) => {
      this.cartGridModel = value;
    });
  },
  methods: {
    ...mapActions(["fetchCartGridModel", "removeFromCart", "changeCountCart"]),
    remove(id) {
      this.removeFromCart(id);
      const item = this.cartGridModel.find((item) => item.cart.id === id);
      const index = this.cartGridModel.indexOf(item);
      this.cartGridModel.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.sepfoto{
  height: 50px;
  width: 50px;
}
.container{
    margin: 20px 25px 0 20% ;
    width: 60%;
    background-color: white;;
    border: 1px solid #e6e6e6;
    }
#buttom{
margin:0 10px;
width: 60%;
display:inline-block;
}
.star{
padding-top: 10px;
float: left;
}
.sepetim
{
    background-color: #f8f8f8;
    padding-top: 1px;
    padding-bottom: 1px;
}
#yazi{
    font-weight: normal;
    font-size: 20px;
  background-color: #f8f8f8;

}
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  border: 1px solid #e3e3e3;
  border-right: 1.1px solid #e3e3e3!important;
  
}
.tableDiv{
    width: 100%;
    display: inline-block;
    font-size: 14px;
}
td, th {
  border-right: 1px solid #fff;
  text-align: left;
  padding: 20px 20px 20px 20px;
}
th{
    color: gray;
    font-size: 11px;
}

tr:nth-child(odd) {
  background-color: #dddddd;
}

#foto{
    padding-top: 0px;
}
#gerisayim{
    width: 100%;
    float: right;
    margin-top: 10px;
    margin-right: 10px;
}
#gerisayim img{
    float: right;
}
#turuncu{
    background-color:#ff8404;
    color: #fff;
    margin:0 5px;
    
}
#fiy{
    background-color: #dddddd;
    margin:0 5px;
    margin-bottom: 5px;
}

.fiyatbolum{
    width:33%;
    
   float: right;
       border: 1px solid #e1e1e1;
       display: inline-block;
       
}
.fiyatbolum span{
   text-align: right;
   display: block!important;
   padding-right: 15px;
   padding-top: 10px;
   padding-bottom: 10px;

}
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
ul{
    display: inline-block;
}
li{
    margin-top: 10px;
    display:inline-block;
    list-style-type: none;
}
button{
    padding: 10px 30px 10px 30px;
    color: white;
    background-color: #919191;
     border-radius: 6px;
     text-shadow: none;
     border-style: none;
     font-size: 15px;
}
.onay:hover{
background-color: green;
}
.onayy{
    
    margin-left: 490px;
}
.al:hover{
background-color: red;
}
.bos:hover{
background-color: red;
}
</style>
