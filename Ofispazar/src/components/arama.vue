<template>
  <div>
    <div class="bgcolor">
      <div id="baslik">
      <img src="src/assets/ev.png" alt="">
    <span><router-link to="/" class="nav1">ANASAYFA</router-link></span>
  <span><router-link to="/hakkımızda" class="nav1">HAKKIMIZDA</router-link></span>
  <span class="nav1">SİPARİŞ TAKİBİ</span>
  <span class="nav1">İLETİŞİM</span>
  <ul class="navBar">
     
    <router-link class="list" to="/login" tag="li" v-if="!currentUser"
          ><img class="img"
            src="src/assets/profil.png"
            alt="yok"
            style="margin-top:3px; text-decoration:none; margin-left: 5px"
          /><a class="hov" style="text-decoration:none;"> Üye Girişi </a></router-link>
          <router-link  class="list"
          v-if="currentUser"
          tag="li"
          to="#"
          @click.native.prevent="showInfo()"
          ><img class="img"
            src="src/assets/profil.png"
            alt="yok"
            style=" margin-top:3px; text-decoration:none; margin-left: 5px"
          /><a class="hov" style="text-decoration:none;">Hesabım</a></router-link
        >
    <router-link class="list" to="/uyeOl" tag="li"  v-if="!currentUser"
          ><img class="img"
            src="src/assets/profil2.png"
            alt="yok"
            style="margin-top:3px; text-decoration:none; margin-left: 5px"
          /><a class="hov" style="text-decoration:none;"> Kayıt Ol </a>
        </router-link>
        <router-link
          tag="li"
          to="#"
          class="sign-out cikis2"
          @click.native.prevent="logout()"
          v-if="currentUser"
          ><FontAwesomeIcon icon="sign-out-alt" /><a class="cikis hov"> Çıkış</a></router-link
        >
  </ul>
      </div>
   </div>
     <div class="renkke">
      <div class="arkaplan">
         <div class="topnav">
        <img src="src/assets/logogo.png"  alt=""> <img src="" alt="">
        <img src="src/assets/arama.png" class="aramabuton" alt="">
        <input type="text" placeholder="Arama">
        </div>
        <div class="sepeet">
          <ul class="navBar">
          <router-link class="list" tag="li" to="/uyegirisi" style="text-decoration: none;"><img class="whatsapp" src="src/assets/whatsap.png" alt=""></router-link>
           
           <li class="sepke">
             <router-link class="sepkee" to="/sepetim" >
           <FontAwesomeIcon icon="shopping-cart" class="sepeticon">&#xf07a;</FontAwesomeIcon>
          <span class="badge badge-warning badgee" id="lblCartCount">{{
            getCartCount
            }}</span
          ><br><p class="sepo">Sepetim</p></router-link></li>
            </ul>
        </div>
        </div>
        </div>  
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { mapActions, mapGetters } from "vuex";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/config";
library.add(fas);
export default {
  name: "app",
  data() {
    return {
     
      currentUser: null,
      //cartCount: 0,
    };
  },
  components: {
    FontAwesomeIcon,
  },
  methods: {
    ...mapActions(["logout", "fetchCart"]),

    showInfo() {
      alert(
        "Hesabım: \nMailiniz: " + this.currentUser.email + "\n Firebase ID'niz: " + this.currentUser.uid
      );
    },
  },
  computed: {
   ...mapGetters([
      'getCartCount',
   ]),
  },
  created() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.currentUser = auth.currentUser;
      }
    });
  },
};
</script>

<style scoped>
.cikis2{
  display: inline-block;
  float: right;
  margin-left: 2px;
}
.cikis{
  text-decoration: none;
  list-style-type: none;
  
}
.nav1:hover{
cursor: pointer;
}
.nav1{
  text-decoration: none;
}
.renkke{
  background-color: white;
}
#baslik{
    display: block;
    color: #333333;
    margin-left: 20%;
    width: 60%;
    padding: 10px 0px;
    

}
#baslik span{
  color: gray;
  font-size: 13px;
}

  #baslik img {
    float: left;
  
}
#baslik span {
  margin-right: 10px;

}
.navBar {

  float: right;
  margin :0px;
  font-size: 15px;
  }


  .navBar li a {
    display: inline-block;
    color: black;
  }
  .bgcolor{
     background-color:#ECECEC
     
  }

  .topnav{
      float: left;
      padding: 6px;
      border: none;
    margin-top: 5px;
  margin-right: 16px;
  font-size: 30px;
  overflow: hidden;
  background-color: white;
  width: 66%;
  }

  .topnav input[type=text] {
  float: right;
  padding: 8px;
  border: solid black 1px;
  margin-top: 20px;
  width: 55%;
  font-size: 15px;
  }
.arkaplan {
  margin-left: 20%;
    width:60%;
    display:inline-block;
    
}
.aramabuton{
  float: right;
  margin:18px;
  margin-left: 2px;
  width: 12%;
}
.sagust{
 width: 20%;
 margin-left: 85px;
 display: inline-block;
}
.list {
 
 text-align: left;
 display: inline-block;
 text-decoration: none;
}
.list:hover{
  color: blue;
  cursor: pointer;
}

.whatsapp{
  display: inline-block;
}
.whatsapp:hover{
  cursor: pointer;

}
.sepeticon{
  font-size: 35px;
  display: inline-block;
  margin-left: 35%;
  margin-right: 50px ;
  width: 35px;
  }


.list2 {
 background-color: #DDDDDD;
 padding:15px 30px 0px 30px;
 float: right;
 
}
.list2:hover{
  color:#084B8A;
  cursor: pointer;
  text-decoration: underline;

}
.sepeet {
  background-color: #6A5A64;
}

.sepetyazi{
  display: inline-block;
  
}
.hov:hover{
  color:blue;
}
.sepke{
  display: inline-block;
 background-color:#ECECEC;
 margin-top: 0px;
 padding-top: 21px;
 padding-right:10px ;
 
  
}
.sepkee:hover{
  cursor: pointer;
  color:blue;

}
.badge{
  margin-left:50%;
  margin-right:50%;
  text-decoration:none;
  
}
.sepo{
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  
  margin-top: 0px;
  margin-bottom: 0px;
  text-decoration: none;
  
}
.sepo:hover{
  color: blue;
}
ul{
  list-style-type: none;
}

</style>
