<template>
<div class="arkaplan">
        <div class="baslik1">
            <img src="src/assets/yıldız.png" alt="">
            <span class="fontsize">Üye Girişi</span>

        </div>
        <div>
        <div class="firstdiv">
            <span class="header"><b>Üye Girişi Yapın</b></span>
            <div>
            <ul class="ul1">
                <li>E-posta adresiniz</li>
                <li><input type="email" required v-model="userInfo.email" /></li>
                <li>Şifreniz</li>
                <li><input type="password" required v-model="userInfo.password" /></li>
            </ul>
            <button type="submit" @click.prevent="login(userInfo)" class="button1">ÜYE GİRİŞİ YAPIN</button>
            <button class="button2"><router-link to="/unuttumm" style="text-decoration: none;">Şifremi Unuttum</router-link></button>
            </div>
        </div>
        <div class="seconddiv">
            <span class="header"><b>Henüz üye değil misiniz ?</b></span>
            <p class="header">Tek adımda kolayca üye olabilirsiniz...</p>
            <ul class="ul2">
                <li>Sipariş formunu doldurmadan, hızlı alışveriş yapmak,</li>
                <li>Kampanyalarda öncelikli haberdar olmak,</li>
                <li>Alışverişlerden puan kazanmak,</li>
                <li>Sadece üyelere özel indirimlerden yararlanmak</li>
                <li>ve daha fazlası için ...</li>
            </ul>
            <button class="button3"><router-link to="/uyeOl" style="text-decoration: none; color:white;">Ücretsiz Kayıt Ol</router-link></button>
        </div>
        </div>
        </div>


   
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import ustMenu from "../components/ustMenu.vue";
import { mapActions } from "vuex";

import { auth } from "../../firebase/config"
library.add(fas);
export default {
  components: {
    FontAwesomeIcon,
    ustMenu,
  },
  name:"uyeGirisi",
  data() {
    return {
      userInfo: { email: "", password: "" },
    };
  },
  methods: {
    ...mapActions(["login"]),

  },
  created() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.$router.push("/sepetim"); // Anasayfaya yönlendiriyor giriş yapılmışsa
      }
    });
  },
};
</script>


<style scoped>

.arkaplan {
    margin: 20px 0px 100px 20%;
    width: 60%;
    display:inline-block;
    background-color: white;
    padding-bottom: 50px;
}

.button2 {
background-color: white;
color: black;
border: none;
cursor: pointer;
margin-bottom: 100px;
margin-left: 10px;
}
.button3{
  margin-bottom: 75px;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #E74C3C;
  border: none;
  border-radius: 5px;
  font-weight: bold ;
  width: 30%;
  height: 30px;
  margin-left: 10px;
  display: block;
}
.ul1 {
    list-style-type: none;
    margin-top: 60px;
    padding-left: 15px;
    
} 

.ul2 li{
    margin-top:10px;
}

.kontrol {
    background-color: red;
    display:block;
}



.button1 {
  display: inline-block;
  
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #E74C3C;
  border: none;
  border-radius: 5px;
  font-weight: bold ;
  width: 30%;
  height: 30px;
  margin-left: 10px;
  display: block;
  

}
.button1:hover{
    background-color: #F17970;
}
.button3:hover{
    background-color: #F17970;
}

.textbox{
    width: 50%;
    
}

.baslik1 {
    background-color: #F0F0F0;
}
.fontsize{
    font-size: 25px;
}
.firstdiv{
    width: 50%;
    height: 50%;
    margin-top: 15px;
    border-collapse: collapse;
    border: 1px solid #e3e3e3;
    display: inline-block;
    text-align: left;
    margin-bottom: 100px;
    margin-left: 1% ;
    padding-bottom: 50px;
   
}
.seconddiv{
   
    background-color:white;
    display: block;
    float: right;
    width: 45%;
    height: 60%;
    margin-top: 15px;
    border-collapse: collapse;
    border: 1px solid #e3e3e3;
    margin-right: 3%;
    padding-bottom: 46px;
}
.header{
    border-bottom:1px solid #e3e3e3;
    border-collapse: collapse;
    display: block;
    border-width: thin;
    margin: 10px 15px 0px 15px;
    padding-bottom: 10px;
    }
        
    </style>